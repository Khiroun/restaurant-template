import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styled from "styled-components";
import Container from "@mui/material/Container";
import CircularProgress from "@mui/material/CircularProgress";
import { AiOutlineCloseCircle } from "react-icons/ai";
import SectionTitle from "./SectionTitle";
import { useState } from "react";
import emailjs from "@emailjs/browser";

type Props = {
  open: boolean;
  close: () => void;
};
const DemoRequestModal: React.FC<Props> = ({ open, close }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const send = async () => {
    setLoading(true);
    await emailjs.send(
      "service_59wrdaj",
      "template_9zqlxcc",
      {
        restaurantName: name,
        phone,
      },
      "ns3StVoj31Lur9960"
    );
    setLoading(false);
    close();
  };
  const nameError = name !== "" && name.length < 3;
  const phoneError = phone !== "" && phone.length < 10;
  return (
    <StyledModal open={open}>
      <ContentWrapper>
        <CloseButton onClick={close} size={25} />
        <SectionTitle>
          Remplissez le formulaire ci-dessous pour réserver une démonstration
        </SectionTitle>
        <Container
          style={{
            marginTop: "1rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <TextField
            label="Nom du restaurant"
            variant="filled"
            fullWidth
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
            error={nameError}
          />
          <TextField
            label="Numéro de téléphone"
            variant="filled"
            type="tel"
            margin="normal"
            fullWidth
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            error={phoneError}
          />
          <Button
            variant="contained"
            onClick={send}
            disabled={
              phoneError || nameError || phone === "" || name === "" || loading
            }
          >
            {loading ? <CircularProgress /> : "Envoyer"}
          </Button>
        </Container>
      </ContentWrapper>
    </StyledModal>
  );
};
const StyledModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ContentWrapper = styled(Container)`
  background-color: #fff;
  min-height: 60vh;
  padding: 1rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
const CloseButton = styled(AiOutlineCloseCircle)`
  position: absolute;
  top: 1rem;
  right: 1rem;
`;
export default DemoRequestModal;
