import { useEffect, useState } from "react";
import Star from "../Star/Star";
import { Link } from "react-router-dom";

const Card = ({item}) => {
  // console.log(item)
    return (
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-flow-col-2 lg:grid-cols-3 gap-5">
          {item?.map((i) => (
              
            <div key={i._id} className="card w-96 bg-base-100  shadow-xl">
              <figure className="px-10 pt-10">
                <img src={i?.image} alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center space-y-3">
                <h2 className="card-title">{i?.title}</h2>
                <p>{i?.description}</p>
                <Star rating={i?.rating} />
                <p>price ${i.price}</p>
                <div className="card-actions">
                  <Link to={`/mealsdetailspage/${i?._id}`}>
                    <button className="btn bg-[#02c39a] text-white">
                      Details Button
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};

export default Card;