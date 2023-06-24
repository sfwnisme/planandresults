import React, { memo } from "react";
import { SectionTitle } from "../../containers";
import AboutBody from "./AboutBody";
import { useTranslation } from "react-i18next";

const About = () => {
  const [t] = useTranslation();
  const aboutHeader = t("landing_page.about.header", { returnObjects: true });

  console.log("About.jsx", "Render About.jsx");

  return (
    <section
      className="container mx-auto py-[70px] max-sm:py-14 px-1"
      id="about"
    >
      <SectionTitle {...aboutHeader} />
      <AboutBody />
    </section>
  );
};

export default memo(About);
