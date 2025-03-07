import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className=" bg-gray-800 text-white px-2 py-10 md:px-16 lg:px-28  ">
      <div className="grid  grid-cols-1 md:grid-cols-3 gap-8 w-[60%] md:w-full items-center mx-auto">
        <div className="">
          <h2 className="text-lg font-bold mb-4">About Us</h2>
          <p className="text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ex
            exercitationem fugiat
          </p>
        </div>
        <div className="">
          <h2 className="text-lg font-bold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-lg">
            <li>
              <Link
                to={"/"}
                className="hover:underline hover:text-gray-300 cursor-pointer"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to={"/about"}
                className="hover:underline hover:text-gray-300 cursor-pointer"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to={"/services"}
                className="hover:underline hover:text-gray-300 cursor-pointer"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to={"/contact"}
                className="hover:underline hover:text-gray-300 cursor-pointer"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="">
          <h2 className="text-lg font-bold mb-4">Follow Us</h2>
          <div className="flex gap-6 my-6 ">
            <Link to={"/"} className="mr-4">
              <FaFacebook size={24} className="text-blue-500" />
              <p>Facebook</p>
            </Link>
            <Link to={"/"} className="mr-4">
              <FaInstagram size={24} className="text-blue-300"/>
              <p>Instagram</p>
            </Link>
            <Link to={"/"} className="mr-4" >
              <FaTwitter size={24} className="text-orange-400"/>
              <p>Twitter</p>
            </Link>
          </div>
        </div>
      </div>
      <hr className="my-8"/>
      <p className="text-center mt-5">&copy; 2021 Your Name</p>
    </footer>
  );
}

export default Footer;
