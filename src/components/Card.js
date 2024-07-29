import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  const { name, images, city, id } = props.pet;
  return (
    <div className="max-w-md bg-white rounded-lg shadow-md overflow-hidden m-3">
      <Link to={"/pet/" + id}>
        <img
          className="w-full h-56 object-cover"
          src={images}
          alt={`${name}`}
        />
        <div className="p-4">
          <h2 className="text-xl font-bold text-gray-800">{name}</h2>
          <p className="text-gray-600">{city}</p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
