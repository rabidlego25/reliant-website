import styled from "styled-components";

import { AiOutlineClose } from "react-icons/ai";

export const Wrapper = styled.div`
  height: calc(100% - 60px);
  width: 100%;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(2px);
  position: fixed;
  top: 60px;
  left: 0;
  z-index: 2;

  button {
    &:hover {
      cursor: pointer;
    }
  }

  .modal {
    width: 320px;
    height: 400px;
    display: flex;
    flex-direction: column;
    overflow-x: scroll;
    position: relative;
    border-radius: 25px;
    background: #4285f4;

    .title-container {
      height: 100px;
      padding: 0 1rem;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      flex-wrap: wrap;

      .title {
        width: 100%;
      }
    }

    form {
      height: 75%;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;

      .form-item {
        padding: 0.5rem 1rem;
        border-radius: 10px;

        #name-header {
          margin-bottom: 1rem;
        }
        .name-input {
          width: 100%;
          height: 50px;
          padding-left: 1rem;
          font-size: 150%;
          color: grey;

          &:focus {
            color: black;
          }
        }
      }

      .btn-container {
        height: auto;

        button {
          height: 100%;
          background: white;
          border: none;
          padding: 4px 6px;
          transition: 0.3s;

          &:hover {
            transform: scale(1.05);
          }
        }
      }

      .radio-container {
        display: flex;
        flex-direction: column;
      }
    }

    .icon-container {
      width: calc(100% - 1rem);
      height: 50px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      position: absolute;
    }
  }
`;

export const CloseIcon = styled(AiOutlineClose)`
  height: 25px;
  width: 25px;
  transform: translateX(-10px);
  color: white;

  &:hover {
    cursor: pointer;
  }
`;

export const StatusBox = styled.div`
  width: 100%;
  height: 50px;
  color: white;
`;
