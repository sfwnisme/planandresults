import React from "react";
import { useTranslation } from "react-i18next";

const DutyBox = ({ content }) => (
  <section className=" mx-auto py-[70px] max-sm:py-14 flex max-md:flex-col items-center justify-center gap-14 max-sm:gap-6 ">
    {content.map((cont, index) => (
      <div
        className="bg-c-primary-900/5 p-12 max-lg:p-10 max-sm:p-4 rounded-2xl flex flex-col gap-10 max-sm:gap-4 max-lg:gap-6 items-start justify-start relative overflow-hidden"
        key={index}
      >
        <h1
          className="text-black text-4xl max-sm:text-base max-lg:text-xl font-bold z-[1]"
          data-aos="fade-up"
        >
          {cont.title}
        </h1>
        <p
          className="text-c-text-disabled-2 text-2xl max-sm:text-sm max-lg:text-base lg:text-xl font-thin max-sm:font-thin z-[1]"
          data-aos="fade-up"
        >
          {cont.description}
        </p>
        <span
          className="bg-c-primary-700 w-40 h-40 rounded-3xl absolute -top-6 max-sm:-top-24 -right-6 max-sm:-right-24 z-0"
          data-aos="fade-up"
        ></span>
        <span
          className="bg-c-primary-800 w-20 h-20 rounded-3xl absolute -top-4 max-sm:-top-10 -right-4 max-sm:-right-10 z-0"
          data-aos="fade-up"
        ></span>
      </div>
    ))}
  </section>
);

const Goals = ({ content }) => (
  <section className="py-[70px] max-sm:py-14">
    <div className="flex flex-col items-start justify-start gap-14  max-sm:gap-4 max-lg:gap-6  ">
      <h1
        className="text-black text-4xl max-sm:text-base max-lg:text-xl text-center mx-auto font-bold"
        data-aos="fade-up"
      >
        {content.title}
      </h1>
      <p
        className="text-c-text-disabled-2 text-xl max-sm:text-sm max-lg:text-base lg:text-xl font-thin px-3 rounded-2xl max-sm:rounded-md"
        data-aos="fade-up"
      >
        {content.description}
      </p>
    </div>
  </section>
);

const Duty = () => {
  const [t] = useTranslation();
  const dutyContent = t("about.body.duty", { returnObjects: true });
  const goalsContent = t("about.body.goals", { returnObjects: true });
  return (
    <div className=" container mx-auto px-1">
      <DutyBox content={dutyContent} />
      <Goals content={goalsContent} />
    </div>
  );
};

export default Duty;
