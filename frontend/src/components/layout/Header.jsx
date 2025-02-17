import Navbar from "./Navbar";
import { FaArrowDown } from "react-icons/fa";
function Header() {
  return (
    <div className="h-screen bg-gradient-to-t from-sky-600 to-indigo-400 flex items-center justify-center relative hero-section
    ">

 
      <Navbar />
      <div className="text-white flex flex-col items-center justify-center text-center gap-8 md:gap-15 ">
        <p className="text-xl md:text-4xl">Welcome to Ecommerce</p>
        <h1 className="uppercase text-xl font-bold md:font-extrabold md:text-5xl">
          Find Amazing Products Below
        </h1>
        <a
          href="#Products"
          className="bg-white text-slate-800 font-bold h-8 w-20 md:h-16 md:w-40 md:text-2xl  flex justify-center items-center gap-1 text-center rounded hover:text-white hover:bg-slate-800 duration-300 ease-in-out hover:border-2 border-white"
          >
          Scroll <FaArrowDown />
        </a>
      </div>


    </div>
  );
}

export default Header;
