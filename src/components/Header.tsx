import { Link } from "react-router-dom";
import "./Header.css";
import { signInWithGoogle, signOut } from "../firebaseConfig";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import AddProfileForm from "./AddProfileForm";

const Header = () => {
  const { user } = useContext(AuthContext);

  return (
    <header className="Header">
      <Link className="link" to="/">
        <h1>Find My Pawrents</h1>
      </Link>
      <div className="searchLinks">
        <Link className="link" to="/lost">
          <p>Search Lost</p>
        </Link>
        <i className="fas fa-paw"></i>
        <Link className="link" to="/found">
          <p>Search Found</p>
        </Link>
      </div>
      {user ? (
        <div>
          <button onClick={signOut}>Sign out</button>
          <AddProfileForm />
        </div>
      ) : (
        <button onClick={signInWithGoogle}>Sign in with Google</button>
      )}
    </header>
  );
};

export default Header;
