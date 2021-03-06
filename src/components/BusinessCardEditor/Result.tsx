import { useState } from "react";
import styled from "styled-components";
import BusinessCardContent from "./BusinessCardContent";

type InfoType = {
  name: string;
  phone: string;
  email: string;
  facebook: string;
  address: string;
};

type Props = {
  color: string;
  openControl: () => void;
  heading: string;
  setHeading: (heading: string) => void;
  tag: string;
  setTag: (tag: string) => void;
  setLogo: (logo: File | null) => void;
  info: InfoType;
  setInfo: (info: InfoType) => void;
};
const Result: React.FC<Props> = ({
  color,
  openControl,
  heading,
  setHeading,
  tag,
  setTag,
  setLogo,
  info,
  setInfo,
}) => {
  const [logoImage, setLogoImage] = useState(
    "/images/logo-white-transparent.webp"
  );

  return (
    <Container>
      <BusinessCard>
        <BusinessCardHeader color={color} onClick={openControl}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
              justifyContent: "space-between",
              padding: "10px 20px",
            }}
          >
            <Heading
              type="text"
              value={heading}
              onChange={(e) => setHeading(e.target.value)}
            />
            <Tag value={tag} onChange={(e) => setTag(e.target.value)} />
          </div>
          <div>
            <input
              type="file"
              accept="image/*"
              multiple={false}
              id="logoInput"
              style={{ display: "none" }}
              onChange={(e) => {
                const file = e.target.files && e.target.files[0];
                setLogo(file);
                if (file) {
                  const reader = new FileReader();
                  reader.readAsDataURL(file);
                  reader.onload = () => {
                    setLogoImage(reader.result as string);
                  };
                }
              }}
            />
            <label htmlFor="logoInput">
              <Logo src={logoImage} alt="logo" />
            </label>
          </div>
        </BusinessCardHeader>
        <BusinessCardContent info={info} setInfo={setInfo} />
      </BusinessCard>
    </Container>
  );
};

const Container = styled.div`
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const BusinessCard = styled.div`
  background: #fff;
  width: 60%;
  aspect-ratio: 1.8;
  border-radius: 5px;
  box-shadow: #9e9e9e 0px 0px 10px;
  @media screen and (max-width: 1000px) {
    width: 70%;
  }
  @media screen and (max-width: 650px) {
    width: 90%;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;
const BusinessCardHeader = styled.div<{ color: string }>`
  background: ${({ color }) => color};
  height: 30%;
  padding: 10px;
  padding-top: 15;
  padding-left: 20;
  position: relative;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 370px) {
    padding: 5px;
    height: 40%;
  }
`;
const Logo = styled.img`
  border-radius: 100%;
  //background-color: #fff;
  width: 70px;
  height: 70px;
  @media screen and (max-width: 500px) {
    width: 50px;
    height: 50px;
  }
`;
const Heading = styled.input`
  font-size: 17pt;
  margin: 0;
  margin-right: -50;
  color: #fff;
  background: transparent;
  border: transparent;
  width: 50%;
`;
const Tag = styled.input`
  margin: 0;
  font-size: 10pt;
  margin-right: -50px;
  color: #ccc;
  background: transparent;
  border: transparent;
  width: 50%;
`;

export default Result;
