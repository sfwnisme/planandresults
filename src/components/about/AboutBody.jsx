import React from "react";
import { useTranslation } from "react-i18next";

const AboutBody = () => {
  const [t] = useTranslation();
  const bodyContent = t("landing_page.about", { returnObjects: true });
  return (
    <picture
      className="BOX container mx-auto relative w-11/12 max-xl:w-full flex items-center justify-center"
      data-aos="fade-up"
    >
      <img
        src={bodyContent.body.image}
        alt={bodyContent.header.title}
        className="flex items-center justify-center w-full"
        data-aos="fade-up"
      />
    </picture>
  );
};

export default AboutBody;
