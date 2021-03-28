import { useEffect, useState } from 'react';

export function useAudioPlayer(audioRef) {
  const SONGS_URL = 'https://examples.devmastery.pl/songs-api/songs';

  const [songs, setSongs] = useState([]);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPaused, setPause] = useState(true);
  const [isMuted, setMute] = useState(false);
  const [isLooping, setLoop] = useState(false);

  const [percentage, setPercentage] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    fetch(SONGS_URL).then((response) => {
      if (response.ok) response.json().then(setSongs);
    });
  }, []);

  const currentSong = songs[currentSongIndex];
  const previousSong = songs[currentSongIndex - 1];
  const nextSong = songs[currentSongIndex + 1];

  function handleSelectSong(selectedSong) {
    const audioIndex = songs.findIndex(
      (song) => song.audioUrl === selectedSong.audioUrl
    );
    if (audioIndex >= 0) {
      setCurrentSongIndex(audioIndex);
    }
  }

  function handleSkipToPreviousSong() {
    setCurrentSongIndex((previousIndex) =>
      previousIndex > 0 ? previousIndex - 1 : songs.length - 1
    );

    setStateOfAudioRef();
  }

  function handleSkipToNextSong() {
    setCurrentSongIndex((previousIndex) =>
      songs.length > previousIndex + 1 ? previousIndex + 1 : 0
    );

    setStateOfAudioRef();
  }

  function setStateOfAudioRef() {
    setTimeout(() => {
      if (!isPaused) audioRef.current.play();
      if (isMuted) audioRef.current.muted = true;
      if (isLooping) audioRef.current.loop = true;
    });
  }

  function handleMute() {
    setMute(!audioRef.current.muted);
    audioRef.current.muted = !isMuted;
  }

  function handleLoop() {
    setLoop(!audioRef.current.loop);
    audioRef.current.loop = !isLooping;
  }

  function handlePlay() {
    setPause((prevIsPaused) => !prevIsPaused);
    isPaused ? audioRef.current.play() : audioRef.current.pause();
  }

  const onChange = (e) => {
    const audio = audioRef.current;
    audio.currentTime = (audio.duration / 100) * e.target.value;
    setPercentage(e.target.value);
  };

  const getCurrentDuration = (e) => {
    const percent = (
      (e.currentTarget.currentTime / e.currentTarget.duration) *
      100
    ).toFixed(2);
    const time = e.currentTarget.currentTime;

    setPercentage(+percent);
    setCurrentTime(time.toFixed(2));
  };

  function correctTime(seconds) {
    if (!seconds) return '00:00';

    let min = parseInt(seconds / 60)
      .toString()
      .padStart(2, '0');

    let sec = parseInt(seconds % 60)
      .toString()
      .padStart(2, '0');

    return `${min}:${sec}`;
  }

  return {
    mainConfig: {
      songs,
      currentSongIndex,
      percentage,
      duration,
      setDuration,
      getCurrentDuration,
      currentSong,
    },

    songPlayerConfig: {
      song: currentSong,
      previousSong,
      nextSong,
      isPaused,
      isMuted,
      isLooping,
      onLoop: handleLoop,
      onMute: handleMute,
      onPreviousSong: handleSkipToPreviousSong,
      onNextSong: handleSkipToNextSong,
      onPlayBtn: handlePlay,
      onChange: onChange,
      currentTime: correctTime(currentTime),
      duration: correctTime(duration),
      percentage,
    },

    songListItemConfig: {
      onSelect: handleSelectSong,
      onPlayBtn: handlePlay,
      isPaused,
      currentTime: correctTime(currentTime),
    },
  };
}
