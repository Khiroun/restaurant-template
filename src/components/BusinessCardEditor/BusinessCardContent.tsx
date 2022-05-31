import { useState } from "react";
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
const TextInput = styled.input`
  border: none;
`;
const BusinessCardContent = () => {
  const [name, setName] = useState("Mr/Mme Nom Prenom");
  const [phone, setPhone] = useState("0557288711");
  const [email, setEmail] = useState("admin@aysseltech.com");
  const [facebook, setFacebook] = useState("facebook.com/ayssel.tech");
  const [address, setAddress] = useState("El Harrach, Alger");
  return (
    <Container>
      <InfoSection>
        <InfoItem>
          <InfoItemIconWrapper>
            <AiOutlineStar />
          </InfoItemIconWrapper>
          <TextInput value={name} onChange={(e) => setName(e.target.value)} />
        </InfoItem>
        <InfoItem>
          <InfoItemIconWrapper>
            <AiOutlinePhone />
          </InfoItemIconWrapper>
          <TextInput value={phone} onChange={(e) => setPhone(e.target.value)} />
        </InfoItem>
        <InfoItem>
          <InfoItemIconWrapper>
            <AiOutlineMail />
          </InfoItemIconWrapper>
          <TextInput value={email} onChange={(e) => setEmail(e.target.value)} />
        </InfoItem>
        <InfoItem>
          <InfoItemIconWrapper>
            <AiOutlineFacebook />
          </InfoItemIconWrapper>
          <TextInput
            value={facebook}
            onChange={(e) => setFacebook(e.target.value)}
          />
        </InfoItem>
        <InfoItem>
          <InfoItemIconWrapper>
            <GoLocation />
          </InfoItemIconWrapper>
          <TextInput
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </InfoItem>
      </InfoSection>
      <QRSection>
        <img src="/images/qr.png" />
      </QRSection>
    </Container>
  );
};

export default BusinessCardContent;
