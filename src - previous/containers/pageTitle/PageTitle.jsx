import React, { memo } from "react";

const PageTitle = ({ title }) => {
  console.log("PageTitle.jsx", "Render PageTitle.jsx");

  return (
    <div className="TITLE flex items-center justify-center gap-1">
      <span className="bg-black w-24 h-[1px] block" data-aos="fade-up"></span>
      <h1
        className="text-black text-center text-4xl max-sm:text-lg font-bold"
        data-aos="fade-up"
      >
        {title}
      </h1>
      <span className="bg-black w-24 h-[1px] block" data-aos="fade-up"></span>
    </div>
  );
};

export default memo(PageTitle);
