import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";
const AuthProtectedRoute = ({ children }) => {
  const token = Cookies.get("token");
  return token ? <Navigate to={"/inbox"} /> : children;
};

export default AuthProtectedRoute;
