import { CiSearch } from "react-icons/ci";
import { IoBagHandleSharp } from "react-icons/io5";
import { IoReorderThree } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { RiLogoutBoxLine } from "react-icons/ri";
import { IoLogInSharp } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../../store/AuthSlice";
import { Link } from "react-router-dom";

function Navbar() {
  const auth = useSelector((state) => state.auth.isAuth);
  const dispatch = useDispatch();
  const loginHandler = () => {
    dispatch(authActions.login())
  }
  const logoutHandler = () => {
    dispatch(authActions.logout())
  }

  return (
    <nav className="w-full h-[8vh]  z-10 md:text-2xl flex justify-between items-center bg-slate-200 text-gray-800 font-semibold">
      <Link to={'/'} className="w-40 lobster md:w-70 text-center font-extrabold text-amber-700 text-2xl md:text-4xl font-serif ">
        Amazone
      </Link>
      {auth && <div className="md:flex gap-2 md:gap-5 hidden ">
        <Link to={'/'} className="cursor-pointer hover:text-amber-600 ">Home</Link>
        <Link to={'/products'} className="cursor-pointer hover:text-amber-600 ">Products</Link>
        <Link to={'/about'} className="cursor-pointer hover:text-amber-600 ">About</Link>
      </div>}
      <div className=" hidden md:flex  text-center justify-center w-50 text-3xl">
       {auth && <div className="flex items-center justify-center gap-4 ">
        <Link to={'/products/search'}>
          <CiSearch className="cursor-pointer hover:text-amber-600" />
        </Link>
          <IoBagHandleSharp className="cursor-pointer hover:text-amber-600" />
          <CgProfile className="cursor-pointer hover:text-amber-600" />
          <RiLogoutBoxLine className="flex cursor-pointer text-center text-3xl hover:text-amber-600" onClick={logoutHandler}/>
        </div>}
        {!auth && <div className="flex items-center justify-center gap-1">
          <IoLogInSharp className="flex cursor-pointer  text-center w-20 text-3xl hover:text-amber-600" onClick={loginHandler}/>
        </div>}
      </div>
      <IoReorderThree className="flex cursor-pointer md:hidden text-center w-20 text-3xl hover:text-amber-600" />
    </nav>
  );
}

export default Navbar;
