import React from "react";
import styled from "styled-components";
import Grid from "@mui/material/Grid";
import colors from "../../constants/colors";
import { FaCog, FaEdit } from "react-icons/fa";
import {
  MdDomainVerification,
  MdEmail,
  MdMenuBook,
  MdScreenshot,
} from "react-icons/md";
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
const offerItems = [
  {
    icon: <FaCog />,
    title: "Création de site internet",
    description: "Créer le site internet pour être en contact avec vos clients",
  },
  {
    icon: <FaEdit />,
    title: "Personnalisation",
    description: "Personnaliser votre site internet pour vos besoins",
  },
  {
    icon: <MdScreenshot />,
    title: "Responsive",
    description: "Votre site internet sera responsive pour tous les supports",
  },
  {
    icon: <MdMenuBook />,
    title: "Digitalisez votre menu",
    description: "Créer votre menu en ligne pour faciliter votre travail",
  },
  {
    icon: <MdEmail />,
    title: "Boite mail professionnelle",
    description:
      "Nous vous proposons une boite mail professionnelle pour donner vie à votre restaurant",
  },
  {
    icon: <MdDomainVerification />,
    title: "Nom de domaine",
    description: "Votre nom de domaine sera gratuitement disponible",
  },
];
const Services = () => {
  return (
    <Section id="notre-offre">
      <Container>
        <SectionHeader>
          <SectionTitle>Notre offre</SectionTitle>
        </SectionHeader>
        <Grid container spacing={2}>
          {offerItems.map((item) => (
            <Grid item lg={4} md={6} sm={12} key={item.title}>
              <ServiceItem
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

const ServiceItemContainer = styled.div`
  visibility: visible;
  animation-delay: 0.2s;
  padding: 30px;
  border-radius: 4px;
  border: 1px solid #eaeaea;
  margin: 15px 0;
  transition: all 0.3s ease-in-out;
  animation-name: fadeInDown;
  animation-duration: 1s;
  animation-fill-mode: both;
  &:hover {
    background: transparent;
    box-shadow: 0px 10px 50px 0px rgb(84 110 122 / 35%);
  }
`;

const IconContainer = styled.div`
  color: ${colors.primary.dark};
  margin-bottom: 10px;
  font-size: 30px;
  line-height: 60px;
`;

type ServiceItemProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const ServiceItem: React.FC<ServiceItemProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <ServiceItemContainer>
      <IconContainer>{icon}</IconContainer>
      <h4>{title}</h4>
      <p>{description}</p>
    </ServiceItemContainer>
  );
};

export default Services;
