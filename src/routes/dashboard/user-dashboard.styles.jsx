import styled from "styled-components";

export const DashContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: lightgreen;
  padding-top: 60px;
  color: white;
  display: flex;
  position: relative;

  .dash-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;

    &.blur-background {
      filter: blur(2px);
    }

    .dash-item {
      width: 400px;
    }
  }
`;

export const ErrorBox = styled.div`
  height: 50px;
  color: lightcoral;
`;
