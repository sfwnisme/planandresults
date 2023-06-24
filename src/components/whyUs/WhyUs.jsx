import React, { memo } from "react";
import { useTranslation } from "react-i18next";
import { SectionTitle, Team } from "../../containers";

// list component
const WhyUsList = ({ why, i18n }) => (
  <li
    className={`text-c-text-secondary-2 text-2xl max-lg:text-xl max-sm:text-xs max-sm:leading-5 py-4 max-sm:py-1 px-14 max-lg:px-10 max-sm:px-2 ${
      i18n.language === `en` ? `border-l-2` : `border-r-2`
    } border-c-primary-900`}
    data-aos="fade-up"
  >
    {why}
  </li>
);

const WhyUs = () => {
  const [t, i18n] = useTranslation();
  const whyUsHeader = t("landing_page.why_us.header", { returnObjects: true });
  const whyListData = t("landing_page.why_us.body.list", {
    returnObjects: true,
  });

  console.log("WhyUs.jsx", "Render WhyUs.jsx");

  return (
    <section className="container mx-auto py-[70px] max-sm:py-14 px-1">
      <SectionTitle {...whyUsHeader} />
      <ul
        className="grid grid-cols-2 gap-y-12 max-sm:gap-y-8 gap-x-6  mx-auto"
        id="whyus"
      >
        {whyListData.map((why, index) => (
          <WhyUsList why={why} key={index} i18n={i18n} />
        ))}
      </ul>
      <Team />
    </section>
  );
};

export default memo(WhyUs);
