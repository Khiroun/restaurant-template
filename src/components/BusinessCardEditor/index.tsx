import { useState } from "react";
import styled from "styled-components";
import Control from "./Control";
import Result from "./Result";
type Props = {
  id: string;
};
const Container = styled.div<{ controlOpen: boolean }>`
  display: grid;
  grid-template-columns: ${(props) =>
    props.controlOpen ? "1fr 3fr" : "0fr 1fr"};
  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column-reverse;
  }
  transition: all 0.3s ease-in-out;
  margin-top: ${(props) => (props.controlOpen ? "0" : "50px")};
`;
const BusinessCardEditor: React.FC<Props> = () => {
  const [color, setColor] = useState("#fff");
  const [controlOpen, setControlOpen] = useState(false);
  return (
    <Container controlOpen={controlOpen}>
      <Control
        setColor={setColor}
        color={color}
        controlOpen={controlOpen}
        closeControl={() => setControlOpen(false)}
      />
      <Result color={color} openControl={() => setControlOpen(true)} />
    </Container>
  );
};

export default BusinessCardEditor;
