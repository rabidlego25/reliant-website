import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(2px);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  font-size: 85%;
`;

export const Modal = styled.div`
  width: 300px;
  height: 440px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  background: green;
`;
