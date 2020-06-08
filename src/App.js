import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div className="app">
      <Contact />
      <Portfolio />
    </div>
  );
}

export default App;
