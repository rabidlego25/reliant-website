import styled from "styled-components";

export const TableWrapper = styled.div`
  width: 100%;
  height: 100%;
  color: blue;
  background: white;
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
    }
  }
`;

export const HeaderSection = styled.div`
  height: auto;
  padding: 0.5rem;
  display: flex;
  align-content: center;
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

      &:hover {
        cursor: pointer;
        background: #63c772;
        transform: scale(1.05);
      }
    }
  }
`;
