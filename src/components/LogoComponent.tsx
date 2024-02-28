import React from "react";
import teamsdata from "@/datateams/teamsdata";

interface IProps {
  conferencia: string;
  cliqueTime: (team: any) => void;
  timeSelecionadoID: string;
}

const LogoComponent: React.FunctionComponent<IProps> = ({conferencia,cliqueTime,timeSelecionadoID,}) => {
  
  {/*erro estranho*/}
  const handleClick = (team) => {
    cliqueTime(team);
  };

  const timesExibidos = teamsdata.times.filter(
    (team) => team.teamConf === conferencia
  );

  return (
    <div className=" ">
      <picture className=" flex  flex-wrap">
        {timesExibidos.map((team) => (
          <img
            key={team.id}
            className={`bg-white-two h-12 w-12 rounded-lg m-1 cursor-pointer ${
              team.id === timeSelecionadoID ? "border-4 border-red" : ""
            }`}
            alt={`logo do ${team.teamName}`}
            src={team.imageUrl}
            onClick={() => handleClick(team)}
          ></img>
        ))}
      </picture>
    </div>
  );
};

export default LogoComponent;
