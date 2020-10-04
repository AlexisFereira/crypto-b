import React, { useEffect, useState} from 'react';
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
import {SeTDataDash} from "./components/store/actions/actionsCreators";
import {connect} from "react-redux";



function App(props) {

    const [state,setState] = useState({
        loading:false,
        tronWeb:null,
        scroll:0,
    });

    const getTronweb = async ()=>{
        setState({loading:true});
    };


    useEffect(()=>{
        getTronweb();


    },[]);

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

const MDTP = {SeTDataDash};
export default connect(null,MDTP)(App)
