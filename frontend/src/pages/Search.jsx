import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MetaData from "../components/layout/MetaData";

function Search() {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/products/${keyword.trim()}`); // Updates the URL
    }else{
      navigate(`/products`); // Updates the URL
    }
  };
  const searchChangeHandler = (e) => {
    setKeyword(e.target.value);
  };
  return (
    <div className="h-screen w-full flex  justify-center items-center ">
      <MetaData title={`Search -- ECOMMERCE`} />
      <form
        action=""
        className="mx-auto flex  flex-col md:flex-row md:gap-0 gap-4 items-center"
        onSubmit={submitHandler}
      >
        <input
          type="text"
          className=" md:w-[35vw] w-[80vw] h-13 font-semibold text-2xl px-4 border border-gray-300 focus:outline-none focus:ring-0"
          onChange={searchChangeHandler}
        />
        <input
          className="bg-blue-800 font-semibold  md:text-2xl   md:px-2   text-white border-blue-800 cursor-pointer hover:text-blue-800 hover:bg-white w-[80vw] md:w-auto   h-13  border  "
          type="submit"
          value="Search"
        />
      </form>
    </div>
  );
}

export default Search;
