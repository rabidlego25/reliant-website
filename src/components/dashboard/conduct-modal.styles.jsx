import styled from "styled-components";
import { GrClose } from "react-icons/gr";

export const Wrapper = styled.div`
  height: calc(100% - 60px);
  width: 100%;
  background: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 60px;
  left: 0;

  .modal {
    width: 480px;
    height: 600px;
    background: white;
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    padding: 1rem;
    overflow-x: scroll;

    .icon-container {
      width: 100%;
      height: 50px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
  }
`;

export const CloseIcon = styled(GrClose)`
  height: 25px;
  width: 25px;

  &:hover {
    cursor: pointer;
  }
`;
