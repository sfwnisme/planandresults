import React from "react";
import { SectionTitle } from "../../containers";
import { useTranslation } from "react-i18next";
import AboutBody from "./AboutBody";

const About = () => {
  const [t] = useTranslation();
  const aboutHeader = t("landing_page.about.header", { returnObjects: true });
  return (
    <section className="container mx-auto py-[70px] max-sm:py-14 px-1" id="about">
      <SectionTitle {...aboutHeader} />
      <AboutBody />
    </section>
  );
};

export default About;
