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
        {/* <label htmlFor="city">Search by address, city, or zip code: </label> */}
        <input
          type="text"
          name="city"
          id="city"
          placeholder="Search by address, city, or zip code"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button>
          <i className="fas fa-search-location fa-2x"></i>
        </button>
      </form>
    </div>
  );
};

export default SearchByCity;
