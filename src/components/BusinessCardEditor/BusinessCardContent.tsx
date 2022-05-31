import {
  AiOutlineFacebook,
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineStar,
} from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import styled from "styled-components";
const Container = styled.div`
  padding: 1em;
  display: grid;
  grid-template-columns: 3fr 1fr;
`;
const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 5%;
  padding-bottom: 5%;
`;
const QRSection = styled.div`
  img {
    width: 100%;
  }
`;
const InfoItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  @media screen and (max-width: 500px) {
    font-size: 10px;
  }
`;
const InfoItemIconWrapper = styled.div`
  margin-right: 10px;
`;
const BusinessCardContent = () => {
  return (
    <Container>
      <InfoSection>
        <InfoItem>
          <InfoItemIconWrapper>
            <AiOutlineStar />
          </InfoItemIconWrapper>
          <p>Mr/Mme Nom Prenom</p>
        </InfoItem>
        <InfoItem>
          <InfoItemIconWrapper>
            <AiOutlinePhone />
          </InfoItemIconWrapper>
          <p>0557288711</p>
        </InfoItem>
        <InfoItem>
          <InfoItemIconWrapper>
            <AiOutlineMail />
          </InfoItemIconWrapper>
          <p>admin@aysseltech.com</p>
        </InfoItem>
        <InfoItem>
          <InfoItemIconWrapper>
            <AiOutlineFacebook />
          </InfoItemIconWrapper>
          <p>facebook.com/ayssel.tech</p>
        </InfoItem>
        <InfoItem>
          <InfoItemIconWrapper>
            <GoLocation />
          </InfoItemIconWrapper>
          <p>El Harrach, Alger</p>
        </InfoItem>
      </InfoSection>
      <QRSection>
        <img src="/images/qr.png" />
      </QRSection>
    </Container>
  );
};

export default BusinessCardContent;
