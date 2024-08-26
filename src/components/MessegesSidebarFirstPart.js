import { useSelector } from "react-redux";
import { IoMdRefresh } from "react-icons/io";
import { CiSearch } from "react-icons/ci";

const MessegesSidebarFirstPart = ({ handleRefresh }) => {
  const isDarkMode = useSelector(
    (store) => store?.persistSliceReducer?.theme?.isDarkMode
  );
  return (
    <>
      <div className="flex justify-between w-full">
        <select className="bg-transparent outline-none text-[#4285F4] font-bold text-lg">
          <option value="all_inbox">All Inbox</option>
        </select>
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
          className={`text-xs mdl:text-sm ${
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
        <select className="bg-transparent outline-none">
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
        </select>
      </div>
    </>
  );
};

export default MessegesSidebarFirstPart;
