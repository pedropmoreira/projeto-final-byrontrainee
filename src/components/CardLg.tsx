import React from "react";
import ButtonVejaMais from "./ButtonVejaMais";
import noticiasData from "@/datateams/noticiasData";

const CardLg = () => {
  return noticiasData.noticias.map((notExibida) => (
    <div className="flex flex-col lg:flex-row items-center bg-white rounded-lg lg:max-h-80 w-full lg:max-w-7xl lg:w-7xl shadow-lg">
      <div className="w-full lg:h-full lg:w-auto">
        <img
          className="h-80 lg:h-64 w-full lg:w-[600px] object-cover rounded-t-lg lg:rounded-tr-none lg:rounded-l-lg border-b-8 lg:border-b-0 lg:border-r-8 border-red"
          src={notExibida.notImageUrl}
          alt={notExibida.notTitle}
        />
      </div>

      <div className="flex flex-col self-start lg:self-auto gap-4 p-8 lg:w-4/5">
        <h2 className=" font-medium text-2xl lg:text-3xl">
          {notExibida.notTitle}
        </h2>

        <div>
          <ButtonVejaMais noticiaID={notExibida.id}></ButtonVejaMais>
        </div>
      </div>
    </div>
  ));
};

export default CardLg;
