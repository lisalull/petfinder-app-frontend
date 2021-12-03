import axios from "axios";
import Profile from "../models/Profile";
const baseURL: string = process.env.REACT_APP_API_URL || "";
export const checkProfile = (uid: string): Promise<Profile[]> => {
  return axios
    .get(`${baseURL}/profiles/${encodeURIComponent(uid)}`)
    .then((response) => response.data);
};
