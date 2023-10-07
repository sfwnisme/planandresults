import React from 'react'
import { HashLink } from 'react-router-hash-link';

const Extra = () => {
  return (
    <section
      className="container mx-auto py-[70px] max-sm:py-14 px-1"
      id="about"
    >
      <div className="TEXT_BOX max-lg:flex flex-col items-center justify-center text-center">
        <h1
          className="text-black text-7xl max-xl:text-6xl max-sm:text-4xl w-fit mx-auto font-medium mb-5 max-sm:mb-3 relative z-10"
          data-aos="fade-up"
        >
          {/* {headerContent.title} */}
          جاهز للإنطلاق
          <img src="https://res.cloudinary.com/daa68wahe/image/upload/v1696339030/arrowimage_pk7ipo.png" alt=""
          className='-z-10 absolute w-40 -left-28 -top-10 max-sm:w-20 max-sm:-left-14 max-sm:-top-5'
          />
        </h1>
        <h1
          className="text-5xl max-xl:text-4xl max-sm:text-3xl font-thin text-c-primary-900 mb-10 max-sm:mb-5"
          data-aos="fade-up"
        >
        </h1>
        <p
          className="text-2xl max-sm:text-sm font-medium text-black mb-20 max-sm:mb-12"
          data-aos="fade-up"
        >
          احنا معاك خطوة بخطوة إلين تحقق اهدافك
          {/* {headerContent.description} */}
        </p>
        <HashLink
          to='/#contact'
          alt='contact'
          className="backdrop-blur-sm bg-c-primary-900/50 hover:bg-c-primary-900/30 text-[#81581b] text-base max-sm:text-sm font-medium rounded-md border border-c-primary-900 w-fit mx-auto px-7 max-sm:px-5 py-3 max-sm:py-2  flex items-center justify-center gap-2 max-sm:gap-0 duration-150"
          data-aos="fade-up"
        >
          تواصل معنا
          {/* <img src={link_3.icon} alt={link_3.alt} /> */}
        </HashLink>
      </div>
    </section>
  );
}

export default Extra