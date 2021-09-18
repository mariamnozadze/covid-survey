import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Start from "./components/Start.js";
import Survey1 from "./components/Surveys/Survey1";
import Survey2 from "./components/Surveys/Survey2";
import Survey3 from "./components/Surveys/Survey3";
import Survey4 from "./components/Surveys/Survey4";
import ThankU from "./components/ThankU.js";

function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Route exact path="/">
            <Start />
          </Route>
          <Route path="/Survey1">
            <Survey1 />
          </Route>
          <Route path="/Survey2">
            <Survey2 />
          </Route>
          <Route path="/Survey3">
            <Survey3 />
          </Route>
          <Route path="/Survey4">
            <Survey4 />
          </Route>
          <Route path="/ThankU">
            <ThankU />
          </Route>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
