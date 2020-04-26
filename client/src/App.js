import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Search from "./pages/Search.js";
import Saved from "./pages/Saved.js";
import Header from "./components/Header";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <div>
            <Route exact path="/" component={Search} />
            <Route exact path="/saved" component={Saved} />
          </div>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
