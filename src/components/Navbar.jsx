import { NavLink } from "react-router-dom"
import {  AiOutlineMenu } from 'react-icons/ai'
import { links } from "../data"
import '../style/navbar.css'
import { useState } from "react";
export const Navbar = () => {



  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="nav">
      <div className={
        `nav__menu fixed bg-gray-100 dark:bg-gray-600 w-full py-16 px-8 transition-all duration-700 ease
        ${showMenu?'left-0':'-left-full'}`
      }>
        <ul  className="text-gray-800 dark:text-gray-200 text-md">
          {links.map(({ name, icon, path }, index) => {
             return (<li key={index} className="py-1">
              <NavLink to={path} className={({isActive}) => isActive 
                ?'nav__link flex items-center gap-2  border-b-2 border-gray-200 nav__active text-green-700'
                :'nav__link flex items-center gap-2  border-b-2 border-gray-200 '
                }>
                {icon}
                <h3 className="nav__name dark:text-gray-200 ">{name}</h3>
              </NavLink>
            </li>)
          })}
        </ul>
      </div>

      <div 
        className="nav-toogle fixed top-2 right-2 flex justify-center items-center bg-gray-100 w-12 h-12 rounded-lg mb-2 cursor-pointer"
        onClick={()=>setShowMenu(!showMenu)} > 
        <AiOutlineMenu className="text-3xl"/>
      </div>
    </nav>
  )
}
