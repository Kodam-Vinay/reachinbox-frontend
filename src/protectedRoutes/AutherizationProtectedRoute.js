import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";
const AutherizationProtectedRoute = ({ children }) => {
  const token = Cookies.get("token");
  return !token ? <Navigate to={"/auth"} /> : children;
};

export default AutherizationProtectedRoute;
