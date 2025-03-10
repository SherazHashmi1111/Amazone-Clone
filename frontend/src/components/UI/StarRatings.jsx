import { useState } from "react";
import StarRatings from "react-star-ratings";

const Foo = () => {
  const [rating, setRating] = useState(0);

  const changeRating = (newRating) => {
    setRating(newRating);
  };

  return (
    <StarRatings
      rating={rating}
      starRatedColor="orange"
      changeRating={changeRating}
      numberOfStars={5}
      name="rating"
    />
  );
};

const Bar = (props) => {
  return (
    <StarRatings rating={props.rating || 2.403} starDimension={props.dimension || '30px'} starSpacing={props.spacing || '5px'} 
    starRatedColor="orange"
    starEmptyColor="gray"
    starHoverColor="orange"

    />
  );
};

export { Foo, Bar }; // ✅ Exporting both components
