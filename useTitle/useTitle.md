# useTitle
문서의 제목(title)을 업데이트 해준다.
## useEffect
- componentDidMount, componentWillUnmount, componentWillUpdate의 역할을 수행.
- 두 개의 매개변수
  - 첫 번째 : 실행할 함수.
  - 두 번째 : dependency, ex) [number] 이면 number 변수가 변해야 함수가 실행, []이면 mount될 때만.
```js
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

export const useTitle = (initialTitle) => {
  // 입력받은 파라미터로 초기값 설정
  const [title, setTitle] = useState(initialTitle);
  // title 변경 함수
  const updateTitle = () => {
    // <title> 태그 찾기
    const htmlTitle = document.querySelector("title");
    // <title> 태그에 변수 title값을 넣음
    htmlTitle.innerText = title;
  };
  // title 값이 바뀔 때마다 title 변경 함수 실행
  useEffect(updateTitle, [title]);
  // title을 변경할 수 있는 setTitle을 반환
  return setTitle;
};

const App = () => {
  // titleUpdater에 useTitle 반환값이 들어감
  const titleUpdater = useTitle("Loading...");
  // 5초후에 titleUpdater("Home") 실행
  setTimeout(() => titleUpdater("Home"), 5000);
  return (
    <div className="App">
      <div>Hi</div>
    </div>
  );
};
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, document.getElementById("root"));
```
