import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";

const Body = () => {
  const isDarkMode = useSelector(
    (store) => store?.persistSliceReducer?.theme?.isDarkMode
  );
  return (
    <div className="w-full h-full flex">
      <Sidebar />
      <div className="w-[90%] sm:w-[92%] md:w-[95%] h-full">
        <Header />
        <div className={`${isDarkMode ? "bg-black" : "bg-[#F4F6F8]"} h-[90%]`}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Body;
