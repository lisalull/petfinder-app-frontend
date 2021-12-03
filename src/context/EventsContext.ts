import { createContext, useContext } from "react";
import Event from "../models/Event";

interface EventsContextModel {
  events: Event[];
  addEventHandler: (event: Event) => void;
}

const defaultValues: EventsContextModel = {
  events: [],
  addEventHandler: () => {},
};

const EventsContext = createContext(defaultValues);

export default EventsContext;
