import React, { useEffect, useState } from "react";
import "../App.css";
import { toggleTheme } from "../redux/slices/themeSlice";
import { useDispatch, useSelector } from "react-redux";
import { FiSun } from "react-icons/fi";
import { FaMoon } from "react-icons/fa";

function MyToggleButton() {
  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState(false);
  const isDarkMode = useSelector(
    (store) => store?.persistSliceReducer?.theme?.isDarkMode
  );

  useEffect(() => {
    dispatch(toggleTheme());
  }, [isChecked]);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div
      className={`toggle-button  border ${
        isDarkMode ? "bg-transparent" : "bg-[#E9EAEC]"
      }`}
    >
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleToggle}
        id="toggle-checkbox"
        className="hidden"
      />

      <label
        className={`toggle-label m-[3px] flex items-center`}
        htmlFor="toggle-checkbox"
      >
        {!isDarkMode && (
          <>
            <span className="mb-2 ml-1">
              <FaMoon color="#E8C364" />
            </span>
            <span className="toggle-slider ml-6 bg-[#FFFFFF]"></span>
          </>
        )}

        {isDarkMode && (
          <>
            <span className="toggle-slider bg-[#888686]"></span>
            <span className="ml-7 mb-2">
              <FiSun color="#E8C364" />
            </span>
          </>
        )}
      </label>
    </div>
  );
}

export default MyToggleButton;
