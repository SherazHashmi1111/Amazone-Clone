import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Search() {
    const [keyword, setKeyword] = useState('');
    const navigate = useNavigate();
    const submitHandler = (e)=> {
        e.preventDefault();
        
        if(keyword.trim()){
            navigate(`/products/${keyword}`)
        }else{
            navigate('/products')
        }

    }
  return (
    <div className="h-screen w-full flex items-center justify-center bg-sky-300">
        <form onSubmit={submitHandler} className="border-2 w-[70vw] h-[8vh]">
            <input type="text" onChange={(e) => {setKeyword(e.target.value)}} name="" id="" className="h-full w-[80%] border-2 text-3xl"/>
            <input type="submit" value="search" name="" id="" className="h-full w-[20%] text-2xl bg-sky-800 cursor-pointer"/>
        </form>
    </div>
  )
}

export default Search