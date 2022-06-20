import styled from "styled-components";
import FontStyles from "./fontStyles";
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 2rem;
`;
const BussinessCard = styled.div`
  width: 70%;
  aspect-ratio: 1.8;
`;
const BusinessCardHeader = styled.div`
  height: 50%;
  background-color: black;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BusinessCardContent = styled.div`
  background-color: green;
  height: 50%;
`;
const Logo = styled.img`
  height: 60%;
  position: absolute;
  top: 10%;
`;
const RestaurantName = styled.h1`
  height: 40%;
  color: #fff;
  position: absolute;
  bottom: 10%;
  display: flex;
  align-items: end;
  font-family: "FuturaLT";
  text-transform: uppercase;
`;
const Template2 = () => {
  return (
    <Container>
      <FontStyles />
      <BussinessCard>
        <BusinessCardHeader>
          <Logo src="/images/logo-white-transparent.png" />
          <RestaurantName>Restaurant la perle</RestaurantName>
        </BusinessCardHeader>
        <BusinessCardContent></BusinessCardContent>
      </BussinessCard>
    </Container>
  );
};

export default Template2;
