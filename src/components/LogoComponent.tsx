import React from "react";
import teamsdata from "@/datateams/teamsdata";

interface IProps {
  conferencia: string;
  cliqueTime: (team: any) => void;
  timeSelecionadoID: string;
}

const LogoComponent: React.FunctionComponent<IProps> = ({
  conferencia,
  cliqueTime,
  timeSelecionadoID,
}) => {
  {
    /*erro estranho*/
  }
  const handleClick = (team: {
    id: string;
    teamName: string;
    imageUrl: string;
    teamConf: string;
    text: string;
    confTitle: string;
    divTitle: string;
  }) => {
    cliqueTime(team);
  };

  const timesExibidos = teamsdata.times.filter(
    (team) => team.teamConf === conferencia
  );

  return (
    <div className="">
      <picture className="flex flex-wrap justify-center">
        {timesExibidos.map((team) => (
          <img
            key={team.id}
            className={`bg-white h-14 w-14 rounded-lg m-1 p-[2px] cursor-pointer ${
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
