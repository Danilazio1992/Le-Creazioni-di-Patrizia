import ChiSiamo from "./Screen/ChiSiamo";
import ErrorPage from "./Screen/ErrorPage";
import Home from "./Screen/Home";
import SingleProduct from "./Screen/SingleProduct";

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
  {
    path: "/chisiamo",
    element: <ChiSiamo />,
  },
];
