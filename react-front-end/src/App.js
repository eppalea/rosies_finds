import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import { Router, Switch, Route } from "react-router-dom";

//component exports
import Items from "./components/Items";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/items" exact component={Items} />
      </Switch>
    </Router>
  );
}
