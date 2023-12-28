import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, Recipe, Categories, Archive, Construction } from "./pages";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <Error />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/recipe/:foodName",
        element: <Recipe />,
      },
      {
        path: "/categories",
        element: <Categories />,
      },
      {
        path: "/archive/:category",
        element: <Archive />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <Construction /> */}
  </React.StrictMode>
);
