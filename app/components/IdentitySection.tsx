import { Fingerprint, Terminal, Layers, Shield, Zap } from "lucide-react";

export function IdentitySection() {
  return (
    <section id="identity" className="mb-24 scroll-mt-24">
      <div className="flex items-center mb-8">
        <Fingerprint className="text-cyber w-8 h-8 mr-4" />
        <h2
          className="text-3xl font-bold glitch-wrapper text-white"
          data-text="THE_ENTITY"
        >
          THE_ENTITY
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-terminal/80 p-6 border-l-4 border-cyber">
          <p className="text-gray-300 leading-relaxed mb-4">
            I am a digital architect forging logic in the depths of the Solana
            blockchain. While others float on the surface of web2, I dive into
            the low-level abyss of Rust and the high-frequency currents of
            Web3.
          </p>
          <p className="text-gray-300 leading-relaxed">
            My philosophy is rooted in the Cypherpunk manifesto: <span className="text-neon">Privacy is necessary. Code is law.</span> I build systems that are resilient, trustless, and faster than light.
          </p>
        </div>
        <div className="bg-terminal/80 p-6 border border-dim relative">
          <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-cyber"></div>
          <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-cyber"></div>
          <h3 className="text-cyber text-lg mb-4 font-bold">&gt;&gt; CORE_DIRECTIVES</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center"><Terminal className="w-4 h-4 mr-2 text-dim" /> Rust Development (Solana/Anchor)</li>
            <li className="flex items-center"><Layers className="w-4 h-4 mr-2 text-dim" /> Full-Stack Architecture (MERN/Next.js)</li>
            <li className="flex items-center"><Shield className="w-4 h-4 mr-2 text-dim" /> Smart Contract Auditing</li>
            <li className="flex items-center"><Zap className="w-4 h-4 mr-2 text-dim" /> High-Performance Indexing</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
