import styled from "styled-components";

import { Link } from "react-router-dom";

export const DashContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 12px;
  position: relative;
  overflow: scroll;
  display: flex;
  /* background: #ffcba4; */

  /* background: linear-gradient(315deg, #ff4e00 0%, #ec9f05 74%); */
  /* background-image: linear-gradient(to right bottom, #516e98, #5780a0, #6491a7, #78a1ac, #90b0b3);
  } */
  /* background: rgb(217, 112, 6);
  background: linear-gradient(
    90deg,
    rgba(217, 112, 6, 1) 0%,
    rgba(227, 218, 154, 1) 100%
  ); */
  /* background: rgb(120, 204, 246);
  background: linear-gradient(
    90deg,
    rgba(120, 204, 246, 1) 0%,
    rgba(170, 188, 205, 1) 100%
  ); */
  background: rgb(161, 180, 245);
  background: linear-gradient(
    90deg,
    rgba(161, 180, 245, 1) 0%,
    rgba(170, 188, 205, 1) 100%
  );
`;

export const SideNav = styled.div`
  width: 270px !important;
  min-width: 270px;
  height: 100%;
  background: rgb(145, 71, 191);
  background: linear-gradient(
    90deg,
    rgba(145, 71, 191, 1) 25%,
    rgba(169, 0, 255, 1) 75%
  );
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transform: translateX(-12px);
  margin-right: 1.5rem;
  padding: 1rem 0;
  transition: 0.7s ease-in-out;
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

export const TabContainer = styled.div`
  width: 100%;
  height: auto;
`;

export const Tab = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  border-bottom: 2px solid purple;
  padding: 4px;

  &.active {
    /* color: #fff; */
    color: yellow;
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

export const Logout = styled(Link)`
  width: 100%;
  height: 48px;
  padding-right: 12px;
  font-size: 125%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-decoration: none;
  transition: font-size 0.3s;

  &:hover {
    font-size: 150%;
  }
`;
