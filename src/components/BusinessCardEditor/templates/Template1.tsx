import Button from "@mui/material/Button";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import Control from "../Control";
import Result from "../Result";
import LoadingBackDrop from "../LoadingBackDrop";
import PostedMessage from "../PostedMessage";

const Template1 = () => {
  const initialHeading = "Entreprise";
  const initialTag = "Gérant";
  const [color, setColor] = useState("#fff");
  const [controlOpen, setControlOpen] = useState(false);
  const [heading, setHeading] = useState(initialHeading);
  const [tag, setTag] = useState(initialTag);
  const [logo, setLogo] = useState<File | null>(null);
  const [info, setInfo] = useState({
    name: "Mr/Mme Nom Prenom",
    phone: "0557288711",
    email: "admin@aysseltech.com",
    facebook: "facebook.com/ayssel.tech",
    address: "El Harrach, Alger",
  });
  const [loading, setLoading] = useState(false);
  const [posted, setPosted] = useState(false);
  const valid =
    logo !== null && heading !== initialHeading && tag !== initialTag;
  const submit = async () => {
    setLoading(true);
    await emailjs.send(
      "service_59wrdaj",
      "template_036dnhn",
      {
        color,
        heading,
        tag,
        logoURL: "Mazal",
        info: JSON.stringify(info),
        bc_id: "1",
      },
      "ns3StVoj31Lur9960"
    );
    setLoading(false);
    setPosted(true);
  };
  if (loading) return <LoadingBackDrop />;
  if (posted) return <PostedMessage />;
  return (
    <Container controlOpen={controlOpen}>
      <Control
        setColor={setColor}
        color={color}
        controlOpen={controlOpen}
        closeControl={() => setControlOpen(false)}
      />
      <Result
        color={color}
        openControl={() => setControlOpen(true)}
        heading={heading}
        setHeading={setHeading}
        tag={tag}
        setTag={setTag}
        setLogo={setLogo}
        info={info}
        setInfo={setInfo}
      />
      <SubmitButton
        variant="contained"
        color="primary"
        onClick={submit}
        disabled={!valid}
      >
        Valider
      </SubmitButton>
    </Container>
  );
};

const Container = styled.div<{ controlOpen: boolean }>`
  display: grid;
  grid-template-columns: ${(props) =>
    props.controlOpen ? "1fr 3fr" : "0fr 1fr"};
  transition: all 0.3s ease-in-out;
  margin-top: ${(props) => (props.controlOpen ? "0" : "50px")};
  position: relative;
  padding-bottom: 2rem;
  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;
const SubmitButton = styled(Button)`
  position: absolute;
  right: 2rem;
  bottom: 0;
`;

export default Template1;
