import { ReactNode, useEffect, useState } from "react";
import Event from "../models/Event";
import EventsContext from "./EventsContext";
import { getEvents } from "../services/EventsService";
import Marker from "../models/Marker";

interface Props {
  children: ReactNode;
}

const EventsContextProvider = ({ children }: Props) => {
  const [events, setEvents] = useState<Event[]>([]);
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);
  // const [returned, setReturned] = useState<Event[]>([]);
  const [showDisplayMap, setShowDisplayMap] = useState<boolean>(false);
  const [showAddEventMap, setShowAddEventMap] = useState<boolean>(false);
  const [categoryFilter, setCategoryFilter] = useState<string>("");
  const [typeFilter, setTypeFilter] = useState<string>("");
  const [currentLocation, setCurrentLocation] = useState<Marker>({
    lat: 42.278046,
    lng: -83.73822,
  });

  useEffect(() => {
    getEventsHandler();
    getCurrentLocation();
  }, []);

  const getEventsHandler = (): void => {
    getEvents().then((response) => {
      setEvents(response);
      setFilteredEvents(response);
    });
  };

  const getEventsByCategory = (category: string): void => {
    setCategoryFilter(category);
    if (category) {
      if (typeFilter) {
        const filteredArray = events.filter(
          (item) => item.category === category && item.type === typeFilter
        );
        setFilteredEvents(filteredArray);
      } else {
        const filteredArray = events.filter(
          (item) => item.category === category
        );
        setFilteredEvents(filteredArray);
      }
    } else {
      if (typeFilter) {
        const filteredArray = events.filter((item) => item.type === typeFilter);
        setFilteredEvents(filteredArray);
      } else {
        setFilteredEvents(events);
      }
    }
  };
  const getEventsByType = (type: string): void => {
    setTypeFilter(type);
    if (type) {
      if (categoryFilter) {
        const filteredArray = events.filter(
          (item) => item.type === type && item.category === categoryFilter
        );
        setFilteredEvents(filteredArray);
      } else {
        const filteredArray = events.filter((item) => item.type === type);
        setFilteredEvents(filteredArray);
      }
    } else {
      if (categoryFilter) {
        const filteredArray = events.filter(
          (item) => item.category === categoryFilter
        );
        setFilteredEvents(filteredArray);
      } else {
        setFilteredEvents(events);
      }
    }
  };

  // const addEventHandler = (event: Event): void => {
  //   addEvent(event).then(() => {
  //     getEventsHandler();
  //   });
  // };

  const setShowAddEventMapHandler = () => {
    setShowDisplayMap(false);
    showAddEventMap ? setShowAddEventMap(false) : setShowAddEventMap(true);
  };
  const setShowDisplayMapHandler = () => {
    setShowAddEventMap(false);
    showDisplayMap ? setShowDisplayMap(false) : setShowDisplayMap(true);
  };

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((response) => {
      const coords = {
        lat: response.coords.latitude,
        lng: response.coords.longitude,
      };
      setCurrentLocation(coords);
    });
  };

  return (
    <EventsContext.Provider
      value={{
        events,
        filteredEvents,
        categoryFilter,
        typeFilter,
        getEventsHandler,
        getEventsByCategory,
        getEventsByType,
        showDisplayMap,
        setShowDisplayMapHandler,
        showAddEventMap,
        setShowAddEventMapHandler,
        getCurrentLocation,
        currentLocation,
        setCurrentLocation,
        setEvents,
        setFilteredEvents,
        // setReturned,
      }}
    >
      {children}
    </EventsContext.Provider>
  );
};

export default EventsContextProvider;
