import React from 'react';
import './css/style.min.css';
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Portfolio from "./components/Portfolio/Prortfolio";
import Contacts from "./components/Contacts/Contacts";
import {BrowserRouter, Route} from "react-router-dom";

function App(props) {
  const {state} = props;

  return (
    <BrowserRouter>
      <Header/>

      <Route exact path={'/'} component={Home}/>
      <Route path={'/portfolio'} render={() =>
        <Portfolio projects={state.projects}/>
      }/>
      <Route path={'/contacts'} component={Contacts}/>

      <Footer/>
    </BrowserRouter>
  );
}

export default App;
