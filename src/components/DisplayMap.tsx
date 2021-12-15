import "./DisplayMap.css";
import GoogleMapReact from "google-map-react";
import MapMarker from "./MapMarker";
import { useContext, useState } from "react";
import EventsContext from "../context/EventsContext";
import { useParams } from "react-router";
import SearchByCity from "./SearchByCity";
import Event from "../models/Event";

const key = process.env.REACT_APP_API_KEY || "";

interface RouteParams {
  id: string;
}

interface Props {
  lat?: number;
  lng?: number;
}

const DisplayMap = ({ lat, lng }: Props) => {
  const { filteredEvents, currentLocation, events } = useContext(EventsContext);
  const [showIndex, setShowIndex] = useState(-1);
  const id: string = useParams<RouteParams>().id;
  const detailsPage: boolean = id ? true : false;

  const detailedEvent: Event | undefined = events.find(
    (item) => item._id === id
  );

  return (
    <div
      className="DisplayMap"
      style={
        detailsPage
          ? { height: "400px", width: "400px" }
          : { height: "75vh", width: "100%" }
      }
    >
      {!detailsPage && <SearchByCity />}
      <GoogleMapReact
        bootstrapURLKeys={{ key }}
        center={detailsPage ? { lat: lat!, lng: lng! } : currentLocation}
        defaultZoom={detailsPage ? 12 : 10}
      >
        {detailsPage && (
          <MapMarker
            lat={detailedEvent?.lat!}
            lng={detailedEvent?.lng!}
            category={detailedEvent?.category!}
            text={detailedEvent?.description!}
            id={detailedEvent?._id!}
            setShowIndex={setShowIndex}
            showIndex={showIndex}
            index={20}
            detailsPage={detailsPage}
            date={detailedEvent?.date!}
          />
        )}
        {detailedEvent?.sightings &&
          detailsPage &&
          detailedEvent.sightings.map((event, i) => (
            <MapMarker
              lat={event?.lat}
              lng={event?.lng}
              category="sighting"
              text={event.description}
              id=""
              setShowIndex={setShowIndex}
              showIndex={showIndex}
              index={i}
              key={i}
              detailsPage={detailsPage}
              date={event?.date}
            />
          ))}
        {!detailsPage &&
          filteredEvents?.map((event, i) => (
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
              detailsPage={detailsPage}
              date={event?.date}
            />
          ))}
      </GoogleMapReact>
    </div>
  );
};

export default DisplayMap;
