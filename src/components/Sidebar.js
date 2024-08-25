import { useSelector } from "react-redux";
import { SIDEBAR_LINKS } from "../utils/constants";
import { Link, useLocation } from "react-router-dom";
import { cloneElement } from "react";

const Sidebar = () => {
  const { pathname: acitvePath } = useLocation();
  const isDarkMode = useSelector(
    (store) => store?.persistSliceReducer?.theme?.isDarkMode
  );

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
              {cloneElement(SIDEBAR_LINKS[eachLink].icon, {
                fill: "red",
              })}
            </div>
          ) : (
            <div
              className={`mb-5 p-[2px] rounded-sm ${
                acitvePath === SIDEBAR_LINKS[eachLink].path && isDarkMode
                  ? "bg-[#343A40]"
                  : acitvePath === SIDEBAR_LINKS[eachLink].path && !isDarkMode
                  ? "#E9EAEB"
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
    </div>
  );
};

export default Sidebar;
