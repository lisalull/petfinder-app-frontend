// import React from "react";
// import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

// const containerStyle = {
//   width: "400px",
//   height: "400px",
// };

// const center = {
//   lat: 42.331429,
//   lng: -83.045753,
// };
// const key = process.env.REACT_APP_API_KEY || "";

// function MyComponent() {
//   const { isLoaded } = useJsApiLoader({
//     id: "google-map-script",
//     googleMapsApiKey: key,
//   });

//   const [map, setMap] = React.useState(null);

//   const onLoad = React.useCallback(function callback(map) {
//     const bounds = new window.google.maps.LatLngBounds();
//     map.fitBounds(bounds);
//     setMap(map);
//   }, []);

//   const onUnmount = React.useCallback(function callback(map) {
//     setMap(null);
//   }, []);

//   return isLoaded ? (
//     <GoogleMap
//       mapContainerStyle={containerStyle}
//       center={center}
//       zoom={10}
//       onLoad={onLoad}
//       onUnmount={onUnmount}
//     >
//       {/* Child components, such as markers, info windows, etc. */}
//       <></>
//     </GoogleMap>
//   ) : (
//     <></>
//   );
// }

// export default React.memo(MyComponent);
import "./ProjectMap.css";
import GoogleMapReact from "google-map-react";
import Center from "../models/Center";
import MapMarker from "./MapMarker";
import Marker from "../models/Marker";
import { useState } from "react";

const ProjectMap = () => {
  const [showIndex, setShowIndex] = useState(-1);
  const [markers, setMarkers] = useState<Marker[]>([
    {
      lat: 42.27,
      lng: -83.73,
      text: "hello",
      _id: "abc1",
    },
    {
      lat: 42.28,
      lng: -83.74,
      text: "hello2",
      _id: "abc2",
    },
    {
      lat: 42.29,
      lng: -83.75,
      text: "hello3",
      _id: "abc3",
    },
    {
      lat: 42.3,
      lng: -83.76,
      text: "hello4",
      _id: "abc4",
    },
  ]);

  const createMarker = (e: GoogleMapReact.ClickEventValue) => {
    if (e.event.target.parentNode.ariaLabel === "Map") {
      const newMarker: Marker = {
        lat: e.lat,
        lng: e.lng,
        text: "Andrea",
      };
      setMarkers((prev) => [...prev, newMarker]);
    }
  };

  return (
    <div className="Map" style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCzNmErBn0rNTX8hytNorCLJPay3PnVyYQ" }}
        defaultCenter={{ lat: 42.278046, lng: -83.73822 }}
        defaultZoom={10}
        onClick={createMarker}
      >
        {markers.map((marker, i) => (
          <MapMarker
            {...marker}
            setShowIndex={setShowIndex}
            showIndex={showIndex}
            index={i}
          />
        ))}
      </GoogleMapReact>
    </div>
  );
};

export default ProjectMap;
