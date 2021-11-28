import styled from "styled-components";

export const Div = styled.div`
  height: calc(100vh);
  background: lightcoral;
  flex-direction: column;
`;

export const Form = styled.form`
  height: 400px;
  background: #fff;
  width: 300px;
  overflow: scroll;
  padding: 1rem;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .field-container {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 75%;
  }

  .field {
    display: flex;
    flex-direction: column;

    input {
      width: 75%;
    }
  }

  button {
    width: 50%;
    height: 45px;
  }
`;

export const ErrorBox = styled.div`
  height: 100px;
`;
