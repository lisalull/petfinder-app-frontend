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
  // const [markers, setMarkers] = useState<Marker[]>(
  // [
  //   {
  //     lat: 42.27,
  //     lng: -83.73,
  //     text: "hello",
  //     _id: "abc1",
  //   },
  //   {
  //     lat: 42.28,
  //     lng: -83.74,
  //     text: "hello2",
  //     _id: "abc2",
  //   },
  //   {
  //     lat: 42.29,
  //     lng: -83.75,
  //     text: "hello3",
  //     _id: "abc3",
  //   },
  //   {
  //     lat: 42.3,
  //     lng: -83.76,
  //     text: "hello4",
  //     _id: "abc4",
  //   },
  // ]);

  // const createMarker = (e: GoogleMapReact.ClickEventValue) => {
  //   if (e.event.target.parentNode.ariaLabel === "Map") {
  //     const newMarker: Marker = {
  //       lat: e.lat,
  //       lng: e.lng,
  //       text: "Andrea",
  //     };
  //     setMarkers((prev) => [...prev, newMarker]);
  //   }
  // };

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
