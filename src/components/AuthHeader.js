import { useSelector } from "react-redux";
import SidebarAppLogo from "../svgs/SidebarAppLogo";
import SidebarAppLogoWhite from "../svgs/SidebarAppLogoWhite";

export function AuthHeader() {
  const isDarkMode = useSelector(
    (store) => store?.persistSliceReducer?.theme?.isDarkMode
  );
  return (
    <div
      className={`${
        isDarkMode ? "bg-[#1F1F1F]" : "bg-[#FFFFFF]"
      } h-[10%] flex flex-col items-center justify-center border-b-[#25262B]`}
    >
      <div className="flex items-center">
        {isDarkMode ? <SidebarAppLogo /> : <SidebarAppLogoWhite />}
        <span className="text-lg font-bold ml-1">REACHINBOX</span>
      </div>
    </div>
  );
}
