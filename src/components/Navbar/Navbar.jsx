import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { projectName } from "../../constants/siteConfig";
import menuData from "../../constants/data/menuData";
import { AppNavbar, AppNavbarLinks, AppNavbarLogo } from "./styled";
import FooterHeading from "../FooterHeading";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <AppNavbar>
      <AppNavbarLogo>
        <FooterHeading>{projectName}</FooterHeading>
      </AppNavbarLogo>
      <AppNavbarLinks>
        {menuData.map((item) => {
          return (
            <li className="p__opensans" key={item.path}>
              <a href={item.path}>{item.name}</a>
            </li>
          );
        })}
      </AppNavbarLinks>

      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen_links">
              {menuData.map((item) => {
                return (
                  <li key={item.path}>
                    <a href={item.path} onClick={() => setToggleMenu(false)}>
                      {item.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </AppNavbar>
  );
};

export default Navbar;
