import {
  AiOutlineFacebook,
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineStar,
} from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import styled from "styled-components";

type InfoType = {
  name: string;
  phone: string;
  email: string;
  facebook: string;
  address: string;
};

type Props = {
  info: InfoType;
  setInfo: (info: InfoType) => void;
};

const BusinessCardContent: React.FC<Props> = ({ info, setInfo }) => {
  return (
    <Container>
      <InfoSection>
        <InfoItem>
          <InfoItemIconWrapper>
            <AiOutlineStar />
          </InfoItemIconWrapper>
          <TextInput
            value={info.name}
            onChange={(e) => setInfo({ ...info, name: e.target.value })}
          />
        </InfoItem>
        <InfoItem>
          <InfoItemIconWrapper>
            <AiOutlinePhone />
          </InfoItemIconWrapper>
          <TextInput
            value={info.phone}
            onChange={(e) => setInfo({ ...info, phone: e.target.value })}
          />
        </InfoItem>
        <InfoItem>
          <InfoItemIconWrapper>
            <AiOutlineMail />
          </InfoItemIconWrapper>
          <TextInput
            value={info.email}
            onChange={(e) => setInfo({ ...info, email: e.target.value })}
          />
        </InfoItem>
        <InfoItem>
          <InfoItemIconWrapper>
            <AiOutlineFacebook />
          </InfoItemIconWrapper>
          <TextInput
            value={info.facebook}
            onChange={(e) => setInfo({ ...info, facebook: e.target.value })}
          />
        </InfoItem>
        <InfoItem>
          <InfoItemIconWrapper>
            <GoLocation />
          </InfoItemIconWrapper>
          <TextInput
            value={info.address}
            onChange={(e) => setInfo({ ...info, address: e.target.value })}
          />
        </InfoItem>
      </InfoSection>
      <QRSection>
        <img src="/images/qr.png" />
      </QRSection>
    </Container>
  );
};

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
export default BusinessCardContent;
