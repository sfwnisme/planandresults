import React, { memo } from "react";
import PageTitle from "../PageTitle/PageTitle";

const Article = ({ content }) => {
  console.log("Article.jsx", "Render Article.jsx");

  return (
    <article>
      <div className="container mx-auto py-[70px] max-sm:py-14 px-1">
        <PageTitle title={content.text.title} />
        <img
          src={content.img}
          alt={content.text.title}
          className="w-full my-10"
          data-aos="fade-up"
        />
        <p
          className="text-c-text-disabled-2 text-xl max-sm:text-[15px] font-thin leading-[1.5]"
          data-aos="fade-up"
          dangerouslySetInnerHTML={{ __html: content.text.content }}
        >
          {/* {content.text.content} */}
        </p>
      </div>
    </article>
  );
};

export default memo(Article);
