import { ReactNode, useEffect, useState } from "react";
import Event from "../models/Event";
import EventsContext from "./EventsContext";
import { addEvent, getEvents } from "../services/EventsService";

interface Props {
  children: ReactNode;
}

const EventsContextProvider = ({ children }: Props) => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    getEventsHandler();
  }, []);

  const getEventsHandler = (): void => {
    getEvents().then((response) => {
      setEvents(response);
    });
  };

  const addEventHandler = (event: Event): void => {
    addEvent(event).then(() => {
      getEventsHandler();
    });
  };

  return (
    <EventsContext.Provider value={{ events, addEventHandler }}>
      {children}
    </EventsContext.Provider>
  );
};

export default EventsContextProvider;
