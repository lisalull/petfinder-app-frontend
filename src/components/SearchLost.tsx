import { useEffect, useState } from "react";
import Event from "../models/Event";
import { getEvents } from "../services/EventsService";
import EventsList from "./EventsList";
import SearchForm from "./SearchForm";
import "./SearchLost.css";

const SearchLost = () => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    getEvents("Lost").then((response) => setEvents(response));
  }, []);

  return (
    <div className="SearchLost">
      <SearchForm />
      <EventsList events={events} />
    </div>
  );
};

export default SearchLost;
