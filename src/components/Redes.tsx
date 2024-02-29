import React from "react";
import { FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";

const Redes = () => {
  return (
    <div>
      <ul className="flex justify-between items-center md:gap-4 gap-2">
        <li>
          {" "}
          <a href="https://www.youtube.com/@NBA" target="_blank">
            <FaYoutube
              className="hover:scale-110 transition-transform duration-300"
              size={48}
            />
          </a>{" "}
        </li>
        <li>
          <a href="https://www.instagram.com/nba/" target="_blank">
            <FaInstagram
              className="hover:scale-110 transition-transform duration-300"
              size={42}
            />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/nba/?locale=pt_BR" target="_blank">
            <FaFacebook
              className="hover:scale-110 transition-transform duration-300"
              size={42}
            />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Redes;
