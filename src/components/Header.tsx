import React from "react";
import Redes from "./Redes";
import UltimasNoticias from "./UltimasNoticias";

const Header = () => {
  return (
    <header className="flex bg-blue-hard w-full h-24 justify-around text-white items-center ">
      {/* div da logo*/}
      <div className="flex items-center pl-4 gap-2">
        <picture className="max-w-96 flex justify-evenly items-center drop-shadow-lg">
          <img src="/img/LOGO FINAl.png" className="w-24"></img>
        </picture>
        <h1 className="text-5xl font-bold drop-shadow-lg">NBArea</h1>
      </div>

      <UltimasNoticias tamanhoDinamico={true} aparece={true} />

      <span>
        <Redes />
      </span>
    </header>
  );
};

export default Header;
