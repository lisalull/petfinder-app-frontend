// import { Marker } from "@react-google-maps/api";
import { createContext } from "react";
import Event from "../models/Event";
import Marker from "../models/Marker";

interface EventsContextModel {
  filteredEvents: Event[];
  events: Event[];
  typeFilter: string;
  categoryFilter: string;
  // addEventHandler: (event: Event) => void;
  getEventsByCategory: (category: string) => void;
  getEventsByType: (type: string) => void;
  showDisplayMap: boolean;
  setShowDisplayMapHandler: () => void;
  showAddEventMap: boolean;
  setShowAddEventMapHandler: () => void;
  getCurrentLocation: () => void;
  setCurrentLocation: (m: Marker) => void;
  currentLocation: Marker;
  getEventsHandler: () => void;
  setEvents: (events: Event[]) => void;
  setFilteredEvents: (events: Event[]) => void;
  setBothMapsToFalse: () => void;
  // setReturned: (events: Event[]) => void;
}

const defaultValues: EventsContextModel = {
  filteredEvents: [],
  events: [],
  typeFilter: "",
  categoryFilter: "",
  // addEventHandler: () => {},
  getEventsByCategory: () => {},
  getEventsByType: () => {},
  showDisplayMap: false,
  setShowDisplayMapHandler: () => {},
  showAddEventMap: false,
  setShowAddEventMapHandler: () => {},
  getCurrentLocation: () => {},
  setCurrentLocation: () => {},
  currentLocation: { lat: 5, lng: 5 },
  getEventsHandler: () => {},
  setEvents: () => {},
  setBothMapsToFalse: () => {},
  setFilteredEvents: () => {},
  // setReturned: () => {},
};

const EventsContext = createContext(defaultValues);

export default EventsContext;
