import React, { useState } from "react";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";

function ProductCarousel({ images }) {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    if (current === 0) {
      setCurrent(images.length - 1);
    } else setCurrent(current - 1);
  };
  const nextSlide = () => {
    if (current === images.length - 1) {
      setCurrent(0);
    } else setCurrent(current + 1);
  };
  return (
    <div className="overflow-hidden mx-auto relative">
      <div
        className={"flex transition ease-out duration-400 w-full "}
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, i) => (
          <img
            src={img.url}
            key={i}
            alt=""
            className="rounded-2xl "
          />
        ))}
      </div>
      <div className="absolute flex w-full h-full top-0 items-center justify-between p-5 text-white opacity-70 text-3xl ">
        <button className="cursor-pointer" onClick={prevSlide}>
          <FaArrowCircleLeft />
        </button>
        <button className="cursor-pointer" onClick={nextSlide}>
          <FaArrowCircleRight />
        </button>
      </div>

      <div className="absolute bottom-0 py-5 w-full flex justify-center gap-4">
        {images.map((s,i) => {
            return <div key={"circle"+i} className={`h-3 w-3 cursor-pointer rounded-full ${i=== current ? 'bg-white' : 'bg-gray-400'}`}></div>
        })}
      </div>
    </div>
  );
}

export default ProductCarousel;
