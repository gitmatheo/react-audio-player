import { useRef } from 'react';
import { SongListItem } from './SongListItem';
import { SongPlayer } from './SongPlayer';
import styled from 'styled-components';
import { useAudioPlayer } from '../hooks/useAudioPlayer';

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
  const audioRef = useRef();

  const player = useAudioPlayer(audioRef);
  const {
    mainConfig: audioPlayer,
    songPlayerConfig,
    songListItemConfig,
  } = player;

  return (
    <StyledApp>
      {audioPlayer.songs.length === 0 ? (
        <h3 className="loading">'Loading...'</h3>
      ) : (
        <div className="container">
          <SongPlayer {...songPlayerConfig} />

          <div className="songs">
            <h2>Songs</h2>
            <ul>
              {audioPlayer.songs.map((song) => (
                <SongListItem
                  key={song.audioUrl}
                  song={song}
                  isCurrent={audioPlayer.currentSong.audioUrl === song.audioUrl}
                  {...songListItemConfig}
                />
              ))}
            </ul>
          </div>
          <audio
            ref={audioRef}
            key={audioPlayer.currentSong.audioUrl}
            onLoadedData={(e) => {
              audioPlayer.setDuration(e.currentTarget.duration.toFixed(2));
            }}
            onTimeUpdate={audioPlayer.getCurrentDuration}
          >
            <source src={audioPlayer.currentSong.audioUrl} />
          </audio>
        </div>
      )}
    </StyledApp>
  );
}
