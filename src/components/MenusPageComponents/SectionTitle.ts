import styled from "styled-components";
import colors from "../../constants/colors";

const SectionTitle = styled.h2`
  font-size: 30px;
  width: max-content;
  max-width: 100%;
  position: relative;
  margin: 0 auto;
  display: inline;
  z-index: 2;
  color: ${colors.secondary.main};
  font-weight: 500;
  line-height: 1.2;
  font-family: var(--font-base);
  &::before {
    content: "";
    position: absolute;
    left: -20px;
    top: -12px;
    height: 70px;
    width: 70px;
    background: ${colors.primary.light};
    border-radius: 50%;
    z-index: -1;
  }
`;
export default SectionTitle;
