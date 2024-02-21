import React from "react";
import "./App.css";
import Form from "./Form";
import "./Form.css";
import FormLogin from "./FormLogin";
import Form2 from "./Form2";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./NavComponents/Navbar";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/register" component={Form} />
          <Route path="/login" component={Form2} />
        </Switch>
      </div>
    </Router>
  );
}
const Home = () => (
  <div className="home-page">
    <h1>This is home page</h1>
  </div>
);

export default App;
