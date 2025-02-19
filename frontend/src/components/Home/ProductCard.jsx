import {Link} from 'react-router-dom'
const ProductCard = (product) => {
  const productDetail = product.product;
console.log(productDetail);

  // imgUrl = productDetail
  const imgUrl = productDetail.images.map((img) => img.url);
  const numOfReviews = productDetail.numOfReviews;
  const name = productDetail.name;
  const rating = productDetail.ratings;
  const price = productDetail.price;

  return (
    <Link to={`/product/${productDetail._id}`} className="bg-white shadow-md rounded-lg overflow-hidden w-64 hover:transform hover:-translate-y-2 transition duration-200 hover:scale-110 cursor-pointer">
      {/* Product Image */}
      <img
        src={imgUrl}
        alt="Blue Tshirt"
        className="w-full h-72 object-cover"
      />

      {/* Product Info */}
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-600">{name}</h2>

        {/* Ratings */}
        <div className="flex items-center text-red-500 text-sm mt-1">
          {rating}Ratings
          <span className="text-gray-500 ml-2">({numOfReviews} Reviews)</span>
        </div>

        {/* Price */}
        <p className="text-red-600 font-bold text-lg mt-2">Rs{price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
