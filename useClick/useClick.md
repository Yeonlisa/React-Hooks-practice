# useClick
component 요소를 가져와서 click시 function을 실행한다.
```js
import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

export const useClick = (onClick) => {
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("click", onClick);
    } //dependency가 []인 경우 : componentDidMount, componentDidUpdate 때 호출.
    //dependency가 존재한다면 : componentDidMount일 때만 호출., componentDidUnMount일 때는 return
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
  }, []);
  return element;
};

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
ReactDOM.render(<App />, document.getElementById("root"));
```
