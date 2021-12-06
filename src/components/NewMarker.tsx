import Marker from "../models/Marker";
import AddEventForm from "./AddEventForm";
import "./NewMarker.css";

interface Props {
  lat: number;
  lng: number;
}

const NewMarker = ({ lat, lng }: Props) => {
  return (
    <div className="NewMarker">
      <i className="fas fa-map-marker"></i>
      <AddEventForm lat={lat} lng={lng} />
    </div>
  );
};

export default NewMarker;
