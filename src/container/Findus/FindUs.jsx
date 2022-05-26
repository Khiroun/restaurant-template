import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import openingHours from "../../constants/data/openingHours";
import { displayAddress } from "../../constants/siteConfig";

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: "3rem" }}>
        Trouvez nous
      </h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">{displayAddress}</p>
        <p
          className="p__cormorant"
          style={{ color: "#DCCA87", margin: "2rem 0" }}
        >
          {`Horaires d'ouvertures`}
        </p>
        {openingHours.map((oh) => {
          return (
            <p className="p__opensans" key={oh}>
              {oh}
            </p>
          );
        })}
      </div>
      <a href="mailto:admin@aysseltech.com">
        <button
          type="button"
          className="custom__button"
          style={{ marginTop: "2rem" }}
        >
          Nous écrire
        </button>
      </a>
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="finus_img" />
    </div>
  </div>
);

export default FindUs;
