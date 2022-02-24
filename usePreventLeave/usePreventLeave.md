# usePreventLeave
사용자들이 브라우저를 떠나기 전에 comfirm창을 띄워 확인 받는 함수이다.
```js
export const usePreventLeave = () => {
  const listener = event => {
    event.preventDefault();
    event.returnValue = "";
  };
  const enablePrevent = () => window.addEventListener("beforeunload", listener); // beforeunload 이벤트 리스너로 listener 지정
  const disablePrevent = () =>
    window.removeEventListener("beforeunload", listener); // beforeunload 이벤트 제거
  return { enablePrevent, disablePrevent }; // 두 함수를 return
};

const App = () => {
  const { enablePrevent, disablePrevent } = usePreventLeave();
  return (
    <div className="App">
      <h1>Hello</h1>
      <button onClick={enablePrevent}>Protect</button>
      <button onClick={disablePrevent}>Unprotect</button>
    </div>
  );
};
```
