import React from "react";

const CardNot = () => {
  return (
    <div className="grid grid-cols-3 items-center bg-white rounded-lg shadow-lg ">
      <div className="h-full">
        <picture className="relative">
          <img
            className="h-full object-cover rounded-l-lg border-r-8 border-red"
            src="/img/noticia2.png"
            alt=""
          />
          <div>
            <img
              className="absolute bottom-0 left-0 rounded-bl-lg w-20"
              src="/img/triangulo.png"
              alt=""
            />
            <span className="absolute bottom-2 left-2 text-2xl font-extrabold">
              1
            </span>
          </div>
        </picture>
      </div>

      <div className="flex flex-col p-8 gap-2 col-span-2">
        <h2 className=" font-medium text-xl">
          Astros da NBA divergem sobre críticas ao All-Star Game
        </h2>

        <div className="flex justify-between items-center">
          <div>
            <p>21/02/2024</p>
          </div>

          <a className="px-4 py-1 rounded-full bg-red text-white shadow hover:scale-105 transition-all">
            Veja mais
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardNot;
