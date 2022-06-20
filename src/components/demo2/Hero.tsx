import Grid from "@mui/material/Grid";
import styled from "styled-components";
function Hero() {
  return (
    <Wrapper>
      <ImgBg>
        <Container>
          <Grid container spacing={3}>
            <Grid item md={1}></Grid>
            <Row item md={10}>
              <Heading>Bienvenue sur le site de votre restaurant</Heading>
              <p></p>
            </Row>
          </Grid>
        </Container>
      </ImgBg>
    </Wrapper>
  );
}
const Heading = styled.h1`
  font-size: 70px;
  font-weight: 900;
  line-height: 1.2;
  color: white;
  margin-bottom: 3rem;
  z-index: 1;
`;
const Container = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
`;
const Row = styled(Grid)`
  display: flex;
  min-height: 700px;
  height: 100vh;
  text-align: center;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  &:before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #000;
    opacity: 0.2;
  }
`;
const ImgBg = styled.div`
  background-image: url("https://preview.colorlib.com/theme/meal/images/xslider-1.jpg.pagespeed.ic.grltCgRAOJ.webp");
  background-position: 50% -25px;
  min-height: 700px;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
`;
export default Hero;
