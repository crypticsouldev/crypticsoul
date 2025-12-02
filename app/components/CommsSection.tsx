import { Mail, Twitter } from "lucide-react";

export function CommsSection() {
  return (
    <section id="comms" className="mb-12 scroll-mt-24">
      <div className="border border-dim bg-black p-8 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon to-transparent animate-pulse"></div>
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">OPEN_ENCRYPTED_CHANNEL?</h2>
        <p className="text-gray-400 mb-8 max-w-lg mx-auto">
          The blockchain never sleeps, and neither do I. If you have a protocol to build or a contract to break, initiate the handshake.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4">
          <a
            href="mailto:crypticsoul.ak@gmail.com"
            className="flex items-center justify-center bg-neon text-black font-bold px-8 py-3 hover:bg-white transition-all shadow-[0_0_15px_rgba(0,255,65,0.5)]"
          >
            <Mail className="w-5 h-5 mr-2" /> TRANSMIT_MAIL
          </a>
          <a
            href="https://twitter.com/crypticsoulak"
            target="_blank"
            className="flex items-center justify-center border border-dim text-white font-bold px-8 py-3 hover:border-cyber hover:text-cyber transition-all"
          >
            <Twitter className="w-5 h-5 mr-2" /> @CRYPTICSOULAK
          </a>
        </div>
      </div>
    </section>
  );
}
