import styled from "styled-components";

import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  padding-top: 60px;
  background: rgb(8, 1, 117);
  background: linear-gradient(
    90deg,
    rgba(8, 1, 117, 1) 0%,
    rgba(13, 13, 142, 1) 35%,
    rgba(0, 93, 255, 1) 100%
  );
  height: calc(100vh);
  background-color: #f7b42c;
  background-image: linear-gradient(315deg, #f7b42c 0%, #fc575e 74%);

  .login-wrapper {
    height: 525px;
    width: 415px;
    background: white;
    padding: 1.5rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: auto;

  .image-container {
    height: 100px;
    width: 100%;
    flex-direction: column;
    justify-content: space-evenly;
    margin-bottom: 1rem;

    img {
      max-height: 50px;
      max-width: 100%;
    }

    .header {
      letter-spacing: 1.5px;
    }
  }
  .form-details {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    .input-section {
      margin: 0.5rem 0;
      width: 80%;

      input {
        height: 36px;
        border: none;
        border-bottom: 1px solid blue;
        width: 100%;
        background: lightblue;

        &:focus {
          outline: none;
          background: lightblue;
          border-bottom: 1px solid orange;
        }
      }
    }
  }

  .submit {
    margin-top: 1.5rem;
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

  .link-container {
    display: flex;
    align-items: center;
    height: 75px;
  }
`;

export const ErrorBox = styled.div`
  height: 50px;
  color: lightcoral;
`;

export const CustomLink = styled(Link)`
  text-decoration: none;
  font-size: 75%;
  margin: 1rem 0;
  color: blue;

  &:hover {
    cursor: pointer;
    color: #ffa500;
  }
`;
