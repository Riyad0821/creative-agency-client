import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard/AdminDashboard';
import Order from './components/Dashboard/Order/Order';
import AddService from './components/Dashboard/AddService/AddService';
import AdminServiceList from './components/Dashboard/AdminServiceList/AdminServiceList';
import ServiceList from './components/Dashboard/ServiceList/ServiceList';
import Review from './components/Dashboard/Review/Review';
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <div className="body">
        <Router>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/dashboard">
              <Dashboard></Dashboard>
            </Route>
            <Route path="/aDashboard">
              <AdminDashboard></AdminDashboard>
            </Route>
            <Route path="/a">
              <Order></Order>
            </Route>
            <Route path="/">
              <Home></Home>
            </Route>
          </Switch>
        </Router>
        {/* <Router>
          <Switch>
            <Route path="/">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route> */}
            {/* <PrivateRoute path="/register/:serviceType">
              <Register></Register>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/addItem">
              <AddItems></AddItems>
            </Route>
            <PrivateRoute path="/admin">
              <Admin></Admin>
            </PrivateRoute>
            <Route exact path="/">
              <Home></Home>
            </Route> */}
          {/* </Switch>
        </Router> */}
      </div>
    </UserContext.Provider>
  );
}

export default App;
