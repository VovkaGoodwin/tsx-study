import React from 'react';
import {Navbar} from "./Components/Navbar";
import {TodosPage} from "./pages/TodosPage";
import {AboutPage} from "./pages/AboutPage";
import {BrowserRouter, Switch, Route} from "react-router-dom";

const App: React.FC = () => {

  return (<BrowserRouter>
    <Navbar/>
    <div className="container">
      <Switch>
        <Route component={TodosPage} path="/" exact/>
        <Route component={TodosPage} path="/todo"/>
        <Route component={AboutPage} path="/about"/>
      </Switch>
    </div>
  </BrowserRouter>)
}

export default App;
