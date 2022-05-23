import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { projectName } from "../../constants/siteConfig";
import menuData from "../../constants/data/menuData";
import "./Navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        {/*<img src={images.gericht} alt="app__logo" />*/}
        <h1 className="app__footer-headtext">{projectName}</h1>
      </div>
      <ul className="app__navbar-links">
        {menuData.map((item) => {
          return (
            <li className="p__opensans" key={item.path}>
              <a href={item.path}>{item.name}</a>
            </li>
          );
        })}
      </ul>
      {/*<div className="app__navbar-login">
        <a href="#login" className="p__opensans">
          Log In / Registration
        </a>
        <div />
        <a href="/" className="p__opensans">
          Book Table
        </a>
      </div>*/}
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
    </nav>
  );
};

export default Navbar;
