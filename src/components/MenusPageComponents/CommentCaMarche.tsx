import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import SectionTitle from "./SectionTitle";
import styled from "styled-components";
import Typography from "@mui/material/Typography";

const CommentCaMarche = () => {
  return (
    <Box marginTop="100px" marginBottom="200px">
      <Container>
        <Grid container>
          <Grid item md={12} lg={12} textAlign="center" marginBottom="3rem">
            <SectionTitle>Comment ça marche ?</SectionTitle>
          </Grid>
        </Grid>
        <Grid
          container
          marginTop="3rem"
          flexDirection="row"
          alignItems="center"
        >
          <Grid item md={6} lg={6}>
            <Box position="relative">
              <BoyImg src="https://newmenu.ch/images/landing/how__work_boy.svg" />
              <GirlImg src="https://newmenu.ch/images/landing/how__work_girl.svg" />
            </Box>
          </Grid>
          <Grid item md={6} lg={6}>
            <Box
              paddingLeft="100px"
              maxWidth="450px"
              flexDirection="column"
              display="flex"
            >
              <p>01.</p>
              <Typography variant="h2" marginBottom="0.5rem" fontSize="2rem">
                Inscrivez-vous dès maintenant
              </Typography>
              <Typography variant="body1">
                AysselMenu offre une inscription gratuite et un système fluide.
                Vérifiez-le vous-même en vous inscrivant dès maintenant.
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Step
          number="02."
          title="Téléchargez votre menu"
          description="Téléchargez et modifiez facilement votre menu dans le tableau de bord. Plus vous ajoutez des photos de plats attrayants, plus vous gagnez en glamour."
          textFirst
          renderImages={() => {
            return (
              <Box
                position="relative"
                style={{
                  backgroundPosition: "0px 100px",
                  transition: "all 2s ease 0s",
                  background: "url(/images/upload_bg.svg)",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain",
                  minHeight: "600px",
                  left: "-60px",
                }}
              >
                <UploadBoyImg src="https://newmenu.ch/images/landing/upload_boy.svg" />
                <UploadGirlImg src="https://newmenu.ch/images/landing/upload_girl.svg" />
              </Box>
            );
          }}
        />
        <Step
          number="03."
          title="Imprimez le Code QR"
          description="Obtenez le code QR généré automatiquement pour votre menu. Choisissez votre modèle préféré dans notre liste affichée et imprimez-le facilement."
          renderImages={() => {
            return <div></div>;
          }}
          style={{
            backgroundImage: "url(/images/printable__bg.svg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "right center",
            minHeight: "700px",
          }}
          textFirst
          contentStyle={{
            transform: "translateY(-35%)",
          }}
        />
        <Step
          number="04."
          title="Scannez pour voir"
          description="Les clients scannent le code QR et voient votre menu. On peut parcourir le menu avec des images de plats savoureux, sauvegarder ce qu’on souhaite et passer à la commande."
          textFirst
          renderImages={() => {
            return (
              <Box
                position="relative"
                style={{
                  backgroundPosition: "0px 100px",
                  transition: "all 2s ease 0s",

                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain",
                  minHeight: "600px",
                }}
              >
                <UploadBoyImg
                  src="https://newmenu.ch/images/landing/scan__phone.svg"
                  style={{
                    bottom: 0,
                    left: "30%",
                  }}
                />
              </Box>
            );
          }}
        />
      </Container>
    </Box>
  );
};

export default CommentCaMarche;
const BoyImg = styled.img`
  transform: translateY(0px);
  transition: all 1s ease 0s;
  max-width: 100%;
`;
const GirlImg = styled.img`
  top: 340px;
  transition: all 0.5s ease 0s;
  position: absolute;
  right: -20px;
  max-width: 100%;
`;

const UploadBoyImg = styled.img`
  bottom: -150px;
  transition: all 2s ease 0s;
  transform: scale(0.8);
  left: -130px;
  position: absolute;
  max-width: 100%;
`;

const UploadGirlImg = styled.img`
  bottom: -100px;
  transition: all 1s ease 0s;
  transform: scale(0.8);
  position: absolute;
  right: -50px;
  max-width: 100%;
`;

type StepProps = {
  number: string;
  title: string;
  description: string;
  renderImages: () => JSX.Element;
  textFirst?: boolean;
  style?: object;
  contentStyle?: object;
};

const Step: React.FC<StepProps> = ({
  number,
  title,
  description,
  renderImages,
  textFirst,
  style,
  contentStyle,
}) => {
  return (
    <Grid
      container
      marginTop="3rem"
      flexDirection={textFirst ? "row-reverse" : "row"}
      alignItems="center"
      style={style}
    >
      <Grid item md={6} lg={6}>
        {renderImages()}
      </Grid>
      <Grid item md={6} lg={6} style={contentStyle}>
        <Box
          paddingLeft="100px"
          maxWidth="450px"
          flexDirection="column"
          display="flex"
        >
          <p>{number}</p>
          <Typography
            variant="h2"
            marginBottom="0.5rem"
            fontSize="2rem"
            zIndex={1}
          >
            {title}
          </Typography>
          <Typography variant="body1">{description}</Typography>
        </Box>
      </Grid>
    </Grid>
  );
};
