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
  date: string;
  setShowIndex: (index: number) => void;
  detailsPage: boolean;
}

const MapMarker = ({
  text,
  category,
  setShowIndex,
  showIndex,
  index,
  id,
  date,
  detailsPage,
}: Props) => {
  return (
    <div className="MapMarker">
      <i
        className={`fas fa-map-marker fa-2x ${category}`}
        onClick={() => setShowIndex(index)}
      ></i>
      {showIndex === index && (
        <div className="marker-popup-container">
          <button onClick={() => setShowIndex(-1)}>X</button>
          {detailsPage ? (
            <p>{date}</p>
          ) : (
            <>
              {" "}
              <p>{text}</p>
              <Link to={`/details/${encodeURIComponent(id)}`}>
                See more details
              </Link>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default MapMarker;
