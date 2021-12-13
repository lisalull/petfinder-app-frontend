import { useContext, useState } from "react";
import AddProfileForm from "./AddProfileForm";
import CategoryForm from "./CategoryForm";
import AddEventForm from "./AddEventForm";
import "./FormContainer.css";
import AuthContext from "../context/AuthContext";
import { signInWithGoogle } from "../firebaseConfig";

interface Props {
  lat: number;
  lng: number;
}

const FormContainer = ({ lat, lng }: Props) => {
  const [showForm, setShowForm] = useState(true);
  const { user, profile } = useContext(AuthContext);
  const [category, setCategory] = useState("");

  return (
    <div className="FormContainer">
      {showForm && !user && (
        <div>
          <p className="signIn">
            <span className="googleSignIn" onClick={signInWithGoogle}>
              Sign in
            </span>{" "}
            and create a profile to add
          </p>
        </div>
      )}
      {user && !profile && (
        <AddProfileForm showForm={showForm} setShowForm={setShowForm} />
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
