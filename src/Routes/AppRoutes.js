import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "../components/Body";
import Auth from "../auth/Auth";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import AutherizationProtectedRoute from "../protectedRoutes/AutherizationProtectedRoute";
import AuthProtectedRoute from "../protectedRoutes/AuthProtectedRoute";
import { SIDEBAR_LINKS } from "../utils/constants";
import Inbox from "../pages/Inbox";
import MessageProtectedRoute from "../protectedRoutes/MessageProtectedRoute";

const AppRoutes = () => {
  const browserRouter = createBrowserRouter([
    {
      path: "",
      element: <Body />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: SIDEBAR_LINKS.home.path,
          element: (
            <AutherizationProtectedRoute>
              <Home />
            </AutherizationProtectedRoute>
          ),
        },
        {
          path: SIDEBAR_LINKS.inbox.path,
          element: (
            <AutherizationProtectedRoute>
              <MessageProtectedRoute>
                <Inbox />
              </MessageProtectedRoute>
            </AutherizationProtectedRoute>
          ),
        },
      ],
    },
    {
      path: "/auth",
      element: (
        <AuthProtectedRoute>
          <Auth />
        </AuthProtectedRoute>
      ),
    },
  ]);
  return <RouterProvider router={browserRouter} />;
};

export default AppRoutes;
