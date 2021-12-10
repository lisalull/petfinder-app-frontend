import { useContext, useState } from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import EventsContext from "../context/EventsContext";
import Event from "../models/Event";
import { updateReturned } from "../services/EventsService";
import "./Details.css";
import DisplayMap from "./DisplayMap";

interface RouteParams {
  id: string;
}

const Details = () => {
  const { id } = useParams<RouteParams>();
  const { events, getEventsHandler } = useContext(EventsContext);
  const { user } = useContext(AuthContext);
  const [showConfirmation, setShowConfirmation] = useState(false);
  let foundEvent = events.find((item: Event) => item._id === id);
  console.log(foundEvent);
  const history = useHistory();

  const reunitedButtonHandler = () => {
    updateReturned(id).then(() => {
      getEventsHandler();
      history.push("/");
    });
  };

  return (
    <div className="Details">
      {foundEvent?.category === "lost" && (
        <h1>Have you seen {foundEvent.name ? foundEvent.name : "me"}?</h1>
      )}
      {foundEvent?.category === "found" && <h1>Do you recognize me?</h1>}
      {foundEvent?.category === "sighting" && <h1>Pet sighting!</h1>}
      <div className="content">
        {foundEvent?.category === "lost" && (
          <div className="lostPet">
            {foundEvent.media && (
              <img src={foundEvent.media} alt="user upload" />
            )}
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
            {foundEvent.media && (
              <img src={foundEvent.media} alt="user upload" />
            )}
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
            {foundEvent.media && (
              <img src={foundEvent.media} alt="user upload" />
            )}
            <p>Seen on {foundEvent.date}</p>
            <p>{foundEvent.description}</p>
          </div>
        )}
        {user?.uid! === foundEvent?.uid && !showConfirmation && (
          <button onClick={() => setShowConfirmation(true)}>Reunited!</button>
        )}
        {showConfirmation && (
          <p className="confirmParagraph">
            Yay!!! Confirm Reunited and{" "}
            <span className="removeLink" onClick={reunitedButtonHandler}>
              Remove
            </span>{" "}
            from List?
          </p>
        )}
        <div className="map">
          <p className="lastSeen">
            Reported {foundEvent?.category} at this location:
          </p>
          <DisplayMap lat={foundEvent?.lat!} lng={foundEvent?.lng!} />
          <button onClick={() => history.goBack()}>Back</button>
        </div>
      </div>
    </div>
  );
};

export default Details;
