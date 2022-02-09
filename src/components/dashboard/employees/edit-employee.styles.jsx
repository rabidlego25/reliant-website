import styled from "styled-components";

import {
  AiOutlineEdit,
  AiOutlineDelete,
  AiOutlineClose,
  AiOutlineWarning,
} from "react-icons/ai";

import { IoMdArrowBack } from "react-icons/io";

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(2px);
  position: fixed;
  top: 0;
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
    overflow: scroll;
    position: relative;
    border-radius: 25px;
    background: #a52a2a;

    .icon-container {
      &.close {
        width: calc(100% - 1rem);
        height: 50px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        position: absolute;
      }
    }

    .title-container {
      height: 100px;
      padding: 0 25px;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      flex-wrap: wrap;
      color: white;

      .title {
        color: white;
        width: 100%;
      }
    }

    .form-container {
      background: #a52a2a;
      height: calc(100% - 75px);

      form {
        display: flex;
        flex-direction: column;
        padding: 2rem;
        border-top: 3px solid lightcoral;
        color: white;

        .input-container:not(:first-child) {
          margin: 16px 0;
        }

        .input-container {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;

          label {
            width: 33%;
          }

          input {
            height: 35px;
            color: blue;
          }
        }

        .btn-container {
          display: flex;
          justify-content: space-evenly;
          margin-top: 16px;
          button {
            width: 40%;
            padding: 0.5rem;
            border-radius: 15px;
            border: none;
            background: white;

            &:hover {
              background: #eee;
              color: blue;
            }
          }
        }
      }
    }

    .delete-popup {
      position: absolute;
      background: #f0e68c;
      top: 0;
      left: 0;
      height: 400px;
      width: 320px;
      padding: 0rem 1rem;
      font-size: 85%;
      transform: translateX(-320px);
      transition: 0.3s;
      padding: 1rem;
      border-radius: 25px;

      .header-warning {
        letter-spacing: 2px;
        color: #ff6700;
        font-weight: 800;
      }

      .header-content {
        padding: 2rem 0;
        color: #ff6700;
      }

      .icon-container {
        &.warning {
          height: 75px;
          width: 100%;
        }
      }

      &.active {
        color: white;
        transform: translateX(0);
        z-index: 2;
      }

      .popup-btn-container {
        align-items: center;
        justify-content: space-evenly;
        height: 100px;
      }
    }
  }
`;

export const Successful = styled.div`
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  border-radius: 25px;
  background: lightblue;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;

  button {
    width: 6rem;
    height: 3rem;
    border-radius: 1px;
    border: 0;
    font-weight: 700;
  }

  &.hidden {
    display: none;
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

export const EditIcon = styled(AiOutlineEdit)`
  height: 25px;
  width: 25px;

  &:hover {
    cursor: pointer;
  }
`;

export const DeleteIcon = styled(AiOutlineDelete)`
  height: 25px;
  width: 25px;

  &:hover {
    cursor: pointer;
  }
`;

export const WarningIcon = styled(AiOutlineWarning)`
  height: 75px;
  width: 75px;
  color: orange;
`;

export const ReturnIcon = styled(IoMdArrowBack)`
  height: 20px;
  width: 20px;
`;
