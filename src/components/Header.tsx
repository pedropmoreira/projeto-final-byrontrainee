import React from "react";
import Redes from "./Redes";
import UltimasNoticias from "./UltimasNoticias";
import { useRouter } from "next/router";

interface IProps {
  home?: boolean;
  noticia?: boolean;
}

const Header = ({ home, noticia }: IProps) => {
  const { query } = useRouter();

  if (query == undefined) {
    console.log("ïndefinido");
  } else {
    console.log(query);
  }

  return (
    <header className="flex fixed z-50 items-center justify-center bg-blue-hard w-full p-4 text-white shadow-2xl">
      {/* div da logo*/}
      <div className="flex flex-col lg:flex-row gap-4 justify-between items-center w-full max-w-7xl">
        <a href="/" className="flex items-center gap-2">
          <picture className="flex justify-evenly items-center drop-shadow-lg">
            <img src="/img/LOGO FINAl.png" className="w-20 sm:w-24"></img>
          </picture>
          <h1 className="text-4xl sm:text-6xl font-bold drop-shadow-lg">
            NBArea
          </h1>
        </a>

        <UltimasNoticias home={home} noticia={noticia} />
      </div>
    </header>
  );
};

export default Header;
