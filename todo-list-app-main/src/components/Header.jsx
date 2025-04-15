import React from 'react'

const Header = ({ tab, setTab }) => {
  return (
    <header className='border-b border-white/20 mb-4'>
      <nav className='w-full'>
        <ul className='flex justify-around text-white [&>li]:py-2 [&>li]:w-full [&>li]:cursor-pointer'>
          <li 
            className={tab==='day'?'border-b-2 border-white font-bold':''}
            onClick={()=>setTab('day')}
          >Día</li>
          <li
            className={tab==='week'?'border-b-2 border-white font-bold':''}
            onClick={()=>setTab('week')}
          >Semana</li>
          <li
            className={tab==='month'?'border-b-2 border-white font-bold':''}
            onClick={()=>setTab('month')}
          >Mes</li>
          <li
            className={tab==='year'?'border-b-2 border-white font-bold':''}
            onClick={()=>setTab('year')}
          >Año</li>
        </ul>
      </nav>
    </header>
  )
}


export default Header