import React from "react";
import styled from "styled-components";
import Grid from "@mui/material/Grid";
import colors from "../../constants/colors";
import Navbar from "./Navbar";
const StyledHero = styled.header`
  background: url(/images/hero.avif) fixed no-repeat;
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
          <Navbar />
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
                <ContactButton href="#contact">Nous contacter</ContactButton>
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
