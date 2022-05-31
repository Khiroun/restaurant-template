import React from "react";
import styled from "styled-components";
const Container = styled.section`
  width: 70%;
  margin: auto;
  margin-top: 2em;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  min-height: 40vh;
  img {
    position: absolute;
  }
`;
const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  background: rgba(0, 0, 0, 0.8);
  opacity: 0.8;
`;
const Title = styled.h1`
  color: #fff;
  text-align: center;
  z-index: 99;
  font-size: 42px;
  margin-bottom: 30px;
  font-weight: 700;
  font-family: var(--font-base);
  line-height: 1.2;
`;
const BussinessCardHeader = () => {
  return (
    <Container>
      <Title>Créez & personalisez votre carte de visite gratuitement</Title>
      <img src="/images/bussiness-card-header.webp" alt="" />
      <Overlay />
    </Container>
  );
};

export default BussinessCardHeader;
