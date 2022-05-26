import React from "react";
import Image from "next/image";

const SubHeading = ({ title }) => (
  <div style={{ marginBottom: "1rem" }}>
    <p className="p__cormorant">{title}</p>
    <Image
      src="/images/spoon.svg"
      alt="spoon_image"
      className="spoon__img"
      width={45}
      height={45}
    />
  </div>
);

export default SubHeading;
