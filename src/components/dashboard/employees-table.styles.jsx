import styled from "styled-components";

export const TableWrapper = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid blue;
  color: blue;
  background: white;

  .table-header {
    height: 60px;

    .btn-container {
      background: yellow;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-evenly;
      align-items: center;

      .dropdown-container {
        display: inline-block;
        width: 250px;

        select {
          width: 100px;
        }
      }
    }
  }
  .table-main {
    width: 100%;
    height: calc(100% - 60px);
    overflow: scroll;

    table {
      border-collapse: collapse;
      overflow: scroll;
    }
  }
`;
