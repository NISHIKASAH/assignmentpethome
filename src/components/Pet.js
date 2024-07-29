import Card from "./Card";
import { useContext, useEffect, useState } from "react";
import context from "../contextapi/useContext";
import FilterBar from "./Filter";

const Pet = () => {
  const [value, setValue] = useState("");
  const [PetsDetails, setPetDetails] = useState([]);
  const { setPetData } = useContext(context);
  const [filteredData, setFilteredData] = useState([]);
  const [pages, setPages] = useState(1);
  const totalPages = PetsDetails.length;
  const getData = async () => {
    const res = await fetch("http://pets-v2.dev-apis.com/pets");
    const data = await res.json();
    setPetDetails(data.pets);
    setFilteredData(data.pets.slice(5, 10));
    setPetData(data.pets);
  };

  useEffect(() => {
    getData();
  }, []);
  const setChange = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const filtered = PetsDetails.filter((pet) => {
      return pet.name.toLowerCase().includes(value.toLowerCase());
    });
    setFilteredData(filtered);
    setValue("");
  };

  const handleClick = (e, idx) => {
    if (idx > 0 && idx <= PetsDetails.length / 5) {
      setPages(idx);
    } else {
      return;
    }
  };

  if (filteredData.length === 0)
    return (
      <div
        className=" className="
        flex
        items-center
        w-full
        border-b
        border-gray-300
      >
        <h1 className="font-extrabold  text-center ">
          NO SUCH FILTER DATA IS AVAILABLE
        </h1>
      </div>
    );
  return (
    <div>
      <div className="flex flex-wrap">
        <form
          className="flex items-center justify-center w-full max-w-md mx-auto p-2"
          onSubmit={handleSubmit}
        >
          <div className="flex items-center w-full border-b border-gray-300 py-3">
            <input
              type="text"
              value={value}
              onChange={setChange}
              placeholder="Search for pets..."
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-3 px-3 leading-tight focus:outline-none"
            />
            <button
              type="submit"
              className="flex-shrink-0 bg-yellow-800 hover:bg-yellow-700 text-white py-2 px-4 rounded focus:outline-none"
            >
              Search
            </button>
          </div>
        </form>
        <FilterBar setFilteredData={setFilteredData} />
      </div>
      <div className="flex flex-wrap justify-center">
        {filteredData.slice(pages * 5 - 5, pages * 5).map((pet) => {
          return <Card key={pet.id} pet={pet} />;
        })}
      </div>
      <div className="flex justify-center items-center space-x-2 mt-4">
        <button
          onClick={(e) => handleClick(e, Math.max(pages - 1, 1))}
          disabled={pages === 1}
          className="pagination-button px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-700 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Prev
        </button>

        {[...Array(PetsDetails.length / 5)].map((_, i) => {
          return (
            <span
              key={i}
              className={`pagination-page cursor-pointer px-3 py-1 rounded-md ${
                pages === i + 1
                  ? "bg-yellow-500 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
              onClick={(e) => handleClick(e, i + 1)}
            >
              {i + 1}
            </span>
          );
        })}

        <button
          onClick={(e) => handleClick(e, Math.min(pages + 1, totalPages))}
          disabled={pages === totalPages}
          className="pagination-button px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-700 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pet;
