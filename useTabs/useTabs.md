# useTabs
content를 가져올 때 사용한다.
```js
const content = [
  {
    tab: "Section 1",
    content: "I'm the content of the Section 1"
  },
  {
    tab: "Section 2",
    content: "I'm the content of the Section 2"
  }
];

export const useTabs = (initialTab, allTabs) => {
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  //배열이 아닐 때 return
  const [currentIndex, setCurrentIndex] = useState(initialTab, allTabs);
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex
    //changeItem은 기본적으로 setCurrentIndex를 가짐.
  };
};

const App = () => {
  const { currentItem, changeItem } = useTabs(0, content);
  //content[0]을 얻고싶다. 배열의 인덱스가 0일때 첫번째 요소를 가져온다.
  //useTabs은 currentItem을 return
  return (
    <div className="App">
      {content.map((section, index) => (
        <button onClick={() => changeItem(index)}>{section.tab}</button>
        //index는 0 혹은 1
        //onClick이면 changeItem(index) 실행.
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
};
```
