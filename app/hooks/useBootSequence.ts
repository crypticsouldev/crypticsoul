import { useEffect, useState } from "react";

export function useBootSequence() {
  const [booting, setBooting] = useState(true);
  const [bootProgress, setBootProgress] = useState(0);
  const [bootText, setBootText] = useState("INITIALIZING SYSTEM...");

  useEffect(() => {
    const bootSequence = [
      { text: "LOADING KERNEL...", progress: 20 },
      { text: "DECRYPTING ARTIFACTS...", progress: 45 },
      { text: "CONNECTING TO SOLANA NODE...", progress: 70 },
      { text: "VERIFYING SIGNATURES...", progress: 90 },
      { text: "ACCESS GRANTED.", progress: 100 },
    ];

    let step = 0;

    const runBoot = () => {
      if (step < bootSequence.length) {
        const current = bootSequence[step];
        setBootText(current.text);
        setBootProgress(current.progress);
        step++;

        let delay = Math.random() * 300 + 200;
        if (current.progress === 100) delay = 800;

        setTimeout(runBoot, delay);
      } else {
        setTimeout(() => setBooting(false), 500);
      }
    };

    runBoot();
  }, []);

  return { booting, bootProgress, bootText };
}
