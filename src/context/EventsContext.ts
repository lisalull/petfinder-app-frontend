// import { Marker } from "@react-google-maps/api";
import { createContext, useContext } from "react";
import Event from "../models/Event";
import Marker from "../models/Marker";

interface EventsContextModel {
  filteredEvents: Event[];
  events: Event[];
  // addEventHandler: (event: Event) => void;
  getEventsByCategory: (category: string) => void;
  getEventsByType: (type: string) => void;
  showDisplayMap: boolean;
  setShowDisplayMapHandler: () => void;
  showAddEventMap: boolean;
  setShowAddEventMapHandler: () => void;
  getCurrentLocation: () => void;
  currentLocation: Marker;
  getEventsHandler: () => void;
}

const defaultValues: EventsContextModel = {
  filteredEvents: [],
  events: [],
  // addEventHandler: () => {},
  getEventsByCategory: () => {},
  getEventsByType: () => {},
  showDisplayMap: false,
  setShowDisplayMapHandler: () => {},
  showAddEventMap: false,
  setShowAddEventMapHandler: () => {},
  getCurrentLocation: () => {},
  currentLocation: { lat: 5, lng: 5 },
  getEventsHandler: () => {},
};

const EventsContext = createContext(defaultValues);

export default EventsContext;
