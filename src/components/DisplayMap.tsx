import "./DisplayMap.css";
import GoogleMapReact from "google-map-react";
import MapMarker from "./MapMarker";
import { useContext, useState } from "react";
import EventsContext from "../context/EventsContext";
import { useLocation, useParams } from "react-router";
import Event from "../models/Event";
import SearchByCity from "./SearchByCity";
import { Marker } from "@react-google-maps/api";

const key = process.env.REACT_APP_API_KEY || "";

interface RouteParams {
  id: string;
}

interface Props {
  lat?: number;
  lng?: number;
}

const DisplayMap = ({ lat, lng }: Props) => {
  const { filteredEvents, currentLocation, setCurrentLocation, events } =
    useContext(EventsContext);
  const [showIndex, setShowIndex] = useState(-1);
  const id: string = useParams<RouteParams>().id;
  const detailsPage: boolean = id ? true : false;

  return (
    <div
      className="DisplayMap"
      style={
        detailsPage
          ? { height: "500px", width: "500px" }
          : { height: "70vh", width: "100%" }
      }
    >
      {!detailsPage && <SearchByCity />}
      <GoogleMapReact
        bootstrapURLKeys={{ key }}
        center={detailsPage ? { lat: lat!, lng: lng! } : currentLocation}
        defaultZoom={detailsPage ? 16 : 10}
      >
        {filteredEvents?.map((event, i) => (
          <MapMarker
            lat={event?.lat}
            lng={event?.lng}
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
