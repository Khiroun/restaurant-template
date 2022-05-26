import React from "react";

import SubHeading from "../SubHeading/SubHeading";
//import "./Newsletter.css";

const Newsletter = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title="Offre spéciale" />
      <h1 className="headtext__cormorant">Pour 18 000 da seulement</h1>
      <p className="p__opensans">Créez le site idéal pour votre restaurant</p>
      <p className="p__opensans">{"offre valable jusqu'au 01/07/2022"}</p>
    </div>
    {/*<div className="app__newsletter-input flex__center">
      <input type="email" placeholder="Enter your email address" />
      <button type="button" className="custom__button">Subscribe</button>
    </div>*/}
  </div>
);

export default Newsletter;
