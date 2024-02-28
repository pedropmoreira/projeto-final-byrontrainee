import React from "react";
import ButtonVejaMais from "./ButtonVejaMais";
import noticiasData from "@/datateams/noticiasData";

interface IProps {
  id: string;
}

const CardSm : React.FunctionComponent<IProps> =({id}) => {

  
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col w-96 h-[500px] bg-white p-4 rounded-2xl gap-4 shadow-xl">
        <img
          className=" h-[250px] w-fit rounded-2xl"
          src={noticiasData.noticias[Number(id) -1].notImageUrl}
          alt=""
        />
        <h2 className=" font-medium text-2xl">
          {noticiasData.noticias[Number(id) -1].notTitle}
        </h2>
        <div className="flex justify-between items-center">
          <ButtonVejaMais noticiaID={`${id}`}></ButtonVejaMais>

        </div>
      </div>
    </div>
  );
};

export default CardSm;
