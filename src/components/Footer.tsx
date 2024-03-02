import React from "react";
import Redes from "./Redes";

const Footer = () => {
  return (
    <footer className="flex justify-center bg-blue-hard text-white p-4 shadow-inner">
      <div className=" flex flex-col justify-between items-center max-w-7xl w-full gap-3">
        <div className="flex flex-col sm:flex-row justify-between items-center w-full gap-1">
          <picture>
            <img
              src="/img/LOGO FINAl.png"
              alt="Logo da NBArea"
              className="lg:w-52 w-40"
            ></img>
          </picture>

          <Redes />

          <ul className="flex flex-col items-center sm:items-start mt-2 text-2xl">
            <li>
              <a
                href="https://www.youtube.com/@NBA"
                className="hover:underline hover:text-blue-500 hover:scale-105 transition-all duration-300"
              >
                NBA Youtube
              </a>
            </li>
            <li>
              <a
                href="https://www.lojanba.com/?gad_source=1&gclid=CjwKCAiA_tuuBhAUEiwAvxkgTu9gFjnBQvTWlT8z-jpkYx_zOHGLGGTfvnPMnKi5O4JX5vU_lBwXuxoCLrEQAvD_BwE"
                className="hover:underline hover:text-blue-500 hover:scale-105 transition-all duration-300"
              >
                NBA Store
              </a>
            </li>
            <li>
              <a
                href="https://www.nba.com/"
                className="hover:underline hover:text-blue-500 hover:scale-105 transition-all duration-300"
              >
                NBA.com
              </a>
            </li>
            <li>
              <a
                href="https://www.nbabasketballschool.com.br/"
                className="hover:underline hover:text-blue-500 hover:scale-105 transition-all duration-300"
              >
                NBA Brasil School
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-1 lg:gap-8">
          <picture>
            <a href="https://www.byronsolutions.com/" target="_blank">
              <img
                src="/img/logo-byron.png"
                alt="Logo da byron.solutions"
                className="max-w-80"
              ></img>
            </a>
          </picture>
          <span className="text-sm font-light">
            Desenvolvido por Guilherme Livianu e Pedro Paulo
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
