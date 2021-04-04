import { Pause, PlayArrow } from '@material-ui/icons';
import { ReactElement } from 'react';
import { Song } from '../../interfaces/Song';
import { StyledSongListItem } from './StyledSongListItem';

export interface SongListItemProps {
  song: Song;
  isCurrent: boolean;
  isPaused: boolean;
  currentTime: string;
  onSelect: (song: Song) => void;
  onPlayPause: (e: any) => void;
}

export function SongListItem({
  song,
  isCurrent,
  isPaused,
  currentTime,
  onSelect,
  onPlayPause,
}: SongListItemProps): ReactElement {
  function handleClick() {
    onSelect(song);
  }
  return (
    <StyledSongListItem
      className={`${isCurrent ? 'selected' : null}`}
      onClick={handleClick}
    >
      <div className="col">
        <img src={song.coverUrl} alt={song.title}></img>
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
