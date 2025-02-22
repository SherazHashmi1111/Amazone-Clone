import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, fetchProduct } from "../../store/ProductsSlice";
import ProductCard from "./ProductCard";
import { useParams } from "react-router-dom";
import { Pagination, Stack } from "@mui/material";

function Products() {
  const dispatch = useDispatch();
  const params = useParams();
  const [page, setPage] = useState("1");
  const { products, loading, error } = useSelector((state) => state.product);

  const setPageNo = (event, value) => {
    setPage(value);
    
  };
  
  useEffect(() => {
    if (error) {
      return alert.error(error);
    }
    
    if (params.keyword || page) {
      dispatch(fetchProduct({ keyword: params.keyword, page: Number(page) }));
    } else {
      dispatch(fetchProducts());
    }
  }, [dispatch, error, params, page]);
 
  

  if (products.products === undefined) {
    return;
  }

  if (products.products.length === 0) {
    return (
      <p className="text-3xl text-center h-screen bg-gray-700 flex items-center justify-center ">
        No Product Found
      </p>
    );
  }

  return (
    <Fragment>
      {loading ? (
        <p>loading...</p>
      ) : (
        <div className="h-auto bg-white flex flex-col min-h-screen items-center justify-center p-top-bot">
          <div className=" flex flex-col md:flex-row max-w-300 items-center justify-center gap-10 md:flex-wrap">
            {products.products.map((item) => (
              <ProductCard key={Math.random()} product={item} />
            ))}
          </div>
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
            {/* <Pagination
            activePage={currentPage}
            itemsCountPerPage={products.resultPerPage}
            totalItemsCount={products.productCount}
            onChange={setCurrentPageNo}
            nextPageText="next"
            prevPageText="prev"
            firstPageText="first"
            lastPageText="last"
            itemClass="page-item"
            linkClass="page-link"
            activeClass="pageItemActive"
            activeLinkClass="pageLinkActive"
            /> */}
          </div>
        </div>
      )}
    </Fragment>
  );
}

export default Products;
