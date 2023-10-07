import { memo } from "react";
import { useTranslation } from "react-i18next";

const PartnersBody = () => {
  const [t] = useTranslation();
  const partnersImagesList = t("landing_page.partners.body.images", {
    returnObjects: true,
  });

  console.log("PatnersBody.jsx", "Render PartnersBody.jsx");

  return (
    <main className="container mx-auto grid grid-cols-6 max-lg:grid-cols-4 max-sm:grid-cols-3  place-items-center justify-between gap-3  max-sm:gap-2 px-1">
      {partnersImagesList.map((img, index) => (
        <img
          src={img}
          alt="partner image"
          key={index}
          data-aos="fade-up"
          className="w-[200px] max-sm:w-[100px] h-full flex items-center justify-center"
        />
      ))}
    </main>
  );
};

export default memo(PartnersBody);
