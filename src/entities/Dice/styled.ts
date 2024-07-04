import styled, { css } from "styled-components";

//оригинал – https://codepen.io/lenasta92579651/pen/yLeVmdW

export const DiceStyled = styled.div`
  width: 100px;
  height: 100px;
  padding: 30px;

  box-sizing: content-box;
  border-radius: 0.3rem;

  ${({ theme: { colors } }) => {
    return css`
      border: 1px solid ${colors.purple_dark};
    `;
  }}

  .dice {
    position: relative;
    width: 100px;
    height: 100px;
    transform-style: preserve-3d;
    transition: transform 1s;
  }

  .dot {
    position: absolute;
    width: 20px;
    height: 20px;
    margin: -10px 5px 5px -10px;
    border-radius: 20px;
    background-color: black;
  }

  .dice-one {
    position: absolute;
    left: 150px;
  }

  .dice-two {
    position: absolute;
    left: -50px;
  }

  .side {
    position: absolute;
    background-color: #fff;
    border-radius: 5px;
    width: 100px;
    height: 100px;
    border: 1px solid #e5e5e5;
    text-align: center;
    line-height: 2em;
  }

  .side:nth-child(1) {
    transform: translateZ(3.1em);
  }

  .side:nth-child(6) {
    transform: rotateY(90deg) translateZ(3.1em);
  }

  .side:nth-child(3) {
    transform: rotateY(-90deg) translateZ(3.1em);
  }

  .side:nth-child(4) {
    transform: rotateX(90deg) translateZ(3.1em);
  }

  .side:nth-child(5) {
    transform: rotateX(-90deg) translateZ(3.1em);
  }

  .side:nth-child(2) {
    transform: rotateY(-180deg) translateZ(3.1em);
  }

  .show-1 {
    transform: rotateX(720deg) rotateZ(-720deg);
  }

  .show-2 {
    transform: rotateX(-900deg) rotateZ(1080deg);
  }

  .show-3 {
    transform: rotateY(810deg) rotateZ(720deg);
  }

  .show-4 {
    transform: rotateX(-810deg) rotateZ(-1080deg);
  }

  .show-5 {
    transform: rotateX(450deg) rotateZ(-720deg);
  }

  .show-6 {
    transform: rotateY(-450deg) rotateZ(-1440deg);
  }

  .two-1,
  .three-1,
  .four-1,
  .five-1,
  .six-1 {
    top: 20%;
    left: 20%;
  }

  .four-3,
  .five-3,
  .six-4 {
    top: 20%;
    left: 80%;
  }

  .one-1,
  .three-2,
  .five-5 {
    top: 50%;
    left: 50%;
  }

  .four-2,
  .five-2,
  .six-3 {
    top: 80%;
    left: 20%;
  }

  .two-2,
  .three-3,
  .four-4,
  .five-4,
  .six-6 {
    top: 80%;
    left: 80%;
  }

  .six-2 {
    top: 50%;
    left: 20%;
  }

  .six-5 {
    top: 50%;
    left: 80%;
  }
`;
