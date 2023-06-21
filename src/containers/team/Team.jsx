import React from "react";
import { useTranslation } from "react-i18next";
import { HashLink } from "react-router-hash-link";
import "./style.css";
import bgImg from "/assets/images/team/team-background.png";

// team header
const TeamHeader = ({
  title,
  description,
  link: { text, href, alt, icon },
}) => (
  <div className="max-w-2xl flex flex-col items-center justify-center text-center mb-12 z-[2]">
    <h1 className="text-black text-4xl max-sm:text-lg mb-4" data-aos="fade-up">
      {title}
    </h1>
    <p
      className="text-c-text-secondary-2 text-base max-sm:text-sm font-medium max-sm:font-thin mb-8"
      data-aos="fade-up"
    >
      {description}
    </p>
    <HashLink
      to={href}
      alt={alt}
      className="bg-c-primary-900 duration-100 text-c-bg-1000 px-9 py-3 text-base max-sm:text-xs font-semibold max-sm:font-normal flex items-center justify-center gap-3 rounded-lg  border-2 border-transparent  hover:border-c-primary-700"
      data-aos="fade-up"
    >
      {text}
      <img src={icon} alt={alt} />
    </HashLink>
  </div>
);

const TeamImages = ({ img, id }) => (
  <img
    src={img}
    alt="person image"
    className={`team-img ${id} min-w-[50px] absolute z-[1]`}
    data-aos="fade-up"
  />
);

const Team = () => {
  //==============variables
  const [t] = useTranslation();
  const teamHeaderData = t("landing_page.why_us.body.team.header", {
    returnObjects: true,
  });
  const teamImagesList = t("landing_page.why_us.body.team.testimonials", {
    returnObjects: true,
  });
  //==============JSX
  return (
    <section
      className="h-screen py-12 flex flex-col items-center justify-center relative"
      id="team"
    >
      <TeamHeader {...teamHeaderData} />
      <div className="grid grid-cols-4 gap-y-10 gap-x-28 max-sm:gap-6">
        {teamImagesList.map((img, index) => (
          <TeamImages img={img} id={`team-${index}`} key={index} />
        ))}
      </div>
      <img
        src={bgImg}
        alt=""
        className="w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0"
      />
      <img
        src={bgImg}
        alt=""
        className="w-full absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-[40%] z-0"
      />
    </section>
  );
};

export default Team;
