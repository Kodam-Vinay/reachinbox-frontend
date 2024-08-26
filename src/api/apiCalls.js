import axios from "axios";
import { API_URL } from "../utils/constants";

export const loginRequest = async ({ apiUrl, setError, setIsError }) => {
  try {
    const googleOAuthUrl = `${API_URL}${apiUrl}`;
    window.location.href = googleOAuthUrl;
  } catch (error) {
    setIsError(true);
    setError(error.message);
  }
};

export const getRequest = async ({ apiUrl, setError, setIsError, token }) => {
  try {
    const response = await axios.get(API_URL + apiUrl, {
      headers: {
        "Content-Type": "Application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    setIsError(true);
    setError(error.message);
  }
};

export const deleteRequest = async ({
  apiUrl,
  setError,
  setIsError,
  token,
}) => {
  try {
    const response = await axios.delete(API_URL + apiUrl, {
      headers: {
        "Content-Type": "Application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    setIsError(true);
    setError(error.message);
  }
};
