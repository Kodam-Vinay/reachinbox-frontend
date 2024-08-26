import { FaCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getMonthAndDate } from "../utils/constants";
import ShareLogo from "../svgs/ShareLogo";
import { storeActiveMessage } from "../redux/slices/messageSlice";

const EachSidebarMessage = ({ details }) => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector(
    (store) => store?.persistSliceReducer?.theme?.isDarkMode
  );
  return (
    <div
      className="flex flex-col w-full my-2 ml-1"
      onClick={() => dispatch(storeActiveMessage(details))}
    >
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center">
          <span className="w-2 h-2">
            {details?.isRead && <FaCircle color="#5C7CFA" size={10} />}
          </span>
          <span
            className={`ml-2 font-semibold ${
              isDarkMode ? "text-white" : "text-[#343A40]"
            }`}
          >
            {details?.toEmail}
          </span>
        </div>
        <span
          className={`text-xs font-semibold ${
            isDarkMode ? "text-[#FCFCFC] opacity-40" : "text-[#919EAB]"
          }`}
        >
          {getMonthAndDate(details?.createdAt)}
        </span>
      </div>
      <span className={`text-xs ml-4 ${isDarkMode ? "#E1E0E0" : "#172B4D"}`}>
        {details?.subject?.slice(0, 20) + "."}
      </span>
      <div className="mt-2 ml-4 flex items-center">
        <button
          className={`rounded-full flex items-center px-2 py-1 ${
            isDarkMode ? "bg-[#222426]" : "bg-[#F0F0F0]"
          }`}
        >
          <span className="mr-2">
            <FaCircle size={10} />
          </span>
          <span className="text-xs">Closed</span>
        </button>
        <button
          className={`rounded-full flex items-center px-2 py-1 ml-3 ${
            isDarkMode ? "bg-[#222426]" : "bg-[#F0F0F0]"
          }`}
        >
          <span className="mr-1">
            <ShareLogo className="size-4" />
          </span>
          <span className="text-xs">Campaign Name</span>
        </button>
      </div>
    </div>
  );
};

export default EachSidebarMessage;
