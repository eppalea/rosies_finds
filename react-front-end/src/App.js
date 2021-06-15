import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//component imports
import Items from "./components/Items";
import About from "./components/About";
import Sales from "./components/Sales";
import Contact from "./components/Contact";
import Nav from "./components/Nav";

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route path="/items" exact component={Items} />
      </Switch>
      <Switch>
        <Route path="/about" exact component={About} />
      </Switch>
      <Switch>
        <Route path="/sales" exact component={Sales} />
      </Switch>
      <Switch>
        <Route path="/contact" exact component={Contact} />
      </Switch>
    </BrowserRouter>
  );
}
