import React, { memo } from "react";
import { Technique } from "../../containers";
import { ServicesBody } from "../../components";

const ServicesPage = () => {
  console.log("ServicesPage.jsx");

  return (
    <section className="services-section" id="services">
      <div className="pb-14" />
      <ServicesBody />
      {/* <Technique /> */}
    </section>
  );
};

export default memo(ServicesPage);
