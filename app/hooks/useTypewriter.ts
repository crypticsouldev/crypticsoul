import { useEffect, useRef, useState } from "react";

const ROLES = [
  "Building robust systems on Solana.",
  "Architecting the decentralized future.",
  "Rust is the engine. TypeScript is the interface.",
];

export function useTypewriter(booting: boolean) {
  const [typeText, setTypeText] = useState("");
  const typeTextIndex = useRef(0);
  const charIndex = useRef(0);
  const isDeleting = useRef(false);

  useEffect(() => {
    if (booting) return;

    let timeoutId: ReturnType<typeof setTimeout>;

    const typeLoop = () => {
      const currentRole = ROLES[typeTextIndex.current];

      if (isDeleting.current) {
        setTypeText(currentRole.substring(0, charIndex.current - 1));
        charIndex.current--;
      } else {
        setTypeText(currentRole.substring(0, charIndex.current + 1));
        charIndex.current++;
      }

      let typeSpeed = isDeleting.current ? 30 : 80;

      if (!isDeleting.current && charIndex.current === currentRole.length) {
        isDeleting.current = true;
        typeSpeed = 2000;
      } else if (isDeleting.current && charIndex.current === 0) {
        isDeleting.current = false;
        typeTextIndex.current = (typeTextIndex.current + 1) % ROLES.length;
        typeSpeed = 500;
      }

      timeoutId = setTimeout(typeLoop, typeSpeed);
    };

    timeoutId = setTimeout(typeLoop, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [booting]);

  return typeText;
}
