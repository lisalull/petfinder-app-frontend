import { createContext, useContext } from "react";
import Event from "../models/Event";

interface EventsContextModel {
  filteredEvents: Event[];
  addEventHandler: (event: Event) => void;
  getEventsByCategory: (category: string) => void;
}

const defaultValues: EventsContextModel = {
  filteredEvents: [],
  addEventHandler: () => {},
  getEventsByCategory: () => {},
};

const EventsContext = createContext(defaultValues);

export default EventsContext;
