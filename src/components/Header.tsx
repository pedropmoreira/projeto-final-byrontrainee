import React from 'react'

const Header = () => {
  return (
    <header className='flex bg-blue-hard w-full h-24 justify-between text-white '>
      {/* div da logo*/}
      <div className='flex items-center pl-4'>
        <picture className='max-w-96 flex justify-evenly items-center drop-shadow-lg'>
          <img src='/img/LOGO FINAl.png' className='w-24'></img>
        </picture>
        <h1 className='text-5xl font-bold drop-shadow-lg'>
          NBAarea
        </h1>
      </div>
          
      <div className='flex  w-80 items-center justify-between text-xl font-semibold  '>
          <span><a href='#ultNoticias'>Ùltimas notícias</a></span>
          <span><a href='#times'>Times</a></span>
          <span><a href='#noticias'>Notícias</a></span>
      </div>
    </header>
  )
}

export default Header