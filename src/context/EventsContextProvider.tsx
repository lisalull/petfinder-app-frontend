import { ReactNode, useEffect, useState } from "react";
import Event from "../models/Event";
import EventsContext from "./EventsContext";
import { addEvent, getEvents } from "../services/EventsService";

interface Props {
  children: ReactNode;
}

const EventsContextProvider = ({ children }: Props) => {
  const [events, setEvents] = useState<Event[]>([]);
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);
  const [showDisplayMap, setShowDisplayMap] = useState<boolean>(false);
  const [showAddEventMap, setShowAddEventMap] = useState<boolean>(false);
  const [categoryFilter, setCategoryFilter] = useState<string>("");
  const [typeFilter, setTypeFilter] = useState<string>("");

  useEffect(() => {
    getEventsHandler();
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

  const addEventHandler = (event: Event): void => {
    addEvent(event).then(() => {
      getEventsHandler();
    });
  };

  const setShowAddEventMapHandler = () => {
    setShowDisplayMap(false);
    showAddEventMap ? setShowAddEventMap(false) : setShowAddEventMap(true);
  };
  const setShowDisplayMapHandler = () => {
    setShowAddEventMap(false);
    showDisplayMap ? setShowDisplayMap(false) : setShowDisplayMap(true);
  };

  return (
    <EventsContext.Provider
      value={{
        filteredEvents,
        addEventHandler,
        getEventsByCategory,
        getEventsByType,
        showDisplayMap,
        setShowDisplayMapHandler,
        showAddEventMap,
        setShowAddEventMapHandler,
      }}
    >
      {children}
    </EventsContext.Provider>
  );
};

export default EventsContextProvider;
