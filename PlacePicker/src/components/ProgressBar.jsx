import { useEffect, useState } from 'react';
const TIMER = 3000;

export default function ProgressBar({ timer }) {
    const [remainingTime, setRemainingTime] = useState(timer);
    useEffect(() => {
      const interval = setInterval(() => {
        console.log("Interval Set");
        setRemainingTime((prevTime) => {
          if (prevTime === 0) {
            return 0;
          }
          return prevTime - 10;
        });
      }, 10);
      return ()=>{
        console.log('Cleaning up Interval');
        clearInterval(interval);
      };
    }, []);

    return (
        <progress value={remainingTime} max={timer} />
    );
}