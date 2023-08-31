import React from "react";
// import SectionTitle from "../sectionTitle/SectionTitle";
import { SectionTitle } from "..";
import { useTranslation } from "react-i18next";

const TechniqueSetion = ({ id, title, description, index }) => (
  <main className="bg-c-primary-900/5 max-w-sm max-lg:max-w-full px-6 max-lg:px-4 py-14 max-lg:py-8 relative rounded-xl text-center">
    {/* <span className=" bg-c-primary-900 text-white text-xl max-lg:text-base max-sm:text-xs h-14 max-lg:h-10 w-14 max-lg:w-10 flex items-center justify-center rounded absolute -top-2 -left-2">
      {index}
    </span> */}
    <h2 className="text-c-primary-900 text-2xl max-lg:text-xl max-sm:text-base font-bold mb-6 max-sm:mb-2">
      {title}
    </h2>
    {/* <p className="text-c-text-disabled-2 text-base max-lg:text-sm max-sm:text-xs font-thin">
      {description}
    </p> */}
  </main>
);

const Technique = () => {
  const [t, i18n] = useTranslation();
  const sectionHeader = t("services_page.techniques.header", {
    returnObjects: true,
  });
  const techniquesDetails = t("services_page.techniques.body", {
    returnObjects: true,
  });

  console.log("Techniques.jsx", "Render Techniques.jsx");

  return (
    <section className="container mx-auto py-[70px] max-sm:py-14 px-1">
      <SectionTitle {...sectionHeader} />
      <div className="flex items-center justify-center gap-24 max-xl:gap-6 flex-wrap">
        {techniquesDetails.map((tech, index) => (
          <TechniqueSetion {...tech} index={index + 1} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Technique;
