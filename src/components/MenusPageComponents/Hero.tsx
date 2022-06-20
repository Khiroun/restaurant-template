import styled from "styled-components";
import Grid from "@mui/material/Grid";
import colors from "../../constants/colors";
const Hero = () => {
  return (
    <Container>
      <Background />
      <Content>
        <Grid container style={{ alignItems: "center" }}>
          <ContentLeft lg={6} md={6} item>
            <HeaderPhone href="/" />
          </ContentLeft>
          <ContentRight lg={6} md={6} item>
            <Title>
              Créez un <b>menu QR sans contact</b> pour votre restaurant
            </Title>
            <Action>
              <ContactButton href="#contact">Réserver une démo</ContactButton>
            </Action>
          </ContentRight>
          <BigTitle lg={12} item>
            Nouveaux temps, nouveau menu
          </BigTitle>
        </Grid>
      </Content>
    </Container>
  );
};

export default Hero;
const Container = styled.div`
  background-size: 214.2px;
  background-position-y: 200px;
  transition: all 1.5s ease 0s;
  padding: 50px 0;
  background-image: url(/images/header_foods.svg);
  background-repeat: no-repeat;
  background-position: left 200px;
  height: 100%;
  position: relative;
`;

const Background = styled.div`
  background-image: url(/images/fruit__bg.jpg);
  background-repeat: no-repeat;
  background-position: right center;
  position: absolute;
  width: 100%;
  height: calc(100% + 100px);
  top: -100px;
  right: 0;
  z-index: -1;
`;
const Content = styled.div`
  height: 100%;
  position: relative;
  max-width: 960px;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
`;
const ContentLeft = styled(Grid)`
  justify-content: flex-end;
  display: flex;
`;
const ContentRight = styled(Grid)`
  margin-top: -3rem;
  height: 100%;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;
const BigTitle = styled(Grid)`
  margin-top: 50px;
  font-size: 2.5rem;
  text-align: center;
  text-transform: uppercase;
  color: ${colors.primary.main};
  margin: auto;
  font-family: var(--font-base);
`;
const HeaderPhone = styled.a`
  margin-top: 100px;
  transition: all 1.3s ease 0s;
  background-image: url(/images/header_phone.png);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: left;
  width: 300px;
  height: 600px;
`;
const Title = styled.h1`
  font-size: 2em;
  width: max-content;
  max-width: 100%;
  position: relative;
  margin: 0 auto;
  display: inline;
  z-index: 2;
  color: ${colors.primary.dark};
  font-family: var(--font-base);
  b {
    font-size: 1.3em;
  }
`;
const Action = styled.div`
  margin-top: 30px;
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
  box-shadow: 0 0 1px 1px ${colors.primary.light};
`;
