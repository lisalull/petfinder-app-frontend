import { Link } from "react-router-dom";
import "./Header.css";
import { signInWithGoogle, signOut } from "../firebaseConfig";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const Header = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="Header">
      <Link to="/">
        <h1>Find My Pawrents</h1>
      </Link>
      <Link to="/lost">
        <p>Search Lost</p>
      </Link>
      <Link to="/found">
        <p>Search Found</p>
      </Link>
      {user ? (
        <button onClick={signOut}>Sign out</button>
      ) : (
        <button onClick={signInWithGoogle}>Sign in with Google</button>
      )}
    </div>
  );
};

export default Header;
