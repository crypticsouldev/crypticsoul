import { useEffect, useRef, useState } from "react";
import type { KeyboardEvent } from "react";

export type CliEntry = {
  type: "input" | "output";
  content: string;
};

export function useCliShell() {
  const [cliInput, setCliInput] = useState("");
  const [cliHistory, setCliHistory] = useState<CliEntry[]>([]);
  const cliOutputRef = useRef<HTMLDivElement | null>(null);

  const handleCliSubmit = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") return;

    const command = cliInput.trim().toLowerCase();

    const newHistory: CliEntry[] = [
      ...cliHistory,
      { type: "input", content: command },
    ];

    let response = "";
    switch (command) {
      case "help":
        response =
          "AVAILABLE COMMANDS:\n  help      - Show this list\n  whoami    - Display current user info\n  status    - Check system status\n  clear     - Clear terminal\n  contact   - Display contact info\n  projects  - List deployments";
        break;
      case "whoami":
        response = "USER: VISITOR\nROLE: GUEST\nACCESS LEVEL: RESTRICTED";
        break;
      case "status":
        response = "SYSTEM: ONLINE\nINTEGRITY: 100%\nTHREAT LEVEL: LOW";
        break;
      case "contact":
        response =
          "EMAIL: contact@crypticsoulak.dev\nTWITTER: @crypticsoulak";
        break;
      case "projects":
        response =
          "1. NEURAL_DEX [SOLANA/ANCHOR]\n2. SHADOW_CHAT [WEB3/SOCKETS]";
        break;
      case "clear":
        setCliHistory([]);
        setCliInput("");
        return;
      default:
        response = `Command not found: ${command}. Type 'help' for available commands.`;
    }

    newHistory.push({ type: "output", content: response });
    setCliHistory(newHistory);
    setCliInput("");
  };

  useEffect(() => {
    if (cliOutputRef.current) {
      cliOutputRef.current.scrollTop = cliOutputRef.current.scrollHeight;
    }
  }, [cliHistory]);

  return {
    cliInput,
    setCliInput,
    cliHistory,
    cliOutputRef,
    handleCliSubmit,
  };
}
