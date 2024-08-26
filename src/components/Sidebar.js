import { useSelector } from "react-redux";
import { SIDEBAR_LINKS } from "../utils/constants";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { cloneElement, useState } from "react";
import Cookies from "js-cookie";
import SidebarAppLogo from "../svgs/SidebarAppLogo";
import SidebarAppLogoWhite from "../svgs/SidebarAppLogoWhite";

const Sidebar = () => {
  const navigate = useNavigate();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const { pathname: acitvePath } = useLocation();
  const isDarkMode = useSelector(
    (store) => store?.persistSliceReducer?.theme?.isDarkMode
  );
  const handleLogout = () => {
    Cookies.remove("token");
    navigate("/auth");
  };

  const handleBlur = () => {
    const timer = setTimeout(() => {
      setIsPopupOpen(false);
    }, 300);
    return () => timer;
  };

  return (
    <div
      className={`${
        isDarkMode ? "bg-[#101113]" : "bg-[#FAFAFA]"
      } w-[10%] sm:w-[8%] md:w-[5%] border-b-[#343A40] flex flex-col items-center pt-5`}
    >
      {Object.keys(SIDEBAR_LINKS)?.map((eachLink, index) => (
        <Link
          key={SIDEBAR_LINKS[eachLink].path + index}
          to={SIDEBAR_LINKS[eachLink].path}
          className={`transition-all duration-300 ease-in-out hover:opacity-50 hover:bg-opacity-15`}
        >
          {index === 0 ? (
            <div className={`mb-16`}>
              {isDarkMode ? <SidebarAppLogo /> : <SidebarAppLogoWhite />}
            </div>
          ) : (
            <div
              className={`mb-5 p-[2px] rounded-sm ${
                acitvePath === SIDEBAR_LINKS[eachLink].path && isDarkMode
                  ? "bg-[#343A40]"
                  : acitvePath === SIDEBAR_LINKS[eachLink].path && !isDarkMode
                  ? "bg-[#E9EAEB]"
                  : ""
              } `}
            >
              {cloneElement(SIDEBAR_LINKS[eachLink].icon, {
                style: {
                  fill:
                    acitvePath.pathname === SIDEBAR_LINKS[eachLink].path
                      ? "white"
                      : "",
                },
              })}
            </div>
          )}
        </Link>
      ))}
      <div
        tabIndex={0}
        onFocus={() => setIsPopupOpen(true)}
        onBlur={handleBlur}
        className="relative mt-auto"
      >
        <div className="mb-5 h-10 w-10 bg-[#054F31] rounded-full flex flex-col items-center justify-center text-white font-semibold cursor-pointer">
          AS
        </div>
        {isPopupOpen && (
          <button
            onClick={() => handleLogout()}
            className={`hover:bg-red-600 absolute bottom-0 mb-10 ml-10 bg-white px-5 py-2 rounded-md ${
              isDarkMode ? "bg-white text-black" : "bg-gray-700 text-white"
            }`}
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
