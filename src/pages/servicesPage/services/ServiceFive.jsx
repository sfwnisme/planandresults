import React, { memo } from "react";
import { useTranslation } from "react-i18next";
import { Contact, Footer, Navbar } from "../../../components";
import { Article } from "../../../containers";

const ServiceFive = () => {
  const [t, i18n] = useTranslation();
  const path = t("landing_page.services.body", { returnObjects: true })[5].path;
  const content = t("landing_page.services.body", { returnObjects: true })[
    path
  ];

  console.log("ServiceFive.jsx", "Render ServiceFive.jsx");

  return (
    <section className="pt-[70px] max-sm:pt-14">
      <Navbar />
      <Article content={content} />
      <Contact />
      <Footer />
    </section>
  );
};

export default memo(ServiceFive);
