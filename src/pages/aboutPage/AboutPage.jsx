import React, { memo } from "react";
import { useTranslation } from "react-i18next";
import AboutBody from "../../components/about/AboutBody";
import { Contact, Footer, Navbar } from "../../components";
import { Duty, PageHeader } from "../../containers";

const AboutPage = () => {
  const [t] = useTranslation();
  const headerContent = t("landing_page.about.header", { returnObjects: true });
  return (
    <div className="ABOUT_PAGE pt-[70px] max-sm:pt-14">
      <Navbar />
      <div className="pb-14" />
      <PageHeader {...headerContent} />
      <AboutBody />
      <Duty />
      <Contact />
      <Footer />
    </div>
  );
};

export default memo(AboutPage);
