import React from "react";
import styled from "styled-components";
import Head from "next/head";
import Typography from "@mui/material/Typography";
import colors from "../src/constants/colors";
import Create1 from "../src/components/Create1";

const Container = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.background};
`;
const create1 = () => {
  return (
    <Container>
      <Head>
        <title>Personalisez votre site | Ayssel tech</title>
      </Head>
      <Typography
        variant="h1"
        color={colors.primary.dark}
        textAlign="center"
        marginY="1em"
      >
        Personalisez votre site
      </Typography>
      <Create1 />
    </Container>
  );
};

export default create1;
