import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiUser } from "react-icons/bi";
import { AiOutlineUnlock } from "react-icons/ai";
import avtarPreview from "../assets/img.png";
import { registerUser } from "../store/UserSlice";
import { useDispatch } from "react-redux";

function Register() {
    const dispatch = useDispatch()
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    // avatar: null,
  });

  // Handle input change for text fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle file change
  const handleFileChange = () => {
    // const file = e.target.files[0];
    // setFormData((prevData) => ({
    //   ...prevData,
    //   avatar: file,
    // }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    dispatch(registerUser(formData));

    // Clear all input fields after submission
    setFormData({
      name: "",
      email: "",
      password: "",
    //   avatar: null,
    });

    // Clear file input manually
    document.getElementById("fileInput").value = "";
  };

  return (
    <div
      className="text-white h-[91vh] flex justify-center items-center bg-cover bg-center bg-no-repeat"
      style={{
        background:
          "url(https://images.unsplash.com/photo-1488415032361-b7e238421f1b?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
      }}
    >
      <div className="bg-slate-800/20 border border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm relative">
        <h1 className="text-4xl text-white font-bold text-center mb-6">
          Register
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="relative my-8">
            <input
              type="text"
              name="name"
              className="block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=""
              value={formData.name}
              onChange={handleChange}
              required
            />
            <label className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Your Name
            </label>
            <BiUser className="absolute top-0 right-4" />
          </div>

          <div className="relative my-8">
            <input
              type="email"
              name="email"
              className="block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=""
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Your Email
            </label>
            <BiUser className="absolute top-0 right-4" />
          </div>

          <div className="relative my-8">
            <input
              type="password"
              name="password"
              className="block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=""
              value={formData.password}
              onChange={handleChange}
              required
            />
            <label className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Your Password
            </label>
            <AiOutlineUnlock className="absolute top-0 right-4" />
          </div>

          {/* File Upload */}
          <div className="flex gap-2 text-[14px] mb-4">
            <img src={avtarPreview} alt="Avatar Preview" className="w-10 bg-white rounded-[50%] p-1" />
            <div className="bg-white rounded flex items-center px-2 gap-2">
              <div className="flex items-center space-x-2">
                <input
                  type="file"
                  id="fileInput"
                  name="avatar"
                  accept="image/*"
                  className="hidden"
                  onChange={handleFileChange}
                />
                <label
                  htmlFor="fileInput"
                  className="cursor-pointer  bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Upload File
                </label>
              </div>
              <span className="text-gray-700 overflow-hidden">
                {formData.avatar ? formData.avatar.name : "Choose a file"}
              </span>
            </div>
          </div>

          <button
            type="submit"
            className="w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-emerald-800 hover:bg-emerald-600 hover:text-white py-2 transition-colors duration-300 cursor-pointer"
          >
            Register
          </button>

          <div className="mt-4">
            <span className="mt-4">
              Already Have an Account? <Link to="/login">Login Here</Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
