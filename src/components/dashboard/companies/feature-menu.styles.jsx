import styled from "styled-components";

import { MdAddBusiness, MdFactCheck } from "react-icons/md";

export const MenuWrapper = styled.div`
  height: 15%;
  width: 100%;
  background: lightblue;
  display: flex;
  align-items: center;

  .btn-modal-container {
    width: 40%;
    height: 50%;
    display: flex;
    justify-content: space-evenly;

    button {
      padding: 0.5rem;
      width: 156px;
      border-radius: 15px;
      background-color: #bbf0f3;
      /* background-image: linear-gradient(315deg, #bbf0f3 0%, #f6d285 74%); */
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
  }
`;

export const AddIcon = styled(MdAddBusiness)`
  height: 25px;
  width: 25px;
  margin-right: 8px;
`;

export const InspectIcon = styled(MdFactCheck)`
  height: 25px;
  width: 25px;
  margin-right: 8px;
`;
