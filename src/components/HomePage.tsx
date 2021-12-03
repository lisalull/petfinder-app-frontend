import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EventsContext from "../context/EventsContext";
import "./HomePage.css";
import ProjectMap from "./ProjectMap";

const HomePage = () => {
  const { events } = useContext(EventsContext);

  console.log(events);

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
