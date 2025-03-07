import React, { Fragment } from "react";
import Button from "./UI/Button";
import { Bar, Foo } from "./UI/StarRatings";
import { Link } from "react-router-dom";

function Product({ products }) {
  return (
    <Fragment>
      {products.map((product) => (
        <div
          key={product._id}
          className="bg-gray-100 shadow-md p-2 my-4 rounded-2xl hover:shadow-lg transform cursor-pointers  hover:-translate-y-1 transition duration-300"
        >
          <img
            src={product.images.map((image) => image.url)}
            alt={product.name}
            className="w-full h-80 object-cover rounded-2xl"
          />
          <h3 className="text-xl font-bold text-gray-800">{product.name}</h3>
          <div className="flex flex-col">
            <Bar rating={product.rating} />
            <span className="text-gray-500">(256) Reviews</span>
          </div>
          <p className=" font-semibold text-orange-600">
            Price: ${product.price}
          </p>
          <Link >
          <Button>Product Details</Button>
          </Link>
        </div>
      ))}
    </Fragment>
  );
}

export default Product;
