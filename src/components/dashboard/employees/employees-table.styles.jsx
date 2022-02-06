import styled from "styled-components";

import { FaHammer } from "react-icons/fa";

import { AiOutlineUserAdd } from "react-icons/ai";

export const TableWrapper = styled.div`
  width: 100%;
  min-width: 1120px;
  height: 100%;
  background: white;
  /* color: blue; */
  overflow: hidden;
  box-shadow: 0px 2px 10px 2px rgba(87, 99, 230, 1);
  border-radius: 25px;

  .table-main {
    width: 100%;
    height: calc(100% - 60px);
    overflow: scroll;

    table {
      border-collapse: collapse;

      tbody {
        tr:nth-child(even) {
          /* background: rgba(169, 185, 209, 0.8); */
          background: #badce3;
        }
      }
    }
  }
`;

export const HeaderSection = styled.div`
  height: auto;
  padding: 0.5rem;
  display: flex;
  align-content: center;
  /* background-color: #ff4e00;
  background-image: linear-gradient(315deg, #ff4e00 0%, #ec9f05 74%); */
  background: #4c8bf5;
  /* background: lightgreen; */
  /* background: yellow; */

  .btn-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    .btn-modal-container {
      width: 34%;
      height: 100%;
      display: flex;
      justify-content: space-evenly;

      button {
        padding: 0.5rem;
        width: 156px;
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
    }

    .input-filter-container {
    }
  }
`;

export const Hammer = styled(FaHammer)`
  height: 15px;
  width: 15px;
  margin-right: 8px;
`;

export const EmpAdd = styled(AiOutlineUserAdd)`
  height: 15px;
  width: 15px;
  margin-right: 8px;
`;
