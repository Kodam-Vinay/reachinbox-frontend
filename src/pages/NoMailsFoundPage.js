import { useSelector } from "react-redux";
import NoMailsFoundLogo from "../svgs/NoMailsFoundLogo";

const NoMailsFoundPage = () => {
  const isDarkMode = useSelector(
    (store) => store?.persistSliceReducer?.theme?.isDarkMode
  );
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <NoMailsFoundLogo />
      <h4
        className={`text-xl font-semibold mt-10 mb-4 text-center ${
          isDarkMode ? "text-white" : "text-black"
        }`}
      >
        It’s the beginning of a legendary sales pipeline
      </h4>
      <p
        className={`text-md font-semibold text-center max-w-xs ${
          isDarkMode ? "text-[#9E9E9E]" : "text-gray-800"
        }`}
      >
        When you have inbound E-mails you’ll see them here
      </p>
    </div>
  );
};

export default NoMailsFoundPage;
