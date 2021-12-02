import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
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
    </div>
  );
};

export default Header;
