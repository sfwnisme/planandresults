import React, { memo } from "react";
import { useTranslation } from "react-i18next";

const DigitalPresence = () => {
  const [t] = useTranslation();
  const content = t("partners.digital_presence", { returnObjects: true });
  return (
    <div className="py-[70px] max-sm:py-14">
      <div className="bg-c-primary-900/5 h-80 max-md:h-64 flex flex-col items-center justify-center gap-6 max-sm:gap-2 px-10 max-sm:px-3 relative overflow-hidden">
        <span
          className="bg-c-primary-700 w-64 h-52  absolute -top-10 max-lg:-top-20 max-sm:-top-40 -left-10 max-lg:-left-20 max-sm:-left-40 rounded-3xl max-sm:rounded-xl z-0"
          data-aos="fade-up"
        ></span>
        <span
          className="bg-c-primary-800 w-64 h-64  absolute -top-10 max-lg:-top-24 max-sm:-top-48 -left-28 max-lg:-left-36 max-sm:-left-44 rounded-3xl max-sm:rounded-xl z-0"
          data-aos="fade-up"
        ></span>
        <span
          className="bg-c-primary-700 w-64 h-52  absolute -bottom-10 max-lg:-bottom-20 max-sm:-bottom-40 -right-10 max-lg:-right-20 max-sm:-right-40 rounded-3xl max-sm:rounded-xl z-0"
          data-aos="fade-up"
        ></span>
        <span
          className="bg-c-primary-800 w-64 h-64  absolute -bottom-10 max-lg:-bottom-24 max-sm:-bottom-48 -right-28 max-lg:-right-36 max-sm:-right-44 rounded-3xl z-0"
          max-sm:rounded-xl
          data-aos="fade-up"
        ></span>
        <h1
          className="text-black text-4xl max-sm:text-base max-lg:text-xl text-center mx-auto font-bold z-[1]"
          data-aos="fade-up"
        >
          {content.title}
        </h1>
        <p
          className="text-c-text-disabled-2 max-w-5xl text-center text-2xl max-sm:text-sm max-lg:text-base lg:text-xl font-thin px-3 rounded-2xl max-sm:rounded-md drop-shadow-md z-[1]"
          data-aos="fade-up"
        >
          {content.description}
        </p>
      </div>
    </div>
  );
};

export default memo(DigitalPresence);
