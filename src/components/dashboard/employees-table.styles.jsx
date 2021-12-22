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
    overflow: scroll;

    table {
      th {
        padding: 0 15px;
        font-size: 100%;
      }
    }
  }
`;
