import Event from "../models/Event";
import "./EventItem.css";

interface Props {
  event: Event;
}

const EventItem = ({ event }: Props) => {
  return <li className="EventItem">{event.description}</li>;
};

export default EventItem;
