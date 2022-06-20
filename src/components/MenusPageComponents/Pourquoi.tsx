import styled from "styled-components";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import FontStyles from "./fontStyles";
import colors from "../../constants/colors";
import SectionTitle from "./SectionTitle";

const Pourquoi = () => {
  return (
    <Container>
      <FontStyles />
      <ChefLeft>
        <ChefLeftImage src="/images/cheaf__left.svg" />
        <p>
          Pour
          <br />
          le restaurant
        </p>
      </ChefLeft>
      <Content>
        <Grid container>
          <TitleContainer
            item
            lg={12}
            md={12}
            textAlign="center"
            marginBottom="3rem"
          >
            <SectionTitle>Pourquoi AysselMenu</SectionTitle>
          </TitleContainer>
        </Grid>
        <WhyUsPoints container>
          <Grid item lg={6} md={6}>
            <Box alignItems="flex-end" display="flex">
              <Box display="flex" flexDirection="column">
                <WhyUsPoint
                  icon="/images/no-download.svg"
                  text="Pas d’application nécessaire"
                  color={colors.primary.light}
                />
                <WhyUsPoint
                  icon="/images/find.svg"
                  text="Facile à chercher, à trouver et à commander"
                  color={colors.primary.light}
                />
              </Box>
              <Box paddingLeft={0} flexDirection="column" display="flex">
                <WhyUsPoint
                  icon="/images/edit.svg"
                  text="Mise à jour du menu illimitée"
                  color={colors.secondary.light}
                />
                <WhyUsPoint
                  icon="/images/menu.svg"
                  text="Menu détaillé"
                  color={colors.secondary.light}
                />
                <WhyUsPoint
                  icon="/images/time-saving.svg"
                  text="Gain de temps"
                  color={colors.primary.light}
                />
                <WhyUsPoint
                  icon="/images/multilangual.svg"
                  text="Menu multilingue"
                  color={colors.primary.light}
                />
                <WhyUsPoint
                  icon="/images/available.svg"
                  text="Disponible 24 /7"
                  color={colors.primary.light}
                />
              </Box>
            </Box>
          </Grid>
          <Grid item lg={6} md={6}>
            <WhyUsPoint
              icon="/images/eco.svg"
              text="Ecologique et économique"
              color={colors.secondary.light}
            />
            <WhyUsPoint
              icon="/images/digital-menu.svg"
              text="Une solution innovante"
              color={colors.secondary.light}
            />
            <WhyUsPoint
              icon="/images/higeinic.svg"
              text="Hygiénique et sûr"
              color={colors.secondary.light}
            />
          </Grid>
        </WhyUsPoints>
      </Content>
      <CustumerRight>
        <img src="https://newmenu.ch/images/landing/customer__right.svg" />
        <p>
          Pour
          <br />
          le client
        </p>
      </CustumerRight>
    </Container>
  );
};

export default Pourquoi;
const Container = styled.section`
  position: relative;
  min-height: 800px;
  margin-top: 70px;
`;
const ChefLeft = styled.div`
  width: 240px;
  position: absolute;
  left: 0;
  top: 150px;
  z-index: -1;
  p {
    font-size: 2rem;
    top: 20px;
    line-height: 1;
    position: absolute;
    left: 30px;
    font-family: "Fredericka the Great", cursive;
  }
`;
const Content = styled.div`
  max-width: 960px;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
`;
const CustumerRight = styled.div`
  width: 400px;
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: -1;
  img {
    max-width: 100%;
  }
  p {
    font-size: 2rem;
    top: 20px;
    line-height: 1;
    position: absolute;
    left: 30px;
    font-family: "Fredericka the Great", cursive;
  }
`;
const ChefLeftImage = styled.img`
  max-width: 100%;
  vertical-align: middle;
  border-style: none;
`;
const WhyUsPoints = styled(Grid)`
  margin-top: 100px;
`;
const TitleContainer = styled(Grid)``;

const WhyUsPointContainer = styled.div`
  margin-bottom: 50px;
  align-items: center;
  display: flex;
  p {
    margin-left: 10px;
  }
`;
const WhyUsPointIcon = styled.div<{ bg: string }>`
  background: ${(props) => props.bg};
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 6px 6px 25px rgb(0 0 0 / 20%),
    inset -3px -3px 10px rgb(0 0 0 / 16%);
  border-radius: 50%;
  width: 70px;
  min-width: 70px;
  height: 70px;
  img {
    width: 40px;
    height: 40px;
    object-fit: contain;
  }
`;

type WhyUsPointProps = {
  icon: string;
  text: string;
  color: string;
};
const WhyUsPoint: React.FC<WhyUsPointProps> = ({ icon, text, color }) => {
  return (
    <WhyUsPointContainer>
      <WhyUsPointIcon bg={color}>
        <img src={icon} />
      </WhyUsPointIcon>
      <p>{text}</p>
    </WhyUsPointContainer>
  );
};
