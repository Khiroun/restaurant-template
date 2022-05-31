import styled from "styled-components";
import Grid from "@mui/material/Grid";
import colors from "./colors";
import { useEffect } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import siteColors from "../../constants/colors";
const Container = styled.div<{ open: boolean }>`
  height: 100%;
  border-right: 2px solid #e6e6e6;
  transition: all 0.3s ease-in-out;
  transform: translateX(${(props) => (props.open ? 0 : "-100%")});
`;
const ColorWrapper = styled.div``;

const Title = styled.h2`
  margin-left: 1em;
  margin-bottom: 1em;
`;
const Palette = styled(Grid)``;

const CloseIcon = styled(AiFillCloseCircle)`
  position: absolute;
  top: 10px;
  right: 10px;
  color: ${siteColors.primary.dark};
`;

type Props = {
  setColor: (color: string) => void;
  color: string;
  controlOpen: boolean;
  closeControl: () => void;
};
const Control: React.FC<Props> = ({ setColor, controlOpen, closeControl }) => {
  useEffect(() => {
    setColor(colors[0]);
  }, []);
  return (
    <Container open={controlOpen}>
      <CloseIcon size={25} onClick={closeControl} />
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
