import { useSelector } from "react-redux";
import DownArrowLogo from "../svgs/DownArrowLogo";
import { IoMdRefresh } from "react-icons/io";
import { CiSearch } from "react-icons/ci";

const MessegesSidebarFirstPart = ({ handleRefresh }) => {
  const isDarkMode = useSelector(
    (store) => store?.persistSliceReducer?.theme?.isDarkMode
  );
  return (
    <>
      <div className="flex justify-between w-full">
        <div className="flex flex-col">
          <h2
            className="text-[#4285F4] text-lg font-bold flex items-center cursor-pointer
        "
          >
            All Inbox(s)
            <span className="ml-1">
              <DownArrowLogo fill="#4285F4" className="h-2" />
            </span>
          </h2>
          <p
            className={`text-sm ${
              isDarkMode ? "text-white" : "text-black"
            } my-1`}
          >
            <span className="font-semibold">25/25</span>
            <span
              className={`ml-1 text-xs ${
                isDarkMode ? "text-[#DEDEDE]" : "text-[#343A40]"
              }`}
            >
              Inboxes selected
            </span>
          </p>
        </div>
        <button
          onClick={() => handleRefresh()}
          className={`h-6 w-6 flex flex-col items-center justify-center rounded-sm mt-1 ${
            isDarkMode ? "bg-[#343A40]" : "border border-[#DEDEDE]"
          }`}
        >
          <IoMdRefresh />
        </button>
      </div>
      <div
        className={`w-full border rounded-sm flex items-center px-1 -ml-1 my-3 h-8 ${
          isDarkMode
            ? "border-[#343A40] bg-[#23272C]"
            : "border-[#DFE3E8] bg-[#F4F6F8]"
        }`}
      >
        <button className="bg-transparent w-[10%]">
          <CiSearch />
        </button>
        <input
          type="search"
          className="w-[90%] outline-none bg-transparent border-none ml-1 -mt-[2px]"
          placeholder="Search"
        />
      </div>
      <div className={`w-full flex items-center justify-between my-3`}>
        <p
          className={`text-sm ${
            isDarkMode ? "text-[#DEDEDE]" : "text-[#343A40]"
          } font-bold`}
        >
          <span
            className={`px-2 py-1 rounded-full text-[#4285F4] mr-1 -ml-1 ${
              isDarkMode ? "bg-[#343A40]" : "bg-[#DEDEDE]"
            }`}
          >
            26
          </span>
          New Replies
        </p>
        <p
          className={`text-xs font-bold flex items-center cursor-pointer ${
            isDarkMode ? "text-[#DEDEDE]" : "text-[#343A40]"
          } 
        `}
        >
          Newest
          <span className="ml-1">
            <DownArrowLogo
              fill={isDarkMode ? "#DEDEDE" : "#343A40"}
              className="h-2"
            />
          </span>
        </p>
      </div>
    </>
  );
};

export default MessegesSidebarFirstPart;
