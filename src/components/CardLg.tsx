import React from "react";
import ButtonVejaMais from "./ButtonVejaMais";
import noticiasData from "@/datateams/noticiasData";



const CardLg = () => {
  return (
    noticiasData.noticias.map((notExibida)=>(
      <div className="flex items-center bg-white rounded-lg max-h-80 max-w-7xl shadow-lg">
      <div>
        <img
          className=" h-[300px] w-[600px] rounded-l-lg border-r-8 border-red"
          src={notExibida.notImageUrl}
          alt={notExibida.notTitle}
        />
      </div>

      <div className="flex flex-col gap-4 p-8">
        <h2 className=" font-medium text-5xl max-w-[900px]">
          {notExibida.notTitle}
        </h2>

        <div className="flex justify-end">
          
          <ButtonVejaMais noticiaID={notExibida.id}></ButtonVejaMais>
        </div>
      </div>
    </div>
    ))
  );
};

export default CardLg;
