import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Petdetails from "./Petdetails";
import Pet from "./Pet";

const Body = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Pet />,
    },
    {
      path: "/pet/:id",
      element: <Petdetails />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Body;
