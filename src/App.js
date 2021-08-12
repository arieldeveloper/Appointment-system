import './App.css';
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import HomePage from "./pages/home.js";
import UserPage from "./pages/users.js";


function alert() {
    window.alert("Hi there you clicked this button")
}

function App() {
  return (

      <Router>
          <>
          <Switch>
              <Route path="/users">
                  <UserPage/>
              </Route>
              <Route path="">
                  <HomePage/>
              </Route>
          </Switch>
          </>
      </Router>
  );
}

export default App;
