import { CiSearch } from "react-icons/ci";
import { IoBagHandleSharp } from "react-icons/io5";
import { IoReorderThree } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
function Navbar() {
  return (
    <nav className="w-full h-12 md:h-15 absolute top-0 left-0 md:text-2xl flex justify-between items-center bg-slate-200 text-gray-800 font-semibold">
      <div className="w-40 lobster md:w-70 text-center font-extrabold text-amber-700 text-2xl md:text-4xl font-serif ">
        Amazone
      </div>
      <div className="md:flex gap-2 md:gap-5 hidden ">
        <div className="cursor-pointer hover:text-amber-600 ">Home</div>
        <div className="cursor-pointer hover:text-amber-600 ">Product</div>
        <div className="cursor-pointer hover:text-amber-600 ">Contact</div>
        <div className="cursor-pointer hover:text-amber-600 ">About</div>
      </div>
      <div className=" md:flex hidden w-100 justify-center gap-10 text-4xl ">
        <CiSearch className="cursor-pointer hover:text-amber-600" />
        <IoBagHandleSharp className="cursor-pointer hover:text-amber-600" />
        <CgProfile className="cursor-pointer hover:text-amber-600" />
      </div>
      <IoReorderThree className="flex cursor-pointer md:hidden text-center w-20 text-3xl hover:text-amber-600" />
    </nav>
  );
}

export default Navbar;
