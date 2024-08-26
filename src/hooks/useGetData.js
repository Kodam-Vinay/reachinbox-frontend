import { useEffect } from "react";
import { getRequest } from "../api/apiCalls";
import Cookies from "js-cookie";

const useGetData = ({ setData, setError, setIsError, apiUrl, setLoading }) => {
  const token = Cookies.get("token");
  useEffect(() => {
    if (token) {
      getData();
    }
  }, [token]);

  async function getData() {
    setLoading(true);
    const data = await getRequest({
      apiUrl,
      setError,
      setIsError,
      token,
    });
    if (data) {
      setData(data);
      setLoading(false);
    }
    setLoading(false);
  }
};

export default useGetData;
