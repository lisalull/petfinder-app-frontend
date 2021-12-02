import axios from "axios";
import Event from "../models/Event";

const baseURL: string = process.env.REACT_APP_API_URL || "";

export const getEvents = (category: string = ""): Promise<Event[]> => {
  const params: any = { ...(category ? { category } : {}) };
  return axios.get(`${baseURL}/events`, { params }).then((response) => {
    return response.data;
  });
};

export const addEvent = (event: Event): Promise<Event> => {
  return axios.post(baseURL, event).then((response) => response.data);
};
