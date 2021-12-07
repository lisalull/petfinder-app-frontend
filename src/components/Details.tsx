import { useContext, useEffect } from "react";
import { useParams } from "react-router";
import EventsContext from "../context/EventsContext";
import Event from "../models/Event";
import "./Details.css";

interface RouteParams {
  id: string;
}

const Details = () => {
  const { id } = useParams<RouteParams>();
  const { events } = useContext(EventsContext);
  let foundEvent = events.find((item: Event) => item._id === id);

  return (
    <div className="Details">
      {foundEvent?.category === "lost" && (
        <div className="lostPet">
          <h1>Have you seen {foundEvent.name ? foundEvent.name : "me"}?</h1>
          <img src={foundEvent!.media} alt="user upload" />
          <p>Lost on {foundEvent.date}</p>
          <p>{foundEvent.description}</p>
        </div>
      )}
      {foundEvent?.category === "found" && (
        <div className="foundPet">
          <h1>Are you my pawrents?</h1>
          <img src={foundEvent!.media} alt="user upload" />
          <p>Found on {foundEvent.date}</p>
          <p>{foundEvent.description}</p>
        </div>
      )}
      {foundEvent?.category === "sighting" && (
        <div className="foundPet">
          <h1>Pet sighting!</h1>
          <img src={foundEvent!.media} alt="user upload" />
          <p>Seen on {foundEvent.date}</p>
          <p>{foundEvent.description}</p>
        </div>
      )}
    </div>
  );
};

export default Details;
