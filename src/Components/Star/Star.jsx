import { FaStar, FaRegStar } from "react-icons/fa";
import { FaStarHalfStroke } from "react-icons/fa6";
const Star = ({ rating }) => {
 const ratingStar = Array.from({length:5}, (elem, index) =>{
    let number = index + 0.5;
    return (
      <span key={index}>
        {rating >= index + 1 ? (
          <FaStar color="gold" fontSize={"1.5rem"} />
        ) : rating >= number ? (
          <FaStarHalfStroke color="gold" fontSize={"1.5rem"} />
        ) : (
          <FaRegStar color="gold" fontSize={"1.5rem"} />
        )}
      </span>
    );
 })
  return (<div className="flex gap-1 items-center">
    {ratingStar}
  </div>)
};

export default Star;
