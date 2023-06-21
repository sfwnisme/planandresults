import React from "react";
import { Contact, Footer, Navbar } from "../../components";
import { Services, Technique } from "../../containers";

const ServicesSection = () => {
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

export default ServicesSection;
