type PreloaderProps = {
  booting: boolean;
  bootProgress: number;
  bootText: string;
};

export function Preloader({ booting, bootProgress, bootText }: PreloaderProps) {
  return (
    <div
      className={`fixed inset-0 z-[100] bg-void flex flex-col items-center justify-center text-neon font-mono transition-opacity duration-700 ${!booting ? "opacity-0 pointer-events-none" : "opacity-100"}`}
    >
      <div className="w-64">
        <div className="flex justify-between text-xs mb-2 tracking-wider">
          <span>{bootText}</span>
          <span>{bootProgress}%</span>
        </div>
        <div className="w-full h-1 bg-dim/30">
          <div
            className="h-full bg-neon transition-all duration-200"
            style={{ width: `${bootProgress}%` }}
          ></div>
        </div>
      </div>
      <div className="mt-4 text-[10px] text-dim animate-pulse">
        <span className="mr-2">ENCRYPTION:</span>
        <span className="text-cyber">AES-256-GCM</span>
      </div>
      <div className="mt-1 text-[10px] text-dim">
        <span>SOCKET:</span>
        <span className="text-alert">HANDSHAKE_PENDING</span>
      </div>
    </div>
  );
}
