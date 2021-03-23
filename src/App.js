import React from "react";
import "./styles/global.module.css";
//
import { BrowserRouter } from "react-router-dom";

import Router from "./router";
import Nav from "./components/nav/Nav";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Router />
    </BrowserRouter>
  );
}

export default App;
