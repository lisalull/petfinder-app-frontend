import { FormEvent, useState } from "react";
import "./FoundForm.css";
import ProjectMap from "./ProjectMap";

const FoundForm = () => {
  const [dateFound, setDateFound] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setDateFound("");
    setDescription("");
  };

  return (
    <div className="FoundForm" onSubmit={handleSubmit}>
      <form>
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
        {/* <input ref={fileInputRef} type="file" /> */}
        <label htmlFor="foundLocation">Mark Location Found: </label>
        <button>Submit</button>
      </form>
      <ProjectMap />
    </div>
  );
};

export default FoundForm;
