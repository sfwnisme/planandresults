import React, { memo } from "react";
import { PageTitle } from "..";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const PageHeader = ({ title, description, link, link_2 }) => {
  return (
    <div className="container mx-auto flex items-center justify-center px-1">
      <div className="max-w-5xl flex flex-col items-center justify-center gap-10 max-sm:gap-5 text-center mb-10">
        <PageTitle title={title} />
        <p
          className="text-c-text-disabled-2 text-xl max-sm:text-sm font-medium max-sm:font-thin"
          data-aos="fade-up"
        >
          {description}
        </p>
        <div className="flex items-center justify-center gap-6">
          <NavLink
            to={link_2.href}
            alt={link_2.alt}
            className="bg-c-primary-900 border-2 border-transparent hover:border-c-primary-800 duration-150 text-c-bg-1000 px-9 py-3 text-base max-sm:text-xs font-semibold max-sm:font-normal flex items-center justify-center rounded-lg"
            data-aos="fade-up"
          >
            {link_2.text}
          </NavLink>
          <HashLink
            to={link.href}
            alt={link.alt}
            className="hover:bg-c-primary-900/10 px-7 max-sm:px-5 py-3 max-sm:py-2 rounded-md text-c-primary-900 text-base max-sm:text-xs flex items-center justify-center gap-2 max-sm:gap-0 duration-150"
            data-aos="fade-up"
          >
            {link.text}
            <img src={link.icon} alt={link.alt} />
          </HashLink>
        </div>
      </div>
    </div>
  );
};

export default memo(PageHeader);
