import React from "react";

import { SubHeading } from "../../components";
//import "./Header.css";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chassez la nouvelle saveur" />
      <h1 className="app__header-h1">La clé de la gastronomie</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat
        morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet
        tellus{" "}
      </p>
      <a href="#menu">
        <button type="button" className="custom__button">
          Notre Menu
        </button>
      </a>
    </div>

    <div className="app__wrapper_img">
      <img src="/images/welcome.png" alt="header_img" />
    </div>
  </div>
);

export default Header;
