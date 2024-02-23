import React from 'react'

interface UltimasNoticiasProps {
    
    aparece:boolean;
    tamanhoDinamico:boolean;
    
  }

const UltimasNoticias:React.FunctionComponent<UltimasNoticiasProps>= ({aparece,tamanhoDinamico}) => {
    
    const tamDinamicoClass = `flex ${tamanhoDinamico ? 'w-80' : 'w-44'} items-center justify-between text-xl font-semibold `

    return (


    <div className={tamDinamicoClass}>
          {aparece && <span><a href='#ultNoticias' className='hover:underline hover:text-blue-500 hover:scale-105 transition-all duration-300'>Ùltimas notícias</a></span>}
          <span><a href='#times' className='hover:underline hover:text-blue-500 hover:scale-105 transition-all duration-300'>Times</a></span>
          <span><a href='#noticias' className='hover:underline hover:text-blue-500 hover:scale-105 transition-all duration-300'>Notícias</a></span>
      </div>
  )
}

export default UltimasNoticias