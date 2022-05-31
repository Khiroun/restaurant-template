import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import colors from "../../constants/colors";
import navbarData from "./navData";

const StyledNavbar = styled.nav`
  padding: 15px 0;
  flex-flow: row nowrap;
  justify-content: flex-start;
  position: relative;
  display: flex;
  align-items: center;
`;

const NavbarBrand = styled.a`
  display: inline-block;
  padding-top: 0.3125rem;
  padding-bottom: 0.3125rem;
  margin-right: 1rem;
  font-size: 1.25rem;
  line-height: inherit;
  white-space: nowrap;
  color: ${colors.primary.light};
  transition: all 0.3s ease-in-out;
  text-decoration: none;
  background-color: transparent;
`;
const NavItemsContainer = styled.div`
  display: flex;
  flex-basis: auto;
  flex-grow: 1;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const NavItems = styled.ul`
  flex-direction: row;
  margin-left: auto !important;
  display: flex;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
  margin: 0;
  padding: 0;
`;
const NavItem = styled.li`
  list-style: none;
  a {
    color: #fff;
    font-size: 14px;
    padding: 5px 0px;
    margin-left: 30px;
    position: relative;
    transition: all 0.3s ease-in-out;
    text-decoration: none;
    background-color: transparent;
    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      transition: all 0.3s ease-out 0s;
      background-color: ${colors.primary.light};
    }
    &:hover {
      color: ${colors.primary.light};
    }
    &:hover::before {
      width: 60%;
    }
  }
`;
const DropdownButton = styled.button`
  position: absolute;
  right: 0;
  color: #fff;
  background-color: transparent;
  border: transparent;
  outline: none;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
const HamburgerIcon = styled(FaBars)`
  width: 30px;
  height: 30px;
`;
const DropdownMenu = styled.div<{ isOpen: boolean }>`
  position: fixed;
  left: 0;
  right: 0;
  top: ${(props) => (props.isOpen ? "0" : "-100vh")};
  height: 100vh;
  background-color: ${colors.primary.dark};
  z-index: 100;
  transition: all 0.3s ease-in-out;
`;
const CloseIcon = styled(AiOutlineClose)`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
`;
const DropdownNav = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  height: 100%;
`;
const DropdownNavItem = styled.li`
  font-size: 24px;
  margin-bottom: 1rem;
  list-style: none;
`;
type Props = {
  style?: React.CSSProperties;
  brandImageSize?: string;
  dropdownButtonStyle?: React.CSSProperties;
};
const Navbar: React.FC<Props> = ({
  style,
  brandImageSize,
  dropdownButtonStyle,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((isOpen) => !isOpen);
  return (
    <StyledNavbar style={style}>
      <NavbarBrand href="/">
        <img
          src="/images/logo-white-transparent.webp"
          alt="logo"
          width={brandImageSize || "100px"}
          height={brandImageSize || "100px"}
        />
      </NavbarBrand>
      <NavItemsContainer>
        <NavItems>
          {navbarData.map((item) => (
            <NavItem key={item.name}>
              <Link href={item.href}>{item.name}</Link>
            </NavItem>
          ))}
        </NavItems>
      </NavItemsContainer>
      <DropdownButton onClick={toggle} style={dropdownButtonStyle}>
        <HamburgerIcon />
      </DropdownButton>
      {
        <DropdownMenu isOpen={isOpen}>
          <CloseIcon onClick={toggle} />
          <DropdownNav>
            {navbarData.map((item) => (
              <DropdownNavItem onClick={toggle} key={item.name}>
                <Link href={item.href}>{item.name}</Link>
              </DropdownNavItem>
            ))}
          </DropdownNav>
        </DropdownMenu>
      }
    </StyledNavbar>
  );
};

export default Navbar;
