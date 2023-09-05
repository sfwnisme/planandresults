import React, { memo } from "react";
import { useTranslation } from "react-i18next";
import { Contact, Footer, Navbar } from "../../../components";
import { Article } from "../../../containers";

const ServiceTwo = () => {
  const [t, i18n] = useTranslation();
  const path = t("landing_page.services.body", { returnObjects: true })[2].path;
  const content = t("landing_page.services.body", { returnObjects: true })[
    path
  ];

  console.log("ServiceTwo.jsx", "Render ServiceTwo.jsx");

  return (
    <section className="pt-[70px] max-sm:pt-14">
      <Navbar />
      <Article content={content} />
      <Contact />
      <Footer />
    </section>
  );
};

export default memo(ServiceTwo);
