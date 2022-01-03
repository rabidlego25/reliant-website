import styled from "styled-components";

export const DashContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(to top left, #3389b8, #1699b4);
  padding-top: 60px;
  color: white;
  display: flex;
  position: relative;
  flex-wrap: wrap;

  .dash-item {
    width: 50%;
    padding: 1.5rem;

    &.company-container {
      display: flex;
      justify-content: center;
    }

    &.employee-container {
      width: 100%;
      height: 100%;
      background: white;
      padding: 2.5rem;
    }
  }
`;
