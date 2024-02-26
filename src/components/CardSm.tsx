import React from "react";
import ButtonVejaMais from "./ButtonVejaMais";

const CardSm = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col w-96 bg-white p-4 rounded-2xl gap-4 shadow-xl">
        <img
          className=" h-fit w-fit rounded-2xl"
          src="/img/noticia.png"
          alt=""
        />
        <h2 className=" font-medium text-2xl">
          Astros da NBA divergem sobre críticas ao All-Star Game
        </h2>
        <div className="flex justify-between items-center">
          <ButtonVejaMais></ButtonVejaMais>

          <p className=" text-sm">20/02/2024</p>
        </div>
      </div>
    </div>
  );
};

export default CardSm;
