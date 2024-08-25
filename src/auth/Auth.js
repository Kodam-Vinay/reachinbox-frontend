import { useSelector } from "react-redux";
import { AuthHeader } from "../components/AuthHeader";
import GoogleLogo from "../svgs/GoogleLogo";
import { useEffect, useState } from "react";
import { storeToastError } from "../utils/constants";
import { loginRequest } from "../api/apiCalls";

const Auth = () => {
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState("");
  const isDarkMode = useSelector(
    (store) => store?.persistSliceReducer?.theme?.isDarkMode
  );

  useEffect(() => {
    if (isError) {
      storeToastError({ errorMessage: error });
    }
  }, [isError, error]);

  const handleLogin = async () => {
    await loginRequest({
      apiUrl: "auth/google-login?redirect_to=http://localhost:3000",
      setError,
      setIsError,
    });
  };

  return (
    <div className="h-full w-full">
      <AuthHeader />
      <div
        className={`h-[90%] flex flex-col items-center justify-center ${
          isDarkMode ? "bg-black" : "bg-white"
        }`}
      >
        <div
          className={`h-64 w-96 border-2 rounded-md ${
            isDarkMode
              ? "bg-[#111214] text-white border-[#343A40]"
              : "border-[#111214] text-black bg-gray-100"
          } flex flex-col items-center space-y-4 pt-5`}
        >
          <h3 className="font-bold text-xl mb-2">Create a new account</h3>
          <button
            onClick={() => handleLogin()}
            className={`bg-transparent flex items-center border-2 rounded-sm px-2 py-1 w-3/4 justify-center hover:opacity-70 hover:bg-opacity-70 ${
              isDarkMode ? "border-[#343A40]" : "border-[#111214]"
            }`}
          >
            <GoogleLogo />
            <span
              className={`${isDarkMode ? "text-[#CCCCCC]" : "text-gray-950"}`}
            >
              Sign Up with Google
            </span>
          </button>
          <button
            className={`bg-gradient-to-r hover:opacity-70 hover:bg-opacity-70 from-[#4B63DD] to-[#0524BF] px-3 py-2 rounded-sm ${
              isDarkMode ? "text-white" : "text-gray-950"
            }`}
          >
            Create an Account
          </button>
          <p className={`${isDarkMode ? "text-[#909296]" : "text-gray-950"}`}>
            Already have an account?{" "}
            <span
              className={`ml-1 cursor-pointer hover:opacity-70 ${
                isDarkMode ? "text-[#909296]" : "text-gray-950"
              }`}
            >
              Sign In
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
