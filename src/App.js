import React from "react";
import Portfolio from "./Portfolio";
import "./Portfolio.css";
import ReactGA from "react-ga";

ReactGA.initialize("UA-251521885-1");
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
  return (
    <div className="App">
      <Portfolio />
    </div>
  );
}

export default App;
