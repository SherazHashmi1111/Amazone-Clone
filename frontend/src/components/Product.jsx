import React, { Fragment } from "react";
import Button from "./UI/Button";
import { Bar, Foo } from "./UI/StarRatings";
import { Link } from "react-router-dom";

function Product({ products }) {
  if (products === undefined) {
    return;
  }
  
  return (
    <Fragment>
      {products.map((product) => (
        <div
          key={product._id}
          className="bg-gray-100 shadow-md md:p-2 my-4 rounded-2xl hover:shadow-lg transform cursor-pointers  hover:-translate-y-1 transition duration-300 pb-2 "
        >
          <img
            src={product.images.map((image) => image.url)}
            alt={product.name}
            className="w-full md:h-80 h-20 object-cover rounded md:rounded-2xl"
          />
          <h3 className="md:text-xl font-bold text-gray-800 text-[12px]">{product.name}</h3>
          <div className="flex flex-col">
            <Bar rating={product.rating} dimension='14px' spacing='2px' />
            <span className="text-gray-500 md:text-xl text-[12px]">({product.reviews.length}) Reviews</span>
          </div>
          <p className=" md:font-semibold text-orange-600 text-[12px] md:text-xl">
            Price: ${product.price}
          </p>
          <a href={`/product/${product._id}`}>
            <Button className='bg-amber-600 text-[7px] w-[90%] md:w-auto mx-auto md:text-xl text-white md:px-2  rounded-sm cursor-pointer'>Product Details</Button>
          </a>
        </div>
      ))}
    </Fragment>
  );
}

export default Product;
