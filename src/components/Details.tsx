import { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { useLocation } from "react-router-dom";
import EventsContext from "../context/EventsContext";
import Event from "../models/Event";
import "./Details.css";
import DisplayMap from "./DisplayMap";

interface RouteParams {
  id: string;
}

const Details = () => {
  const { id } = useParams<RouteParams>();
  const { events } = useContext(EventsContext);
  let foundEvent = events.find((item: Event) => item._id === id);
  // const Mailto = require("react-mailto");

  return (
    <div className="Details">
      {foundEvent?.category === "lost" && (
        <div className="lostPet">
          <h1>Have you seen {foundEvent.name ? foundEvent.name : "me"}?</h1>
          {foundEvent.media && <img src={foundEvent.media} alt="user upload" />}
          <p>Lost on {foundEvent.date}</p>
          <p>{foundEvent.description}</p>
          <h2>Did you find me? </h2>
          {/* <Mailto email={foundEvent.email} obfuscate={true}>
            Email my pawrents!
          </Mailto>
          <DisplayMap /> */}
        </div>
      )}
      {foundEvent?.category === "found" && (
        <div className="foundPet">
          <h1>Are you my pawrents?</h1>
          {foundEvent.media && <img src={foundEvent.media} alt="user upload" />}
          <p>Found on {foundEvent.date}</p>
          <p>{foundEvent.description}</p>
          <DisplayMap />
        </div>
      )}
      {foundEvent?.category === "sighting" && (
        <div className="foundPet">
          <h1>Pet sighting!</h1>
          {foundEvent.media && <img src={foundEvent.media} alt="user upload" />}
          <p>Seen on {foundEvent.date}</p>
          <p>{foundEvent.description}</p>
          <DisplayMap />
        </div>
      )}
    </div>
  );
};

export default Details;
