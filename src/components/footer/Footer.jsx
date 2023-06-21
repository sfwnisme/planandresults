import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
  AiFillLinkedin,
} from "react-icons/ai";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  const [t] = useTranslation();
  const logo = t("landing_page.navbar.logo");
  const links = t("landing_page.navbar.links", { returnObjects: true });
  const social_info = t("landing_page.navbar.social_info", {
    returnObjects: true,
  });
  const rights = t("landing_page.footer.rights", { returnObjects: true });
  const currentYear = new Date().getFullYear();
  return (
    <footer
      className=" mx-auto pt-[70px] max-sm:pt-14 pb-6 bg-c-text-primary-2 flex items-center justify-center border-t-2 border-white/10"
      id="footer"
    >
      <div className="max-w-2xl flex flex-col items-center justify-center gap-12 max-sm:gap-4">
        <HashLink to="/home" data-aos="fade-up">
          <img src={logo} alt="logo" className="w-24 max-sm:w-12" />
        </HashLink>
        <ul className="flex items-center justify-center gap-6 max-sm:gap-2">
          {links.map((link, index) => (
            <HashLink
              key={index}
              to={`/#${link.id}`}
              className="text-c-text-disabled hover:text-white duration-150 max-sm:text-xs"
              data-aos="fade-up"
            >
              {link.name}
            </HashLink>
          ))}
        </ul>
        <div className="SOCIAL_LINKS flex items-start justify-start max-sm:gap-1">
          <a href={social_info.fb.href} alt={social_info.fb.alt}>
            <AiFillFacebook className="h-10 max-sm:h-8 w-10 max-sm:w-8 fill-white hover:fill-c-primary-800" />
          </a>
          <a href={social_info.insta.href} alt={social_info.insta.alt}>
            <AiFillInstagram className="h-10 max-sm:h-8 w-10 max-sm:w-8 fill-white hover:fill-c-primary-800" />
          </a>
          <a href={social_info.tw.href} alt={social_info.tw.alt}>
            <AiFillTwitterSquare className="h-10 max-sm:h-8 w-10 max-sm:w-8 fill-white hover:fill-c-primary-800" />
          </a>
          <a href={social_info.in.href} alt={social_info.in.alt}>
            <AiFillLinkedin className="h-10 max-sm:h-8 w-10 max-sm:w-8 fill-white hover:fill-c-primary-800" />
          </a>
        </div>
        <div className="RIGHTS text-c-text-disabled flex items-center justify-center gap-4 max-sm:gap-4 max-sm:text-sm font-medium">
          {currentYear}
          {rights.map((right, index) => (
            <a
              key={index}
              href={right.href}
              alt={right.name}
              className="text-lg max-sm:text-xs font-medium"
            >
              {right.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
