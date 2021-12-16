import { useHistory } from "react-router-dom";
import "./Header.css";
import { signInWithGoogle, signOut } from "../firebaseConfig";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import EventsContext from "../context/EventsContext";

const Header = () => {
  const { user } = useContext(AuthContext);
  const { setBothMapsToFalse } = useContext(EventsContext);
  const history = useHistory();
  const homePageHandler = () => {
    setBothMapsToFalse();
    history.push("/");
  };

  return (
    <header className="Header">
      <h1 onClick={homePageHandler}>Find My Pawrents</h1>
      <i className="fas fa-paw"></i>
      {user ? (
        <div>
          <button onClick={signOut}>Sign out</button>
        </div>
      ) : (
        <button onClick={signInWithGoogle}>Sign in</button>
      )}
    </header>
  );
};

export default Header;
