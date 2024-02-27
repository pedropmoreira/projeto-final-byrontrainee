"use client";
import CardLg from "@/components/CardLg";
import CardSm from "@/components/CardSm";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";

export default function Page() {
  return (
    <>
      <div className=" flex flex-col gap-8 bg-gradient-to-b from-blue-light to to-blue-hard p-10">
        {/* ÚLTIMAS NOTÍCIAS */}
        <section className="flex items-center justify-center">
          <div className="flex flex-col justify-center bg-blue-hard rounded-xl shadow-md max-w-7xl">
            <div className=" bg-blue-hardest px-12 py-8 rounded-t-xl">
              <h2 className=" font-bold text-5xl text-white">
                Últimas notícias
              </h2>
            </div>

            <div className="p-12">
              <Swiper
                className=" "
                slidesPerView={3}
                spaceBetween={16}
                navigation={true}
                autoplay={{ delay: 3000 }}
                modules={[Navigation, Autoplay]}
              >
                <SwiperSlide>
                  <CardSm></CardSm>
                </SwiperSlide>
                <SwiperSlide>
                  <CardSm></CardSm>
                </SwiperSlide>
                <SwiperSlide>
                  <CardSm></CardSm>
                </SwiperSlide>
                <SwiperSlide>
                  <CardSm></CardSm>
                </SwiperSlide>
                <SwiperSlide>
                  <CardSm></CardSm>
                </SwiperSlide>
                <SwiperSlide>
                  <CardSm></CardSm>
                </SwiperSlide>
                <SwiperSlide>
                  <CardSm></CardSm>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </section>
        {/* /ÚLTIMAS NOTÍCIAS */}

        {/* NOTÍCIAS */}
        <section className="flex items-center justify-center">
          <div className="flex flex-col items-center justify-center w-full gap-4">
            <CardLg></CardLg>
            <CardLg></CardLg>
          </div>
        </section>
        {/* /NOTÍCIAS */}
      </div>
    </>
  );
}
