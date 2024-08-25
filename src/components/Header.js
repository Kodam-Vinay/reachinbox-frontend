import { useSelector } from "react-redux";
import MyToggleButton from "./ToggleThemeButton";
import DownArrowLogo from "../svgs/DownArrowLogo";

const Header = () => {
  const isDarkMode = useSelector(
    (store) => store?.persistSliceReducer?.theme?.isDarkMode
  );
  return (
    <div
      className={`${
        isDarkMode ? "bg-[#1F1F1F]" : "bg-[#FFFFFF]"
      } h-[10%] flex items-center justify-between px-5`}
    >
      {/* <img alt="login_logo" className="bg-blend-multiply" /> */}
      <h1
        className={`${isDarkMode ? "text-[#fff]" : "text-[#5B5F66]"} font-bold`}
      >
        Onebox
      </h1>
      <div className="flex items-center">
        <MyToggleButton />
        <p
          className={`${
            isDarkMode ? "text-[#fff]" : "text-[#5B5F66]"
          } font-bold flex items-center ml-3`}
        >
          Tim's Workspace{" "}
          <span className="ml-1 mt-1">
            <DownArrowLogo />
          </span>
        </p>
      </div>
    </div>
  );
};

export default Header;
