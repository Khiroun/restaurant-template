import React from "react";
import styled from "styled-components";
import Grid from "@mui/material/Grid";
import colors from "../../constants/colors";
import modelsData from "./modelsData";
import ModelItem from "./ModelItem";

const Section = styled.section`
  padding: 80px 0;
  display: block;
`;
const Container = styled.div`
  max-width: 960px;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
`;
const SectionHeader = styled.div`
  color: #fff;
  margin-bottom: 40px;
  text-align: center;
  position: relative;
`;
const SectionTitle = styled.h2`
  font-size: 36px;
  margin-bottom: 20px;
  text-transform: uppercase;
  font-family: var(--font-base);
  font-weight: 700;
  color: #263238;
  position: relative;
  line-height: 1.2;
  margin-top: 0;
  &:before {
    background: ${colors.primary.dark};
    content: "";
    position: absolute;
    bottom: -8px;
    width: 80px;
    height: 2px;
    transition: 0.3s;
  }
`;
const BusinessCardContent = () => {
  return (
    <Section id="notre-offre">
      <Container>
        <SectionHeader>
          <SectionTitle>Choisissez un modèle</SectionTitle>
        </SectionHeader>
        <Grid container spacing={2}>
          {modelsData.map((item) => (
            <Grid item lg={4} md={6} sm={12} key={item.id}>
              <ModelItem image={item.image} id={item.id} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default BusinessCardContent;
