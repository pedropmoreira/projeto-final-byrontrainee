import React from "react";
import ButtonVejaMais from "./ButtonVejaMais";
import noticiasData from "@/datateams/noticiasData";

interface IProps {
  id?: string;
}

const CardSm: React.FunctionComponent<IProps> = ({ id }) => {
  const notRecent = noticiasData.noticias.filter(
    (notRec) => notRec.notNew === "sim"
  );

  return notRecent.map((notExibida) => (
    <div className="flex flex-col items-center">
      <div className="flex flex-col justify-between sm:w-96 w-80 sm:h-[450px] h-[400px] bg-white p-4 rounded-2xl gap-4 shadow-xl">
        <img
          className=" h-1/2 object-cover rounded-2xl"
          src={noticiasData.noticias[Number(notExibida.id) - 1].notImageUrl}
        />
        <h2 className=" font-medium text-xl">
          {noticiasData.noticias[Number(notExibida.id) - 1].notTitle}
        </h2>
        <div className="flex justify-between items-center">
          <ButtonVejaMais noticiaID={`${notExibida.id}`}></ButtonVejaMais>
        </div>
      </div>
    </div>
  ));

  // return (
  //   <div className="flex flex-col items-center">
  //     <div className="flex flex-col justify-between w-96 h-[450px] bg-white p-4 rounded-2xl gap-4 shadow-xl">
  //       <img
  //         className=" h-1/2 object-cover rounded-2xl"
  //         src={noticiasData.noticias[Number(id) - 1].notImageUrl}
  //       />
  //       <h2 className=" font-medium text-2xl">
  //         {noticiasData.noticias[Number(id) - 1].notTitle}
  //       </h2>
  //       <div className="flex justify-between items-center">
  //         <ButtonVejaMais noticiaID={`${id}`}></ButtonVejaMais>
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default CardSm;
