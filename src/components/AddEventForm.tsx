import { getDownloadURL, ref, uploadBytes } from "@firebase/storage";
import { FormEvent, useContext, useRef, useState } from "react";
import EventsContext from "../context/EventsContext";
import Event from "../models/Event";
import { storage } from "../firebaseConfig";
import "./AddEventForm.css";
import AuthContext from "../context/AuthContext";
import { useHistory } from "react-router";

interface Props {
  lat: number;
  lng: number;
}

const AddEventForm = ({ lat, lng }: Props) => {
  const { user, profile } = useContext(AuthContext);
  const history = useHistory();
  const [category, setCategory] = useState("lost");
  const [type, setType] = useState("dog");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const { addEventHandler } = useContext(EventsContext);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent) => {
    // e.preventDefault();
    let newEvent: Event = {
      date,
      description,
      category,
      lat,
      lng,
      returned: false,
      uid: user!.uid,
      type,
      displayName: "abcdef",
      phoneNumber: "abcdef",
      email: "abcdef",
      preferedContact: "abcdef",
    };
    const files = fileInputRef.current?.files;
    if (files && files[0]) {
      const file = files[0]; // Here is the file we need
      const storageRef = ref(storage, file.name);
      uploadBytes(storageRef, file).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((response) => {
          newEvent.media = response;
          addEventHandler(newEvent);
        });
      });
    } else {
      addEventHandler(newEvent);
    }
    // history.push(`/details/${encodeURIComponent(newEvent._id!)}`, newEvent);
  };

  return (
    <form className="AddEventForm" onSubmit={handleSubmit}>
      <div className="category">
        <input
          type="radio"
          name="category"
          id="lost"
          value="lost"
          checked
          onChange={(e) => console.log(e.target.value, e.target.checked)}
        />
        <label htmlFor="lost">Lost</label>
        <input
          type="radio"
          name="category"
          id="found"
          value="found"
          onChange={(e) => setCategory(e.target.value)}
        />
        <label htmlFor="found">Found</label>
        <input
          type="radio"
          name="category"
          id="sighting"
          value="sighting"
          onChange={(e) => setCategory(e.target.value)}
        />
        <label htmlFor="sighting">Sighting</label>
      </div>
      <label htmlFor="type">Type:</label>
      <select name="type" id="type" onChange={(e) => setType(e.target.value)}>
        <option value="dog">Dog</option>
        <option value="cat">Cat</option>
        <option value="other">Other</option>
      </select>
      <label htmlFor="date">Date: </label>
      <input
        type="date"
        name="date"
        id="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <label htmlFor="description">Description: </label>
      <input
        type="text"
        name="description"
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <label htmlFor="uploadPicture">Upload Picture: </label>
      <input ref={fileInputRef} type="file" />

      <button>Submit</button>
    </form>
  );
};

export default AddEventForm;
