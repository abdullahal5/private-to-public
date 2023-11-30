import Star from "../Star/Star";

const MealsCard = ({item}) => {
  // console.log(item)
    return (
      <div>
        <div key={item._id} className="card w-96 bg-base-100  shadow-xl">
          <figure className="px-10 pt-10">
            <img src={item?.image} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center space-y-3">
            <h2 className="card-title">Title: {item?.title}</h2>
            <p>{item?.recipe}</p>
            <p>Price: ${item?.price}</p>
            <Star rating={item?.rating} />
          </div>
        </div>
      </div>
    );
};

export default MealsCard;