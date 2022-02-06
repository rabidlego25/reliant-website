import styled from "styled-components";
import { GrClose } from "react-icons/gr";

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(2px);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;

  .modal {
    background: white;
    width: 480px;
    height: 600px;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    overflow-x: scroll;
    position: relative;
    /* box-shadow: 0px 0px 10px 5px rgba(66, 135, 245, 1); */

    .icon-container {
      width: calc(100% - 2rem);
      height: 50px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      position: absolute;
    }

    .title-container {
      width: calc(100% - 2rem);
      margin-top: 30px;
    }

    .data-container {
      margin-top: 50px;

      .form-item {
        margin: 1rem 0;

        &:focus {
          background: yellow;
        }

        &.btn-container {
          width: 100%;
        }
      }
    }
  }
`;

export const CloseIcon = styled(GrClose)`
  height: 25px;
  width: 25px;

  &:hover {
    cursor: pointer;
  }
`;

export const SubmitButton = styled.button`
  height: 25px;
  width: 100px;
  height: 33px;
  border-radius: 10px;
  border: none;
  background: #4c8bf5;
  color: #fff;
  transition: transform 0.3s;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    background: #344ceb;
  }
`;

export const ErrorBox = styled.div`
  color: red;
`;
