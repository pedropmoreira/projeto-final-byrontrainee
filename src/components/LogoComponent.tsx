import React from 'react'
import teamsdata from '@/datateams/teamsdata'

interface IProps {
  conferencia : string;
}

const LogoComponent : React.FunctionComponent<IProps> = ({conferencia}) => {
  
  const  timesExibidos = teamsdata.times.filter(team=> team.teamConf === conferencia)

  return (
    <div className=' '>
        <picture className=' flex  flex-wrap'>
            
            {timesExibidos.map((team)=>(
              
              <img className=' bg-white-two h-12 w-12  rounded-lg m-1 cursor-pointer ' alt={`logo do ${team.teamName}`} src={`${team.imageUrl}` }></img>
            ))}
            
        </picture>
    </div>
  )
}

export default LogoComponent