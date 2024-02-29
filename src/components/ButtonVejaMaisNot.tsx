import React from "react";

interface IProps {
  noticiaID: string;
}

const ButtonVejaMaisNot: React.FunctionComponent<IProps> = ({ noticiaID }) => {
  const handleClick = () => {
    window.location.href = `/noticia/${noticiaID}`;
  };

  return (
    <button
      className="px-4 py-1 rounded-full bg-red text-white text-xs font-medium shadow-lg hover:scale-105 transition-all"
      onClick={handleClick}
    >
      Veja mais
    </button>
  );
};

export default ButtonVejaMaisNot;
