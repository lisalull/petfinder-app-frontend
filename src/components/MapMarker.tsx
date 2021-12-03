import "./MapMarker.css";

interface Props {
  lat: number;
  lng: number;
  text: string;
  showIndex: number;
  index: number;
  setShowIndex: (index: number) => void;
}

const MapMarker = ({ text, setShowIndex, showIndex, index }: Props) => {
  return (
    <div className="MapMarker">
      {showIndex !== index ? (
        <i
          className="fas fa-map-marker"
          onClick={() => setShowIndex(index)}
        ></i>
      ) : (
        <div className="marker-popup-container">
          <p>{text}</p>
          <button onClick={() => setShowIndex(-1)}>X</button>
        </div>
      )}
    </div>
  );
};

export default MapMarker;
