import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import SectionTitle from "./SectionTitle";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useState } from "react";
import DemoRequestModal from "./DemoRequestModal";
const TrySection = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <Box
      style={{
        backgroundImage: "url(/images/try_bg.svg)",
        backgroundRepeat: "no-repeat",
      }}
      padding="150px 0"
      minHeight="600px"
      id="tryUs"
    >
      <Container>
        <DemoRequestModal open={modalOpen} close={() => setModalOpen(false)} />
        <Grid container justifyContent="center" marginTop="3rem">
          <Grid item xs={6} sm={6} md={6}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <SectionTitle>Essayez vous-même</SectionTitle>
              <Typography
                variant="body1"
                color="textPrimary"
                textAlign="center"
                marginTop="1rem"
              >
                Réservez une démo ou inscrivez-vous dès maintenant!
                <br />
                Laissez-nous vous faire une démonstration de NewMenu pour votre
                restaurant !
              </Typography>
              <Box
                display="flex"
                flexWrap="nowrap"
                marginTop="3rem"
                justifyContent="center"
              >
                <Button variant="contained" onClick={() => setModalOpen(true)}>
                  Réserver une démonstration
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default TrySection;
