import { useEffect, useState } from "react";
import useGetData from "../hooks/useGetData";
import { storeToastError } from "../utils/constants";
import EachSidebarMessage from "./EachSidebarMessage";
import { useDispatch, useSelector } from "react-redux";
import MessegesSidebarFirstPart from "./MessegesSidebarFirstPart";
import { storeAllMessages } from "../redux/slices/messageSlice";

const MessagesListSidebar = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector(
    (store) => store?.persistSliceReducer?.theme?.isDarkMode
  );
  const activeMessage = useSelector((store) => store?.message?.activeMessage);
  const allMessages = useSelector((store) => store?.message?.allMessages);

  const handleRefresh = () => {
    window.location.reload();
  };

  const [error, setError] = useState("");
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(false);
  useGetData({
    apiUrl: "onebox/list",
    setData: (data) => dispatch(storeAllMessages(data?.data?.data)),
    setError,
    setIsError,
    setLoading,
  });

  useEffect(() => {
    if (isError) {
      storeToastError({ errorMessage: error });
    }
  }, [isError]);

  return (
    <div
      className={`w-[25%] h-full border px-3 pt-4  ${
        isDarkMode ? "border-[#343A40]" : "border-[#DEDEDE]"
      }`}
    >
      <MessegesSidebarFirstPart handleRefresh={handleRefresh} />
      <hr className={`mt-2 ${isDarkMode ? "border-[#33383F]" : ""}`} />
      {allMessages?.length > 0 && !loading ? (
        <div className="overflow-auto">
          {allMessages?.map((eachMessage) => (
            <div
              className={`w-full cursor-pointer -mt-2 border-l-2  ${
                activeMessage?.id === eachMessage?.id
                  ? "border-[#5C7CFA]"
                  : "border-transparent"
              }`}
              key={eachMessage?.id}
            >
              <EachSidebarMessage details={eachMessage} key={eachMessage?.id} />
              <hr
                className={`w-full overflow-auto ${
                  isDarkMode ? "border-[#33383F]" : ""
                }`}
              />
            </div>
          ))}
        </div>
      ) : loading ? (
        <p>Loading...</p>
      ) : (
        "No Messages Found"
      )}
    </div>
  );
};

export default MessagesListSidebar;
