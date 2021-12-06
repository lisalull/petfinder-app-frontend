import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EventsContext from "../context/EventsContext";
import EventsList from "./EventsList";
import "./HomePage.css";
import ProjectMap from "./ProjectMap";

const HomePage = () => {
  const { filteredEvents, getEventsByCategory } = useContext(EventsContext);

  return (
    <div className="HomePage">
      <button onClick={() => getEventsByCategory("")}>All</button>
      <button onClick={() => getEventsByCategory("lost")}>Lost</button>
      <button onClick={() => getEventsByCategory("found")}>Found</button>
      <button onClick={() => getEventsByCategory("sightings")}>
        Sightings
      </button>
      <ProjectMap />
      <EventsList events={filteredEvents} />
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
