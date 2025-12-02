import { useEffect, useState } from "react";

export function useSystemStats() {
  const [currentTime, setCurrentTime] = useState("");
  const [cpuLoad, setCpuLoad] = useState(12);
  const [memLoad, setMemLoad] = useState(402);

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setCurrentTime(new Date().toString().split(" (")[0]);
    }, 1000);

    const statsInterval = setInterval(() => {
      setCpuLoad(Math.floor(Math.random() * 30) + 5);
      setMemLoad(Math.floor(Math.random() * 200) + 300);
    }, 2000);

    return () => {
      clearInterval(timeInterval);
      clearInterval(statsInterval);
    };
  }, []);

  return { currentTime, cpuLoad, memLoad };
}
