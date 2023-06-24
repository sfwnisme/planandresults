import React, { memo } from "react";
import { Contact, Footer, Navbar } from "../../components";
import { Services, Technique } from "../../containers";

const ServicesSection = () => {
  console.log("ServicesPage.jsx");

  return (
    <section className="services-section" id="services">
      <Navbar />
      <div className="pb-14" />
      <Services />
      <Technique />
      <Contact />
      <Footer />
    </section>
  );
};

export default memo(ServicesSection);
