# React Hooks

Learning React Hooks

## useState

> 컴포넌트에서 바뀌는 값 관리할 수 있다.

```javascript
const [item, setItem] = useState(1);
```

> - 첫번째로 state 변수로 'item'을 선언한다. (변수명은 무엇이 되어도 상관없다. ex.banana)  
> - 두번째는 해당 변수를 갱신할 수 있는 함수(setItem)를 반환한다.  
> - useState(1)은 state의 초기 값을 선언할 수 있다.

- [예제 코드 블럭](https://github.com/dev-chloe/hangout-react-hooks-with-nomad/blob/d8468e8ba7b998b503f7f28d0cec158f88943ad5/src/App.js#L3-L15)


## useInput

> 커스텀 hook으로 input을 업데이트한다.

```javascript
const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const onChange = event => {
    setValue(event.target.value);
  }
  return { value, onChange };
}

function App() {
  const name = useInput("Mr.", maxLen);
  return (
    <div className="App">
      <h1>Hello</h1>
      <input placeholder="Name" value={name.value} onChange={name.onChange} />
      <input placeholder="Name" {...name} />
    </div>
  );
}
```

> - useInput은 initialValue를 인자로 받고 nitialValue를 초기값으로 갖도록 useState 설정한다.  
> - useInput에서 사용자가 변화를 주기 전에 value를 return하여 인자를 초기값으로 갖게한다.  
> - value={name.value} onChange={name.onChange}를 간단하게 {...name}로 사용 가능하다.  

- [예제 코드 블럭](https://github.com/dev-chloe/hangout-react-hooks-with-nomad/blob/0cd0bf4ea9906723da41d0bf6c9cb5fef63abd61/src/App.js#L3-L30)


## useTabs

> 커스텀 hook으로 Tab을 쉽게 만들도록 돕는다.

```javascript
const useTabs = (initialTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex
  }
}

function App() {
  const {currentItem, changeItem} = useTabs(0, content);
  return (
    <div className="App">
      {content.map((section, index) => (
        <button onClick={() => changeItem(index)}>{section.tab}</button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
}
```
> - useTabs은 initialTab, allTabs를 매개 변수로 받고 currentItem, changeItem 두 값을 리턴 시킨다.  
> - 매개변수 initialTab에는 초기에 노출할 값, allTabs에는 모든 tab의 정보를 준다.  
> - currentItem은 allTabs를 가지고 리턴되는데 allTabs는 currentIndex를 인덱스 값으로 가지게 된다.  
> - changeItem을 setCurrentIndex로 정의하여 값에 접근하여 바꿔줄수 있도록 한다.  
> - 버튼의 onClick 이벤트에 changeItem을 넣어준다.  



