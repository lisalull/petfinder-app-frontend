import "./DisplayMap.css";
import GoogleMapReact from "google-map-react";
import Center from "../models/Center";
import MapMarker from "./MapMarker";
import Marker from "../models/Marker";
import { useContext, useState } from "react";
import EventsContext from "../context/EventsContext";

const key = process.env.REACT_APP_API_KEY || "";

const DisplayMap = () => {
  const { filteredEvents } = useContext(EventsContext);
  const [showIndex, setShowIndex] = useState(-1);

  return (
    <div className="DisplayMap" style={{ height: "75vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key }}
        defaultCenter={{ lat: 42.278046, lng: -83.73822 }}
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
          />
        ))}
      </GoogleMapReact>
    </div>
  );
};

export default DisplayMap;
