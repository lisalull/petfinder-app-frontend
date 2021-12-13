import { useContext, useState } from "react";
import AddProfileForm from "./AddProfileForm";
import CategoryForm from "./CategoryForm";
import AddEventForm from "./AddEventForm";
import "./FormContainer.css";
import AuthContext from "../context/AuthContext";

interface Props {
  lat: number;
  lng: number;
}

const FormContainer = ({ lat, lng }: Props) => {
  const [showForm, setShowForm] = useState(true);
  const { user, profile } = useContext(AuthContext);
  //   const [user, setUser] = useState(false);
  //   const [profile, setProfile] = useState(false);
  const [category, setCategory] = useState("");
  //   console.log(`user: ${user}`, `profile: ${profile}`, `category: ${category}`);
  return (
    <div className="FormContainer">
      {/* {showForm ? (
        <button className="closeButton" onClick={() => setShowForm(false)}>
          X
        </button>
      ) : (
        <button onClick={() => setShowForm(true)}>Click to See Form</button>
      )} */}
      {showForm && !user && (
        <div>
          <p className="signIn"> Sign in and create a profile to add</p>
        </div>
      )}
      {user && !profile && (
        <AddProfileForm
          // setProfile={setProfile}
          showForm={showForm}
          setShowForm={setShowForm}
        />
      )}
      {user && profile && !category && (
        <CategoryForm
          setCategory={setCategory}
          showForm={showForm}
          setShowForm={setShowForm}
        />
      )}
      {user && profile && category && (
        <AddEventForm
          lat={lat}
          lng={lng}
          category={category}
          showForm={showForm}
          setShowForm={setShowForm}
        />
      )}
    </div>
  );
};

export default FormContainer;
