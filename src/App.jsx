import { useState } from "react";
import "./style.css";

export default function App() {
  
  const [timer, setTimer] = useState(0);
  const [timeInterval, setTimeInterval] = useState(null);
  const [isRunning, setIsRunning] = useState(false);  
  
  const startTimer = () => {
    if(!isRunning) {
    setTimeInterval(setInterval(() => {
      setIsRunning(true);
      setTimer((prev) => prev + 1);
    }, 1000));
  }
}

  const pauseTimer = () => {
    if(isRunning) {
    setIsRunning(false);
    clearInterval(timeInterval);
    }
  }
  const resetTimer = () => {
    setTimer(0);
    clearInterval(timeInterval);
    setIsRunning(false);
  }

  return (
    <div className="App">
      <h3>Timer: {timer}</h3>
      <div className="btn-wrapper">
        <button onClick={startTimer} disabled={isRunning}>Start</button>
        <button onClick={pauseTimer} disabled={!isRunning}>Pause</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
};
