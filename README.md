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

- [예제 코드 블럭](https://github.com/dev-chloe/hangout-react-hooks-with-nomad/blob/59529293f93a15bb4665035f88ea693e88bacd62/src/App.js#L3-L35)


## useEffect

> componentWillUnmount, componentDidMount, componentWillUpdate와 비슷하다.
> 컴포넌트가 렌더링 이후에 어떤 일을 수행해야 할 때 사용한다.

```javascript
function App() {
  const [number, setNumber] = useState(0);
  const [aNumber, setAnumber] = useState(0);
  const incrementItem = () => setNumber(number + 1);
  const incrementItemTwo = () => setAnumber(number + 1);
  const sayHello = () => console.log("Hello");
  useEffect(() => {
    sayHello();
  }, [number]); // number 버튼을 눌렀을 때만 실행된다. 빈 []만 쓰면 한번만 실행된다.
  return (
    <div className="App">
      <h1>Hi</h1>
      <button onClick={incrementItem}>{number}</button>
      <button onClick={incrementItemTwo}>{aNumber}</button>
    </div>
  );
}
```
> - useEffect는 2개의 인자를 받는다. 첫 번째는 function으로서의 effect(ex. sayHello), deps(ex, [number])가 있다면 effect는 deps에 있는 값일 때만 값이 변화도록 활성화 된다.
> - useEffect는 기본적으로 첫번째 렌더링과 이후의 모든 업데이트에서 수행된다.

- [예제 코드 블럭](https://github.com/dev-chloe/hangout-react-hooks-with-nomad/blob/af3bacfbf0f20a2e0811748ba86fcbf5cf79cbda/src/App.js#L3-L20)


## useEffect

> 문서 제목을 업데이트한다.

```javascript
const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  }
  useEffect(updateTitle, [title]);
  return setTitle;
}

function App() {
  const titleUpdater = useTitle("Loading..."); 
  setTimeout(() => titleUpdater("Home"), 5000);
}
```

> - useTitle은 initialTitle를 인자로 받고 useState는 initialTitle를 초기값으로 갖는다.  
> - useEffect는 컴포넌트가 마운트 될 때, title이 변경 사항이 있을 때 updateTitle를  실행한다.  
> - titleUpdater는 useTitle 함수를 사용하는 것이고 매개변수로 Loding... 을 갖는다.  
> - updateTitle는 title을 가져와 Loding...으로 변경 시켜준다.
> - setTimeout으로 5초후 Home으로 변경한다.


