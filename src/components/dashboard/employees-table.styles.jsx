import styled from "styled-components";

export const TableWrapper = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid blue;
  color: blue;
  background: white;
  overflow: hidden;

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
  background: yellow;

  .btn-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
`;
