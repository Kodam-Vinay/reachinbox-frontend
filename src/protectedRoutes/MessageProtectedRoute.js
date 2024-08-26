import { useSelector } from "react-redux";

const MessageProtectedRoute = ({ children }) => {
  const activeMessage = useSelector((store) => store?.message?.activeMessage);

  return activeMessage && Object.keys(activeMessage)?.length > 0
    ? children
    : null;
};

export default MessageProtectedRoute;
