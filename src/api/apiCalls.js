import { API_URL } from "../utils/constants";
import axios from "axios";

export const loginRequest = async ({ apiUrl, setError, setIsError }) => {
  try {
    const response = await axios.get(API_URL + apiUrl, {
      params: {
        redirect_to: "https://frontend.com",
      },
    });
    console.log(response);
  } catch (error) {
    setIsError(true);
    setError(error.message);
  }
};
