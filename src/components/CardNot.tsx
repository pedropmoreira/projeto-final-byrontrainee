import React from "react";
import noticiasData from "@/datateams/noticiasData";
import ButtonVejaMais from "./ButtonVejaMaisNot";
import ButtonVejaMaisNot from "./ButtonVejaMaisNot";

const CardNot: React.FunctionComponent = () => {
  const noticiasRecentes = noticiasData.noticias.filter(
    (noticiasRec) => noticiasRec.notNew === "sim"
  );

  let contador = 1;

  return (
    <div className="flex flex-col gap-3">
      {noticiasRecentes.map((notRecent) => (
        <div className="grid grid-cols-3 items-center bg-white rounded-lg shadow-lg ">
          <div className="h-full">
            <picture className="relative">
              <img
                className="h-full object-cover rounded-l-lg border-r-8 border-red"
                src={notRecent.notImageUrl}
                alt={notRecent.notTitle}
              />
              <div>
                <img
                  className="absolute bottom-0 left-0 rounded-bl-lg w-14"
                  src="/img/triangulo.png"
                  alt={`Um triangulo com o numero ${contador}`}
                />
                <span className="absolute bottom-1 left-1 text-xl font-extrabold">
                  {contador++}
                </span>
              </div>
            </picture>
          </div>

          <div className="flex flex-col p-4 gap-2 col-span-2">
            <h2 className=" font-medium text-sm">{notRecent.notTitle}</h2>

            <div className="flex ali">
              <ButtonVejaMaisNot noticiaID={notRecent.id} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardNot;
