import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { memo } from "react";

const Header = () => {
  const [t] = useTranslation();
  const {link} = t("landing_page.partners.header", { returnObjects: true });

  console.log("Header.jsx", "Render Header.jsx");

  return (
    // <section className="container mx-auto py-[70px] max-sm:py-14 px-1">
      <NavLink
        to={link.href}
          className="bg-c-primary-900 hover:bg-c-primary-900/30 w-fit mx-auto px-7 max-sm:px-5 py-3 max-sm:py-2 rounded-md border border-c-primary-900 text-black text-base max-sm:text-sm font-medium flex items-center justify-center gap-2 max-sm:gap-0 duration-150 fixed bottom-4 right-4 z-10"
        data-aos="fade-up"
      >
        {link.text}
        {/* <img src={link.icon} alt={link.alt} /> */}
      </NavLink>
    // </section>
  );
};

export default memo(Header);
