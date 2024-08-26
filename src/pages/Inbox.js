import { useDispatch } from "react-redux";
import InboxHeader from "../components/InboxHeader";
import { togglePopup } from "../redux/slices/popupSlice";

const Inbox = () => {
  const dispath = useDispatch();
  const hanldeKeyPress = (e) => {
    if (e.key === "Delete") {
      dispath(togglePopup(true));
    }
  };
  return (
    <div
      className="w-full h-full outline-none"
      onKeyDown={hanldeKeyPress}
      tabIndex={0}
    >
      <InboxHeader />
    </div>
  );
};

export default Inbox;
