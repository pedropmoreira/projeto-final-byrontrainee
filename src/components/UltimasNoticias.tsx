"use client";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import React from "react";
import { Link } from "react-scroll";

interface IProps {
  home?: boolean;
  noticia?: boolean;
}

const UltimasNoticias = ({ home, noticia }: IProps) => {
  function handleSetActive(to: string, element: HTMLElement): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div>
      {noticia && (
        <ul className="flex text-xl font-medium gap-5 lg:hidden">
          <Link
            className="hover:underline hover:text-blue-500 hover:scale-105 transition-all duration-300"
            activeClass="active"
            to="noticia"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Noticia
          </Link>
          <Link
            className="hover:underline hover:text-blue-500 hover:scale-105 transition-all duration-300"
            activeClass="active"
            to="ultNoticias"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Últimas notícias
          </Link>
        </ul>
      )}

      {home && (
        <ul className="flex sm:text-xl font-medium gap-5">
          <Link
            className="hover:underline hover:text-blue-500 hover:scale-105 transition-all duration-300"
            activeClass="active"
            to="ultNoticias"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Últimas notícias
          </Link>

          <Link
            className="hover:underline hover:text-blue-500 hover:scale-105 transition-all duration-300"
            activeClass="active"
            to="times"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Times
          </Link>

          <Link
            className="hover:underline hover:text-blue-500 hover:scale-105 transition-all duration-300"
            activeClass="active"
            to="noticias"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Notícias
          </Link>
        </ul>
      )}
    </div>
  );
};

export default UltimasNoticias;
