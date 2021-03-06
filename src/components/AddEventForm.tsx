import { getDownloadURL, ref, uploadBytes } from "@firebase/storage";
import { FormEvent, useContext, useRef, useState } from "react";
import EventsContext from "../context/EventsContext";
import Event from "../models/Event";
import { storage } from "../firebaseConfig";
import "./AddEventForm.css";
import AuthContext from "../context/AuthContext";
import { useHistory } from "react-router";
import { addEvent, getEvents } from "../services/EventsService";

interface Props {
  lat: number;
  lng: number;
  showForm: boolean;
  setShowForm: (b: boolean) => void;
  category: string;
}

const AddEventForm = ({ lat, lng, showForm, setShowForm, category }: Props) => {
  const { user, profile } = useContext(AuthContext);
  const { setShowAddEventMapHandler, setEvents, setFilteredEvents } =
    useContext(EventsContext);
  const history = useHistory();
  const [type, setType] = useState("dog");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    let newEvent: Event = {
      date,
      description,
      category,
      name,
      lat,
      lng,
      returned: false,
      uid: user!.uid,
      type,
      displayName: profile!.displayName,
      phoneNumber: profile!.phone,
      email: profile!.email,
      preferedContact: profile!.preferredContact,
    };
    const files = fileInputRef.current?.files;
    if (files && files[0]) {
      const file = files[0]; // Here is the file we need
      const storageRef = ref(storage, file.name);
      uploadBytes(storageRef, file).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((response) => {
          newEvent.media = response;
          addEvent(newEvent).then((response) => {
            getEvents().then((data) => {
              setEvents(data);
              setFilteredEvents(data);
              setShowAddEventMapHandler();
              history.push(`/details/${encodeURIComponent(response._id!)}`);
            });
          });
        });
      });
    } else {
      addEvent(newEvent).then((response) => {
        getEvents().then((data) => {
          setEvents(data);
          setFilteredEvents(data);
          setShowAddEventMapHandler();
          history.push(`/details/${encodeURIComponent(response._id!)}`);
        });
      });
    }
  };

  return (
    <div className="AddEventForm">
      {showForm ? (
        <button className="closeButton" onClick={() => setShowForm(false)}>
          X
        </button>
      ) : (
        <button onClick={() => setShowForm(true)}>Click to See Form</button>
      )}
      {showForm && (
        <form onSubmit={handleSubmit} className="eventForm">
          <div className="field">
            <label htmlFor="type">Type: </label>
            <select
              name="type"
              id="type"
              onChange={(e) => setType(e.target.value)}
            >
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="name">Pet name (if known): </label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="field">
            <label htmlFor="date">Date: </label>
            <input
              type="date"
              name="date"
              id="date"
              required
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="field">
            <label htmlFor="description">Description: </label>
            <textarea
              rows={4}
              cols={25}
              name="description"
              id="description"
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="field">
            <label htmlFor="uploadPicture">Upload Picture: </label>
            <input ref={fileInputRef} type="file" />
          </div>

          <button>Submit</button>
        </form>
      )}
    </div>
  );
};

export default AddEventForm;
