import styled from "styled-components";

import { AiOutlineEdit, AiOutlineDelete, AiOutlineClose } from "react-icons/ai";

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
    background: #a52a2a;

    .icon-container {
      width: calc(100% - 1rem);
      height: 50px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      position: absolute;
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
      color: white;
      top: 70%;
      height: 25%;
      padding: 0rem 1rem;
      font-size: 85%;

      .popup-btn-container {
        width: 100%;
      }
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