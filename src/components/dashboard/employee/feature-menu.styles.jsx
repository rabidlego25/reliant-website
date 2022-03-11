import styled from "styled-components";

import { AiOutlineUserAdd } from "react-icons/ai";

import { MdModelTraining } from "react-icons/md";

export const MenuWrapper = styled.div`
  height: 20%;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 48px;
`;

export const TitleContainer = styled.div`
  width: 10%;
  color: #def2ff;
`;

export const ButtonContainer = styled.div`
  width: 50%;
  height: 50%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  button {
    padding: 0.5rem;
    height: 2.5rem;
    width: 10rem;
    border-radius: 15px;
    background-color: #bbf0f3;
    background-image: linear-gradient(315deg, #bbf0f3 0%, #f6d285 74%);
    font-weight: 600;
    color: #4c8bf5;
    border: none;
    transition: all 0.3s;
    display: flex;
    align-items: center;

    &:hover {
      cursor: pointer;
      background: #63c772;
      transform: scale(1.05);
    }
  }
`;

export const Tab = styled.div`
  padding: 0.5rem;
  height: 2.5rem;
  width: 10rem;
  border-radius: 15px;
  background-color: #bbf0f3;
  background-image: linear-gradient(315deg, #bbf0f3 0%, #f6d285 74%);
  font-weight: 600;
  color: #4c8bf5;
  border: none;
  transition: all 0.3s;
  display: flex;
  align-items: center;

  &:hover {
    cursor: pointer;
    background: #63c772;
    transform: scale(1.05);
  }
`;

export const ToggleContainer = styled.div``;

export const AddIcon = styled(AiOutlineUserAdd)`
  height: 25px;
  width: 25px;
  margin-right: 1rem;
`;

export const ConductIcon = styled(MdModelTraining)`
  height: 25px;
  width: 25px;
  margin-right: 1rem;
`;
