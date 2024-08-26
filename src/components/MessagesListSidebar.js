import { useEffect, useState } from "react";
import useGetData from "../hooks/useGetData";
import { storeToastError } from "../utils/constants";
import EachSidebarMessage from "./EachSidebarMessage";
import { useSelector } from "react-redux";
import MessegesSidebarFirstPart from "./MessegesSidebarFirstPart";

const MessagesListSidebar = () => {
  const isDarkMode = useSelector(
    (store) => store?.persistSliceReducer?.theme?.isDarkMode
  );

  const handleRefresh = () => {
    window.location.reload();
  };

  //   const [data, setData] = useState({});
  const [error, setError] = useState("");
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(false);
  //   useGetData({
  //     apiUrl: "onebox/list",
  //     setData,
  //     setError,
  //     setIsError,
  //     setLoading,
  //   });

  useEffect(() => {
    if (isError) {
      storeToastError({ errorMessage: error });
    }
  }, [isError]);

  const data = [
    {
      id: 79605,
      fromName: "Shaw Adley",
      fromEmail: "shaw@getmemeetings.com",
      toName: "",
      toEmail: "mitrajit2022@gmail.com",
      cc: [],
      bcc: [],
      threadId: 53095,
      messageId: "<OTIivsmEOEzwFW@getmemeetings.com>",
      inReplyTo: "<Wj6UkLwo9e7vUp@gmail.com>",
      references: "<Wj6UkLwo9e7vUp@gmail.com>",
      subject:
        "Shaw - following up on our meeting last week... | 7ZG2ZTV 6KG634E",
      body: "<p>Hi Mitrajit,</p><p>Just wondering if you&rsquo;re still interested.</p><p>Regards,<br/>Shaw Adley</p><p>6KG634E practicecowboy</p>",
      isRead: true,
      folder: "INBOX",
      uid: 594,
      sentAt: "2022-02-02T04:41:13.000Z",
      archivedAt: null,
      deletedAt: null,
      createdAt: "2024-08-25T04:41:13.000Z",
      updatedAt: "2024-08-25T04:41:13.000Z",
    },
    {
      id: 79606,
      fromName: "Shaw Adley",
      fromEmail: "shaw@getmemeetings.com",
      toName: "",
      toEmail: "mitrajit2022@gmail.com",
      cc: [],
      bcc: [],
      threadId: 53096,
      messageId: "<OTIivsmEOEzwFW@getmemeetings.com>",
      inReplyTo: "<Wj6UkLwo9e7vUp@gmail.com>",
      references: "<Wj6UkLwo9e7vUp@gmail.com>",
      subject: "Test mail",
      body: "<p>Test mail</p>",
      isRead: true,
      folder: "INBOX",
      uid: 594,
      sentAt: "2022-02-03T04:41:13.000Z",
      archivedAt: null,
      deletedAt: null,
      createdAt: "2024-08-25T04:41:13.000Z",
      updatedAt: "2024-08-25T04:41:13.000Z",
    },
  ];
  console.log(data);
  return (
    <div
      className={`w-[20%] h-full border px-4 pt-4 ${
        isDarkMode ? "border-[#343A40]" : "border-[#DEDEDE]"
      }`}
    >
      <MessegesSidebarFirstPart handleRefresh={handleRefresh} />
      <hr className="my-2" />
      {data?.length > 0 && !loading ? (
        <div className="overflow-y-auto">
          {data?.map((eachMessage) => (
            <EachSidebarMessage details={eachMessage} key={eachMessage?.id} />
          ))}
        </div>
      ) : loading ? (
        <p>Loading...</p>
      ) : (
        "No Messages Found"
      )}
    </div>
  );
};

export default MessagesListSidebar;
