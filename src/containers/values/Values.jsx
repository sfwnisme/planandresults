import React from "react";
import { useTranslation } from "react-i18next";

const Values = () => {
  const [t] = useTranslation();
  const content = t("partners.values", { returnObjects: true });
  return (
    <div>
      <section className="container mx-auto py-[70px] max-sm:py-14">
        <div className="flex flex-col items-start justify-start gap-14  max-sm:gap-4 max-lg:gap-6  ">
          <h1
            className="text-black text-4xl max-sm:text-base max-lg:text-xl text-center mx-auto font-bold"
            data-aos="fade-up"
          >
            {content.title}
          </h1>
          <p
            className="text-c-text-disabled-2 text-xl  max-sm:text-sm max-lg:text-base lg:text-xl font-thin px-3 rounded-2xl max-sm:rounded-md"
            data-aos="fade-up"
          >
            {content.description}
          </p>
        </div>
      </section>
    </div>
  );
};

export default Values;
