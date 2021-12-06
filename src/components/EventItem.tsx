import { Link } from "react-router-dom";
import Event from "../models/Event";
import "./EventItem.css";

interface Props {
  event: Event;
}

const EventItem = ({ event }: Props) => {
  return (
    <li className="EventItem">
      <Link to={`/details/${encodeURIComponent(event!._id!)}`}>
        <p>{event.description}</p>
        {event.media && <img src={event.media} alt="user upload" />}
      </Link>
    </li>
  );
};

export default EventItem;
