import React, { memo, useEffect, useState } from "react";
import { SectionTitle, ServiceBox } from "../../containers";
import { useTranslation } from "react-i18next";

//swiperjs
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';

const Services = () => {
  const [t, i18n] = useTranslation();
  const servicesData = t("landing_page.services.body", { returnObjects: true });
  console.log("Services.jsx", "Render Services.jsx");

  const [direction, setDirection] = useState('')
  useEffect(() => {
    if (i18n.language == 'en') {
      setDirection('ltr')
    } else {
      setDirection('rtl')
    }
  }, [i18n.language])

  return (
    <section
      className="container mx-auto py-[70px] max-sm:py-14 px-1"
      id="services"
    >
      <SectionTitle
        {...t("landing_page.services.header", { returnObjects: true })}
      />
      {/* <main className="flex flex-col items-center justify-center gap-20"> */}
      <main className="">
        {/* {servicesData.splice(0, 2).map((service, index) => (
          <ServiceBox {...service} key={index} />
        ))} */}

        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
          key={direction} // using key attribute to fix rerender swiper direction issue
        >
          {servicesData.map((service, index) => (
            <SwiperSlide key={index}>
              <ServiceBox {...service} />
            </SwiperSlide>
          ))}
        </Swiper>


      </main>
    </section>
  );
};

export default memo(Services);
