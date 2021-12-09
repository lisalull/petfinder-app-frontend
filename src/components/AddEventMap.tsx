import "./AddEventMap.css";
import GoogleMapReact from "google-map-react";
import Marker from "../models/Marker";
import { useContext, useState } from "react";
import EventsContext from "../context/EventsContext";
import NewMarker from "./NewMarker";

const key = process.env.REACT_APP_API_KEY || "";

const AddEventMap = () => {
  const { currentLocation, getCurrentLocation, setShowAddEventMapHandler } =
    useContext(EventsContext);
  const [marker, setMarker] = useState<Marker>();
  const [mapCenter, setMapCenter] = useState<Marker>(currentLocation);

  const createMarker = (e: GoogleMapReact.ClickEventValue) => {
    if (e.event.target.parentNode.ariaLabel === "Map") {
      const newMarker: Marker = {
        lat: e.lat,
        lng: e.lng,
      };
      setMarker(newMarker);
      setMapCenter(newMarker);
    }
  };

  return (
    <div className="AddEventMap" style={{ height: "79vh", width: "100%" }}>
      <button onClick={setShowAddEventMapHandler}>Close</button>
      <GoogleMapReact
        bootstrapURLKeys={{ key }}
        center={mapCenter}
        defaultZoom={10}
        onClick={createMarker}
      >
        {marker && <NewMarker lat={marker.lat} lng={marker.lng} />}
      </GoogleMapReact>
    </div>
  );
};

export default AddEventMap;
