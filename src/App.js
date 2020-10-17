import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [serviceList, setServiceList] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser, serviceList, setServiceList]}>
      <div className="body">
        <Router>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route exact path="/">
              <Home></Home>
            </Route>
          </Switch>
        </Router>
      </div>
    </UserContext.Provider>
  );
}

export default App;
