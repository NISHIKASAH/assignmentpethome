import { useContext, useEffect, useState } from "react";
import context from "../contextapi/useContext";

const useFetchapi = () => {
  const [PetsDetails, setPetDetails] = useState([]);
  const { setPetData } = useContext(context);

  const getData = async () => {
    const res = await fetch("http://pets-v2.dev-apis.com/pets");
    const data = await res.json();
    setPetDetails(data.pets);

    setPetData((prevData) => [...prevData, data.pets]);
  };

  useEffect(() => {
    getData();
  }, []);
  return PetsDetails;
};

export default useFetchapi;
