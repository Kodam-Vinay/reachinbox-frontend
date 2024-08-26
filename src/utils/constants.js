import { Bounce, toast } from "react-toastify";
import { format } from "date-fns";
import HomeLogo from "../svgs/HomeLogo";
import MailLogo from "../svgs/MailLogo";
import SearchLogo from "../svgs/SearchLogo";
import SidebarAppLogo from "../svgs/SidebarAppLogo";
import ShareLogo from "../svgs/ShareLogo";
import ListLogo from "../svgs/ListLogo";
import ProgressbarLogo from "../svgs/ProgressbarLogo";
import InboxLogo from "../svgs/InboxLogo";
import { FaCircle } from "react-icons/fa";

export const storeToastError = ({ errorMessage }) => {
  toast.error(errorMessage, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
  });
};

export const storeToastSuccess = ({ successMessage }) => {
  toast.success(successMessage, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
  });
};

export const API_URL = "https://hiring.reachinbox.xyz/api/v1/";

export const SIDEBAR_LINKS = {
  applogo: {
    label: "App",
    path: "/",
    icon: <SidebarAppLogo />,
  },
  home: {
    label: "Home",
    path: "/",
    icon: <HomeLogo />,
  },
  search: {
    label: "Search",
    path: "/search",
    icon: <SearchLogo />,
  },
  mail: {
    label: "Mail",
    path: "/mail",
    icon: <MailLogo />,
  },
  share: {
    label: "Share",
    path: "/share",
    icon: <ShareLogo />,
  },
  list: {
    label: "List",
    path: "/list",
    icon: <ListLogo />,
  },
  inbox: {
    label: "Inbox",
    path: "/inbox",
    icon: <InboxLogo />,
  },
  prgoressbar: {
    label: "Progress Bar",
    path: "/progress",
    icon: <ProgressbarLogo />,
  },
};

export const HEADER_MEETING_OPTIONS = {
  completed: {
    label: "Meeting Completed",
    id: "meeting_completed",
    icon: <FaCircle color="#E6D162" size={10} />,
  },
  booked: {
    label: "Meeting Booked",
    id: "meeting_booked",
    icon: <FaCircle color="#9C62E6" size={10} />,
  },
  intrested: {
    label: "Intrested",
    id: "intrested",
    icon: <FaCircle color="#57E0A6" size={10} />,
  },
  closed: {
    label: "Closed",
    id: "closed",
    icon: <FaCircle color="#626FE6" size={10} />,
  },
};

export const getMonthAndDate = (date) => {
  return format(new Date(date), "MMM dd");
};
