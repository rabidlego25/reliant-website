import styled, { keyframes } from "styled-components";

import { BsArrowRightCircleFill, BsArrowLeftCircleFill } from "react-icons/bs";

const containerKeyFrames = keyframes`
0% {
  opacity: 0;
  transform: translateY(10rem);
} 100% {
  opacity: 1;
  transform: translateY(0);
}
`;

const opacityKeyFrames = keyframes`
0% {
  opacity: 0;
} 
100% {
  opacity: 1;
}`;

export const BusinessContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-row: 1 / 3;
  grid-column: 2 / 3;
  height: 100%;
  width: 100%;
  position: relative;

  .filler {
    width: 100%;
    height: 20%;
  }
`;

export const ContentCircle = styled.div`
  /* background: rgb(156, 167, 222);
  background: linear-gradient(
    90deg,
    rgba(156, 167, 222, 1) 0%,
    rgba(124, 175, 240, 1) 100%
  ); */
  background: rgb(222, 169, 156);
  background: linear-gradient(
    90deg,
    rgba(222, 169, 156, 1) 0%,
    rgba(240, 203, 124, 1) 100%
  );
  box-shadow: 0px 0px 15px 1px rgba(0, 0, 255, 0.3);
  width: 85%;
  height: 85%;
  border-radius: 25%;
  animation: ${containerKeyFrames} 2s ease-in-out;
  padding: 1rem 0.5rem;
`;

export const FrameSpecialization = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 25%;
  justify-content: space-evenly !important;
  flex-direction: column;

  .specialize-box {
    background: #4c8bf5;
    color: orange;
    border-radius: 10px;
    width: 65%;
    height: 25%;
    display: flex;

    .one-third {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      width: 33%;

      :first-child {
        margin: 0.5rem;
      }

      .first-child {
        margin: 0.5rem;
      }

      .img-container {
        height: 100%;

        img {
          height: 1em;
        }

        .icon {
          height: 90%;
          width: 90%;
        }
      }
    }

    .two-thirds {
      width: 67%;
      height: 100%;
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      /* background: #b299bb; */
      /* background: #c4b5c9; */
      /* color: black; */
      /* color: white; */
      overflow: hidden;

      h1 {
        font-size: 1.75rem;
      }

      button {
        width: 84px;
        padding: 0.5rem;
        border-radius: 20px;
        background: white;
        color: #aaa;
        font-weight: 600;
        border: none;
        transition: 0.3s;

        &:hover {
          cursor: pointer;
          background: #ddd;
          color: teal;
        }
      }
    }
  }

  .title-box {
    background: #9ede9c;
    width: 75%;
    height: 10%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    /* background: rgb(44, 198, 133);
    background: linear-gradient(
      90deg,
      rgba(44, 198, 133, 0.8) 0%,
      rgba(37, 74, 210, 0.8) 100%
    ); */
    border-radius: 10px;
    transform: skewX(25deg);
    span {
      transform: skewX(-25deg);
      animation: ${opacityKeyFrames} 1s;
      color: #8180d0;
      font-size: 150%;
      letter-spacing: 2px;
      font-weight: bold;
    }
  }
`;

export const FrameFeatures = styled.div;

export const LeftArrowFilled = styled(BsArrowLeftCircleFill)`
  position: absolute;
  top: calc(50% - 18px);
  left: calc(7.5% - 18px);
  z-index: 3;
  color: #5569ac;
  height: 36px;
  width: 36px;
  overflow: visible;
  cursor: pointer;
  animation: ${opacityKeyFrames} 3s;

  &:hover {
    color: #6108a1;
  }
`;

export const RightArrowFilled = styled(BsArrowRightCircleFill)`
  position: absolute;
  top: calc(50% - 18px);
  right: calc(7.5% - 18px);
  z-index: 3;
  color: #5569ac;
  height: 36px;
  width: 36px;
  overflow: visible;
  cursor: pointer;
  animation: ${opacityKeyFrames} 3s;

  &:hover {
    color: #6108a1;
  }
`;
