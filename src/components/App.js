import { useEffect, useRef, useState } from 'react';
import { SongListItem } from './SongListItem';
import { SongPlayer } from './SongPlayer';
import styled from 'styled-components';
import React from 'react';

const StyledApp = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: white;
  background: rgb(228, 234, 239);
  background: radial-gradient(circle, #e4eaef -13%, #43505b 98%);
  min-height: 100vh;

  .container {
    width: 550px;
    box-shadow: 0 5px 15px hsla(0, 0%, 0%, 0.3);
    border-radius: 10px;
    background: white;
  }

  .loading {
    color: white;
    font-weight: 800;
  }

  .songs {
    color: darkslategray;
    background-color: white;
    padding: 20px;
    border-radius: 0px 0px 10px 10px;
    h2 {
      padding-bottom: 15px;
    }
  }
`;

export function App() {
  const URL = 'https://examples.devmastery.pl/songs-api/songs';

  //STATE
  const [songs, setSongs] = useState([]);
  const [isPaused, setPause] = useState(true);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  //REFS
  const audioRef = useRef();

  const currentSong = songs[currentSongIndex];
  const previousSong = songs[currentSongIndex - 1];
  const nextSong = songs[currentSongIndex + 1];

  useEffect(() => {
    fetch(URL).then((response) => {
      if (response.ok) {
        response.json().then(setSongs);
      }
    });
  }, []);

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

    if (!isPaused) play(audioRef);
  }

  function handleSkipToNextSong() {
    setCurrentSongIndex((previousIndex) =>
      songs.length > previousIndex + 1 ? previousIndex + 1 : 0
    );

    if (!isPaused) play(audioRef);
  }

  function handlePlayBtn() {
    setPause((prevIsPaused) => !prevIsPaused);

    isPaused ? audioRef.current.play() : audioRef.current.pause();
  }

  function play(audioRef) {
    setTimeout(() => {
      audioRef.current.play();
    });
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

  return (
    <StyledApp>
      {songs.length === 0 ? (
        <h3 className="loading">'Loading...'</h3>
      ) : (
        <div className="container">
          <SongPlayer
            song={currentSong}
            previousSong={previousSong}
            nextSong={nextSong}
            isPaused={isPaused}
            onPreviousSong={handleSkipToPreviousSong}
            onNextSong={handleSkipToNextSong}
            onPlayBtn={handlePlayBtn}
            onChange={onChange}
            currentTime={correctTime(currentTime)}
            duration={correctTime(duration)}
            percentage={percentage}
          />

          <div className="songs">
            <h2>Songs</h2>
            <ul>
              {songs.map((song) => (
                <SongListItem
                  key={song.audioUrl}
                  song={song}
                  isCurrent={currentSong.audioUrl === song.audioUrl}
                  onSelect={handleSelectSong}
                  onPlayBtn={handlePlayBtn}
                  isPaused={isPaused}
                  currentTime={correctTime(currentTime)}
                />
              ))}
            </ul>
          </div>
          <audio
            ref={audioRef}
            key={currentSong.audioUrl}
            onLoadedData={(e) => {
              setDuration(e.currentTarget.duration.toFixed(2));
            }}
            onTimeUpdate={getCurrentDuration}
          >
            <source src={currentSong.audioUrl} />
          </audio>
        </div>
      )}
    </StyledApp>
  );
}
