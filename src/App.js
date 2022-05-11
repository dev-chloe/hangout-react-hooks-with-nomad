import { useEffect, useState } from 'react';

function App() {
  const [number, setNumber] = useState(0);
  const [aNumber, setAnumber] = useState(0);
  const incrementItem = () => setNumber(number + 1);
  const incrementItemTwo = () => setAnumber(number + 1);
  // const decrementItem = () => setAnumber(aNumber - 1);
  const sayHello = () => console.log("Hello");
  useEffect(() => {
    sayHello();
  }, [number]);
  return (
    <div className="App">
      <h1>Hi</h1>
      <button onClick={incrementItem}>{number}</button>
      <button onClick={incrementItemTwo}>{aNumber}</button>
    </div>
  );
}

export default App;
