import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel, IconButton } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { Fragment, useEffect } from "react";
import { fetchProductDetail } from "../../store/ProductDetailsSlice";
import { useParams } from "react-router-dom";
import ReviewCard from "../Home/ReviewCard";
import HoverRating from '../Home/Ratings'
function ProductDetails() {
  const { id } = useParams();
  const productDetails = useSelector((state) => state.productDetail);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProductDetail(id));
  }, [dispatch, id]);
  if (productDetails === undefined) {
    return;
  }
  if (
    !productDetails.product ||
    Object.keys(productDetails.product).length === 0
  ) {
    return <p>Loading...</p>;
  }
  const product = productDetails.product.product;

  return (
    <Fragment>
      <div className="w-full bg-white text-black flex justify-center p-top-bot">
        <div className="w-[50vw] flex flex-col items-center justify-center md:flex-row">
          <div className="w-full h-[60vh] border-2 p-small border-white flex items-center justify-center">
            <Carousel
              className="rounded-xl h-[50vh]"
              prevArrow={({ handlePrev }) => (
                <IconButton
                  variant="text"
                  color="white"
                  size="lg"
                  onClick={handlePrev}
                  className="!absolute top-2/4 left-4 -translate-y-2/4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                    />
                  </svg>
                </IconButton>
              )}
              nextArrow={({ handleNext }) => (
                <IconButton
                  variant="text"
                  color="white"
                  size="lg"
                  onClick={handleNext}
                  className="!absolute top-2/4 !right-4 -translate-y-2/4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </IconButton>
              )}
            >
              <img
                src={product.images[0].url}
                alt="image 1"
                className="h-full w-full object-cover"
              />
              <img
                src={product.images[0].url}
                className="h-full w-full object-cover"
              />
              <img
                src={product.images[0].url}
                alt="image 3"
                className="h-full w-full object-cover"
              />
            </Carousel>
          </div>

          <div className="w-full md:h-[60vh] h-auto border-2 p-small border-white">
            <h3 className="text-2xl font-semibold">subscribe</h3>
            <p className="text-[8px]">
              Lorem ipsum dolor sit amet consectetur.
            </p>
            <hr className="w-[18vw] border-t-1" />
            <div className=" text-xl md:text-xl gap-2 text-gray-500 p-small flex flex-wrap">
              <HoverRating />
            </div>
            <hr className="w-[18vw] border-t-1" />
            <div className="text-2xl font-semibold">
              Rs {product.price}
              <br />
            </div>
            <form action="" className="h-30 w-full flex  ">
              <div className="flex flex-col justify-around h-full">
                <button className="w-15 h-8 rounded text-white text-xl bg-amber-900">
                  +
                </button>
                <input
                  type="number"
                  className="w-12 h-8 bg-amber-900 text-center text-white text-2xl rounded-xl"
                  defaultValue={0}
                  max={5}
                  min={0}
                />
                <button className="w-15 h-8 rounded text-white text-xl bg-amber-900">
                  -
                </button>
              </div>
              <div className="h-full w-full flex items-center justify-center">
                <button className="bg-amber-950 w-20 h-12 rounded-2xl text-white  cursor-pointer">
                  Add to Cart
                </button>
              </div>
            </form>
            <hr className="w-[18vw] border-t-1" />
            <p className="text-xl font-semibold">status: InStock</p>
            <hr className="w-[18vw] border-t-1" />
            <p className="text-xl font-semibold">Description</p>
            <p className="text-[14px]">{product.description}</p>
            <button className="h-14 w-40 rounded-2xl text-white text-xl bg-amber-900 cursor-pointer ">
              Submit Reviews
            </button>
          </div>
        </div>
      </div>
      <div className="bg-white reviews">
              <h2 className="text-black text-center text-5xl font-bold">Honest Reviews</h2>
      <h3>Reviews Heading</h3>
      {product.reviews && product.reviews[0] ? (
        <div className="">
          {product.reviews &&
            product.reviews.map((review) => (
              <ReviewCard key={Math.random()} review={review} />
            ))}
        </div>
      ) : (
        <p className="text-black text-center text-2xl font-bold">No Reviews Yet</p>
      )}
      </div>
    </Fragment>
  );
}

export default ProductDetails;
