import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import SearchLost from "./components/SearchLost";
import SearchFound from "./components/SearchFound";
import LostForm from "./components/LostForm";
import FoundForm from "./components/FoundForm";
import SightingForm from "./components/SightingForm";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/lost" exact>
            <SearchLost />
          </Route>
          <Route path="/found" exact>
            <SearchFound />
          </Route>
          <Route path="/report-lost" exact>
            <LostForm />
          </Route>
          <Route path="/report-found" exact>
            <FoundForm />
          </Route>
          <Route path="/report-sighting" exact>
            <SightingForm />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
