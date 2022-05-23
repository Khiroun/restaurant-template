import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

import { FooterOverlay, Newsletter } from "../../components";
import { images } from "../../constants";
import {
  displayAddress,
  phoneNumbers,
  projectName,
} from "../../constants/siteConfig";
import "./Footer.css";

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Réservez maitenant</h1>
        <p className="p__opensans">{displayAddress}</p>
        {phoneNumbers.map((pn) => {
          return (
            <a key={pn} href={`tel:${pn}`}>
              <p className="p__opensans">{pn}</p>
            </a>
          );
        })}
      </div>

      <div className="app__footer-links_logo">
        {/*<img src={images.gericht} alt="footer_logo" />*/}
        <h2 className="app__footer-headtext">{projectName}</h2>
        <p className="p__opensans">
          {`"La meilleure façon de se retrouver est de se perdre au service des
          autres."`}
        </p>
        <img
          src={images.spoon}
          className="spoon__img"
          style={{ marginTop: 15 }}
        />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">{`Heures d'ouverture`}</h1>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">08:00 am - 12:00 am</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">07:00 am - 11:00 pm</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2021 {projectName}. All Rights reserved.</p>
    </div>
  </div>
);

export default Footer;
