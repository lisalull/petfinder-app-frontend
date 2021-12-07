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
    typeFilter,
    categoryFilter,
    setShowAddEventMapHandler,
  } = useContext(EventsContext);

  return (
    <div className="HomePage">
      <div className="filterButtons">
        <button
          className={`${!categoryFilter ? "selected" : ""}`}
          onClick={() => getEventsByCategory("")}
        >
          All
        </button>
        <button
          className={`lostButton ${
            categoryFilter === "lost" ? "selected" : ""
          }`}
          onClick={() => getEventsByCategory("lost")}
        >
          Lost
        </button>
        <button
          className={`foundButton ${
            categoryFilter === "found" ? "selected" : ""
          }`}
          onClick={() => getEventsByCategory("found")}
        >
          Found
        </button>
        <button
          className={`sightingButton ${
            categoryFilter === "sighting" ? "selected" : ""
          }`}
          onClick={() => getEventsByCategory("sighting")}
        >
          Sightings
        </button>
      </div>
      <div className="filterButtons">
        <button
          className={`${!typeFilter ? "selected" : ""}`}
          onClick={() => getEventsByType("")}
        >
          All
        </button>
        <button
          className={`${typeFilter === "cat" ? "selected" : ""}`}
          onClick={() => getEventsByType("cat")}
        >
          Cat
        </button>
        <button
          className={`${typeFilter === "dog" ? "selected" : ""}`}
          onClick={() => getEventsByType("dog")}
        >
          Dog
        </button>
        <button
          className={`${typeFilter === "other" ? "selected" : ""}`}
          onClick={() => getEventsByType("other")}
        >
          Other
        </button>
      </div>
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
