import { Pause, PlayArrow } from '@material-ui/icons';
import styled from 'styled-components';

const StyledSongListItem = styled.li`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &.selected {
    background-color: slategray;
    background: linear-gradient(to right, white -100%, #323b44 78%);
    color: white;
    font-weight: bold;
    cursor: pointer;
  }

  .col {
    cursor: pointer;
    display: flex;
    align-items: center;
    p {
      padding: 10px 20px;
    }

    img {
      height: 50px;
      margin: 5px 0px 5px 5px;
    }
  }

  .play-btn {
    background: transparent;
    padding: 0 20px 0 15px;
    color: white;
    border: none;
    cursor: pointer;
    outline: none;
  }
`;

export function SongListItem({
  song,
  isCurrent,
  onSelect,
  isPaused,
  onPlayBtn,
  currentTime,
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
          <button className="play-btn" onClick={onPlayBtn}>
            {isPaused ? <PlayArrow /> : <Pause />}
          </button>
        </div>
      )}
    </StyledSongListItem>
  );
}
