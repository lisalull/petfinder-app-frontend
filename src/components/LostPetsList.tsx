import { useContext } from "react";
import EventsContext from "../context/EventsContext";
import Event from "../models/Event";
import "./LostPetsList.css";

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
