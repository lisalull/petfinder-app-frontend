import AddEventForm from "./AddEventForm";
import FormContainer from "./FormContainer";
import "./NewMarker.css";

interface Props {
  lat: number;
  lng: number;
}

const NewMarker = ({ lat, lng }: Props) => {
  return (
    <div className="NewMarker">
      <i className="fas fa-map-marker fa-2x"></i>
      <FormContainer lat={lat} lng={lng} />
    </div>
  );
};

export default NewMarker;
