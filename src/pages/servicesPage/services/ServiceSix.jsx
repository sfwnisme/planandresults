import React, { memo } from "react";
import { useTranslation } from "react-i18next";
import { Contact, Footer, Navbar } from "../../../components";
import { Article } from "../../../containers";

const ServiceSix = () => {
  const [t, i18n] = useTranslation();
  const path = t("landing_page.services.body", { returnObjects: true })[6].path;
  const content = t("landing_page.services.body", { returnObjects: true })[
    path
  ];

  console.log("ServiceSix.jsx", "Render ServiceSix.jsx");

  return (
    <section className="pt-[70px] max-sm:pt-14">
      <Navbar />
      <Article content={content} />
      <Contact />
      <Footer />
    </section>
  );
};

export default memo(ServiceSix);
