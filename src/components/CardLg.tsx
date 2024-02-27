import React from "react";
import ButtonVejaMais from "./ButtonVejaMais";

const CardLg = () => {
  return (
    <div className="flex items-center bg-white rounded-lg max-h-80 max-w-7xl shadow-lg">
      <div>
        <img
          className=" max-h-80 rounded-l-lg border-r-8 border-red"
          src="/img/noticia2.png"
          alt=""
        />
      </div>

      <div className="flex flex-col gap-4 p-8">
        <h2 className=" font-medium text-5xl">
          Boletim de rumores e trocas da NBA{" "}
        </h2>

        <div className="flex justify-between items-center">
          <div className=" text-2xl">
            <p>Juca Kfouri</p>
            <p>21/02/2024</p>
          </div>
          <ButtonVejaMais></ButtonVejaMais>
        </div>
      </div>
    </div>
  );
};

export default CardLg;
