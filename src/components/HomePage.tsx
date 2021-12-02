import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import EventsContext from "../context/EventsContext";
import Event from "../models/Event";
import { addEvent, getEvents } from "../services/EventsService";
import "./HomePage.css";
import ProjectMap from "./ProjectMap";

const HomePage = () => {
  const [events, setEvents] = useState<Event[]>([]);
  // const {events} = useContext(EventsContext)

  useEffect(() => {
    getEventsHandler();
  }, []);

  const getEventsHandler = (): void => {
    getEvents().then((response) => {
      setEvents(response);
    });
  };

  // const addEventHandler = (event: Event): void => {
  //   addEvent(event).then(() => {
  //     getEventsHandler();
  //   });
  // };

  return (
    <div className="HomePage">
      <ProjectMap />
      <Link to="report-lost">
        <p>Report Lost Pet</p>
      </Link>
      <Link to="report-found">
        <p>Report Found Pet</p>
      </Link>
      <Link to="report-sighting">
        <p>Report Pet Sighting</p>
      </Link>
    </div>
  );
};

export default HomePage;
