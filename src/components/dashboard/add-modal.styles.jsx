import styled from "styled-components";
import { GrClose } from "react-icons/gr";

export const Wrapper = styled.div`
  height: 400px;
  width: 300px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: none;
  position: absolute;
  color: black;

  .modal-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    background: white;
    border: 1px solid blue;
    border-radius: 25px;

    .icon-container {
      width: 100%;
      display: flex;
      justify-content: flex-end;

      .icon {
        height: 100%;
        width: 25px;
      }
    }
  }
`;

export const Title = styled.h1`
  color: blueviolet;
  width: 60%;
`;

export const Form = styled.form`
  width: 100%;
  padding: 1rem;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  input {
    &.company-input {
      width: 100%;
      height: 40px;
      font-size: 125%;
      border: none;
      outline: none;
      border-bottom: 2px solid grey;
    }

    &:focus {
      border-bottom: 2px solid blue;
    }
  }

  .radio-container {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    .center-flex {
      input {
        margin: 1rem;
      }
    }
  }

  .btn-container {
    width: 100%;
    button {
      width: 30%;
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

export const ErrorBox = styled.div`
  color: lightcoral;
`;
