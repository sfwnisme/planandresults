import React, { memo } from "react";
import { useTranslation } from "react-i18next";
import { SectionTitle } from "../../containers";
import PartnersBody from "../PartnersBody/PartnersBody";

const Partners = () => {
  const [t] = useTranslation();
  const partnersHeader = t("landing_page.partners.header", {
    returnObjects: true,
  });

  console.log("Partners.jsx", "Render Partners.jsx");

  return (
    <section
      className="container mx-auto py-[70px] max-sm:py-14 px-1"
      id="partners"
    >
      <SectionTitle {...partnersHeader} />
      <PartnersBody />
    </section>
  );
};

export default memo(Partners);
