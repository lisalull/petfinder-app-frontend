import "./DisplayMap.css";
import GoogleMapReact from "google-map-react";
import MapMarker from "./MapMarker";
import { useContext, useState } from "react";
import EventsContext from "../context/EventsContext";

const key = process.env.REACT_APP_API_KEY || "";

const DisplayMap = () => {
  const { filteredEvents, getCurrentLocation, currentLocation } =
    useContext(EventsContext);
  const [showIndex, setShowIndex] = useState(-1);

  getCurrentLocation();

  return (
    <div className="DisplayMap" style={{ height: "75vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key }}
        center={currentLocation}
        defaultZoom={10}
        // onClick={createMarker}
      >
        {filteredEvents?.map((event, i) => (
          <MapMarker
            lat={event.lat}
            lng={event.lng}
            text={event.category}
            setShowIndex={setShowIndex}
            showIndex={showIndex}
            index={i}
            key={event?._id}
          />
        ))}
      </GoogleMapReact>
    </div>
  );
};

export default DisplayMap;
