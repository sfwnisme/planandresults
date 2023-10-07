import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { memo, useState } from "react";
import Popup from "../Popup/Popup";

const Header = () => {
  const [close, setClose] = useState(true)
  const [t] = useTranslation();
  const headerContent = t("landing_page.header", { returnObjects: true });

  console.log(close)

  console.log("Header.jsx", "Render Header.jsx");

  return (
    <section className="HEADER px-1 min-h-screen bg-[#f9c33c] grid place-content-center place-items-center">
      {!close ? <Popup close={close} setClose={setClose} /> : null}
      <header
        className=" bg-cover bg-center container py-[70px] max-sm:py-14 flex max-lg:flex-col-reverse items-center justify-between gap-24 max-sm:gap-12  mx-auto"
        id="home"
      >
        <div className="TEXT_BOX max-w-[500px] max-lg:flex flex-col items-center max-lg:text-center">
          <h1
            className="text-black text-7xl max-xl:text-6xl max-sm:text-4xl font-medium mb-5 max-sm:mb-3"
            data-aos="fade-up"
          >
            {headerContent.title}
          </h1>
          <h1
            className="text-5xl max-xl:text-4xl max-sm:text-3xl font-thin text-c-primary-900 mb-10 max-sm:mb-5"
            data-aos="fade-up"
          >
            {headerContent.sub_title}
          </h1>
          <p
            className="text-2xl max-sm:text-sm font-thin text-c-text-disabled-2 mb-20 max-sm:mb-12"
            data-aos="fade-up"
          >
            {headerContent.description}
          </p>
          {/* <NavLink
            to={t("landing_page.header.btn.href")}
            className="bg-c-primary-900 text-c-bg-1000 font-medium rounded-lg duration-150 text-2xl max-sm:text-sm flex items-center justify-start w-fit gap-3  py-4 max-sm:py-3 px-7 max-sm:px-5 border-2 border-transparent  hover:border-c-primary-700"
            data-aos="fade-up"
          >
            {headerContent.btn.text}
            <img src={headerContent.btn.icon} alt={headerContent.btn.alt} />
          </NavLink> */}
          <button
            onClick={() => setClose(!close)}
            className='bg-c-primary-900 text-c-bg-1000 font-medium rounded-lg duration-150 text-2xl max-sm:text-sm flex items-center justify-start w-fit gap-3  py-4 max-sm:py-3 px-7 max-sm:px-5 border-2 border-transparent  hover:border-c-primary-700'
          >فكرة ستاربكس</button>

        </div>
        <img
          src={t("landing_page.header.image.img")}
          alt={t("landing_page.header.image.alt")}
          className="max-lg:w-[400px] lg:w-[700px] 2xl:w-[800px] pt-20 max-sm:pt-8"
          data-aos="fade-up"
        />
      </header>
    </section>
  );
};

export default memo(Header);
