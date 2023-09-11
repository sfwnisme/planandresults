import React from 'react'

const Extra = () => {
  return (
    <section
      className="container mx-auto py-[70px] max-sm:py-14 px-1"
      id="about"
    >
      <div className="TEXT_BOX max-lg:flex flex-col items-center justify-center text-center">
        <h1
          className="text-black text-7xl max-xl:text-6xl max-sm:text-4xl w-fit mx-auto font-medium mb-5 max-sm:mb-3 relative z-10 after:-z-10 after:bg-[#f9c33c] after:h-[10px] after:w-full after:absolute after:-bottom-0 after:left-1/2 after:-translate-x-1/2"
          data-aos="fade-up"
        >
          {/* {headerContent.title} */}
          جاهز للإنطلاق
        </h1>
        <h1
          className="text-5xl max-xl:text-4xl max-sm:text-3xl font-thin text-c-primary-900 mb-10 max-sm:mb-5"
          data-aos="fade-up"
        >
        </h1>
        <p
          className="text-2xl max-sm:text-sm font-thin text-c-text-disabled-2 mb-20 max-sm:mb-12"
          data-aos="fade-up"
        >
          احنا معاك خطوة بخطوة إلين الحلم يتحقق
          {/* {headerContent.description} */}
        </p>
      </div>
    </section>
  );
}

export default Extra