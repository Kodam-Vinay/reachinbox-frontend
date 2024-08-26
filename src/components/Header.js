import { useSelector } from "react-redux";
import MyToggleButton from "./ToggleThemeButton";

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
      <h1
        className={`${isDarkMode ? "text-[#fff]" : "text-[#5B5F66]"} font-bold`}
      >
        Onebox
      </h1>
      <div className="flex items-center">
        <MyToggleButton />
        <select
          className={`${
            isDarkMode ? "text-[#fff]" : "text-[#5B5F66]"
          } font-bold flex items-center ml-3 bg-transparent outline-none`}
        >
          <option>Tim's Workspace</option>
        </select>
      </div>
    </div>
  );
};

export default Header;
