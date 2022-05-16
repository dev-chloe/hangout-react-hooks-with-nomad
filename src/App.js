import { useEffect, useRef } from 'react';

const useFadeIn = (duration = 1, delay = 0) => {
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      const { current } = element;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = 1;
    }
  }, [])
  if(typeof duration !== "number" || typeof delay !== "number") {
    return;
  }
  return {ref: element, style: {opacity: 0}};
}

function App() {
  const fadeInH1 = useFadeIn(1, .5);
  const fadeInP = useFadeIn(2, 1);
  return (
    <div className="App">
      <h1 {...fadeInH1}>Hi</h1>
      <p {...fadeInP}>ah bye bye</p>
    </div>
  );
}

export default App;
