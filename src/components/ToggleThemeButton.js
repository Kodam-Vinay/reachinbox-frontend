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
  console.log(isChecked);
  return (
    <div className="toggle-button">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleToggle}
        id="toggle-checkbox"
        className="hidden"
      />

      <label
        className="toggle-label m-1 flex items-center bg-transparent"
        htmlFor="toggle-checkbox"
      >
        {!isDarkMode && (
          <>
            <span className="mb-2 ml-1">
              <FaMoon color="#E8C364" />
            </span>
            <span className="toggle-slider ml-6"></span>
          </>
        )}

        {isDarkMode && (
          <>
            <span className="toggle-slider"></span>
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
