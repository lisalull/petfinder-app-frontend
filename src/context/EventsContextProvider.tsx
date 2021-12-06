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
      const filteredArray = events.filter((item) => item.category === category);
      setFilteredEvents(filteredArray);
    } else {
      setFilteredEvents(events);
    }
  };
  const getEventsByType = (type: string): void => {
    setTypeFilter(type);
    if (type) {
      const filteredArray = events.filter((item) => item.type === type);
      setFilteredEvents(filteredArray);
    }
  };

  const addEventHandler = (event: Event): void => {
    addEvent(event).then(() => {
      getEventsHandler();
    });
  };

  return (
    <EventsContext.Provider
      value={{ filteredEvents, addEventHandler, getEventsByCategory }}
    >
      {children}
    </EventsContext.Provider>
  );
};

export default EventsContextProvider;
