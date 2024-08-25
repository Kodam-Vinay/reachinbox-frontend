import { useSelector } from "react-redux";
import LoginHeaderDarkLogo from "../svgs/AppLogo.svg";

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
      <img
        src={LoginHeaderDarkLogo}
        alt="login_logo"
        className="bg-blend-multiply"
      />
    </div>
  );
}
