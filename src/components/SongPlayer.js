import { Pause, PlayArrow, SkipNext, SkipPrevious } from '@material-ui/icons';
import { ProgressBar } from './ProgressBar';
import styled from 'styled-components';

const StyledSongPlayer = styled.section`
  background: transparent;
  border-radius: 10px;
  overflow: hidden;

  .overlay {
    filter: blur(2px);
    -webkit-filter: blur(2px);
    height: 123%;
    width: 120%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    top: -10%;
    left: -10%;
    opacity: 0.6;
    clip-path: polygon(0 0, 100% 0, 100% 75%, 80% 93%, 31% 75%, 0 93%);
  }

  .cover-box {
    display: flex;
    position: relative;
    padding: 20px;
    background: transparent;
  }

  .cover-box-text {
    display: flex;
    z-index: 1;
  }

  .titles {
    padding-left: 20px;
  }

  .controls-wrapper {
    padding: 20px;
    background: rgb(2, 0, 36);
    background: linear-gradient(
      180deg,
      transparent 0%,
      rgba(255, 255, 255, 1) 100%
    );
  }

  .track-time {
    height: 15px;
    padding: 5px;
    color: darkslategray;
    font-weight: bold;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    font-weight: 600;
  }

  img {
    width: 200px;
    height: 200px;
    box-shadow: 0 5px 15px hsla(0, 0%, 0%, 0.3);
  }

  .player-box {
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 20px;
  }

  button {
    cursor: pointer;
    border-radius: 50%;
    border-style: none;
    background: linear-gradient(to bottom, white -100%, #323b44 78%);
    color: white;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.4);
  }

  .play {
    width: 70px;
    height: 70px;
    margin: 0 10px;
  }

  .prev,
  .next {
    width: 50px;
    height: 50px;
  }

  .prev-next {
    display: grid;
    grid-template-columns: 50% 50%;
    justify-content: space-between;
    color: darkslategray;
    font-weight: 600;
    font-size: 14px;

    span:last-child {
      text-align: right;
    }
  }
`;

export function SongPlayer({
  song,
  isPaused,
  onPreviousSong,
  onNextSong,
  onPlayBtn,
  onChange,
  percentage,
  currentTime,
  duration,
  previousSong,
  nextSong,
}) {
  const { coverUrl, title, artist } = song;

  const previousSongText =
    previousSong && previousSong.title && `Previous: ${previousSong.title}`;
  const nextSongText = nextSong && nextSong.title && `Next: ${nextSong.title}`;

  return (
    <>
      <StyledSongPlayer>
        <div className="cover-box">
          <div className="cover-box-text">
            <img width="250" height="250" src={coverUrl} alt="Song cover" />

            <div className="titles">
              <h2>{title}</h2>
              <h4>by {artist}</h4>
            </div>
          </div>
          <div
            className="overlay"
            style={{
              background: `linear-gradient(0deg, rgba(0, 10, 40, 0.5), rgba(0, 15, 40, 0.6)), url(${coverUrl})`,
            }}
          ></div>
        </div>

        <div className="controls-wrapper">
          <div className="track-time">
            <span>{currentTime}</span>
            <span>{duration}</span>
          </div>

          <ProgressBar percentage={percentage} onChange={onChange} />

          <div className="player-box">
            <button className="prev" onClick={onPreviousSong}>
              <SkipPrevious />
            </button>
            <button className="play" onClick={onPlayBtn}>
              {isPaused ? <PlayArrow /> : <Pause />}
            </button>
            <button className="next" onClick={onNextSong}>
              <SkipNext />
            </button>
          </div>

          <div className="prev-next">
            <span>{previousSongText}</span>
            <span>{nextSongText}</span>
          </div>
        </div>
      </StyledSongPlayer>
    </>
  );
}
