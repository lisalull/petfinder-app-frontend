import { Link } from "react-router-dom";
import Event from "../models/Event";
import "./EventItem.css";

interface Props {
  event: Event;
}

const EventItem = ({ event }: Props) => {
  let displayCategory = event.category.toUpperCase();
  return (
    <li className={`EventItem ${event.category}`}>
      <p className="category">{displayCategory}</p>
      {event.media && <img src={event.media} alt="user upload" />}
      <p>{event.description}</p>

      <Link
        className="details"
        to={`/details/${encodeURIComponent(event!._id!)}`}
      >
        See more Details
      </Link>
    </li>
  );
};

export default EventItem;
