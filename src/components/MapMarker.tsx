import { Link } from "react-router-dom";
import "./MapMarker.css";

interface Props {
  lat: number;
  lng: number;
  category: string;
  id: string;
  showIndex: number;
  index: number;
  text: string;
  setShowIndex: (index: number) => void;
}

const MapMarker = ({
  text,
  category,
  setShowIndex,
  showIndex,
  index,
  id,
}: Props) => {
  return (
    <div className="MapMarker">
      {showIndex !== index ? (
        <i
          className={`fas fa-map-marker ${category}`}
          onClick={() => setShowIndex(index)}
        ></i>
      ) : (
        <div className="marker-popup-container">
          <button onClick={() => setShowIndex(-1)}>X</button>

          <p>{text}</p>
          <Link to={`/details/${encodeURIComponent(id)}`}>
            See more details
          </Link>
        </div>
      )}
    </div>
  );
};

export default MapMarker;
