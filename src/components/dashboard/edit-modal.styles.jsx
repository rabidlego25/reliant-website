import styled from "styled-components";

import { GrClose } from "react-icons/gr";

export const Div = styled.div`
  position: absolute;
  background: yellow;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);

  .modal {
    display: flex;
    background: white;
    flex-direction: column;
    justify-content: center;
    height: 400px;
    width: 300px;
    overflow: scroll;
    color: blue;
    position: relative;
  }

  form {
    background: #72c5f2;
    height: 100%;

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
      height: 35px;

      button {
        height: 100%;
      }
    }

    .radio-container {
      display: flex;
      flex-direction: column;
    }
  }

  .close-icon {
    position: absolute;
    top: 5px;
    right: 5px;
    height: 24px;
    width: 24px;
  }
`;

export const CloseIcon = styled(GrClose)`
  height: 100%;
  width: 100%;

  &:hover {
    cursor: pointer;
  }
`;

export const StatusBox = styled.div`
  width: 100%;
  height: 50px;
  color: lightcoral;
`;
