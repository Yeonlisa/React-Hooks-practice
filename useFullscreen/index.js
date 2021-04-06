import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const App = () => {
    const onFullS = (isFull) => {
      console.log(isFull ? "Full" : "Small");
    };
    const { element, triggerFull, exitFull } = useFullscreen(onFullS);
    return (
      <div className="App" style={{ height: "1000vh" }}>
        <h1>Hello</h1>
        <div ref={element}>
          <img src="https://static7.depositphotos.com/1001651/762/i/950/depositphotos_7620905-stock-photo-big-and-small-apples-on.jpg" />
          <button onClick={exitFull}>exitFull</button>
          <button onClick={triggerFull}>triggerFull</button>
        </div>
      </div>
    );
  };
  
  const rootElement = document.getElementById("root");
  ReactDOM.render(<App />, rootElement);