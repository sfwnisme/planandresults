import { memo } from "react";
import { useTranslation } from "react-i18next";

const PartnersBody = () => {
  const [t] = useTranslation();
  const partnersImagesList = t("landing_page.partners.body.images", {
    returnObjects: true,
  });

  console.log("PatnersBody.jsx", "Render PartnersBody.jsx");

  return (
    <main className="container mx-auto flex justify-between flex-wrap items-center max-sm:gap-2 px-1">
      {partnersImagesList.map((img, index) => (
        <img
          src={img}
          alt="partner image"
          key={index}
          data-aos="fade-up"
          className="w-[100px] flex items-center justify-center grayscale"
        />
      ))}
    </main>
  );
};

export default memo(PartnersBody);
