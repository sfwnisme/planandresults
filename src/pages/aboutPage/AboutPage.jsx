import React, { memo } from "react";
import { useTranslation } from "react-i18next";
import { Duty, PageHeader } from "../../containers";
import { AboutBody } from "../../components";

const AboutPage = () => {
  const [t] = useTranslation();
  const headerContent = t("landing_page.about.header", { returnObjects: true });
  return (
    <div className="ABOUT_PAGE pt-[70px] max-sm:pt-14">
      <div className="pb-14" />
      <PageHeader {...headerContent} />
      <AboutBody />
      {/* <Duty /> */}
    </div>
  );
};

export default memo(AboutPage);
