import { Pause, PlayArrow } from '@material-ui/icons';
import { StyledSongListItem } from './StyledSongListItem';

export function SongListItem({
  song,
  isCurrent,
  isPaused,
  currentTime,
  onSelect,
  onPlayPause,
}) {
  function handleClick() {
    onSelect(song);
  }
  return (
    <StyledSongListItem
      className={`${isCurrent ? 'selected' : null}`}
      onClick={handleClick}
    >
      <div className="col">
        <img src={song.coverUrl}></img>
        <p>
          {song.title} by {song.artist}
        </p>
      </div>

      {isCurrent && (
        <div className="col">
          <span>{currentTime}</span>
          <button className="play-btn" onClick={onPlayPause}>
            {isPaused ? <PlayArrow /> : <Pause />}
          </button>
        </div>
      )}
    </StyledSongListItem>
  );
}
