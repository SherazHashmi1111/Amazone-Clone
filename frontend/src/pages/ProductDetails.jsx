import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetail } from "../store/ProductDetailSlice";
import ProductCarousel from "../components/UI/ProductCarousel";
import Loader from "../components/layout/Loader";
import { Bar, Foo } from "../components/UI/StarRatings";
import Button from "../components/UI/Button";

function ProductDetails() {
  const dispatch = useDispatch();
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    dispatch(getProductDetail(id));
  }, [dispatch, id]);

  const productDetail = useSelector((state) => state.product);
  const { product, loading, error } = productDetail;

  if (product.images === undefined) {
    return;
  }
  if (error) {
    return <h1>{error.massage}</h1>;
  }

  const { _id, rating, price, name, numOfReviews, stock, description } =
    product;
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <div
          className="w-[90vw]   my-[10vh]  
        rounded-2xl m-auto flex md:flex-row-reverse flex-col-reverse  items-center border border-gray-300 shadow-xl"
        >
          <div className="md:w-[50%] w-[70%] md:px-5  md:border-l-1 border-b md:border-b-0 mb-5 md:mb-0 border-gray-300">
            <span className="text-2xl font-semibold">{name}</span>
            <p className="">Product # <span className="text-blue-500">{_id}</span></p>
            <hr className="my-2 w-[70%]"/>
            <Bar rating={rating} />
            <span className="ml-3 text-gray-400">({numOfReviews} Reviews)</span>
            <hr className="my-2 w-[70%]"/>
            <p className="text-xl font-bold text-orange-700">Rs {price}</p>
            <div className="">
              <form action="">
                <div className="flex flex-col gap-1">
                  <button className="bg-amber-800 cursor-pointer w-15 text-white rounded hover:bg-amber-800">+</button>
                  <input className="w-15 border outline-none rounded px-1" min={0} max={10} step={1} type="number" name="" id="" />
                  <button className="bg-amber-900  cursor-pointer w-15 text-white rounded hover:bg-amber-900 ">-</button>
                </div>
                <div className="">
                  <Button>Add to Cart</Button>
                </div>
              </form>
            </div>
            <p>
              Status :{" "}
              <span className="text-green-600 font-semibold">
                {stock === 0 ? "Out of Stock" : "In Stock"}
              </span>
            </p>
            <p>
              Description : <br /><span className="text-blue-600">{description}</span>
            </p>
            <Button>Submir Review</Button>
          </div>
          <div className="md:w-[40%] w-[70%] mx-auto py-5 md:py-0  ">
            <ProductCarousel images={product.images} />
          </div>
        </div>
      )}
    </Fragment>
  );
}

export default ProductDetails;
