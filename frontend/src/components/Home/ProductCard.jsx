import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const ProductCard = () => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden w-64 hover:transform hover:-translate-y-2 transition duration-200 hover:scale-110 cursor-pointer">
      {/* Product Image */}
      <img
        src="https://images.unsplash.com/photo-1625585445301-676203ae67fc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Blue Tshirt"
        className="w-full h-72 object-cover"
      />

      {/* Product Info */}
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-600">Blue Tshirt</h2>

        {/* Ratings */}
        <div className="flex items-center text-red-500 text-sm mt-1">
          <FaStar />
          <FaStar />
          <FaStarHalfAlt />
          <FaRegStar />
          <FaRegStar />
          <span className="text-gray-500 ml-2">(256 Reviews)</span>
        </div>

        {/* Price */}
        <p className="text-red-600 font-bold text-lg mt-2">₹3000</p>
      </div>
    </div>
  );
};

export default ProductCard;
