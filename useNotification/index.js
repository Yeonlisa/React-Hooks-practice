import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const App = () => {
    const triggerNotification = useNotification("Can you tell me?", {
      body: "I will tell you about this."
    });
    return (
      <div className="App" style={{ height: "1000vh" }}>
        <button onClick={triggerNotification}>Hello</button>
      </div>
    );
  };
  
  const rootElement = document.getElementById("root");
  ReactDOM.render(<App />, rootElement);