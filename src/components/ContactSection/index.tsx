import { Grid } from "@mui/material";
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { IoIosMailUnread } from "react-icons/io";
import { BsFillTelephoneFill, BsWhatsapp } from "react-icons/bs";
import styled from "styled-components";
import colors from "../../constants/colors";
import Image from "next/image";
const Section = styled.section`
  position: relative;
  background: #f9f9f9;
  padding: 80px 0;
  display: block;
`;
const Container = styled.div`
  max-width: 720px;
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
const Content = styled(Grid)`
  padding: 2em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 17px;
  svg {
    color: ${colors.primary.dark};
    margin-right: 10px;
  }
  a {
  }
`;
const ImageSection = styled(Grid)`
  position: relative;

  img {
    object-fit: cover;
  }
`;
const ContactSection = () => {
  return (
    <Section id="contact">
      <Container>
        <SectionHeader>
          <SectionTitle>Nous contacter</SectionTitle>
        </SectionHeader>
        <Grid container spacing={3}>
          <Content item xs={12} sm={6}>
            <a href="https://www.instagram.com/ayssel.tech/">
              <FaInstagram size={25} />
              instagram.com/ayssel.tech
            </a>
            <a href="mailto:admin@aysseltech.com">
              <IoIosMailUnread size={25} /> admin@aysseltech.com
            </a>
            <a href="tel:0557288711">
              <BsFillTelephoneFill size={25} /> 0557288711
            </a>
            <a href="https://wa.me/+213557288711">
              <BsWhatsapp size={25} /> 0557288711
            </a>
          </Content>
          <ImageSection item xs={12} sm={6}>
            <Image src="/images/findus.png" layout="fill" alt="" />
          </ImageSection>
        </Grid>
      </Container>
    </Section>
  );
};

export default ContactSection;
