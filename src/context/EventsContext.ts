import { createContext } from "react";
import Event from "../models/Event";

interface EventsContextModel {
  events: Event[];
}

const defaultValues: EventsContextModel = {
  events: [],
};

const EventsContext = createContext(defaultValues);

export default EventsContext;
