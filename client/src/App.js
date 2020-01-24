import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home"
import LogInForm from "./components/LogInForm";

class App extends Component {
  render() {
    return (
      <div>
        <Home />
        <LogInForm />
      </div>
    );
  }
}

export default App;
