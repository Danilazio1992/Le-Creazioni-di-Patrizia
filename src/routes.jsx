import ErrorPage from "./Template/ErrorPage";
import Home from "./Template/Home";
import SingleProduct from "./Template/SingleProduct";

export const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
  {
    path: "/product",
    element: <SingleProduct />,
  },
];
