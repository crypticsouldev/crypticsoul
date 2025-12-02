import { Cpu } from "lucide-react";

export function ArsenalSection() {
  return (
    <section id="stack" className="mb-24 scroll-mt-24">
      <div className="flex items-center mb-8">
        <Cpu className="text-neon w-8 h-8 mr-4" />
        <h2
          className="text-3xl font-bold glitch-wrapper text-white"
          data-text="ARSENAL"
        >
          ARSENAL
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
     //rust
        <div className="group relative overflow-hidden border border-dim bg-black/50 p-4 transition-all duration-300 hover:border-orange-500 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(249,115,22,0.6)]">
          <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 bg-[radial-gradient(circle_at_top,_rgba(249,115,22,0.35)_0,_transparent_60%)] transition-opacity duration-500" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-500/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-orange-500 font-bold">RUST</h3>
              <span className="text-xs border border-dim px-2 py-1">BACKEND</span>
            </div>
            <p className="text-xs text-gray-400">Memory Safe. Blazingly Fast. Solana Native.</p>
            <p className="mt-3 text-[10px] font-mono tracking-widest opacity-0 translate-y-1 text-dim group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
              <span className="text-gray-500 mr-1">[DIAGNOSTIC]</span>
              <span className="text-orange-400">THROUGHPUT: 95% // SAFETY: VERIFIED</span>
            </p>
          </div>
        </div>

     //typescript
        <div className="group relative overflow-hidden border border-dim bg-black/50 p-4 transition-all duration-300 hover:border-blue-500 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(59,130,246,0.6)]">
          <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.35)_0,_transparent_60%)] transition-opacity duration-500" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-blue-500 font-bold">TYPESCRIPT</h3>
              <span className="text-xs border border-dim px-2 py-1">FULLSTACK</span>
            </div>
            <p className="text-xs text-gray-400">Strongly Typed. Scalable Logic. React/Next.</p>
            <p className="mt-3 text-[10px] font-mono tracking-widest opacity-0 translate-y-1 text-dim group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
              <span className="text-gray-500 mr-1">[DIAGNOSTIC]</span>
              <span className="text-blue-400">TYPE-COVERAGE: 100% // LINT: PASS</span>
            </p>
          </div>
        </div>

     //solana
        <div className="group relative overflow-hidden border border-dim bg-black/50 p-4 transition-all duration-300 hover:border-purple-500 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(168,85,247,0.65)]">
          <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 bg-[radial-gradient(circle_at_top,_rgba(168,85,247,0.35)_0,_transparent_60%)] transition-opacity duration-500" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-500/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-purple-500 font-bold">SOLANA</h3>
              <span className="text-xs border border-dim px-2 py-1">WEB3</span>
            </div>
            <p className="text-xs text-gray-400">Anchor Framework. PDAs. CPIs.</p>
            <p className="mt-3 text-[10px] font-mono tracking-widest opacity-0 translate-y-1 text-dim group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
              <span className="text-gray-500 mr-1">[DIAGNOSTIC]</span>
              <span className="text-purple-400">TPS: 65K // FINALITY: 400MS</span>
            </p>
          </div>
        </div>

     //node.js
        <div className="group relative overflow-hidden border border-dim bg-black/50 p-4 transition-all duration-300 hover:border-green-500 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(34,197,94,0.6)]">
          <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 bg-[radial-gradient(circle_at_top,_rgba(34,197,94,0.35)_0,_transparent_60%)] transition-opacity duration-500" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-green-500/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-green-500 font-bold">NODE.JS</h3>
              <span className="text-xs border border-dim px-2 py-1">SERVER</span>
            </div>
            <p className="text-xs text-gray-400">Express. NestJS. Async I/O.</p>
            <p className="mt-3 text-[10px] font-mono tracking-widest opacity-0 translate-y-1 text-dim group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
              <span className="text-gray-500 mr-1">[DIAGNOSTIC]</span>
              <span className="text-green-400">CONCURRENCY: HIGH // I/O: NON-BLOCKING</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
