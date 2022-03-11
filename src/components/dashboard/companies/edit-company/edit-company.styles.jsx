import styled from "styled-components";

import { GrClose, GrBusinessService, GrStatusInfo } from "react-icons/gr";

import { GoLightBulb } from "react-icons/go";

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(2px);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;

  .modal-container {
    width: 480px;
    height: 550px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    background: white;
    border: 1px solid blue;

    .btn-container {
      button {
        transition: 0.3s;
        &:hover {
          transform: scale(1.05);
        }
      }
    }
  }
`;

export const CloseIconContainer = styled.div`
  width: 100%;
  padding: 0.5rem;
  display: flex;
  justify-content: flex-end;
`;

export const CloseIcon = styled(GrClose)`
  height: 20px;
  width: 20px;

  &:hover {
    cursor: pointer;
  }
`;

export const BusinessIcon = styled(GrBusinessService)`
  height: 3rem;
  width: 3rem;
  margin: 0rem 2rem;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 6rem;
  position: relative;
  margin-bottom: 1rem;

  &:after {
    content: "";
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 3px;
    background: blue;
  }
`;

export const FormContainer = styled.div`
  height: auto;
  width: 100%;

  > div {
    margin: 2rem 0;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  label {
    width: 4rem;
  }

  input {
    width: 75%;
    height: 35px;
    background: lightblue;
    font-size: 125%;
    padding-left: 1rem;
    border: none;
  }

  .radio-container {
    width: 60%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    > input {
      width: 1rem;
    }

    > label {
      transform: translateX(-24px);
    }
  }
`;

export const HelpIconContainer = styled.div`
  height: 30px;
  width: 30px;
  position: relative;
`;

export const HelpIcon = styled(GrStatusInfo)`
  height: 30px;
  width: auto;
`;

export const HelpBox = styled.div`
  position: absolute;
  top: -110px;
  left: -72.5px;
  height: 0px;
  width: 180px;
  background: white;
  overflow: hidden;
  transition: all 0.7s;
  font-size: 75%;
  display: flex;
  border-radius: 5px;
  box-shadow: none;

  &.active {
    height: 100px;
    box-shadow: 0 0 5px 1px orange;
  }
`;

export const LightIconContainer = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: center;
  padding-top: 1rem;
`;

export const LightIcon = styled(GoLightBulb)`
  height: 25px;
  width: auto;
  color: orange;
`;

export const MessageContainer = styled.div`
  width: 70%;
  padding-top: 1rem;

  > h3 {
    margin-bottom: 0.75rem;
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
