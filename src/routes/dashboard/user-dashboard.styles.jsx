import styled from "styled-components";

export const DashContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 72px 2.5rem 1.5rem 2.5rem;
  position: relative;
  overflow: hidden;
  display: flex;
  }
`;

export const SideNav = styled.div`
  width: 270px;
  height: 100%;
  /* background: rgb(71, 119, 191);
  background: linear-gradient(
    135deg,
    rgba(71, 119, 191, 1) 25%,
    rgba(0, 161, 255, 1) 75%
  ); */
  /* background: rgb(145, 71, 191);
  background: linear-gradient(
    90deg,
    rgba(145, 71, 191, 1) 25%,
    rgba(139, 0, 255, 1) 75%
  ); */
  background: rgb(145, 71, 191);
  background: linear-gradient(
    90deg,
    rgba(145, 71, 191, 1) 25%,
    rgba(169, 0, 255, 1) 75%
  );
  transform: translateX(-2.5rem);
  padding: 1rem 0;
  position: relative;
  transition: 1s;
  border-radius: 0 25px 25px 0;
  color: #ccc;

  &.hidden {
    margin-left: -270px;
  }
`;

export const ToggleSideNav = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: calc(50% - 25px);
  left: 100%;
  height: 50px;
  width: 16px;
  background: RGB(97, 89, 184);
  color: white;

  &:hover {
    cursor: pointer;
  }
`;

export const Tab = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  border-bottom: 2px solid purple;
  padding: 4px;

  &.active {
    color: #fff;
  }

  h4 {
    transform: translateX(8px);
    font-size: 125%;
    width: 100%;

    &:hover {
      cursor: pointer;
    }
  }
`;
