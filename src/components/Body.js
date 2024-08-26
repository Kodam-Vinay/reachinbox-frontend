import { Outlet, useSearchParams } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Cookies from "js-cookie";
import MessagesListSidebar from "./MessagesListSidebar";

const Body = () => {
  const isDarkMode = useSelector(
    (store) => store?.persistSliceReducer?.theme?.isDarkMode
  );
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
      <Sidebar />
      <div className="w-[90%] sm:w-[92%] md:w-[95%] h-full">
        <Header />
        <div
          className={`${isDarkMode ? "bg-black" : "bg-[#F4F6F8]"} h-[90%] flex`}
        >
          <MessagesListSidebar />
          <div className="p-1">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
