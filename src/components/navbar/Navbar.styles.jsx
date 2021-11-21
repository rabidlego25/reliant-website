import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  width: 100%;
  background: white;
  position: fixed;
  z-index: 100;
  opacity: ${({ opacity }) => opacity};

  .logo {
    height: 48px;
    margin-left: 2rem;
  }
`;

export const DivLeft = styled.div`
  margin-left: 2rem;
  width: 100%;
`;

export const DivRight = styled.div`
  margin-right: 2rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  width: 100%;

  .link-container {
    width: 75%;
    font-weight: bolder;
    display: flex;
    justify-content: space-around;

    .nav-link {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 45px;
      width: 80px;
      color: #13a71f;
      cursor: default;
      border-radius: 40%;
      transition: 0.3s;
      text-decoration: none;

      &:hover {
        color: white;
        background: #13a71f;
      }
    }
  }
`;

export const HeaderLink = styled.a`
  text-decoration: none;
`;
