import React, { memo } from "react";
import { useTranslation } from "react-i18next";

const About = () => {
  const [t] = useTranslation();
  const bodyContent = t("landing_page.about", { returnObjects: true });

  console.log("About.jsx", "Render About.jsx");

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

export default memo(About);
