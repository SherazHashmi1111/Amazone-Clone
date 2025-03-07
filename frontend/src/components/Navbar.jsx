import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoLogoChrome } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { FaCartPlus } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

function Navbar() {
    const [openNav, setOpenNav] = useState(true)
    const toggleHandler = () => {
        setOpenNav(!openNav)
    };
    
  return (
    <header className=" flex w-full justify-between items-center h-[9vh] px-8 py-2  bg-white">
      <div className="">
        <IoLogoChrome className="text-5xl text-orange-500" />
      </div>

      <nav className="">
        <ul className={` flex space-x-6 text-3xl md:text-xl font-semibold gap-10 pl-10 pt-10 md:pt-0 md:flex-row flex-col absolute ${openNav ? 'top-[-100%]' : 'top-[9%]'} left-0 h-[60vh] w-full bg-white md:static md:bg-transparent md:h-auto md:w-auto md:flex md:space-x-6 md:top-0 md:left-0 duration-500 `}>
          <li >
            <NavLink to="/" className='hover:text-gray-400' >
              Home
            </NavLink>
          </li>
          <li >
            <NavLink to="/products" className='hover:text-gray-400'>
              Products
            </NavLink>
          </li>
          <li >
            <NavLink to="/services" className='hover:text-gray-400'>
              Services
            </NavLink>
          </li>
          <li >
            <NavLink to="/contact" className='hover:text-gray-400'>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="flex items-center space-x-4">
        <div className="flex gap-4 text-orange-500">
          <NavLink to="/search">
          <IoSearch className="text-3xl cursor-pointer" />
          </NavLink>
          <NavLink to="/cart">
          <FaCartPlus className="text-3xl cursor-pointer" />
          </NavLink>
          <NavLink to="/profile">
          <CgProfile className="text-3xl cursor-pointer"/>
          </NavLink>
        </div>
       
        <ion-icon name={`${openNav ? 'menu' : 'close'}`} className='text-4xl cursor-pointer md:hidden' onClick={toggleHandler}></ion-icon>
      </div>
    </header>
  );
}

export default Navbar;
