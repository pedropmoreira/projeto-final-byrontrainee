import React from "react";

const UltimasNoticias = ({}) => {
  return (
    <div className="flex text-xl font-medium gap-5">
      <a
        href="/"
        className="hover:underline hover:text-blue-500 hover:scale-105 transition-all duration-300"
      >
        Home
      </a>
      <a
        href="#ultNoticias"
        className="hover:underline hover:text-blue-500 hover:scale-105 transition-all duration-300"
      >
        Últimas notícias
      </a>
      <a
        href="/#times"
        className="hover:underline hover:text-blue-500 hover:scale-105 transition-all duration-300"
      >
        Times
      </a>
      <a
        href="/#noticias"
        className="hover:underline hover:text-blue-500 hover:scale-105 transition-all duration-300"
      >
        Notícias
      </a>
    </div>
  );
};

export default UltimasNoticias;
