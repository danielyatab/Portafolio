import { NavLink } from "react-router-dom"
import {  AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { links } from "../data"
import '../style/navbar.css'
import { useState } from "react";
export const Navbar = () => {



  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="nav fixed h-screen right-8 flex justify-center items-center z-10">
      <div className={
        `nav__menu fixed  w-full py-16 px-8 transition-all duration-700 ease 
        bg-white lg:bg-transparent
        dark:lg:bg-transparent
        dark:bg-gray-800  
        lg:static  lg:p-0 
        ${showMenu?'left-0':'-left-full'}`
      }>
        <ul  className="text-gray-800 text-md
                      dark:text-white dark:lg:text-gray-900 ">
          {links.map(({ name, icon, path }, index) => {
             return (<li key={index} className="py-1 
                                                lg:mt-2 lg:rounded-3xl">
              <NavLink 
                to={path} 
                className={({isActive}) => isActive 
                ?'nav__link flex items-center gap-2  transition-all duration-700 ease border-b-2 border-gray-200 dark:border-gray-700 nav__active text-secondary lg:p-3 lg:border-none lg:bg-gray-100 lg:w-10 lg:rounded-full lg:relative lg:hover:bg-secondary  lg:hover:text-white dark:lg:bg-gray-500 dark:lg:hover:bg-secondary'
                :'nav__link flex items-center gap-2 transition-all duration-700 ease border-b-2 border-gray-200 dark:border-gray-700 lg:border-none lg:bg-gray-100 lg:w-10 lg:rounded-full lg:relative lg:p-3  lg:hover:bg-secondary lg:hover:text-white dark:lg:bg-gray-500 dark:lg:hover:bg-secondary dark:lg:text-white'
                }
                onClick={()=> setShowMenu(!showMenu)}
                >
                {icon}
                <h3 className="nav__name 
                              dark:text-gray-200 
                              lg:absolute lg:top-0 lg:right-6 lg:text-white lg:bg-secondary lg:h-full lg:px-4 lg:py-2 lg:rounded-tl-3xl  lg:rounded-bl-3xl lg:hover:text-white"
                >
                {name}</h3>
              </NavLink>
            </li>)
          })}
        </ul>
      </div>

      <div 
        className="nav-toogle fixed top-2 right-2 flex justify-center items-center bg-gray-100 w-12 h-12 rounded-lg mb-2 cursor-pointer dark:bg-gray-700 lg:hidden"
        onClick={()=>setShowMenu(!showMenu)} > 
        {
          showMenu
          ?<AiOutlineClose className="text-3xl"/>
          :<AiOutlineMenu className="text-3xl"/>
        }
        
      </div>
    </nav>
  )
}
