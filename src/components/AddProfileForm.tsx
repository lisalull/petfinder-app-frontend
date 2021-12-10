import { FormEvent, useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import Profile from "../models/Profile";
import { addProfile } from "../services/ProfilesService";
import "./AddProfileForm.css";

const AddProfileForm = () => {
  const [displayName, setDisplayName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [preferredContact, setPreferredContact] = useState("call");
  const { user, setProfile } = useContext(AuthContext);
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newProfile: Profile = {
      displayName,
      phone,
      email,
      preferredContact,
      uid: user!.uid!,
    };
    addProfile(newProfile);
    setProfile(newProfile);
  };
  return (
    <form className="AddProfileForm" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="displayName">Username: </label>
        <input
          type="text"
          name="displayName"
          id="displayName"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
        />
      </div>
      <div className="field">
        <label htmlFor="phone">Phone number: </label>
        <input
          type="text"
          name="phone"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div className="field">
        <label htmlFor="email">Email: </label>
        <input
          type="text"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="field">
        <label htmlFor="preferredContact">Preferred Contact: </label>
        <input
          type="radio"
          name="preferredContact"
          id="call"
          value="call"
          defaultChecked
          onChange={(e) => setPreferredContact(e.target.value)}
        />
        <label htmlFor="call">Call</label>
        <input
          type="radio"
          name="preferredContact"
          id="text"
          value="text"
          onChange={(e) => setPreferredContact(e.target.value)}
        />
        <label htmlFor="text">Text</label>
        <input
          type="radio"
          name="preferredContact"
          id="email"
          value="email"
          onChange={(e) => setPreferredContact(e.target.value)}
        />
        <label htmlFor="email">Email</label>
      </div>
      <button>Submit</button>
    </form>
  );
};

export default AddProfileForm;
