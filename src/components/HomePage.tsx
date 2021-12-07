import { useContext } from "react";
import EventsContext from "../context/EventsContext";
import EventsList from "./EventsList";
import "./HomePage.css";
import DisplayMap from "./DisplayMap";
import AddEventMap from "./AddEventMap";

const HomePage = () => {
  const {
    filteredEvents,
    getEventsByCategory,
    getEventsByType,
    setShowDisplayMapHandler,
    showDisplayMap,
    showAddEventMap,
    setShowAddEventMapHandler,
  } = useContext(EventsContext);
  console.log(showDisplayMap, showAddEventMap);

  return (
    <div className="HomePage">
      <button onClick={() => getEventsByCategory("")}>All</button>
      <button onClick={() => getEventsByCategory("lost")}>Lost</button>
      <button onClick={() => getEventsByCategory("found")}>Found</button>
      <button onClick={() => getEventsByCategory("sightings")}>
        Sightings
      </button>
      <button onClick={() => getEventsByType("")}>All</button>
      <button onClick={() => getEventsByType("cat")}>Cat</button>
      <button onClick={() => getEventsByType("dog")}>Dog</button>
      <button onClick={() => getEventsByType("other")}>Other</button>
      <label className="switch">
        <input type="checkbox" onClick={setShowDisplayMapHandler} />
        <span className="slider round"></span>
      </label>
      <button onClick={setShowAddEventMapHandler}>Add Event</button>
      {showDisplayMap && <DisplayMap />}
      {showAddEventMap && <AddEventMap />}
      {!showDisplayMap && !showAddEventMap && (
        <EventsList events={filteredEvents} />
      )}
    </div>
  );
};

export default HomePage;
