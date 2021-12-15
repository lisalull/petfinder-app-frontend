import { Link } from "react-router-dom";
import Event from "../models/Event";
import "./EventItem.css";
import defaultDogPic from "../assets/dogDefault.jpg";
import defaultCatPic from "../assets/catDefault.jpg";
import defaultOtherPic from "../assets/otherDefault.jpg";

interface Props {
  event: Event;
}

const EventItem = ({ event }: Props) => {
  let displayCategory = event.category.toUpperCase();
  return (
    <li className={`EventItem ${event.category}`}>
      <p className="category">{displayCategory}</p>
      {event.media && <img src={event.media} alt="user upload" />}
      {!event.media && event.type === "dog" && (
        <img src={defaultDogPic} alt="user upload" />
      )}
      {!event.media && event.type === "cat" && (
        <img src={defaultCatPic} alt="user upload" />
      )}
      {!event.media && event.type === "other" && (
        <img src={defaultOtherPic} alt="user upload" />
      )}
      <p>{event.description}</p>

      <Link
        className="details"
        to={`/details/${encodeURIComponent(event!._id!)}`}
      >
        See More Details
      </Link>
    </li>
  );
};

export default EventItem;
