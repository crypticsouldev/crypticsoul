import type { KeyboardEvent, RefObject } from "react";
import { HeroTerminal } from "./HeroTerminal";
import { IdentitySection } from "./IdentitySection";
import { ArsenalSection } from "./ArsenalSection";
import { ProjectsSection } from "./ProjectsSection";
import { CommsSection } from "./CommsSection";

type CliEntry = {
  type: "input" | "output";
  content: string;
};

type MainContentProps = {
  currentTime: string;
  typeText: string;
  cliInput: string;
  cliHistory: CliEntry[];
  onCliInputChange: (value: string) => void;
  onCliKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void;
  cliOutputRef: RefObject<HTMLDivElement | null>;
};

export function MainContent({
  currentTime,
  typeText,
  cliInput,
  cliHistory,
  onCliInputChange,
  onCliKeyDown,
  cliOutputRef,
}: MainContentProps) {
  return (
    <main className="flex-1 md:ml-64 p-6 md:p-12 max-w-5xl mx-auto w-full">
      <HeroTerminal
        currentTime={currentTime}
        typeText={typeText}
        cliInput={cliInput}
        cliHistory={cliHistory}
        onCliInputChange={onCliInputChange}
        onCliKeyDown={onCliKeyDown}
        cliOutputRef={cliOutputRef}
      />

      <IdentitySection />

      <ArsenalSection />

      <ProjectsSection />

      <CommsSection />

      <footer className="text-center text-xs text-dim py-8 border-t border-dim/30">
        <p>0xAB_K_C // SYSTEM SHUTDOWN PROTOCOL AVAILABLE</p>
        <p className="mt-2">© 2025 Abdul kalam Choudhry. Built with Rust, Tears, and Caffeine.</p>
      </footer>
    </main>
  );
}
