"use client"
import LogoComponent from "@/components/LogoComponent";
import { useEffect , useState} from "react";
import axios from "axios";
import teamsdata from "@/datateams/teamsdata";


import CardLg from "@/components/CardLg";
import CardSm from "@/components/CardSm";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
export default function Home() {


  


  return (

    
      

    <main className="bg-gradient-to-t  from-blue-hard to-blue-light flex flex-col items-center">
     
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
                spaceBetween={18}
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
 {/* section times*/}

      <section>
        <div className="bg-blue-hard text-white rounded-lg max-w-screen-2xl flex  shadow-lg border-0">
          {/* div times*/}

          <div className="flex h-full  ">
          <div className="bg-black-hard flex rounded-lg text-base font-semibold p-4  ">
            {/* conferencia leste*/}

            <div className="flex flex-col items-center max-w-48 m-4 ">
              <span>Conferência Leste</span>
              <div className="flex flex-wrap justify-center">
              <LogoComponent conferencia="Conferência Leste" />
              </div>
            </div>

            <picture>
              <img src="/img/line.png" className="h-80"></img>
            </picture>

            {/* conferencia oeste*/}
            <div className="flex flex-col items-center max-w-44 m-4">
              <span>Conferência Oeste</span>
              <div className="flex flex-wrap justify-center">
              <LogoComponent conferencia="Conferência Oeste" />
              </div>
            </div>
          </div>

          {/* div infos*/}

          <div className="flex m-4">
            {/* div logo*/}
            <div className="flex flex-col items-center justify-around h-full w-72 ">
              <picture>
                <img
                  src="/img/team logos/leste/logo-celtics.png"
                  className="w-56"
                ></img>
              </picture>
              <picture>
                <img src="/img/line-2.png" className="w-60"></img>
              </picture>

              <div className="flex flex-col items-center">
                <h2 className="text-3xl font-bold">Chicago Bulls</h2>
                <span className="text-xl">Conferência Leste</span>
              </div>
            </div>
            {/* div info*/}
            <div className="flex flex-col w-80 justify-around ">
              <p>
                O Chicago Bulls é um time de basquete profissional americano
                sediado em Chicago, Illinois. Os Bulls competem na National
                Basketball Association (NBA) como um membro da Divisão Central
                da Conferência Leste da liga.[3] A equipe foi fundada em 16 de
                janeiro de 1966 e jogou seu primeiro jogo durante a temporada de
                1966/67.[4] 
              </p>
              <p>Títulos de Conferência:	6 (1991, 1992, 1993, 1996, 1997 e 1998)</p>
              <p>Títulos de Conferência:	6 (1991, 1992, 1993, 1996, 1997 e 1998)</p>
              
            </div>
          </div>
          </div>
        </div>
      </section>
        {/* NOTÍCIAS */}
        <section className="flex items-center justify-center">
          <div className="flex flex-col items-center justify-center w-full gap-4">
            <CardLg></CardLg>
            <CardLg></CardLg>
          </div>
        </section>
        {/* /NOTÍCIAS */}
      </div>
     
      

     
    </main>
  );
}
