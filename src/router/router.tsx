import Details from "../pages/Details/Details";
import App from "../App";
import Home from "../pages/Home/Home";
import ShoppingCart from "../pages/ShoppingCart/ShoppingCart";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "details/:detailsId",
        element: <Details />,
      },
      {
        path: "shoppingcart/:shoppingcartId",
        element: <ShoppingCart />,
      },
    ],
  },
]);
