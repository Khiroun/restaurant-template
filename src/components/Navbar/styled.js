import styled from "styled-components";
export const AppNavbar = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--color-black);

  padding: 1rem 2rem;
  @media screen and (max-width: 650px) {
    padding: 1rem;
  }
`;
export const AppNavbarLogo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  img {
    width: 150px;
  }
  @media screen and (min-width: 2000px) {
    img {
      width: 210px;
    }
  }
  @media screen and (max-width: 650px) {
    img {
      width: 110px;
    }
  }
`;
export const AppNavbarLinks = styled.ul`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  li {
    margin: 0 1rem;
    cursor: pointer;
  }
  li:hover {
    color: var(--color-grey);
  }
  @media screen and (max-width: 1150px) {
    display: none;
  }
`;
