import Event from "../models/Event";
import EventItem from "./EventItem";
import "./EventsList.css";

interface Props {
  events: Event[];
}

const EventsList = ({ events }: Props) => {
  return (
    <ul className="EventsList">
      {events.map((event) => {
        return <EventItem event={event} key={event?._id} />;
      })}
    </ul>
  );
};

export default EventsList;
