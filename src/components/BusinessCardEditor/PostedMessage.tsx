import { Button } from "@mui/material";
import Link from "next/link";
import styled from "styled-components";
const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
const PostedMessage = () => {
  return (
    <Container>
      <img src="/images/sent.svg" />
      <h1>{"Votre message a bien été envoyé"}</h1>
      <Link href="/">
        <Button variant="contained" size="large" color="primary">
          {"Aller à l'accueil"}
        </Button>
      </Link>
    </Container>
  );
};

export default PostedMessage;
