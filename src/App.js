import { useEffect } from 'react';

const useBeforeLeave = (onBefore) => {
  const handle = (event) => {
    const { clientY } = event;
    if (clientY <= 0) {
      onBefore();
    }
  }
  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, [])
  if (typeof onBefore !== "function") {
    return;
  }
}

function App() {
  const begForLife = () => console.log("Plz dont leave");
  useBeforeLeave(begForLife);
  return (
    <div className="App">
      <h1>Hi</h1>
    </div>
  );
}

export default App;
