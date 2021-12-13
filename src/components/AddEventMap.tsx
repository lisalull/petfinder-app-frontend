import "./AddEventMap.css";
import GoogleMapReact from "google-map-react";
import Marker from "../models/Marker";
import { useContext, useState } from "react";
import EventsContext from "../context/EventsContext";
import NewMarker from "./NewMarker";
import SearchByCity from "./SearchByCity";

const key = process.env.REACT_APP_API_KEY || "";

const AddEventMap = () => {
  const { currentLocation, setCurrentLocation, setShowAddEventMapHandler } =
    useContext(EventsContext);
  const [marker, setMarker] = useState<Marker>();
  // const [mapCenter, setMapCenter] = useState<Marker>(currentLocation);

  const createMarker = (e: GoogleMapReact.ClickEventValue) => {
    if (e.event.target.parentNode.ariaLabel === "Map") {
      const newMarker: Marker = {
        lat: e.lat,
        lng: e.lng,
      };
      setMarker(newMarker);
      // setMapCenter(newMarker);
      setCurrentLocation(newMarker);
    }
  };

  return (
    <div className="AddEventMap" style={{ height: "79vh", width: "100%" }}>
      <button className="closeButton" onClick={setShowAddEventMapHandler}>
        X
      </button>
      <SearchByCity />
      <GoogleMapReact
        bootstrapURLKeys={{ key }}
        center={currentLocation}
        defaultZoom={10}
        onClick={createMarker}
      >
        {marker && <NewMarker lat={marker.lat} lng={marker.lng} />}
      </GoogleMapReact>
    </div>
  );
};

export default AddEventMap;
