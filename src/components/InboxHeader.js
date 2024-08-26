import { useState } from "react";
import { useSelector } from "react-redux";
import { FaChevronDown } from "react-icons/fa";
import { HEADER_MEETING_OPTIONS } from "../utils/constants";

const InboxHeader = () => {
  const [isOpen, setIsopen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(
    Object.keys(HEADER_MEETING_OPTIONS)[0]
  );
  const activeMessage = useSelector((store) => store?.message?.activeMessage);

  const isDarkMode = useSelector(
    (store) => store?.persistSliceReducer?.theme?.isDarkMode
  );
  return (
    <div
      className={`w-full h-16 border p-2 flex items-center justify-between ${
        isDarkMode
          ? "text-white border-[#343A40]"
          : "text-black border-[#DEDEDE]"
      }`}
    >
      <div className="flex flex-col">
        <h4
          className={`font-bold ${
            isDarkMode ? "text-white" : "text-[#343A40]"
          }`}
        >
          {activeMessage?.toName
            ? activeMessage?.toName
            : activeMessage?.toEmail
            ? activeMessage?.toEmail?.split("@")[0]
            : ""}
        </h4>
        <p
          className={`font-semibold text-sm ${
            isDarkMode ? "text-white opacity-40" : "text-[#343A40] opacity-70"
          }`}
        >
          {activeMessage?.toEmail}
        </p>
      </div>
      <div className="flex items-center">
        <div
          className="relative inline-block w-48"
          onClick={() => setIsopen(!isOpen)}
        >
          <button
            className={`border rounded-md p-1 w-full text-left flex items-center ${
              isDarkMode
                ? "text-white border-gray-800"
                : "text-gray-700 border-gray-300"
            } font-bold bg-transparent outline-none`}
          >
            {HEADER_MEETING_OPTIONS[selectedOption].icon}
            <span className="ml-1">
              {HEADER_MEETING_OPTIONS[selectedOption].label}
            </span>
            <span className="ml-auto">
              <FaChevronDown />
            </span>
          </button>
          {isOpen && (
            <div className="absolute mt-2  rounded-md bg-white shadow-lg">
              {Object.keys(HEADER_MEETING_OPTIONS).map((optionKey) => (
                <div
                  key={HEADER_MEETING_OPTIONS[optionKey].id}
                  onClick={() => setSelectedOption(optionKey)}
                  className={`p-2 cursor-pointer flex items-center ${
                    isDarkMode
                      ? "text-white bg-black"
                      : "text-gray-700 bg-white"
                  } hover:bg-gray-200`}
                >
                  {HEADER_MEETING_OPTIONS[optionKey].icon}
                  <span className="ml-1">
                    {HEADER_MEETING_OPTIONS[optionKey].label}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
        <select
          className={`border rounded-md p-1 ${
            isDarkMode
              ? "text-[#fff] border-[#343A40]"
              : "text-[#5B5F66] border-[#DFE3E8]"
          } font-bold flex items-center ml-3 bg-transparent outline-none`}
        >
          <option
            className={`${
              isDarkMode
                ? "text-[#fff] bg-black"
                : "text-[#5B5F66] bg-white opacity-40"
            } font-bold`}
            value={"move"}
          >
            Move
          </option>
        </select>
        <button
          className={`border w-5 h-8 flex flex-col items-center  rounded-md justify-center p-1 ${
            isDarkMode
              ? "text-[#fff] border-[#343A40]"
              : "text-[#5B5F66] border-[#DFE3E8]"
          } font-bold ml-3`}
        >
          ...
        </button>
      </div>
    </div>
  );
};

export default InboxHeader;
