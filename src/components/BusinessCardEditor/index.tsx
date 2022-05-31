import { useState } from "react";
import styled from "styled-components";
import Control from "./Control";
import Result from "./Result";
type Props = {
  id: string;
};
const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;
const BusinessCardEditor: React.FC<Props> = () => {
  const [color, setColor] = useState("#fff");
  return (
    <Container>
      <Control setColor={setColor} color={color} />
      <Result color={color} />
    </Container>
  );
};

export default BusinessCardEditor;
