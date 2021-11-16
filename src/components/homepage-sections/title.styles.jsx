import styled, { keyframes } from "styled-components";

import { AiOutlineCaretRight } from "react-icons/ai";

export const titleKeyframes = keyframes`
0% {
  transform: translateX(-100%);
  opacity: 0;
} 100% {
  transform: translateX(0);
  opacity: 1;
}
`;

export const opacityKeyFrames = keyframes`
  0% {
    opacity: 0;
    transform: translateY(2rem);
  } 100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  height: calc(100vh - 60px);
  width: 100%;
  background: linear-gradient(to bottom, #fff 25%, lightblue 100%);
  margin-top: 60px;
  position: relative;
`;

export const TitleBox = styled.div`
  text-shadow: 2px 4px 3px rgba(3, 227, 252, 0.3);
  z-index: 2;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  grid-row: 1 / 2;
  margin-left: 4rem;

  ul {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 6rem;
    width: 75%;
    height: 100%;
    list-style: none;
    direction: fill-mode;
    position: relative;

    p {
      font-size: 150%;
      text-shadow: none;
      &.opacity {
        animation: ${opacityKeyFrames} 1.5s linear;
      }
    }

    h1 {
      display: inline-block;
      font-size: 5rem;
      color: #2cc685;

      &.animate-title-one {
        animation: ${titleKeyframes} 1s cubic-bezier(0.165, 0.84, 0.44, 1);
      }

      &.animate-title-two {
        animation: ${titleKeyframes} 2s cubic-bezier(0.165, 0.84, 0.44, 1);
      }
    }

    .btn-container {
      display: flex;

      .learn-more {
        margin-right: 48px;
      }

      button {
        width: 108px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        height: 36px;
        border-radius: 24px;
        color: white;
        background: #1a65c8;
        border: none;
        outline: none;
        cursor: pointer;
        margin-top: 1rem;
        padding-left: 4px;

        &:hover {
          background: #254ad2;

          .icon {
            transform: translateX(0px);
            transition: 0.3s;
          }
        }
      }
    }
  }
`;

export const ContentBox = styled.div`
  display: none;
  grid-row: 1 / 3;
  grid-column: 2 /3;
  /* display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center; */
  /* background: rgba(0, 0, 255, 0.6); */
  /* background: rgba(85, 113, 224); */
  background: rgba(3, 136, 252, 0.4);
  transform: skewX(25deg);
  z-index: 1;
  width: 100%;
  height: 100%;
  color: white;
  z-index: 1;
  border-radius: 12px;

  > * {
    margin: 1rem 0;
  }

  .title-info {
    transform: skewX(-25deg);
  }
`;

export const SkewContainer = styled.div`
  width: 75%;
  display: flex;
  justify-content: center;

  &.image {
    height: 30%;
  }
`;

export const ImageContainer = styled.div`
  transform: skewX(-25deg);
  width: 63%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  cursor: pointer;
  position: relative;

  img {
    width: 100%;

    &:before {
    }

    &:hover {
      transform: scale(1.1);
      transition: 2s ease-in;
    }
  }
`;

export const Text = styled.h3`
  width: 130px;
  pointer-events: none;

  &.hide {
    display: none;
  }
`;

export const AbsoluteOverlay = styled.div`
  position: absolute;
`;

export const RightArrow = styled(AiOutlineCaretRight)`
  height: 15px;
  width: 15px;
  transform: translateX(-8px);
`;
