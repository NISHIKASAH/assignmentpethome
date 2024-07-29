import React, { useState, useEffect } from "react";
import {
  FaChevronDown,
  FaChevronUp,
  FaDog,
  FaMapMarkerAlt,
  FaBirthdayCake,
  FaFilter,
} from "react-icons/fa";

const FilterBar = ({ setFilteredData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [breed, setBreed] = useState("");
  const [animal, setAnimal] = useState("");
  const [location, setLocation] = useState("");

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };
  const fetchData = async () => {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const data = await res.json();
    console.log(data.pets);
    setFilteredData(data.pets);
  };
  const handleFilter = (e) => {
    const { name, value } = e.target;
    if (name === "breed") {
      setBreed(value);
    } else if (name === "location") {
      setLocation(value);
    } else if (name === "animal") {
      setAnimal(value);
    }
  };
  useEffect(() => {
    if (breed || location || animal) {
      fetchData();
    }
  }, [breed, location, animal]);
  return (
    <div className=" w-[50%] m-auto p-6 ">
      <button
        onClick={handleToggle}
        className="flex items-center justify-between w-[50%] m-auto bg-yellow-600 hover:bg-yellow-500 text-white py-2 px-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-600 transition duration-150 ease-in-out"
      >
        <span className="flex items-center">
          <FaFilter className="mr-2" />
          {isOpen ? "Hide Filters" : "Show Filters"}
        </span>
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </button>

      {isOpen && (
        <div className="mt-4 space-y-4">
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-600 flex items-center mb-2">
              <FaDog className="mr-2 text-yellow-600" />
              Breed
            </label>
            <select
              name="breed"
              onClick={handleFilter}
              className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-yellow-600 focus:border-yellow-600 transition duration-150 ease-in-out"
            >
              <option value="">All Breeds</option>
              {["Havanese", "Goldendoodle", "Boxer", "Cockatoo"].map(
                (breed, idx) => (
                  <option key={idx} value={breed}>
                    {breed}
                  </option>
                )
              )}
            </select>
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-600 flex items-center mb-2">
              <FaMapMarkerAlt className="mr-2 text-yellow-600" />
              Location
            </label>
            <select
              name="location"
              onClick={handleFilter}
              className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-yellow-600 focus:border-yellow-600 transition duration-150 ease-in-out"
            >
              <option value="">All Locations</option>
              {["Seattle", "Minneapolis", "Minneapolis", "Carol Stream"].map(
                (location, idx) => (
                  <option key={idx} value={location}>
                    {location}
                  </option>
                )
              )}
            </select>
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-600 flex items-center mb-2">
              <FaBirthdayCake className="mr-2 text-yellow-600" />
              Animal
            </label>
            <select
              name="animal"
              onClick={handleFilter}
              className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-yellow-600 focus:border-yellow-600 transition duration-150 ease-in-out"
            >
              <option value="">All Animals</option>
              {["dog", "reptails", "bird", "rabbit"].map((age, idx) => (
                <option key={idx} value={age}>
                  {age}
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={handleFilter}
            className="w-full bg-yellow-600 hover:bg-yellow-500 text-white py-2 px-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-600 transition duration-150 ease-in-out"
          >
            Apply Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default FilterBar;
