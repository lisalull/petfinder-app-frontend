import Marker from "../models/Marker";
import "./NewMarker.css";

interface Props {
  lat: number;
  lng: number;
}

const NewMarker = ({ lat, lng }: Props) => {
  return (
    <div className="NewMarker">
      <i className="fas fa-map-marker"></i>
    </div>
  );
};

export default NewMarker;
