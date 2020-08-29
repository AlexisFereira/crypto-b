import React, {useEffect, useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Landing from "./components/landing";
import Login from "./components/login";
import Dashboard from "./components/dashboard";
import './i18n';
import {SeTDataDash} from "./components/store/actions/actionsCreators";
import {connect} from "react-redux";
import getWeb3 from "./getWeb3";
import Cryptobillions from "./contracts/Cryptobillions";

function App() {

  return (
    <div className="main-container bgDark" id={"scroll"}>
      <Router>
        <Switch>
            <Route exact path={"/"} render={()=> <Landing/> } />
            <Route exact path={"/login"} render={()=>   <Login    /> } />
            <Route exact path={"/register"} render={()=> <Login register /> } />
            <Route exact path={"/dashboard"} render={()=> <Dashboard/> } />
            <Route exact path={"*"} render={()=> <Landing/> } />
        </Switch>
      </Router>
    </div>
  );
};

const MDTP = {SeTDataDash};
export default connect(null,MDTP)(App)
