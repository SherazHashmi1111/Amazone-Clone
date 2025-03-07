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
    <div className="h-screen flex justify-center items-center">
      <form action="">
        <input
          type="text"
          className=" w-[35vw] h-13 font-semibold text-2xl px-4 border border-gray-300 focus:outline-none focus:ring-0"
          onChange={searchChangeHandler}
        />
        <button
          className="bg-blue-800 font-semibold  text-2xl text-white border-blue-800 cursor-pointer hover:text-blue-800 hover:bg-white  h-13 w-[10vw] border px-4 "
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
