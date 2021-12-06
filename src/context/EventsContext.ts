import { createContext, useContext } from "react";
import Event from "../models/Event";

interface EventsContextModel {
  filteredEvents: Event[];
  addEventHandler: (event: Event) => void;
  getEventsByCategory: (category: string) => void;
  getEventsByType: (type: string) => void;
  showDisplayMap: boolean;
  setShowDisplayMapHandler: () => void;
  showAddEventMap: boolean;
  setShowAddEventMapHandler: () => void;
}

const defaultValues: EventsContextModel = {
  filteredEvents: [],
  addEventHandler: () => {},
  getEventsByCategory: () => {},
  getEventsByType: () => {},
  showDisplayMap: false,
  setShowDisplayMapHandler: () => {},
  showAddEventMap: false,
  setShowAddEventMapHandler: () => {},
};

const EventsContext = createContext(defaultValues);

export default EventsContext;
