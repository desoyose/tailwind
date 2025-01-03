import burguerMenu from '../assets/icon-hamburger.svg'
import { useState } from 'react'

export const NavBar = () => {
    const [menuClicked, setMenuClick]= useState(false);
    const handleClick = () => {
        setMenuClick(prevState =>!prevState);
    }

  return (
    <nav className='sm:h-[24px] z-10' >
        <ul className={`bg-white w-[329px] py-[39px]  h-[305px] absolute left-0 top-[106px] right-0 mx-auto flex-col 
        items-center place-content-around after:content-[""] after:absolute after:top-[-24px] after:right-0 
        after:border-[12px] after:border-t-transparent after:border-l-transparent after:border-r-white 
        after:border-b-white text-Dark-grayish-blue text-xl ${menuClicked ? 'flex' : 'hidden'} 
        sm:flex sm:after:hidden sm:bg-transparent sm:flex-row sm:top-0 sm:w-[400px] sm:h-full sm:py-0 sm:relative sm:text-white
        md:w-[500px]`}>
            <li className='cursor-pointer'>About</li>
            <li className='cursor-pointer'>Services</li>
            <li className='cursor-pointer'>Projects</li>
            <li className='cursor-pointer bg-Yellow w-[140px] h-[56px] grid place-content-center 
            rounded-full text-Very-dark-desaturated-blue uppercase sm:bg-white sm:hover:bg-opacity-25 sm:hover:text-white'>Contact</li>
        </ul>
        <div className='cursor-pointer sm:hidden' onClick={handleClick}>
            <img src={burguerMenu} alt="" />
        </div>
    </nav>    
)
}

  
  
  