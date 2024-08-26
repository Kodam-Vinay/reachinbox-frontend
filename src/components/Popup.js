import { useDispatch, useSelector } from "react-redux";
import { togglePopup } from "../redux/slices/popupSlice";
import { deleteRequest } from "../api/apiCalls";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { storeToastError } from "../utils/constants";

const Popup = () => {
  const isDarkMode = useSelector(
    (store) => store?.persistSliceReducer?.theme?.isDarkMode
  );
  const token = Cookies.get("token");
  const [error, setError] = useState("");
  const [isError, setIsError] = useState(false);
  const dispatch = useDispatch();
  const activeMessage = useSelector((store) => store?.message?.activeMessage);
  const handleDelete = () => {
    deleteRequest({
      setError,
      setIsError,
      token,
      apiUrl: "onebox/messages/" + activeMessage?.threadId,
    });
    dispatch(togglePopup(false));
  };

  useEffect(() => {
    if (error) {
      storeToastError({ errorMessage: error });
    }
  }, [isError]);

  const handleCancel = () => {
    dispatch(togglePopup(false));
  };
  return (
    <div
      className={`absolute inset-0 flex items-center justify-center bg-opacity-50 z-50 ${
        isDarkMode ? "text-white bg-black" : "text-black bg-white"
      }`}
    >
      <div className="p-6 rounded shadow-lg text-center border">
        <p>Are you sure you want to delete?</p>
        <div className="mt-4 flex justify-center space-x-4">
          <button
            onClick={handleDelete}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Delete
          </button>
          <button
            onClick={handleCancel}
            className="bg-gray-300 text-black px-4 py-2 rounded"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
