import { CgProfile } from "react-icons/cg";
function ReviewCard(reviews) {
  
  const {name, rating, comment } = (reviews.review);
  
    
  return (
    <div className="review-card bg-white shadow-md rounded-lg p-6 mb-4 w-70 ">
        <h3 className="text-3xl text-amber-700 font-semibold mb-2"><CgProfile/></h3>
        <p className="text-gray-700 mb-4">{comment}</p>
        <div className="review-author flex flex-col justify-between  text-gray-600">
            <span>By {name}</span>
            <span className="bg-yellow-300 text-yellow-800 px-2 py-1 rounded">{rating} ★★★★★</span>
        </div>
    </div>
  )
}

export default ReviewCard