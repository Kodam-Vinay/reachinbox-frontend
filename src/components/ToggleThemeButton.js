import React, { useState } from "react";
import "../App.css";

function MyToggleButton() {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="toggle-button">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleToggle}
        id="toggle-checkbox"
        className="hidden"
      />
      <label className="toggle-label m-1" htmlFor="toggle-checkbox">
        <span className="toggle-slider"></span>
        <span className="toggle-slider"></span>
      </label>
    </div>
  );
}

export default MyToggleButton;
