import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, fetchProduct } from "../../store/ProductsSlice";
import ProductCard from "./ProductCard";
import { useParams } from "react-router-dom";
import { Pagination, Slider, Stack, Typography } from "@mui/material";

function Products() {
  const dispatch = useDispatch();
  const params = useParams();
  const [page, setPage] = useState("1");
  const [price, setPrice] = useState([0, 25000]);
  const { products, loading, error } = useSelector((state) => state.product);
  const { resultPerPage, productCount } = products;

  const setPageNo = (event, value) => {
    setPage(value);
  };
  const priceHandler = (event, value) => {
    setPrice(value);
  };

  useEffect(() => {
    if (error) {
      return alert.error(error);
    }

    if (params.keyword || page) {
      dispatch(
        fetchProduct({
          keyword: params.keyword,
          page: Number(page),
          price: price,
        })
      );
    } else {
      dispatch(fetchProducts());
    }
  }, [dispatch, error, params, page, price]);

  if (products.products === undefined) {
    return;
  }

  return (
    <Fragment>
      {loading ? (
        <p className="bg-white text-3xl text-black flex items-center justify-center h-screen">
          loading...
        </p>
      ) : (
        <div className="bg-white flex flex-col-reverse  md:flex-row-reverse ">
          {/* Products */}
          {products.products.length === 0 ? (
            <p className="text-4xl w-full flex items-center justify-center text-gray-800 text-center h-screen ">
              No Product Found
            </p>
          ) : (
            <div className="h-auto w-[75vw]  flex flex-col min-h-screen items-center justify-center p-top-bot">
              <div className=" flex flex-col md:flex-row max-w-300 items-center justify-center gap-10 md:flex-wrap">
                {products.products.map((item) => (
                  <ProductCard key={Math.random()} product={item} />
                ))}
              </div>
              {resultPerPage < productCount && (
            <div className="pagination-box ">
              <Stack spacing={2}>
                <Pagination
                  count={10}
                  variant="outlined"
                  shape="rounded"
                  page={page}
                  onChange={setPageNo}
                  color="primary"
                />
              </Stack>
            </div>
          )}
            </div>
          )}
          {/* Filters */}
          <div className="w-[20vw] flex justify-center ">
            <div className="w-full md:w-[25vw] p-small   ">
              <Typography className="text-gray-800 text-center">Price</Typography>
              <Slider
                value={price}
                onChange={priceHandler}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                min={0}
                max={25000}
              />
            </div>
          </div>
          
        </div>
      )}
    </Fragment>
  );
}

export default Products;
