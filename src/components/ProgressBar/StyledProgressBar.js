import styled from 'styled-components';

export const StyledProgressBar = styled.div`
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
