import styled from "styled-components";

import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  height: calc(100vh);
  background: rgb(8, 1, 117);
  background: linear-gradient(
    90deg,
    rgba(8, 1, 117, 1) 0%,
    rgba(13, 13, 142, 1) 35%,
    rgba(0, 93, 255, 1) 100%
  );

  .register-wrapper {
    background: white;
    height: 525px;
    width: 715px;

    form {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 75%;

      .image-container {
        display: flex;
        flex-direction: column;
        height: 75px;
        img {
          height: 60%;
        }
        .header {
          letter-spacing: 1.5px;
        }
      }

      .field-container {
        height: 75%;
        width: 100%;
        padding: 0.5rem 2rem;
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;

        .field {
          display: flex;
          flex-direction: column;
          width: 40%;
          margin: 0.75rem 0;

          input {
            height: 36px;
            border: none;
            border-bottom: 1px solid blue;

            background: rgba(198, 221, 234, 0.8);
            padding: 0 1rem;

            &:focus {
              outline: none;
              border-bottom: 1px solid orange;
            }
          }
        }
      }

      .btn-container {
        height: 75px;

        button {
          padding: 0.5rem 1rem;
          border: none;
          background: #ccc;
          border: 1px solid black;

          &:hover {
            background: white;
            color: orange;
            cursor: pointer;
          }
        }
      }
    }
    .link-container {
      padding-left: 5rem;
    }
  }
`;

export const ErrorBox = styled.div`
  height: 100px;
`;

export const CustomLink = styled(Link)`
  text-decoration: none;
  font-size: 75%;
  margin: 1rem 0;
  color: blue;

  &:hover {
    color: #ffa500;
    cursor: pointer;
  }
`;
