import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Petdetails = () => {
  const { id } = useParams();
  const [uniquePet, setUniquePet] = useState([]);
  const fetchData = async () => {
    const res = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`);
    const data = await res.json();
    setUniquePet(data.pets);
  };
  useEffect(() => {
    fetchData();
  }, []);
  if (uniquePet.length === 0) return;
  const { animal, breed, description, city, name, state } = uniquePet[0];
  return (
    <div className="flex">
      <div className="flex rounded-md  m-3 items-center">
        <div className="h-full w-full md:h-[500px] md:w-[500px] ">
          <img
            src={uniquePet[0]?.images[0]}
            alt="Pet"
            className="h-full w-full rounded-md object-cover p-3"
          />
        </div>
        <div className=" md:w-[50%] ml-12 ">
          <div className="p-6 rounded-lg border border-gray-200 bg-white shadow-xl">
            <h1 className="flex items-center text-2xl font-bold text-gray-800">
              {name}
              <span className="ml-3 text-gray-500 text-xl">&#8599;</span>
            </h1>
            <p className="mt-3 text-lg text-gray-700">{description}</p>
            <div className="mt-4 space-y-2">
              <div className="text-sm font-medium text-gray-800">
                <span className="font-semibold">Breed:</span> {breed}
              </div>
              <div className="text-sm font-medium text-gray-800">
                <span className="font-semibold">Animal:</span> {animal}
              </div>
              <div className="text-sm font-medium text-gray-800">
                <span className="font-semibold">City:</span> {city}
              </div>
              <div className="text-sm font-medium text-gray-800">
                <span className="font-semibold">State:</span> {state}
              </div>
            </div>
            <div className="mt-4 flex items-center">
              <img
                className="h-12 w-12 rounded-full shadow-lg border-2 border-gray-300"
                src={uniquePet[0]?.images[0]}
                alt="Profile"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Petdetails;
