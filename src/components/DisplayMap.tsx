import "./DisplayMap.css";
import GoogleMapReact from "google-map-react";
import MapMarker from "./MapMarker";
import { useContext, useState } from "react";
import EventsContext from "../context/EventsContext";
import { useLocation, useParams } from "react-router";
import Event from "../models/Event";
import SearchByCity from "./SearchByCity";

const key = process.env.REACT_APP_API_KEY || "";

interface RouteParams {
  id: string;
}

const DisplayMap = () => {
  const { filteredEvents, currentLocation, setCurrentLocation, events } =
    useContext(EventsContext);
  const [showIndex, setShowIndex] = useState(-1);
  const id: string = useParams<RouteParams>().id;
  const detailsPage: boolean = id ? true : false;
  const foundEvent: Event | undefined = events.find((item) => item._id === id);

  return (
    <div
      className="DisplayMap"
      style={
        detailsPage
          ? { height: "500px", width: "500px" }
          : { height: "75vh", width: "100%" }
      }
    >
      <SearchByCity />
      <GoogleMapReact
        bootstrapURLKeys={{ key }}
        center={
          detailsPage
            ? { lat: foundEvent!.lat, lng: foundEvent!.lng }
            : currentLocation
        }
        defaultZoom={detailsPage ? 16 : 10}
      >
        {filteredEvents?.map((event, i) => (
          <MapMarker
            lat={event.lat}
            lng={event.lng}
            category={event.category}
            text={event.description}
            id={event._id!}
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
