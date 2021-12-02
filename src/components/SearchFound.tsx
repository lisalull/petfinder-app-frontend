import { useEffect, useState } from "react";
import Event from "../models/Event";
import { getEvents } from "../services/EventsService";
import EventsList from "./EventsList";
import SearchForm from "./SearchForm";
import "./SearchFound.css";

const SearchFound = () => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    getEvents("Found").then((response) => setEvents(response));
  }, []);

  return (
    <div className="SearchFound">
      <SearchForm />
      <EventsList events={events} />
    </div>
  );
};

export default SearchFound;
