import { useEffect, useState } from "react";
import Star from "../Star/Star";

const Card = ({item}) => {
    return (
      <div className="flex justify-center">
        <div className="grid grid-cols-3 gap-5">
          {item?.map((i) => (
            <div key={i._id} className="card w-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img src={i?.image} alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{i?.name}</h2>
                <p>{i?.recipe}</p>
                <Star rating={i?.rating}/>
                <div className="card-actions">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};

export default Card;