import { ReactNode, useState } from "react";
import Event from "../models/Event";
import EventsContext from "./EventsContext";
// import { getEvents } from "../services/EventsService";

interface Props {
  children: ReactNode;
}

const EventsContextProvider = ({ children }: Props) => {
  const [events, setEvents] = useState<Event[]>([]);

  //   const getEventsHandler = (): void => {
  //     getEvents().then((response) => {
  //       setEvents(response);
  //     });
  //   };

  return (
    <EventsContext.Provider value={{ events }}>
      {children}
    </EventsContext.Provider>
  );
};

export default EventsContextProvider;
