import axios from "axios";
import Event from "../models/Event";

const baseURL: string = process.env.REACT_APP_API_URL || "";

export const getEvents = (): Promise<Event[]> => {
  return axios.get(`${baseURL}/events`).then((response) => {
    return response.data;
  });
};

export const addEvent = (event: Event): Promise<Event> => {
  return axios
    .post(`${baseURL}/events`, event)
    .then((response) => response.data);
};

export const getEventById = (_id: string): Promise<Event> => {
  return axios
    .get(`${baseURL}/details/${encodeURIComponent(_id!)}`)
    .then((response) => response.data);
};
