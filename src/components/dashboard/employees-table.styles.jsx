import styled from "styled-components";

import { FaHammer } from "react-icons/fa";

import { AiOutlineUserAdd } from "react-icons/ai";

export const TableWrapper = styled.div`
  width: 100%;
  min-width: 600px;
  height: 100%;
  background: white;
  color: blue;
  overflow: hidden;
  box-shadow: 0px 2px 10px 2px rgba(87, 99, 230, 1);
  border-radius: 25px;
  padding-bottom: 1rem;

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
  background: lightgreen;
  /* background: yellow; */

  .btn-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    button {
      padding: 0.5rem;
      border-radius: 15px;
      background: #4dc95f;
      color: blue;
      border: none;
      transition: all 0.3s;
      display: flex;
      align-items: center;
      justify-content: space-evenly;

      &:hover {
        cursor: pointer;
        background: #63c772;
        transform: scale(1.05);
      }
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
