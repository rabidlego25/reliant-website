import styled from "styled-components";

import { GrClose, GrUserWorker } from "react-icons/gr";

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(2px);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
`;

export const Modal = styled.div`
  width: 480px;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  background: white;
  border: 1px solid blue;
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

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 6rem;
  position: relative;
  margin-bottom: 1rem;
  /* color: #592e83; */
  color: #958fe4;

  &:after {
    content: "";
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 3px;
    /* background: #311547; */
    /* background: #958fe4; */
    background: #907ce9;
  }
`;

export const FormContainer = styled.div`
  height: 100%;
  width: 100%;
`;

export const TabContainer = styled.div`
  height: 4rem;
  width: 100%;
  display: flex;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: calc(50% - 2px);
    height: 100%;
    width: 4px;
    background: white;
  }
`;

export const Tab = styled.div`
  width: 50%;
  /* background: #d5f3fe; */
  background: #c2e3e8;
  color: #778899;
  font-weight: bold;
  transition: font-size 0.1s;

  &:hover {
    cursor: pointer;
  }

  &.active {
    /* color: #2565ae; */
    font-size: 110%;
    /* color: #958fe4; */
    color: #592e83;
  }
`;

export const ContentContainer = styled.div`
  width: 100%;
  margin: 0.5rem 0;
  height: calc(100% - 5rem);
`;

export const StyledInfographics = styled.div`
  height: 100%;
  width: 100%;
  /* background: #b8d6e9; */
  background: #d5f3fe;
  padding: 0rem 0.5rem;

  .field {
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &.title {
      padding: 0.5rem 0;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
    }

    .company {
      width: 50%;
      color: #7b95cd;
    }

    label {
      color: #907ce9;
      width: 10%;
    }

    input {
      font-size: 125%;
      padding-left: 1rem;
      width: 75%;
      height: 35px;
    }
  }
`;

export const StyledTrainings = styled.div`
  height: 100%;
  width: 100%;
  /* background: #b8d6e9; */
  background: #d5f3fe;
  color: #ec0b43;
`;

export const EmployeeIcon = styled(GrUserWorker)`
  height: 3rem;
  width: 3rem;
  margin: 0rem 2rem;
`;
