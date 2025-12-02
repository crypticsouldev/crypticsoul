import { Network } from "lucide-react";

export function ProjectsSection() {
  return (
    <section id="projects" className="mb-24 scroll-mt-24">
      <div className="flex items-center mb-8">
        <Network className="text-alert w-8 h-8 mr-4" />
        <h2
          className="text-3xl font-bold glitch-wrapper text-white"
          data-text="OPERATIONS"
        >
          OPERATIONS
        </h2>
      </div>

      <div className="space-y-12">
         <div className="relative group">
          <div className="absolute inset-0 bg-cyber/10 transform skew-y-2 group-hover:skew-y-1 transition-all duration-300"></div>
          <div className="relative bg-terminal border border-dim p-6 md:p-8 flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyber transition-colors">NEURAL_DEX</h3>
                <span className="text-xs border border-cyber text-cyber px-2 py-1">DEPLOYED</span>
              </div>
              <p className="text-gray-400 mb-4 text-sm">
                A decentralized orderbook built on Solana using Anchor. Features high-frequency matching engine logic written in Rust, interfaced with a React/Typescript dashboard for real-time visualization of market depths.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="text-xs bg-dim/30 text-neon px-2 py-1">Rust</span>
                <span className="text-xs bg-dim/30 text-neon px-2 py-1">Anchor</span>
                <span className="text-xs bg-dim/30 text-blue-400 px-2 py-1">React</span>
              </div>
              <div className="flex gap-4">
                <button className="text-sm border-b border-cyber text-cyber hover:text-white transition-colors">View Deployment</button>
                <button className="text-sm border-b border-dim text-gray-500 hover:text-white transition-colors">GitHub Repo</button>
              </div>
            </div>
          </div>
        </div>

        <div className="relative group">
          <div className="absolute inset-0 bg-neon/5 transform -skew-y-1 group-hover:skew-y-0 transition-all duration-300"></div>
          <div className="relative bg-terminal border border-dim p-6 md:p-8 flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-neon transition-colors">SHADOW_CHAT</h3>
                <span className="text-xs border border-neon text-neon px-2 py-1">BETA</span>
              </div>
              <p className="text-gray-400 mb-4 text-sm">
                End-to-end encrypted messaging service using WebSockets and Solana account signing for identity. No central database for message storage; purely peer-to-peer ephemeral communication.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="text-xs bg-dim/30 text-blue-400 px-2 py-1">TypeScript</span>
                <span className="text-xs bg-dim/30 text-green-400 px-2 py-1">Node.js</span>
                <span className="text-xs bg-dim/30 text-purple-400 px-2 py-1">Web3.js</span>
              </div>
              <div className="flex gap-4">
                <button className="text-sm border-b border-neon text-neon hover:text-white transition-colors">Live Demo</button>
                <button className="text-sm border-b border-dim text-gray-500 hover:text-white transition-colors">GitHub Repo</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
