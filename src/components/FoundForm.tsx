import { getDownloadURL, ref, uploadBytes } from "@firebase/storage";
import { FormEvent, useContext, useRef, useState } from "react";
import EventsContext from "../context/EventsContext";
import { storage } from "../firebaseConfig";
import Event from "../models/Event";
import "./FoundForm.css";
import ProjectMap from "./ProjectMap";

const FoundForm = () => {
  const [dateFound, setDateFound] = useState("");
  const [description, setDescription] = useState("");

  const { addEventHandler } = useContext(EventsContext);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    let newEvent: Event = {
      date: dateFound,
      description,
      category: "Found",
      lat: 42.27,
      lng: -83.73,
      returned: false,
      uid: "abcdef",
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
  };

  return (
    <div className="FoundForm">
      <form onSubmit={handleSubmit}>
        <label htmlFor="dateFound">Date Found: </label>
        <input
          type="date"
          name="dateFound"
          id="dateFound"
          value={dateFound}
          onChange={(e) => setDateFound(e.target.value)}
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
        <label htmlFor="foundLocation">Mark Location Found: </label>
        <button>Submit</button>
      </form>
      <ProjectMap />
    </div>
  );
};

export default FoundForm;
