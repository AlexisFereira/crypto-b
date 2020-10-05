import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
    Redirect
} from "react-router-dom";
import Landing from "./components/landing";
import Login from "./components/login";
import Dashboard from "./components/dashboard";
import './i18n';




function App() {


  return (
    <div className="main-container bgDark" id={"scroll"}>
      <Router>
        <Switch>
            <Route exact path={"/"} render={()=> <Landing /> } />
            <Route exact path={"/login"} render={()=>   <Login    /> } />
            <Route exact path={"/register"} render={()=> <Login register /> } />
            <Route exact path={"/dashboard"} render={()=> <Dashboard/> } />
            <Route exact path={"*"} render={()=> <Redirect to={"/"}/> } />
        </Switch>
      </Router>
    </div>
  );
};


export default App;
