import {
  Loop,
  Pause,
  PlayArrow,
  SkipNext,
  SkipPrevious,
  VolumeUp,
  VolumeOff,
} from '@material-ui/icons';
import { ProgressBar } from '../ProgressBar';
import { StyledSongPlayer } from './StyledSongPlayer';

export function SongPlayer({
  song,
  isPaused,
  isMuted,
  isLooping,
  onLoop,
  onMute,
  onSkipToPreviousSong,
  onSkipToNextSong,
  onPlayPause,
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

  const active = `${isLooping && 'active'}`;

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
            <button className="mute" onClick={onMute}>
              {isMuted ? <VolumeOff /> : <VolumeUp />}
            </button>
            <button className="prev" onClick={onSkipToPreviousSong}>
              <SkipPrevious />
            </button>
            <button className="play" onClick={onPlayPause}>
              {isPaused ? <PlayArrow /> : <Pause />}
            </button>
            <button className="next" onClick={onSkipToNextSong}>
              <SkipNext />
            </button>

            <button
              className={`loop ${isLooping && 'active'}`}
              onClick={onLoop}
            >
              {isLooping ? <Loop /> : <Loop />}
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
