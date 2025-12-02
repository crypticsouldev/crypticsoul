import type { RefObject } from "react";

type BackgroundProps = {
  canvasRef: RefObject<HTMLCanvasElement | null>;
};

export function Background({ canvasRef }: BackgroundProps) {
  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full z-0 opacity-60"
      />
      <div className="scanline"></div>
      <div className="crt-lines"></div>
      <div className="crt-overlay"></div>
    </>
  );
}
