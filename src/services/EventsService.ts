import axios from "axios";
import Event from "../models/Event";
import Param from "../models/Param";

const baseURL: string = process.env.REACT_APP_API_URL || "";

export const getEvents = (category: string = ""): Promise<Event[]> => {
  const params: Param = { ...(category ? { category } : {}) };
  return axios.get(`${baseURL}/events`, { params }).then((response) => {
    return response.data;
  });
};

export const addEvent = (event: Event): Promise<Event> => {
  return axios
    .post(`${baseURL}/events`, event)
    .then((response) => response.data);
};
