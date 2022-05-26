import React from "react";

import { SubHeading } from "../../components";
//import "./Chef.css";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src="/images/chef.png" alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Mot du chef" />
      <h1 className="headtext__cormorant">En quoi nous croyons</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src="/images/quote.png" alt="quote_image" />
          <p className="p__opensans">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .
          </p>
        </div>
        <p className="p__opensans">
          {" "}
          auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit.
          Nulla scelerisque scelerisque congue ac consequat, aliquam molestie
          lectus eu. Congue iaculis integer curabitur semper sit nunc.{" "}
        </p>
      </div>

      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src="/images/sign.png" alt="sign_image" />
      </div>
    </div>
  </div>
);

export default Chef;
