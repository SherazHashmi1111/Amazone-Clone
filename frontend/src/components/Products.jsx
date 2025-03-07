import React, { Fragment, useEffect } from "react";
import Product from "./Product";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../store";
import Loader from "./layout/Loader";
import Alert from '@mui/material/Alert';




function Products() {
    const dispatch = useDispatch();
    
    const {products, loading, error} = useSelector((state) => state.products);
    useEffect(() => {
      if (error) {
        return <Alert severity="error">{error}</Alert>;
      }
        dispatch(getAllProducts());
    }, [dispatch, error]);
    
    
    
    
  return (
    <Fragment>
        {loading ? <Loader /> : 
        <section id="products" className="container mx-auto mt-10 mb-10 flex flex-col items-center">
        <h2 className="text-4xl font-bold text-gray-800 mt-10 mb-2">Feature Products</h2>
        <div className="w-[17%] mb-10 bg-amber-800 h-1 rounded-full"></div>
        <div className="w-[70%] m-auto grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
          <Product products={products} />
        </div>
      </section>
        }
    </Fragment>
  );
}

export default Products;
