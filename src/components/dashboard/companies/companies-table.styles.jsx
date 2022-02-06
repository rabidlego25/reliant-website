import styled from "styled-components";

export const Div = styled.div`
  height: 350px;
  width: 450px;
  border: 2px solid black;
  background: #fff;
  padding: 1rem;
  color: black;

  .title-row {
    width: 100%;
    display: flex;
    margin-bottom: 1rem;

    h2 {
      /* display: inline-block; */
      width: 100%;
    }

    .btn-container {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40%;

      button {
        height: 75%;
        padding: 0.5rem;

        &:hover {
          cursor: pointer;
        }
      }
    }
  }

  .main-container {
    height: 200px;
    overflow: scroll;
    background: yellow;

    .company {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 0.5rem;

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
