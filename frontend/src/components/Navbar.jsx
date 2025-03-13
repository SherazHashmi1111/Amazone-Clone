import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoLogoChrome } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { FaCartPlus } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { useSelector } from "react-redux";
import UserOption from "./layout/UserOption";

function Navbar() {
  const [openNav, setOpenNav] = useState(true);
  const toggleHandler = () => {
    setOpenNav(!openNav);
  };
  const { isAuthenticated, user } = useSelector((state) => state.user);
  console.log(user);
  

  return (
    <header className="z-1000 flex w-full justify-between items-center h-[9vh] px-8 py-2  bg-white">
      <div className="">
        <IoLogoChrome className="text-5xl text-orange-700" />
      </div>

      <nav className="">
        <ul
          className={` flex space-x-6 text-3xl md:text-xl font-semibold gap-10 pl-10 pt-10 md:pt-0 md:flex-row flex-col absolute ${
            openNav ? "top-[-100%]" : "top-[9%]"
          } left-0 h-[60vh] w-full bg-white md:static md:bg-transparent md:h-auto md:w-auto md:flex md:space-x-6 md:top-0 md:left-0 duration-500 `}
        >
          <li>
            <NavLink to="/" className="hover:text-orange-800">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" className="hover:text-orange-800">
              Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="hover:text-orange-800">
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="hover:text-orange-800">
              About
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="flex items-center space-x-4">
        <div className="flex gap-4 text-orange-700">
          <NavLink to="/search">
            <IoSearch className="text-3xl cursor-pointer hover:text-orange-900" />
          </NavLink>
          <NavLink to="/cart">
            <FaCartPlus className="text-3xl cursor-pointer hover:text-orange-900" />
          </NavLink>
          {isAuthenticated ? <UserOption />:
            <NavLink to="/login">
              <CgProfile className="text-3xl cursor-pointer hover:text-orange-900" />
            </NavLink>
          }
        </div>

        <ion-icon
          name={`${openNav ? "menu" : "close"}`}
          className="text-4xl cursor-pointer md:hidden text-orange-700"
          onClick={toggleHandler}
        ></ion-icon>
      </div>
    </header>
  );
}

export default Navbar;
