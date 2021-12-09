import { Link } from "react-router-dom";
import Event from "../models/Event";
import "./EventItem.css";

interface Props {
  event: Event;
}

const EventItem = ({ event }: Props) => {
  return (
    <li className={`EventItem ${event.category}`}>
      <p>{event.description}</p>
      {event.media && <img src={event.media} alt="user upload" />}
      <Link to={`/details/${encodeURIComponent(event!._id!)}`}>
        See more Details
      </Link>
    </li>
  );
};

export default EventItem;
