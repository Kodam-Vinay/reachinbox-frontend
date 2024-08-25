import { useSelector } from "react-redux";
import LoginHeaderDarkLogo from "../svgs/AppLogo.svg";

export function AuthHeader() {
  const isDarkMode = useSelector(
    (store) => store?.persistSliceReducer?.theme?.isDarkMode
  );
  return (
    <div
      className={`${
        isDarkMode ? "bg-[#25262B]" : "bg-[#DEDEDE]"
      } h-[10%] flex flex-col items-center justify-center`}
    >
      <img
        src={LoginHeaderDarkLogo}
        alt="login_logo"
        className="bg-blend-multiply"
      />
    </div>
  );
}
