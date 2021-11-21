import styled from "styled-components";

export const Div = styled.div`
  padding-top: 60px;
  background: greenyellow;
  height: calc(100vh);
`;

export const Form = styled.form`
  height: 250px;
  width: 175px;
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.5rem 0.25rem;

  .image-container {
    height: 50px;
    width: 100%;

    img {
      max-height: 100%;
      max-width: 100%;
    }
  }
  .form-details {
    input {
      height: 25px;
      width: 100%;
    }
  }

  .submit {
    height: 25%;
    flex: 1 1 1;
  }
`;
