import { useState, useRef, useEffect, ReactElement, LegacyRef } from 'react';
import { StyledProgressBar } from './StyledProgressBar';

export interface ProgressBarProps {
  percentage: number;
  onChange: (e: React.ChangeEvent<HTMLButtonElement>) => void;
}

export function ProgressBar({
  percentage = 0,
  onChange,
}: ProgressBarProps): ReactElement {
  const [position, setPosition] = useState(0);
  const [marginLeft, setMarginLeft] = useState(0);
  const [progressBarWidth, setProgressBarWidth] = useState(0);

  const rangeRef = useRef<HTMLDivElement>();
  const thumbRef = useRef<HTMLInputElement>();

  useEffect(() => {
    const rangeWidth = rangeRef.current!.getBoundingClientRect().width;
    const thumbWidth = thumbRef.current!.getBoundingClientRect().width;
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
        ref={thumbRef as LegacyRef<HTMLDivElement>}
        style={{
          left: `${position}%`,
          marginLeft: `${marginLeft}px`,
        }}
      ></div>
      <input
        type="range"
        value={position}
        ref={rangeRef as LegacyRef<HTMLInputElement>}
        step="0.01"
        className="range"
        onChange={onChange as any}
      />
    </StyledProgressBar>
  );
}
