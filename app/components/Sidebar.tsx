type SidebarProps = {
  cpuLoad: number;
  memLoad: number;
};

export function Sidebar({ cpuLoad, memLoad }: SidebarProps) {
  return (
    <aside className="w-full md:w-64 bg-terminal/90 border-r border-dim md:fixed h-auto md:h-screen p-6 flex flex-col justify-between backdrop-blur-sm">
      <div>
        <div className="mb-8">
          <h1
            className="text-2xl font-bold glitch-wrapper text-neon mb-2"
            data-text="CRYPTICSOULAK"
          >
            CRYPTICSOULAK
          </h1>
          <p className="text-xs text-dim mt-2 tracking-widest">SYSTEM_ID: 0xAB_K_C</p>
          <p className="text-xs text-cyber mt-1">STATUS: ONLINE</p>
        </div>

        <nav className="space-y-4">
          {[
            { name: "HOME/INIT", id: "terminal" },
            { name: "USR/IDENTITY", id: "identity" },
            { name: "SYS/ARSENAL", id: "stack" },
            { name: "NET/PROJECTS", id: "projects" },
            { name: "COMMS/LINK", id: "comms" },
          ].map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="nav-item block border border-dim p-2 text-sm transition-all duration-300 group hover:bg-neon hover:text-black hover:shadow-[0_0_15px_#00ff41]"
            >
              <span className="text-neon mr-2 group-hover:text-black">&gt;</span> /
              {item.name}
            </a>
          ))}
        </nav>
      </div>

      <div className="mt-8 md:mt-0 text-xs text-dim">
        <div className="flex justify-between mb-1">
          <span>CPU</span>
          <span>{cpuLoad}%</span>
        </div>
        <div className="w-full bg-dim h-1">
          <div
            className="bg-neon h-1 transition-all duration-500"
            style={{ width: `${cpuLoad}%` }}
          ></div>
        </div>
        <div className="flex justify-between mt-2 mb-1">
          <span>MEM</span>
          <span>{memLoad}MB</span>
        </div>
        <div className="w-full bg-dim h-1">
          <div
            className="bg-cyber h-1 transition-all duration-500"
            style={{ width: `${(memLoad / 1024) * 100}%` }}
          ></div>
        </div>
        <div className="mt-4 border-t border-dim pt-4">
          <p>
            SOLANA NETWORK: <span className="text-neon animate-pulse">CONNECTED</span>
          </p>
        </div>
      </div>
    </aside>
  );
}
