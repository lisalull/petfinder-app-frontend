import { Link } from "react-router-dom";
import "./MapMarker.css";

interface Props {
  lat: number;
  lng: number;
  category: string;
  id: string;
  showIndex: number;
  index: number;
  setShowIndex: (index: number) => void;
}

const MapMarker = ({ category, setShowIndex, showIndex, index, id }: Props) => {
  return (
    <div className="MapMarker">
      {showIndex !== index ? (
        <i
          className={`fas fa-map-marker ${category}`}
          onClick={() => setShowIndex(index)}
        ></i>
      ) : (
        <div className="marker-popup-container">
          <p>{category}</p>
          <Link to={`/details/${encodeURIComponent(id)}`}>
            See more details
          </Link>
          <button onClick={() => setShowIndex(-1)}>X</button>
        </div>
      )}
    </div>
  );
};

export default MapMarker;
