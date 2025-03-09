import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../store/ProductsSlice";
import Product from "../components/Product";
import Loader from "../components/layout/Loader";

function AllProducts() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  const { products, loading } = useSelector(
    (state) => state.products
  );
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <div className="flex flex-col-reverse md:flex-row">
            <div className=" h-screen w-[20vw]  "></div>

        <div className="w-[75%] ml-auto md:mr-6 m-auto grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
          <Product products={products} />
        </div>
        </div>
      )}
    </Fragment>
  );
}

export default AllProducts;
