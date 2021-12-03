import Event from "../models/Event";
import "./EventItem.css";

interface Props {
  event: Event;
}

const EventItem = ({ event }: Props) => {
  return (
    <li className="EventItem">
      <p>{event.description}</p>
      {event.media && <img src={event.media} alt="user upload" />}
    </li>
  );
};

export default EventItem;
