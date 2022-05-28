import React from "react";
import styled from "styled-components";
import Grid from "@mui/material/Grid";
import colors from "../../constants/colors";
const StyledHero = styled.header`
  background: url(/images/hero.jpg) fixed no-repeat;
  background-size: cover;
  color: #fff;
  overflow: hidden;
  position: relative;
  min-height: 100vh;
`;
const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  background: rgba(0, 0, 0, 0.8);
  opacity: 0.8;
`;
const Navigation = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99;
  transition: all 0.3s ease-out 0s;
`;
const Container = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  z-index: 99;
`;
const Navbar = styled.nav`
  padding: 15px 0;
  flex-flow: row nowrap;
  justify-content: flex-start;
  position: relative;
  display: flex;
  align-items: center;
`;
const NavbarBrand = styled.a`
  display: inline-block;
  padding-top: 0.3125rem;
  padding-bottom: 0.3125rem;
  margin-right: 1rem;
  font-size: 1.25rem;
  line-height: inherit;
  white-space: nowrap;
  color: ${colors.primary.light};
  transition: all 0.3s ease-in-out;
  text-decoration: none;
  background-color: transparent;
  img {
    width: 3.5em;
    @media (max-width: 768px) {
      width: 2.5em;
    }
    @media (max-width: 576px) {
      width: 2em;
    }
  }
`;
const NavItemsContainer = styled.div`
  display: flex !important;
  flex-basis: auto;
  flex-grow: 1;
  align-items: center;
`;
const NavItems = styled.ul`
  flex-direction: row;
  margin-left: auto !important;
  display: flex;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
  margin: 0;
  padding: 0;
`;
const NavItem = styled.li`
  list-style: none;
  a {
    color: #fff;
    font-size: 14px;
    padding: 5px 0px;
    margin-left: 30px;
    position: relative;
    transition: all 0.3s ease-in-out;
    text-decoration: none;
    background-color: transparent;
    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      transition: all 0.3s ease-out 0s;
      background-color: ${colors.primary.light};
    }
    &:hover {
      color: ${colors.primary.light};
    }
    &:hover::before {
      width: 60%;
    }
  }
`;
const Row = styled(Grid)`
  justify-content: center;
`;
const Col = styled(Grid)``;
const ContentsTextCenter = styled.div`
  padding: 160px 0 140px;
  text-align: center !important;
  h2 {
    color: #fff;
    font-size: 42px;
    margin-bottom: 30px;
    font-weight: 700;
    font-family: var(--font-base);
    line-height: 1.2;
  }
  p {
    font-weight: 400;
    font-family: var(--font-alt);
  }
`;
const Action = styled.div`
  margin-top: 30px;
`;
const DemoButton = styled.a`
  margin: 10px;
  text-transform: uppercase;
  cursor: pointer;
  border-style: solid;
  border-width: 2px;
  background-color: transparent;
  border-color: #fff;
  color: #fff;
  font-size: 14px;
  padding: 10px 30px;
  border-radius: 30px;
  font-weight: 400;
  transition: all 0.3s ease-in-out;
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  line-height: 1.5;
  text-decoration: none;
`;

const ContactButton = styled.a`
  margin: 10px;
  text-transform: uppercase;
  cursor: pointer;
  background-color: ${colors.primary.dark};
  overflow: hidden;
  position: relative;
  z-index: 1;
  padding: 12px 32px;
  border-radius: 30px;
  font-size: 14px;
  font-weight: 400;
  color: #fff;
  transition: all 0.3s ease-in-out;
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  line-height: 1.5;
  text-decoration: none;
`;
const Hero = () => {
  return (
    <StyledHero>
      <Navigation>
        <Container>
          <Navbar>
            <NavbarBrand href="/">
              <img src="/images/logo-white-transparent.png" />
            </NavbarBrand>
            <NavItemsContainer>
              <NavItems>
                <NavItem>
                  <a href="#notre-offre">Notre offre</a>
                </NavItem>
                <NavItem>
                  <a href="/demo">Voir la démo</a>
                </NavItem>
                <NavItem>
                  <a href="#contact">Contact</a>
                </NavItem>
              </NavItems>
            </NavItemsContainer>
          </Navbar>
        </Container>
      </Navigation>
      <Container
        style={{
          position: "absolute",
          zIndex: 98,
        }}
      >
        <Row container>
          <Col item xl={8} lg={9} md={12} sm={12}>
            <ContentsTextCenter>
              <h2>Créez le site web idéal pour votre restaurant</h2>
              <p>
                Nous allons vous créer un site web personnalisé qui simplifie
                vos offres et augmente votre visibilité en ligne. Avec une
                adresse email professionnelle, Et un nom de domaine gratuit
                pendant un an!!.
              </p>
              <Action>
                <ContactButton href="/">Nous contacter</ContactButton>
                <DemoButton href="/demo">Voir la démo</DemoButton>
              </Action>
            </ContentsTextCenter>
          </Col>
        </Row>
      </Container>
      <Overlay />
    </StyledHero>
  );
};

export default Hero;
