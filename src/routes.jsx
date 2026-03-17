import ChiSiamo from "./Screen/ChiSiamo";
import ErrorPage from "./Screen/ErrorPage";
import Home from "./Screen/Home";
import LegalMainPage from "./Screen/LegalMainPage";
import LegalTemplate from "./Screen/LegalTemplate";
import Login from "./Screen/Login";
import ProductList from "./Screen/ProductList";
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
    element: <ProductList />,
    children: [{ path: ":id", element: <SingleProduct /> }],
  },
  {
    path: "/chisiamo",
    element: <ChiSiamo />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/legal",
    element: <LegalMainPage />,
    children: [
      {
        path: "diritto-di-recesso",
        element: <LegalTemplate />,
      },
      {
        path: "spedizioni-e-pagamenti",
        element: <LegalTemplate />,
      },
      {
        path: "condizioni-di-vendita",
        element: <LegalTemplate />,
      },
      {
        path: "termini-e-condizioni-d-uso",
        element: <LegalTemplate />,
      },
    ],
  },
];
