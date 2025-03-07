import React from "react";
import { Link } from "react-router-dom";
import { BiUser } from "react-icons/bi";
import { AiOutlineUnlock } from "react-icons/ai";

function Login() {
  return (
    <div
      className="text-white h-[91vh]  flex justify-center items-center bg-cover bg-center bg-no-repeat"
      style={{
        background:
          "url(https://images.unsplash.com/photo-1488415032361-b7e238421f1b?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
      }}
    >
      <div className="bg-slate-800/40 border border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm  relative ">
        <h1 className="text-4xl text-white font-bold text-center mb-6">Login</h1>
        <form action="">
        <div className="relative my-8 ">
          <input type="email" name="email" id="email" className="block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer" placeholder=""/>
          <label htmlFor="" className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" >Your Email</label>
          <BiUser className="absolute top-0 right-4"/>
        </div>
        <div className="relative my-8 ">
          <input type="password" name="password" id="password" className="block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer" placeholder=""/>
          <label htmlFor="" className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" >Your Password</label>
          <AiOutlineUnlock className="absolute top-0 right-4"/>
        </div>
        <div className="flex justify-between items-center mb-6">
            <div className="flex gap-2 items-center">
                <input type="checkbox" name="" id="" />
                <label htmlFor="Remember Me">Remember Me</label>
            </div>
            <Link to={'/forgot'} className="text-blue-500">Forgot Password?</Link>
        </div>
        <button type="submit" className="w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-emerald-800  hover:bg-emerald-600 hover:text-white py-2 transition-colors duration-300 cursor-pointer ">Login</button>

        <div className="mt-4">
            {/* Link from npm i react-router-dom */}
            <span className="mt-4">New Here? <Link to='/register'>Create An Account</Link></span>
        </div>
        
        </form>
      </div>
    </div>
  );
}

export default Login;
