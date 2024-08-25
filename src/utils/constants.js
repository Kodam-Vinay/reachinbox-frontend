import { Bounce, toast } from "react-toastify";
import HomeLogo from "../svgs/HomeLogo";
import MailLogo from "../svgs/MailLogo";
import SearchLogo from "../svgs/SearchLogo";
import SidebarAppLogo from "../svgs/SidebarAppLogo";
import ShareLogo from "../svgs/ShareLogo";
import ListLogo from "../svgs/ListLogo";
import OutboxLogo from "../svgs/OutboxLogo";
import ProgressbarLogo from "../svgs/ProgressbarLogo";

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
  outbox: {
    label: "Outbox",
    path: "/outbox",
    icon: <OutboxLogo />,
  },
  prgoressbar: {
    label: "Progress Bar",
    path: "/progress",
    icon: <ProgressbarLogo />,
  },
};
