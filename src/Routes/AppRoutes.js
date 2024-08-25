import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "../components/Body";
import Auth from "../auth/Auth";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";

const AppRoutes = () => {
  const browserRouter = createBrowserRouter([
    {
      path: "",
      element: <Body />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
    {
      path: "/auth",
      element: <Auth />,
    },
  ]);
  return <RouterProvider router={browserRouter} />;
};

export default AppRoutes;
