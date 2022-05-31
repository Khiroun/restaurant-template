import styled from "styled-components";
import Grid from "@mui/material/Grid";
import colors from "./colors";
import { useEffect } from "react";
const Container = styled.div`
  height: 100%;
  border-right: 2px solid #e6e6e6;
`;
const ColorWrapper = styled.div``;

const Title = styled.h2`
  margin-left: 1em;
  margin-bottom: 1em;
`;
const Palette = styled(Grid)``;
type Props = {
  setColor: (color: string) => void;
  color: string;
};
const Control: React.FC<Props> = ({ setColor }) => {
  useEffect(() => {
    setColor(colors[0]);
  }, []);
  return (
    <Container>
      <ColorWrapper>
        <Title>Couleur</Title>
        <Palette container spacing={1}>
          {colors.map((c) => (
            <ColorItem
              color={c}
              key={c}
              item
              md={2}
              xs={1}
              onClick={() => setColor(c)}
            />
          ))}
        </Palette>
      </ColorWrapper>
    </Container>
  );
};

const ColorItem = styled(Grid)<{ color: string }>`
  background-color: ${(props) => props.color};
  border-radius: 5px;
  aspect-ratio: 1;
  cursor: pointer;
  width: 90%;
`;

export default Control;
