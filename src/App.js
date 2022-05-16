import { useRef } from 'react';

const useFullscreen = (callback) => {
  const element = useRef();
  const runCb = isfull => {
    if (callback && typeof callback === "function") {
      callback(isfull);
    }
  }
  const triggerFull = () => {
    if(element.current){
      if (element.current.requestFullscreen) {
        element.current.requestFullscreen();
      } else if (element.current.mozRequestFullscreen) {
        element.current.mozRequestFullscreen();
      } else if (element.current.webkitRequestFullscreen) {
        element.current.webkitRequestFullscreen();
      } else if (element.current.msRequestFullscreen) {
        element.current.msRequestFullscreen();
      }
      runCb(true);
    }
  }
  const exitFull = () => {
    document.exitFullscreen();
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
    runCb(false);
  }
  return {element, triggerFull, exitFull};
}

function App() {
  const onFullS = (isFull) => {
    console.log(isFull ? "We are full" : "We are small");
  }
  const { element, triggerFull, exitFull } = useFullscreen(onFullS);
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <div ref={element}>
        <img style={{width: "100%"}} src="https://images.unsplash.com/photo-1548222606-6c4f581fd09d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1197&q=80" alt="img" />
        <button onClick={exitFull}>Exit fullscreen</button>
      </div>
      <button onClick={triggerFull}>Make fullscreen</button>
    </div>
  );
}

export default App;
