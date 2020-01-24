import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home"
import LogInForm from "./components/LogInForm";
import Profile from "./pages/Profile"

class App extends Component {
  render() {
    return (
      <div>
        <Profile />
      </div>
    );
  }
}

export default App;
