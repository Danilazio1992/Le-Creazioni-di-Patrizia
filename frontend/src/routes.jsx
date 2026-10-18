import AccountSection from "./Components/AccountSection";
import DirittoDiRecesso from "./Components/DirittoDiRecesso";
import Documenti from "./Components/Documenti";
import Richieste from "./Components/Richieste";
import Account from "./Screen/Account";
import CartTemplate from "./Screen/CartTemplate";
import ChiSiamo from "./Screen/ChiSiamo";
import CondizioniVendita from "./Screen/CondizioniVendita";
import ErrorPage from "./Screen/ErrorPage";
import FAQ from "./Screen/FAQ";
import Home from "./Screen/Home";
import LegalMainPage from "./Screen/LegalMainPage";
import LegalTemplate from "./Screen/LegalTemplate";
import Login from "./Screen/Login";
import Ordini from "./Screen/Ordini";
import ProductList from "./Screen/ProductList";
import Signin from "./Screen/Signin";
import SingleProduct from "./Screen/SingleProduct";
import TerminiCondizioniUso from "./Screen/TerminiCondizioniUso";
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
    path: "/account",
    element: <Account />,
    children: [
      { path: "ordini", element: <Ordini /> },
      {
        path: "documenti",
        element: <Documenti />,
      },
      {
        path: "richieste",
        element: <Richieste />,
      },
      {
        path: "profilo",
        element: <Signin />,
      },
      { path: "mainSection", element: <AccountSection /> },
    ],
  },
  {
    path: "/products",
    element: <ProductList />,
  },
  { path: "/products/:id", element: <SingleProduct /> },
  {
    path: "/chisiamo",
    element: <ChiSiamo />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/cart",
    element: <CartTemplate />,
  },
  {
    path: "/FAQ",
    element: <FAQ />,
  },
  {
    path: "/legal",
    element: <LegalMainPage />,
    children: [
      {
        path: "diritto-di-recesso",
        element: <DirittoDiRecesso />,
      },
      {
        path: "spedizioni-e-pagamenti",
        element: <LegalTemplate />,
      },
      {
        path: "condizioni-di-vendita",
        element: <CondizioniVendita />,
      },
      {
        path: "termini-e-condizioni-d-uso",
        element: <TerminiCondizioniUso />,
      },
    ],
  },
];
