import React from "react";

interface IProps {
  noticiaID: string;
}

const ButtonVejaMais: React.FunctionComponent<IProps> = ({ noticiaID }) => {
  const handleClick = () => {
    window.location.href = `/noticia/${noticiaID}`;
  };

  return (
    <button
      className="px-8 py-2 rounded-lg bg-red text-white text-xl shadow-lg hover:scale-105 transition-all"
      onClick={handleClick}
    >
      Veja mais
    </button>
  );
};

export default ButtonVejaMais;
