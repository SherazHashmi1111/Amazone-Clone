import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../store/ProductsSlice";
import Product from "../components/Product";
import Loader from "../components/layout/Loader";
import { useParams } from "react-router-dom";
import Pagination from '@mui/material/Pagination';

function AllProducts() {
  const dispatch = useDispatch();
  const params = useParams();
  let keyword = params.keyword;
  const [page, setPage] = useState(1);
  
  const { products, loading, error, resultPerPage, productCount } = useSelector((state) => state.products);
  
  
  useEffect(() => {
    if(error){
      return <p>Error {error.message}</p>
    }
    dispatch(getAllProducts({keyword,page}));
  }, [dispatch, keyword, error, page]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <div className="flex flex-col items-center">

        {products.length === 0 ? <p className="text-3xl text-center h-screen grid place-items-center">No Product Found</p> : <div className="flex flex-col-reverse md:flex-row">
          <div className=" h-screen w-[20vw]  "></div>

          <div className="w-[75%] ml-auto md:mr-6 m-auto grid grid-cols-3  gap-2 mt-5">
            <Product products={products} />
          </div>
        </div>}
        {resultPerPage < productCount && <div className="my-5">
        <Pagination count={10} color="secondary" page={page} onChange={(e,p) => {e.preventDefault(); setPage(p)}}/>
        </div>}
        </div>
      )}
    </Fragment>
  );
}

export default AllProducts;
