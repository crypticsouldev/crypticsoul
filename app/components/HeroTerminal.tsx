import type { KeyboardEvent, RefObject } from "react";

type CliEntry = {
  type: "input" | "output";
  content: string;
};

type HeroTerminalProps = {
  currentTime: string;
  typeText: string;
  cliInput: string;
  cliHistory: CliEntry[];
  onCliInputChange: (value: string) => void;
  onCliKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void;
  cliOutputRef: RefObject<HTMLDivElement | null>;
};

export function HeroTerminal({
  currentTime,
  typeText,
  cliInput,
  cliHistory,
  onCliInputChange,
  onCliKeyDown,
  cliOutputRef,
}: HeroTerminalProps) {
  return (
    <section id="terminal" className="min-h-[80vh] flex flex-col justify-center mb-24">
      <div className="border border-dim bg-black/80 p-4 shadow-2xl backdrop-blur-md neon-border relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-6 bg-dim/20 flex items-center px-2 space-x-2 border-b border-dim">
          <div className="w-3 h-3 rounded-full bg-alert"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-neon"></div>
          <span className="text-xs text-gray-400 ml-4">root@crypticsoulak:~</span>
        </div>

        <div className="mt-8 space-y-2 font-mono text-sm md:text-base">
          <p className="text-green-500">
            Last login: <span>{currentTime}</span> on ttys001
          </p>
          <p>&gt; init_sequence --force</p>
          <p className="text-blue-400">Loading kernel modules...</p>
          <p className="text-blue-400">Mounting ZFS filesystems...</p>
          <p className="text-neon">&gt; Identity Verified: Abdul Kalam Choudhry</p>
          <p>&gt; Class: Rustacean | Full-stack Typescript Dev</p>
          <br />
          <div className="text-white text-lg md:text-2xl font-bold min-h-[60px]">
            {typeText}
            <span className="animate-blink bg-neon text-black px-1 ml-1">_</span>
          </div>

          <div className="mt-8 flex flex-wrap gap-4 mb-4">
            <a
              href="#projects"
              className="border border-neon text-neon px-6 py-2 hover:bg-neon hover:text-black transition-colors font-bold uppercase text-sm tracking-wider"
            >
              [ Execute_Portfolio ]
            </a>
            <a
              href="https://github.com/crypticsoulak"
              target="_blank"
              className="border border-dim text-gray-400 px-6 py-2 hover:border-white hover:text-white transition-colors font-bold uppercase text-sm tracking-wider"
            >
              [ View_Source ]
            </a>
          </div>

          <div
            className="border border-dim/30 bg-black/40 p-4 mt-8 rounded h-64 overflow-y-auto font-mono text-sm"
            ref={cliOutputRef}
            onClick={() => document.getElementById("cli-input")?.focus()}
          >
            <p className="text-gray-500 text-xs mb-2 sticky top-0 bg-black/0 backdrop-blur-sm">
              INTERACTIVE_SHELL_V1.0 (Type &apos;help&apos;)
            </p>

            {cliHistory.map((item, i) => (
              <div key={i} className="mb-1 whitespace-pre-wrap">
                {item.type === "input" ? (
                  <div>
                    <span className="text-dim mr-2">visitor@crypticsoul:~$</span>
                    <span className="text-white">{item.content}</span>
                  </div>
                ) : (
                  <div className="text-neon">{item.content}</div>
                )}
              </div>
            ))}

            <div className="flex items-center text-neon mt-2">
              <span className="mr-2 whitespace-nowrap text-dim">visitor@crypticsoul:~$</span>
              <input
                type="text"
                id="cli-input"
                value={cliInput}
                onChange={(e) => onCliInputChange(e.target.value)}
                onKeyDown={onCliKeyDown}
                className="bg-transparent border-none outline-none text-white w-full font-mono focus:ring-0"
                autoComplete="off"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
