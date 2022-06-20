import { useEffect, useState } from "react";
import styled from "styled-components";
import Grid from "@mui/material/Grid";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineCloseSquare } from "react-icons/ai";

type Props = {
  menuOpen: boolean;
  toggle: () => void;
};

const Header: React.FC<Props> = ({ menuOpen, toggle }) => {
  const [scrolled, setScrolled] = useState(false);
  const [awake, setAwake] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      const scrollPosition = window.scrollY;
      console.log(scrollPosition);
      if (scrollPosition < 100) {
        setScrolled(false);
        setAwake(false);
      } else if (scrollPosition > 100 && scrollPosition < 200) {
        setScrolled(true);
        setAwake(false);
      } else if (scrollPosition > 200) {
        setScrolled(true);
        setAwake(true);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return (
    <Container scrolled={scrolled} awake={awake}>
      <Grid container spacing={3}>
        <Grid item md={3}></Grid>
        <LogoWrapper item md={6}>
          <SiteLogo href="/demo2">A</SiteLogo>
        </LogoWrapper>
        <Grid item md={3}>
          <NavToggle onClick={toggle}>
            <OpenIcon size={30} open={menuOpen} />
            <CloseIcon size={30} open={menuOpen} />
          </NavToggle>
        </Grid>
      </Grid>
    </Container>
  );
};
type ContainerProps = {
  scrolled: boolean;
  awake: boolean;
};
const Container = styled.header<ContainerProps>`
  padding: ${(props) => (props.scrolled ? "1em 30px" : "3em 30px")};
  position: ${(props) => (props.scrolled ? "fixed" : "absolute")};
  background: ${(props) => (props.scrolled ? "white" : "transparent")};
  transition: ${(props) => {
    if (props.scrolled && !props.awake) {
      return "0s all ease";
    }
    if (props.awake) {
      return " 0.3s all ease";
    }
  }};
  transform: ${(props) => {
    if (props.scrolled && !props.awake) {
      return "translateY(-100%)";
    }
    if (props.awake) {
      return "translateY(0%)";
    }
  }};
  top: 0;
  z-index: 900;
  width: 100%;
  //awake
`;
const OpenIcon = styled(GiHamburgerMenu)<{ open: boolean }>`
  display: ${(props) => (props.open ? "none" : "block")};
`;

const CloseIcon = styled(AiOutlineCloseSquare)<{ open: boolean }>`
  display: ${(props) => (props.open ? "block" : "none")};
`;
const LogoWrapper = styled(Grid)`
  position: relative;
  z-index: 1021;
  text-align: center;
`;
const SiteLogo = styled.a`
  line-height: 0;
  padding: 2px 10px;
  border: 2px solid #000;
  color: #000;
  font-size: 30px;
  font-weight: bold;
`;
const NavToggle = styled.div`
  width: 30px;
  height: 30px;
  cursor: pointer;
  position: relative;
  z-index: 109;
  display: block;
  float: right;
  right: 0;
  top: -10px;
`;
export default Header;
