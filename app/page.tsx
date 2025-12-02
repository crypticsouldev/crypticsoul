'use client';

import React from 'react';
import { Preloader } from './components/Preloader';
import { Background } from './components/Background';
import { Sidebar } from './components/Sidebar';
import { MainContent } from './components/MainContent';
import { useCliShell } from './hooks/useCliShell';
import { useBootSequence } from './hooks/useBootSequence';
import { useMatrixRain } from './hooks/useMatrixRain';
import { useSystemStats } from './hooks/useSystemStats';
import { useTypewriter } from './hooks/useTypewriter';

export default function Home() {
  //  boot sequence
  const { booting, bootProgress, bootText } = useBootSequence();

  // system stats & time
  const { currentTime, cpuLoad, memLoad } = useSystemStats();

  // CLI State via custom hook
  const {
    cliInput,
    setCliInput,
    cliHistory,
    cliOutputRef,
    handleCliSubmit,
  } = useCliShell();

  // matrix rain background
  const canvasRef = useMatrixRain();

  // typewriter text
  const typeText = useTypewriter(booting);

  return (
    <>
      <Preloader
        booting={booting}
        bootProgress={bootProgress}
        bootText={bootText}
      />

      <Background canvasRef={canvasRef} />

      <div className="content-layer min-h-screen flex flex-col md:flex-row">
        
        <Sidebar cpuLoad={cpuLoad} memLoad={memLoad} />

        <MainContent
          currentTime={currentTime}
          typeText={typeText}
          cliInput={cliInput}
          cliHistory={cliHistory}
          onCliInputChange={setCliInput}
          onCliKeyDown={handleCliSubmit}
          cliOutputRef={cliOutputRef}
        />
      </div>
    </>
  );
}