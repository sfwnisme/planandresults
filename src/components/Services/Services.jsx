import React, { memo } from "react";
import { SectionTitle, ServiceBox } from "../../containers";
import { useTranslation } from "react-i18next";
const Services = () => {
  const [t] = useTranslation();
  const servicesData = t("landing_page.services.body", { returnObjects: true });

  console.log("Services.jsx", "Render Services.jsx");

  return (
    <section
      className="container mx-auto py-[70px] max-sm:py-14 px-1"
      id="services"
    >
      <SectionTitle
        {...t("landing_page.services.header", { returnObjects: true })}
      />
      <main className="flex flex-col items-center justify-center gap-20">
        {servicesData.splice(0, 2).map((service, index) => (
          <ServiceBox {...service} key={index} />
        ))}
      </main>
    </section>
  );
};

export default memo(Services);
