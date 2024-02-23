import React from 'react'
import Redes from './Redes'

const Footer = () => {
  return (
    
    <footer className='bg-blue-hard text-white h-52 flex flex-col justify-center'>
      <div className=' flex justify-around items-center '>
      
      <picture>
      <img src='/img/LOGO FINAl.png' alt='Logo da NBArea' className='w-52'></img>
      </picture>

      <div>
        
        <Redes/>
      </div>

      <div>
        
        <ul className='mt-2 text-2xl'>
          <li><a href='https://www.youtube.com/@NBA' className='hover:underline hover:text-blue-500 hover:scale-105 transition-all duration-300'>NBA Youtube</a></li>
          <li><a href='https://www.lojanba.com/?gad_source=1&gclid=CjwKCAiA_tuuBhAUEiwAvxkgTu9gFjnBQvTWlT8z-jpkYx_zOHGLGGTfvnPMnKi5O4JX5vU_lBwXuxoCLrEQAvD_BwE' className='hover:underline hover:text-blue-500 hover:scale-105 transition-all duration-300'>NBA Store</a></li>
          <li><a href='https://www.nba.com/' className='hover:underline hover:text-blue-500 hover:scale-105 transition-all duration-300'>NBA.com</a></li>
          <li><a href='https://www.nbabasketballschool.com.br/' className='hover:underline hover:text-blue-500 hover:scale-105 transition-all duration-300'>NBA Brasil School</a></li>
        </ul>
      </div>

      <div>
        
        <picture>
          <a href='https://www.byronsolutions.com/' target='_blank'><img src='/img/logo-byron.png' alt='Logo da byron.solutions' className='max-w-80'></img></a>
        </picture>

      </div>
    </div>
    </footer>
  )
}

export default Footer