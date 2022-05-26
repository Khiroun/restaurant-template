import styled from "styled-components";
const FooterHeading = styled.h1`
  font-family: var(--font-base);
  color: var(--color-white);
  font-weight: 400;
  letter-spacing: 0.04em;
  text-transform: capitalize;
  font-size: 32px;
  line-height: 41.6px;
  margin-bottom: 1rem;
  @media screen and (min-width: 2000px) {
    font-size: 51px;
    line-height: 61.6px;
  }
`;
export default FooterHeading;
