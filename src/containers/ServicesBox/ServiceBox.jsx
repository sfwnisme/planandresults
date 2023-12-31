import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

const ServiceBox = ({ img, text: { title, more, description }, id }) => {
  const [t, i18n] = useTranslation();

  console.log("ServiceBox.jsx", "Render ServiceBox.jsx")

  return (
    <div className="BOX w-full h-full grid grid-cols-2 max-sm:grid-cols-1 gap-9 max-sm:gap-2">
      <img
        src={img}
        alt={title}
        className="flex items-center w-full"
        data-aos="fade-up"
      />
      <div
        className={`TEXT_BOX bg-c-primary-900/5 text-c-bg-1000 flex flex-col gap-9 max-sm:gap-2 px-9 py-10 max-lg:p-6 max-sm:py-4 max-sm:px-2 `}
        data-aos="fade-up"
      >
        <h3
          className="text-black text-2xl max-sm:text-sm max-lg:text-xl font-semibold flex justify-between items-center"
          data-aos="fade-up"
        >
          {title}
        </h3>
        <p
          className="text-4-lines text-c-text-secondary-2 text-base max-sm:text-[12px] max-lg:text-sm font-normal max-sm:mb-4"
          data-aos="fade-up"
        >
          {description}
        </p>
        <NavLink
          to={`/services/${id}`}
          alt=""
          className="bg-c-primary-800 border-2 border-transparent hover:border-c-primary-700 shadow-sm py-1 max-sm:py-0 px-3 max-sm:px-2 rounded-md flex items-center justify-center text-c-neutral-700 hover:text-c-neutral-1000 duration-150 font-thin text-base max-sm:text-[10px] w-fit "
          data-aos="fade-up"
        >
          {more}
        </NavLink>
      </div>
    </div>
  );
};

export default ServiceBox;
