import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../store/ProductsSlice";
import Product from "../components/Product";
import Loader from "../components/layout/Loader";
import { useParams } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import Slider from "@mui/material/Slider";
import MetaData from "../components/layout/MetaData";

const Categories = [
  "Apple",
  "Infnix",
  "Samsung",
  "Books",
  "Fish",
  "Riding",
  "Vivo",
  "Cars",
  "Electronics",
  "Household",
];

function AllProducts() {
  const dispatch = useDispatch();
  const params = useParams();
  let keyword = params.keyword;
  const [currentPage, setPage] = useState(1);
  let page = currentPage;
  const [value, setValue] = useState([0, 10000]);
  const [category, setCategory] = useState("");

  const valeHandler = (e, p) => {
    setValue(p);
  };

  useEffect(() => {
    dispatch(getAllProducts({ keyword, page, value, category }));
  }, [dispatch, keyword, page, value, category]); // Removed 'error' to prevent unnecessary re-renders

  const { products, loading, error } = useSelector((state) => state.products);
  // Handle the error separately in your component's return
  if (error) {
    return <p>Error: {error}</p>;
  }
  if (products === undefined) {
    return;
  }

  return (
    <Fragment>
      
      {loading ? (
        <Loader />
      ) : (
        <div className="flex flex-col items-center">
          <MetaData title="Products" />
          <div className="flex flex-col  md:flex-row w-[90%] items-center ">
            <div className=" md:h-screen md:w-[20%] w-[40%]   ">
              <div className=" mx-auto md:mt-20 mt-10 flex flex-col gap-4 font-semibold">
                <h3 className="text-2xl">Price</h3>
                <Slider
                  value={value}
                  onChange={valeHandler}
                  min={0}
                  max={10000}
                />
                <h3 className="text-2xl">Category</h3>
                <ul className="">
                  {Categories.map((category) => (
                    <li
                      className="text-xl text-gray-600 hover:text-orange-700 cursor-pointer"
                      key={category}
                      onClick={() => {
                        setCategory(category);
                      }}
                    >
                      {category}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {products.length === 0 ? (
              <p className="text-3xl text-center  md:h-screen h-[50vh] grid place-items-center w-[80%] ">
                No Product Found
              </p>
            ) : (
              <div className="w-[75%] ml-auto md:mr-6 m-auto grid grid-cols-3  gap-2 mt-5">
                <Product products={products} />
              </div>
            )}
          </div>

          <div className="my-5">
            <Pagination
              count={10}
              color="secondary"
              page={page}
              onChange={(e, p) => {
                e.preventDefault();
                setPage(p);
              }}
            />
          </div>
        </div>
      )}
    </Fragment>
  );
}

export default AllProducts;
