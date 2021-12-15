import { useContext, useState } from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import EventsContext from "../context/EventsContext";
import Event from "../models/Event";
import { linkSightedEvent, updateReturned } from "../services/EventsService";
import "./Details.css";
import DisplayMap from "./DisplayMap";
import LostPetsList from "./LostPetsList";

interface RouteParams {
  id: string;
}

const Details = () => {
  const { id } = useParams<RouteParams>();
  const { events, getEventsHandler } = useContext(EventsContext);
  const { user } = useContext(AuthContext);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showList, setShowList] = useState(false);
  let foundEvent = events.find((item: Event) => item._id === id);
  console.log(foundEvent);
  const history = useHistory();

  const reunitedButtonHandler = () => {
    updateReturned(id).then(() => {
      getEventsHandler();
      history.push("/");
    });
  };

  const linkSightingHandler = (event: Event): void => {
    const id = event._id;
    const newEvent: Event = event;
    if (!newEvent.sightings) {
      newEvent.sightings = [];
    }
    newEvent.sightings.push({
      lat: foundEvent?.lat!,
      lng: foundEvent?.lng!,
      date: foundEvent?.date!,
      description: foundEvent?.description!,
    });
    linkSightedEvent(id!, newEvent);
    history.push(`/details/${encodeURIComponent(newEvent._id!)}`);
  };

  return (
    <div className="Details">
      {foundEvent?.category === "lost" && (
        <h1>Have you seen {foundEvent.name ? foundEvent.name : "me"}?</h1>
      )}
      {foundEvent?.category === "found" && <h1>Do you recognize me?</h1>}
      {foundEvent?.category === "sighting" && <h1>Pet sighting!</h1>}
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

            {/* {foundEvent?.sightings && (
              <div>
                <h1>Known Sightings: </h1>
                {foundEvent.sightings.map((sighting) => {
                  return (
                    <div>
                      <p>Sighting Date: {sighting.date}</p>
                      <p>Sighting Description: {sighting.description}</p>
                    </div>
                  );
                })}
              </div>
            )} */}

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
          <div className="sightedPet">
            {foundEvent.media && (
              <img src={foundEvent.media} alt="user upload" />
            )}
            <p>Seen on {foundEvent.date}</p>
            <p>{foundEvent.description}</p>

            {!showList && (
              <button onClick={() => setShowList(true)}>
                Link to lost pet.
              </button>
            )}
            {showList && (
              <LostPetsList
                showList={showList}
                setShowList={setShowList}
                linkSightingHandler={linkSightingHandler}
              />
            )}
          </div>
        )}
        <div className="map">
          <p className="lastSeen">
            Reported {foundEvent?.category} at this location:
          </p>
          <DisplayMap lat={foundEvent?.lat!} lng={foundEvent?.lng!} />
          {foundEvent?.sightings && (
            <div>
              <h1>Known Sightings: </h1>
              {foundEvent.sightings.map((sighting) => {
                return (
                  <div>
                    <p>Sighting Date: {sighting.date}</p>
                    <p>Sighting Description: {sighting.description}</p>
                  </div>
                );
              })}
            </div>
          )}
          <button onClick={() => history.goBack()}>Back</button>
        </div>
      </div>
    </div>
  );
};

export default Details;
