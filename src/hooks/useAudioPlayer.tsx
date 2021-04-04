import { MutableRefObject, useEffect, useState } from 'react';
import { SongListItemProps } from '../components/SongListItem';
import { SongPlayerProps } from '../components/SongPlayer';
import { Song } from '../interfaces/Song';

export interface AudioPlayer {
  mainConfig: {
    songs: Song[];
    currentSongIndex: number;
    percentage: number;
    duration: number;
    setDuration: any;
    getCurrentDuration: any;
    currentSong: Song;
  };
  songPlayerConfig: SongPlayerProps;
  songListItemConfig: Omit<SongListItemProps, 'song' | 'isCurrent'>;
}

export function useAudioPlayer(
  audioRef: MutableRefObject<HTMLAudioElement>
): AudioPlayer {
  const SONGS_URL = 'https://examples.devmastery.pl/songs-api/songs';

  const [songs, setSongs] = useState<Song[]>([]);
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

  function handlePlayPause(e: React.ChangeEvent<HTMLButtonElement>): void {
    e.stopPropagation();
    setPause((prevIsPaused: boolean) => !prevIsPaused);
    isPaused ? audioRef.current.play() : audioRef.current.pause();
  }

  function handleMute(): void {
    setMute(!audioRef.current.muted);
    audioRef.current.muted = !isMuted;
  }

  function handleLoop(): void {
    setLoop(!audioRef.current.loop);
    audioRef.current.loop = !isLooping;
  }

  function handleSkipToPreviousSong(): void {
    setCurrentSongIndex((previousIndex) =>
      previousIndex > 0 ? previousIndex - 1 : songs.length - 1
    );

    setStateOfAudioRef();
  }

  function handleSkipToNextSong(): void {
    setCurrentSongIndex((previousIndex) =>
      songs.length > previousIndex + 1 ? previousIndex + 1 : 0
    );

    setStateOfAudioRef();
  }

  function handleSelectSong(selectedSong: Song): void {
    const audioIndex = songs.findIndex(
      (song: Song) => song.audioUrl === selectedSong.audioUrl
    );
    if (audioIndex >= 0) {
      setCurrentSongIndex(audioIndex);
    }

    setStateOfAudioRef();
  }

  const handleChange = (e: any) => {
    audioRef.current.currentTime =
      (audioRef.current.duration / 100) * e.target.value;
    setPercentage(e.target.value);
  };

  function setStateOfAudioRef(): void {
    setTimeout(() => {
      if (!isPaused) audioRef.current.play();
      if (isMuted) audioRef.current.muted = true;
      if (isLooping) audioRef.current.loop = true;
    });
  }

  const getCurrentDuration = (e: React.ChangeEvent<HTMLAudioElement>) => {
    const percent = (
      (e.currentTarget.currentTime / e.currentTarget.duration) *
      100
    ).toFixed(2);
    const time = e.currentTarget.currentTime;

    setPercentage(+percent);
    setCurrentTime(+time.toFixed(2));
  };

  function correctTime(seconds: number): string {
    if (!seconds) return '00:00';

    const minutes = (seconds / 60).toString();
    const seconds2 = (seconds % 60).toString();
    let min = parseInt(minutes).toString().padStart(2, '0');

    let sec = parseInt(seconds2).toString().padStart(2, '0');

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
      isMuted,
      previousSong,
      isPaused,
      nextSong,
      isLooping,
      onPlayPause: handlePlayPause,
      onMute: handleMute,
      onLoop: handleLoop,
      onSkipToPreviousSong: handleSkipToPreviousSong,
      onSkipToNextSong: handleSkipToNextSong,
      onChange: handleChange,
      currentTime: correctTime(currentTime),
      duration: correctTime(duration),
      percentage,
    },

    songListItemConfig: {
      isPaused,
      onPlayPause: handlePlayPause,
      onSelect: handleSelectSong,
      currentTime: correctTime(currentTime),
    },
  };
}
