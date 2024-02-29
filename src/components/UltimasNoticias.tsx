"use client";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import React from "react";
import { Link } from "react-scroll";

interface IProps {
  aparece: boolean;
}

const UltimasNoticias = ({ aparece }: IProps) => {
  function handleSetActive(to: string, element: HTMLElement): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="flex text-xl font-medium gap-5 ">
      <a
        href="/"
        className={`${aparece} hover:underline hover:text-blue-500 hover:scale-105 transition-all duration-300`}
      >
        Home
      </a>

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

      {aparece && (
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
      )}

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
    </div>
  );
};

export default UltimasNoticias;
