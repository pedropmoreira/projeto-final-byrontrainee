"use client";
import LogoComponent from "@/components/LogoComponent";
import { useState } from "react";
import teamsdata from "@/datateams/teamsdata";

import CardLg from "@/components/CardLg";
import CardSm from "@/components/CardSm";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { NotCarousel } from "@/components/NotCarousel";


export default function Home() {
 
  const [timeSelecionado, setTimeSelecionado] = useState(teamsdata.times[2]);

  return (
    <main className="bg-gradient-to-t  from-blue-hard to-blue-light flex flex-col items-center">
      <div className=" flex flex-col gap-8 py-10">
        {/* ÚLTIMAS NOTÍCIAS */}

        {/* <div className="w-screen p-8">
          <NotCarousel />
        </div> */}

        <section id="ultNoticias" className="flex items-center justify-center">
          <div className="flex flex-col justify-center bg-gradient-to-br from-blue-hard to-red rounded-xl shadow-md sm:max-w-7xl mx-8">
            <div className=" bg-blue-hardest px-12 py-8 rounded-t-xl">
              <h2 className=" font-bold text-5xl text-white">
                Últimas notícias
              </h2>
            </div>

            <div className="max-w-7xl w-[85vw] p-8">
              <NotCarousel />
            </div>
          </div>
        </section>
        {/* /ÚLTIMAS NOTÍCIAS */}

        {/* TIMES*/}
        <section id="times">
          <div className=" bg-blue-hard text-white rounded-lg lg:max-w-7xl flex lg:flex-row flex-col shadow-lg mx-8">
            {/* div times*/}

            <div className="flex flex-col lg:flex-row items-center justify-around lg:w-2/5 bg-blue-hardest rounded-lg text-base font-semibold p-8 gap-4">
              {/* conferencia leste*/}
              <div className="flex flex-col items-center gap-2 max-w-xl lg:max-w-none lg:w-1/2">
                <span className=" text-lg font-bold">Conferência Leste</span>
                <div className="">
                  <LogoComponent
                    timeSelecionadoID={timeSelecionado.id}
                    cliqueTime={setTimeSelecionado}
                    conferencia="Conferência Leste"
                  />
                </div>
              </div>

              <span className="h-full w-full lg:w-auto p-[1px] bg-white rounded-full"></span>

              {/* conferencia oeste*/}
              <div className="flex flex-col items-center gap-2 max-w-xl lg:max-w-none lg:w-1/2">
                <span className=" text-lg font-bold">Conferência Oeste</span>
                <LogoComponent
                  timeSelecionadoID={timeSelecionado.id}
                  cliqueTime={setTimeSelecionado}
                  conferencia="Conferência Oeste"
                />
              </div>
            </div>

            {/* div infos*/}
            {timeSelecionado && (
              <div className="flex md:flex-row flex-col items-center p-8 lg:w-3/5 gap-6">
                {/* div logo*/}
                <div className="flex flex-col items-center md:justify-center h-full md:w-1/3 w-full gap-2 ">
                  <picture>
                    <img
                      src={timeSelecionado.imageUrl}
                      className="w-56 drop-shadow-lg"
                    ></img>
                  </picture>

                  <div className="flex flex-col w-full gap-4">
                    <span className="w-full h-[2px] bg-white rounded-full"></span>
                    <div className="flex flex-col ">
                      <h2 className="text-3xl font-bold ">
                        {timeSelecionado.teamName}
                      </h2>
                      <span className="text-xl">
                        {timeSelecionado.teamConf}
                      </span>
                    </div>
                  </div>
                </div>
                {/* div info*/}
                <div className="flex flex-col w-full md:w-2/3 justify-center gap-5 ">
                  <p>{timeSelecionado.text}</p>
                  <p>Títulos de Conferência: {timeSelecionado.confTitle}</p>
                  <p>Títulos de Divisão: {timeSelecionado.divTitle}</p>
                </div>
              </div>
            )}
          </div>
        </section>
        {/* /TIMES*/}

        {/* NOTÍCIAS */}
        <section id="noticias" className="flex items-center justify-center">
          <div className="flex flex-col items-center justify-center w-full gap-4 mx-8">
            <CardLg></CardLg>
          </div>
          
        </section>

   
        {/* /NOTÍCIAS */}
      </div>
    </main>
  );
}
