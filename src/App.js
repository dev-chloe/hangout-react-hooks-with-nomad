import {useRef} from 'react';

function App() {
  const potato = useRef();
  setTimeout(() => {
    potato.current.focus()
  },5000)
  return (
    <div className="App">
      <h1>Hi</h1>
      <input placeholder='la' ref={potato} />
    </div>
  );
}

export default App;
