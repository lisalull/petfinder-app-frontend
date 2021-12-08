import { FormEvent, useContext, useState } from "react";
import "./SearchByCity.css";
import Geocode from "react-geocode";
import EventsContext from "../context/EventsContext";

const key = process.env.REACT_APP_API_KEY || "";
Geocode.setApiKey(key);

const SearchByCity = () => {
  const [city, setCity] = useState("");

  const { setCurrentLocation } = useContext(EventsContext);

  const submitCityHandler = (e: FormEvent): void => {
    e.preventDefault();
    Geocode.fromAddress(city).then(
      (response) => {
        setCurrentLocation(response.results[0].geometry.location);
      },
      (error) => {
        console.error(error);
      }
    );
    setCity("");
  };
  return (
    <div className="SearchByCity">
      <form onSubmit={submitCityHandler}>
        <label htmlFor="city">City</label>
        <input
          type="text"
          name="city"
          id="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button>Search</button>
      </form>
    </div>
  );
};

export default SearchByCity;
