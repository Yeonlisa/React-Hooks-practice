import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const App = () => {
    const maxLen = (value) => value.includes("@");
    const name = useInput("Mr.", maxLen);
    return (
      <div className="App">
        <h1>Hello</h1>
        <input placeholder="Name" {...name} />
      </div>
    );
  };
  
  const rootElement = document.getElementById("root");
  ReactDOM.render(<App />, rootElement);