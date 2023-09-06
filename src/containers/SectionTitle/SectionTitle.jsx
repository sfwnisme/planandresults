import React, { memo } from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const SectionTitle = ({ title, description, link, link_2 }) => {
  console.log("SectionTitle.jsx", "Render SectionTitle.jsx");

  return (
    <main className="SECTION_TITLE flex flex-col text-center gap-4 mb-20 max-sm:mb-6">
      <div className="TEXT_BOX flex items-center justify-between">
        <div
          className="TITLE_BOX flex items-center justify-start gap-2"
          data-aos="fade-up"
        >
          <span
            className="bg-black h-px w-28 max-sm:w-5  block"
            data-aos="fade-up"
          ></span>
          <h1
            className="text-black text-4xl max-md:text-lg font-bold"
            data-aos="fade-up"
          >
            {title}
          </h1>
          <span
            className="bg-black h-px w-14 max-sm:w-10 block"
            data-aos="fade-up"
          ></span>
        </div>
        <HashLink
          to={link.href}
          alt={link.alt}
          className="hover:bg-c-primary-900/10 px-7 max-sm:px-5 py-3 max-sm:py-2 rounded-md text-c-primary-900 text-base max-sm:text-sm flex items-center justify-center gap-2 max-sm:gap-0 duration-150"
          data-aos="fade-up"
        >
          {link.text}
          <img src={link.icon} alt={link.alt} className="" />
        </HashLink>
      </div>
      <p
        className="DESCRIPTION text-c-text-secondary-2 text-xl max-md:text-lg max-sm:text-sm font-normal max-w-7xl mx-auto"
        data-aos="fade-up"
      >
        {description}
      </p>
    </main>
  );
};

export default memo(SectionTitle);
