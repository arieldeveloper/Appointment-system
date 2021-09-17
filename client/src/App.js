import HomePage from "./pages/home.js";
import UserPage from "./pages/users.js";

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import React from "react";

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

