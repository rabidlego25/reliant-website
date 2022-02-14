import styled from "styled-components";

export const FeatureWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-width: 871px;
  max-width: 1400px;
  min-height: 650px;
  border-radius: 25px;
  overflow: hidden;
`;

export const Layout = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #4c8bf5;
`;

export const FeatureBody = styled.div`
  height: 80%;
  width: auto;
  display: flex;
  @media (min-width: 800px) {
    font-size: 110%;
  }
`;
