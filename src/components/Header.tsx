import React from "react";
import Redes from "./Redes";
import UltimasNoticias from "./UltimasNoticias";

const Header = () => {
  return (
    <header className="flex items-center justify-center bg-blue-hard w-full p-4 text-white shadow-lg">
      {/* div da logo*/}
      <div className="flex flex-col lg:flex-row gap-4 justify-between items-center w-full max-w-7xl">
        <div className="flex items-center gap-2">
          <picture className="max-w-96 flex justify-evenly items-center drop-shadow-lg">
            <img src="/img/LOGO FINAl.png" className="w-24"></img>
          </picture>
          <h1 className="text-5xl font-bold drop-shadow-lg">NBArea</h1>
        </div>

        <UltimasNoticias />
        <span>
          <Redes />
        </span>
      </div>
    </header>
  );
};

export default Header;
