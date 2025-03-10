import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Search() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/search?keyword=${search.trim()}`); // Updates the URL
    }
  };
  const searchChangeHandler = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div className="h-screen w-full flex  justify-center items-center ">
      <form action="" className="mx-auto flex  flex-col md:flex-row md:gap-0 gap-4 items-center">
        <input
          type="text"
          className=" md:w-[35vw] w-[80vw] h-13 font-semibold text-2xl px-4 border border-gray-300 focus:outline-none focus:ring-0"
          onChange={searchChangeHandler}
        />
        <button
          className="bg-blue-800 font-semibold  md:text-2xl   md:px-2   text-white border-blue-800 cursor-pointer hover:text-blue-800 hover:bg-white w-[80vw] md:w-auto   h-13  border  "
          type="submit"
          onClick={submitHandler}
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default Search;
