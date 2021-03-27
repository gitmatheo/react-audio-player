import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

const StyledProgressBar = styled.div`
  --progress-bar-height: 4px;

  position: relative;
  width: 100%;
  background: transparent;

  .range {
    -webkit-appearance: none;
    background-color: rgba(240, 9, 9, 0.397);
    height: 10px;
    width: 100%;
    cursor: pointer;
    opacity: 0;
    margin: 0 auto;
  }

  &::before {
    content: '';
    background-color: slategrey;
    width: 99%;
    height: calc(var(--progress-bar-height) - 1px);
    display: block;
    position: absolute;
    border-radius: 10px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
  }

  .cover {
    background-color: rgb(218, 55, 145);
    width: 0%;
    height: var(--progress-bar-height);
    display: block;
    position: absolute;
    border-radius: 10px;
    top: 50%;
    transform: translateY(-50%);
  }

  .thumb {
    width: 20px;
    height: 20px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.753);
    background: rgb(255, 255, 255);
    position: absolute;
    border-radius: 50%;
    top: 50%;
    transform: translate(0%, -50%);
  }
`;

export function ProgressBar({ percentage = 0, onChange }) {
  const [position, setPosition] = useState(0);
  const [marginLeft, setMarginLeft] = useState(0);
  const [progressBarWidth, setProgressBarWidth] = useState(0);

  const rangeRef = useRef();
  const thumbRef = useRef();

  useEffect(() => {
    const rangeWidth = rangeRef.current.getBoundingClientRect().width;
    const thumbWidth = thumbRef.current.getBoundingClientRect().width;
    const centerThumb = (thumbWidth / 100) * percentage * -1;
    const centerProgressBar =
      thumbWidth +
      (rangeWidth / 100) * percentage -
      (thumbWidth / 100) * percentage;
    setPosition(percentage);
    setMarginLeft(centerThumb);
    setProgressBarWidth(centerProgressBar);
  }, [percentage]);

  return (
    <StyledProgressBar>
      <div
        className="cover"
        style={{
          width: `${progressBarWidth}px`,
        }}
      ></div>
      <div
        className="thumb"
        ref={thumbRef}
        style={{
          left: `${position}%`,
          marginLeft: `${marginLeft}px`,
        }}
      ></div>
      <input
        type="range"
        value={position}
        ref={rangeRef}
        step="0.01"
        className="range"
        onChange={onChange}
      />
    </StyledProgressBar>
  );
}
