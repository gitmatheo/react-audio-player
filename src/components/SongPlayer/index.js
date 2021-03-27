import { Pause, PlayArrow, SkipNext, SkipPrevious } from '@material-ui/icons';
import { ProgressBar } from '../ProgressBar';
import { StyledSongPlayer } from './StyledSongPlayer';

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
