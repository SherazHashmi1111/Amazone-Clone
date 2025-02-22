
function ReviewCard(review) {
    console.log(review);
    
  return (
    <div className="review-card bg-white shadow-md rounded-lg p-6 mb-4">
        <h3 className="text-xl font-semibold mb-2">{review.title}</h3>
        <p className="text-gray-700 mb-4">{review.content}</p>
        <div className="review-author flex justify-between items-center text-gray-600">
            <span>By {review.author}</span>
            <span className="bg-yellow-300 text-yellow-800 px-2 py-1 rounded">{review.rating} ★</span>
        </div>
    </div>
  )
}

export default ReviewCard