import React from "react";
import img from "../../assets/img.png";
import { Bar } from "./StarRatings";

function ReviewCard({ review }) {
  return (
    <div className=" border shadow border-gray-200 p-2 w-[100%] flex flex-col items-center justify-center"> 
      <img src={img} alt="alt-img" className="md:w-40 w-30 rounded-2xl"/>
      <p className="text-2xl font-semibold">{review.name}</p>
      <Bar rating={review.rating} />
      <span className="overflow-auto p-5 text-justify text-gray-400">{review.comment}</span>
    </div>
  );
}

export default ReviewCard;
