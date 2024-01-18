import React, { useState, useEffect } from 'react';
import './App.css'; 

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [laps, setLaps] = useState([]);

  useEffect(() => {
    let timer;

    if (running) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [running]);

  const startStop = () => {
    setRunning(!running);
  };

  const reset = () => {
    setTime(0);
  };

  const recordLap = () => {
    setLaps([...laps, time]);
  };
  const clearlaps =() =>{
    setLaps([])
  }

  const formatTime = (ms) => {
    const minutes = Math.floor(ms / (60 * 1000));
    const seconds = Math.floor((ms % (60 * 1000)) / 1000);
    const milliseconds = Math.floor((ms % 1000) / 10);

    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');
    const formattedMilliseconds = String(milliseconds).padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}:${formattedMilliseconds}`;
  };

  return (
    <div className="stopwatch">
      <div className="display">{formatTime(time)}</div>
      <div className="controls">
        
        <button onClick={startStop}>{running ?  'Pause' : 'Start'  }</button>
        <button onClick={reset}>Res</button>
        <button onClick={recordLap} disabled={!running}>
          
          Круг
        </button>
        <br/>
        <br/>
          <button onClick={clearlaps}>Очистиь историю</button>
      </div>
      <div className="laps">
        <h2>История круга</h2>
        <ul>
          {laps.map((lapTime, index) => (
            <li key={index}>{`Lap ${index + 1}: ${formatTime(lapTime)}`}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Stopwatch;