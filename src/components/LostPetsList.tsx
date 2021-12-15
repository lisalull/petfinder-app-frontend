import { useContext } from "react";
import EventsContext from "../context/EventsContext";
import Event from "../models/Event";
import "./LostPetsList.css";
import defaultDogPic from "../assets/dogDefault.jpg";
import defaultCatPic from "../assets/catDefault.jpg";
import defaultOtherPic from "../assets/otherDefault.jpg";

interface Props {
  linkSightingHandler: (event: Event) => void;
  showList: boolean;
  setShowList: (b: boolean) => void;
}

const LostPetsList = ({
  linkSightingHandler,
  showList,
  setShowList,
}: Props) => {
  const { events } = useContext(EventsContext);
  const lostEvents = events.filter((event) => event.category === "lost");

  return (
    <div className="LostPetsList">
      <button onClick={() => setShowList(false)}>Nevermind</button>
      <ul>
        {lostEvents.map((event) => (
          <li key={event._id}>
            <p>{event.name}</p>
            {event.media && <img src={event.media} alt="user upload of pet" />}
            {!event.media && event.type === "dog" && (
              <img src={defaultDogPic} alt="user upload" />
            )}
            {!event.media && event.type === "cat" && (
              <img src={defaultCatPic} alt="user upload" />
            )}
            {!event.media && event.type === "other" && (
              <img src={defaultOtherPic} alt="user upload" />
            )}
            <p>
              <button onClick={() => linkSightingHandler(event)}>Link</button>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LostPetsList;
