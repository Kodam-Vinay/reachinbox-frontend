import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  const isDarkMode = useSelector(
    (store) => store?.persistSliceReducer?.theme?.isDarkMode
  );
  return (
    <div
      className={`flex flex-col space-y-3 items-center w-full h-full ${
        isDarkMode ? "text-white" : "text-black"
      }`}
    >
      <h1 className="text-xl font-bold text-center">Something Went Wrong</h1>
      <Link to="/">
        <button className="border px-2 py-1 rounded-md">Home</button>
      </Link>
    </div>
  );
};
export default ErrorPage;
