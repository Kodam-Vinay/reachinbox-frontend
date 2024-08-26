import { Outlet, useSearchParams } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Cookies from "js-cookie";
import MessagesListSidebar from "./MessagesListSidebar";
import Popup from "./Popup";

const Body = () => {
  const isDarkMode = useSelector(
    (store) => store?.persistSliceReducer?.theme?.isDarkMode
  );
  const isPopupOpen = useSelector((store) => store?.popup?.isPopupOpen);

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (searchParams.get("token")) {
      Cookies.set("token", searchParams?.get("token"), {
        expires: 20,
      });
      setSearchParams({});
    }
  }, [searchParams]);

  return (
    <div
      className={`w-full h-full flex ${
        isDarkMode ? "text-white" : "text-black"
      }`}
    >
      {isPopupOpen && <Popup />}
      <Sidebar />
      <div className="w-[90%] sm:w-[92%] md:w-[95%] h-full">
        <Header />
        <div
          className={`${isDarkMode ? "bg-black" : "bg-[#F4F6F8]"} h-[90%] flex`}
        >
          <MessagesListSidebar />
          <div className="w-[55%] xl:w-[60%]">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
