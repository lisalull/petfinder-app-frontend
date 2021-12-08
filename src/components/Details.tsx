import { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { useHistory, useLocation } from "react-router-dom";
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
  let history = useHistory();
  return (
    <div className="Details">
      {foundEvent?.category === "lost" && (
        <div className="lostPet">
          <h1>Have you seen {foundEvent.name ? foundEvent.name : "me"}?</h1>
          {foundEvent.media && <img src={foundEvent.media} alt="user upload" />}
          <p>Lost on {foundEvent.date}</p>
          <p>{foundEvent.description}</p>
          <h2>Did you find me? Contact my pawrents!</h2>
          <p>Email: {foundEvent.email}</p>
          <p>Phone: {foundEvent.phoneNumber}</p>
          <p>Preferred Contact Method: {foundEvent.preferedContact}</p>
          {/* <Mailto email={foundEvent.email} obfuscate={true}>
            Email my pawrents!
          </Mailto>*/}
        </div>
      )}
      {foundEvent?.category === "found" && (
        <div className="foundPet">
          <h1>Do you recognize me?</h1>
          {foundEvent.media && <img src={foundEvent.media} alt="user upload" />}
          <p>Found on {foundEvent.date}</p>
          <p>{foundEvent.description}</p>
          <h2>Are you my pawrents? Contact my finders!</h2>
          <p>Email: {foundEvent.email}</p>
          <p>Phone: {foundEvent.phoneNumber}</p>
          <p>Preferred Contact Method: {foundEvent.preferedContact}</p>
        </div>
      )}
      {foundEvent?.category === "sighting" && (
        <div className="foundPet">
          <h1>Pet sighting!</h1>
          {foundEvent.media && <img src={foundEvent.media} alt="user upload" />}
          <p>Seen on {foundEvent.date}</p>
          <p>{foundEvent.description}</p>
        </div>
      )}
      <p>Reported {foundEvent?.category} at this location.</p>
      <DisplayMap />
      <button onClick={() => history.goBack()}>Back</button>
    </div>
  );
};

export default Details;
