import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const App = () => {
    const sayHello = () => console.log("say hello");
    const title = useClick(sayHello);
    return (
      <div className="App">
        <h1 ref={title}>Hi</h1>
      </div>
    );
  };
  
  const rootElement = document.getElementById("root");
  ReactDOM.render(<App />, rootElement);