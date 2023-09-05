import React, { memo } from "react";
import { useTranslation } from "react-i18next";
import { Contact, Footer, Navbar } from "../../components";
import { Article } from "../../containers";
import { useParams } from "react-router-dom";

const SingleServicePage = () => {
  const { serviceId } = useParams()
  const [t, i18n] = useTranslation();
  const services = t("landing_page.services.body", { returnObjects: true })
  console.log(services)

  const singleService = services.find((service) => service.id === serviceId)

  console.log("ServiceOne.jsx", "Render ServiceOne.jsx");
  console.log(singleService)
  console.log(serviceId)

  return (
    <section className="pt-[70px] max-sm:pt-14">
      <Navbar />
      <Article content={singleService} />
      <Contact />
      <Footer />
    </section>
  );
};

export default memo(SingleServicePage)