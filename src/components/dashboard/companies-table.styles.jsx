import styled from "styled-components";

export const Div = styled.div`
  height: 300px;
  width: 400px;
  border: 2px solid black;
  background: #fff;
  padding: 1rem;
  overflow: scroll;
  color: black;

  .main-container {
    height: 200px;
    background: yellow;
    overflow: scroll;

    .company {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .icons {
        display: flex;
        align-items: center;
        height: 100%;

        .icon-container {
          margin: 0 1rem;
          height: 20px;
          width: 20px;

          .icon {
            &:hover {
              cursor: pointer;
            }

            &.edit {
              color: blue;
            }

            &.trash {
              color: orange;
            }
          }
        }
      }
    }
  }

  .status-box {
    width: 100%;
    height: 50px;
    font-size: 125%;
    color: lightcoral;
  }
`;

export const Loading = styled.div`
  color: blue;
`;

export const Table = styled.table``;
