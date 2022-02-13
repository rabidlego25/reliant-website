import styled from "styled-components";

import { ImCheckmark } from "react-icons/im";
import { GiCancel } from "react-icons/gi";
import { AiOutlineWarning } from "react-icons/ai";

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(2px);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  font-size: 85%;
`;

export const ModalContainer = styled.div`
  width: 300px;
  height: 400px;
  /* background: #b33a3a; */
  /* color: white; */
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  background: green;
`;

export const WarningSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-transform: uppercase;
  height: 35%;
  background: white;
`;

export const SelectSection = styled.div`
  padding: 0 1rem;
  background: #c8d1f7;
  height: 65%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  p {
    line-height: 16px;
  }

  ul {
    background: #ff7377;
    color: #851d2d;
    padding-left: 2rem;
    list-style: none;
    line-height: 1.5rem;
    position: relative;
    font-weight: bold;

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 6px;
      background: #8834b3;
    }
  }

  .icon-container__wrapper {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 0.5rem 0;

    .icon-container {
      width: 84px;
      height: 36px;
      border-radius: 10px;
      background: white;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      border: none;
      transition: 0.3s;

      &:hover {
        cursor: pointer;
        transform: scale(1.05);
      }

      &.confirm {
        color: green;
      }

      &.delete {
        color: orange;
      }
    }
  }
`;

export const CheckmarkIcon = styled(ImCheckmark)`
  height: 20px;
  width: 20px;
  color: green;
`;

export const CancelIcon = styled(GiCancel)`
  height: 20px;
  width: 20px;
  color: orange;
`;

export const WarningIcon = styled(AiOutlineWarning)`
  height: 6rem;
  width: auto;
  color: lightcoral;
`;
