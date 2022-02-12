# useInput
input을 업데이트 한다.
```js
export const useInput = (initialValue, validator) => {
  // useInput 매개변수에는 초기값 : initialValue, 유효값 : validator 넣어준다.
  // validator를 넣는 것은 선택.(글자길이제한,글자유형제한)
  const [value, setValue] = useState(initialValue);
  //useState로 value의 초기값 설정. 
  const onChange = (event) => {
    const {
      target: { value }
    } = event;
    let willUpdate = true;
    //유효값 설정. false이면 update X
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    //validator의 type이 function이면 validator(value) 삽입.
    if (willUpdate) {
      setValue(value);
    }
    //willUpdate가 true이면 setValue에 value 값 삽입.
  };
  return { value, onChange };
};

const App = () => {
  const maxLen = (value) => value.length <= 10;
  //maxLen true, false값 만들어 useInput으로 보냄.
  const name = useInput("Mr.", maxLen);
  //Mr가 기본값.
  return (
    <div className="App">
      <h1>hello</h1>
      <input placeholder="Name" {...name} />
	//{...name} : name을 진열. <-> value = {name.value}
    </div>
  );
};
```
