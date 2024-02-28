import React from "react";

interface IProps {
  noticiaID:string;
}

const ButtonVejaMais: React.FunctionComponent<IProps> =  ({noticiaID}) => {

  const handleClick = () => {
    window.location.href = `/noticia/${noticiaID}`
  }

  return (
    <button className="px-5 py-3 rounded-lg bg-red text-white text-2xl shadow hover:scale-105 transition-all" onClick={handleClick}>
      Veja mais
    </button>
  );
};

export default ButtonVejaMais;
