import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { RxHamburgerMenu } from "react-icons/rx";
import {
  AiFillCloseCircle,
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
  AiFillLinkedin,
} from "react-icons/ai";
import { NavLink } from "react-router-dom";

// using HashLink as NavLink but it allows you going to the selected id or section
// ! solution link: https://stackoverflow.com/questions/74297769/how-to-navigate-to-sections-with-id-as-well-as-pages-in-react-router-dom
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const [t, i18n] = useTranslation();
  const [toggle, setToggle] = useState(false);
  let links = t("landing_page.navbar.links", { returnObjects: true });
  return (
    <nav className=" mx-auto z-10">
      <div className="LIST_CONTAINER">
        <div className="LARGE_SCREENS shadow-sm z-10 fixed top-0 left-0 w-full py-4 max-sm:py-4 max-lg:px-4 lg:px-8 mx-auto flex items-center justify-between gap-10 bg-white/50 backdrop-blur-lg">
          <HashLink to="/">
            <img
              src={t("landing_page.navbar.logo")}
              alt="logo"
              className="h-14 max-lg:h-12 max-sm:h-10 j"
            />
          </HashLink>
          <ul className="flex items-center justify-center gap-6 max-xl:gap-4 max-lg:hidden flex-1">
            {links.map((link, index) => (
              <HashLink
                to={`/#${link.id}`}
                key={index}
                className=" text-c-text-disabled-2 hover:text-c-text-primary-2 duration-150 text-xl max-xl:text-lg font-medium cursor-pointer"
              >
                {link.name}
              </HashLink>
            ))}
          </ul>
          <div className="LANG_BTN max-lg:flex-1 flex items-center justify-end">
            {i18n.language === "en" ? (
              <button
                className="bg-c-primary-900 duration-150 py-2 max-sm:py-1 px-3 max-sm:px-2 rounded-md max-sm:rounded-sm font-almaria text-sm max-sm:text-xs border-transparent hover:border-c-primary-700 border-2"
                onClick={() => i18n.changeLanguage("ar")}
              >
                عربي
              </button>
            ) : (
              <button
                className="bg-c-primary-900 duration-150 \ py-2 max-sm:py-1 px-3 max-sm:px-2 rounded-md max-sm:rounded-sm font-sf text-sm max-sm:text-xs border-transparent hover:border-c-primary-700 border-2"
                onClick={() => i18n.changeLanguage("en")}
              >
                EN
              </button>
            )}
          </div>
          <HashLink
            to="/#contact"
            className=" bg-transparent text-black text-base font-semibold leading-4 border-c-primary-900 border-2 rounded-lg px-6 duration-150 py-4 shadow-c-btn hover:shadow-c-btn-2 max-lg:hidden  hover:border-c-primary-800"
          >
            {t("landing_page.navbar.contact_btn")}
          </HashLink>
          <RxHamburgerMenu
            className="lg:hidden h-8 w-8 cursor-pointer text-black"
            onClick={() => setToggle(!toggle)}
          />
        </div>

        <div
          className={`OVERLAY h-screen w-full bg-transparent fixed inset-0 z-10 ${
            toggle ? "left-0" : "-top-[120vh]"
          } duration-150 backdrop-blur-sm`}
          onClick={() => setToggle(!toggle)}
        ></div>
        <div
          className={`SMALL_SCREENS z-10 bg-white h-screen w-4/5 flex flex-col p-7 fixed top-0 ${
            toggle ? "right-0" : "-right-full"
          } duration-150 md:w-2/5 lg:hidden`}
        >
          <div className="HEADER flex items-center justify-between gap-10 z-10">
            <AiFillCloseCircle
              className="h-6 w-6 cursor-pointer text-black"
              onClick={() => setToggle(!toggle)}
            />
            <img
              src={t("landing_page.navbar.logo")}
              alt="logo"
              className="h-10"
              onClick={() => setToggle(!toggle)}
            />
          </div>
          <ul className="flex flex-col gap-5 mt-10 flex-1 ">
            {links.map((link, index) => (
              <HashLink
                to={`/#${link.id}`}
                key={index}
                className="text-c-text-disabled-2 hover:text-c-text-primary-2 duration-150 text-xl font-normal cursor-pointer"
                onClick={() => setToggle(!toggle)}
              >
                {link.name}
              </HashLink>
            ))}
          </ul>
          <div className="FOOTER flex flex-col items-center justify-center gap-5">
            <NavLink
              to="/services"
              className=" text-base font-semibold leading-4 text-c-neutral-1000 bg-c-primary-900 flex items-center justify-center gap-1 rounded-lg px-6 hover:bg-c-primary-800 duration-150 py-4 shadow-c-btn"
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              {t("landing_page.navbar.small_screen_btn")}
              <img src={t("landing_page.navbar.link_icon")} alt="link icon" />
            </NavLink>
            <div className="SOCIAL_ICONS flex items-center justify-center gap-3">
              <a
                src={t("landing_page.navbar.social_info.fb.link")}
                alt="facebook"
                className=" cursor-pointer"
              >
                <AiFillFacebook className="text-c-text-disabled-2 hover:text-c-text-primary-2 h-8 w-8 duration-150" />
              </a>
              <a
                src={t("landing_page.navbar.social_info.insta.link")}
                alt="facebook"
                className=" cursor-pointer"
              >
                <AiFillInstagram className="text-c-text-disabled-2 hover:text-c-text-primary-2 h-8 w-8 duration-150" />
              </a>
              <a
                src={t("landing_page.navbar.social_info.tw.link")}
                alt="facebook"
                className=" cursor-pointer"
              >
                <AiFillTwitterSquare className="text-c-text-disabled-2 hover:text-c-text-primary-2 h-8 w-8 duration-150" />
              </a>
              <a
                src={t("landing_page.navbar.social_info.in.link")}
                alt="facebook"
                className=" cursor-pointer"
              >
                <AiFillLinkedin className="text-c-text-disabled-2 hover:text-c-text-primary-2 h-8 w-8 duration-150" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
