import { useState } from 'react';

export default function App() {
  const [copied, setCopied] = useState(false);
  const email = "ktstrandphd@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const projects = [
    {
      title: "OrangeRipper",
      description: "A multi-platform CD Ripper with robust metadata searching capabilities.",
      tech: ["PyQt6", "Python", "Windows SPTI", "Async / QThread"],
      link: "https://github.com/KTStrandPhD/OrangeRipper"
    },
    {
      title: "SimplerMessenger",
      description: "Asynchronous C++ encrypted chat client utilizing Boost.Asio TCP sockets and ECDH key exchange.",
      tech: ["C++", "Boost.Asio", "OpenSSL", "Crypto++"],
      link: "https://github.com/KTStrandPhD/SimplerMessenger"
    },
    {
      title: "SandboxAuditor",
      description: "Linux system administration tool and privilege escalation checker with automated rbash sandbox provisioning.",
      tech: ["Bash", "Python", "Linux Security", "SUID/SGID Audit"],
      link: "https://github.com/KTStrandPhD/SandboxAuditor"
    },
    {
      title: "FortranProMC",
      description: "Computational physics Monte Carlo suite linking high-performance legacy Fortran code with modern C++ wrappers.",
      tech: ["Fortran 90/95", "C++", "ISO_C_BINDING", "OpenMP"],
      link: "https://github.com/KTStrandPhD/FortranProMC"
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-mono selection:bg-emerald-500 selection:text-zinc-950 flex flex-col items-center justify-center p-4 sm:p-6">
      <div className="max-w-xl w-full bg-zinc-900/90 border border-zinc-800 rounded-xl shadow-2xl overflow-hidden backdrop-blur-md">
        
        {/* Terminal Header Bar */}
        <div className="bg-zinc-900 px-4 py-3 border-b border-zinc-800 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
          </div>
          <div className="text-xs text-zinc-400 flex items-center gap-1.5">
            <span className="text-emerald-400 font-bold">❯</span>
            <span>ktstrand@ubuntu-workstation:~</span>
          </div>
          <div className="w-12"></div>
        </div>

        {/* Card Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Profile Intro */}
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400 text-xs border border-emerald-500/20 font-medium">
              <span>Ph.D. Physicist, Software and  Systems Engineer, General Computational Guru</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">Kyle Strand, Ph.D.</h1>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Specializing in high-performance C/C++, Fortran, Python, Linux infrastructure, cryptography, and computational systems.
            </p>
          </div>

          {/* Quick Action Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <a 
              href="https://github.com/KTStrandPhD" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 rounded-lg bg-zinc-800/50 hover:bg-zinc-800 border border-zinc-700/50 transition text-sm group text-zinc-200"
            >
              <div className="flex items-center gap-2.5">
                <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
                <span>GitHub Portfolio</span>
              </div>
              <span className="text-zinc-500 group-hover:text-zinc-300 text-xs">↗</span>
            </a>

            <button 
              onClick={handleCopyEmail}
              className="flex items-center justify-between p-3 rounded-lg bg-zinc-800/50 hover:bg-zinc-800 border border-zinc-700/50 transition text-sm group text-left w-full cursor-pointer text-zinc-200"
            >
              <div className="flex items-center gap-2.5 truncate">
                <svg className="w-4 h-4 text-emerald-400 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                <span className="truncate">Copy Email</span>
              </div>
              {copied ? <span className="text-xs text-emerald-400 font-bold">Copied!</span> : <span className="text-xs text-zinc-500">Click</span>}
            </button>
          </div>

          {/* Featured Projects Section */}
          <div className="space-y-3 pt-2">
            <h2 className="text-xs uppercase tracking-wider text-zinc-500 font-semibold">Featured Engineering Projects</h2>
            <div className="space-y-3">
              {projects.map((proj, idx) => (
                <div key={idx} className="p-3.5 rounded-lg bg-zinc-950/50 border border-zinc-800 hover:border-zinc-700 transition space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-emerald-400">{proj.title}</span>
                    <a href={proj.link} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white text-xs">
                      ↗
                    </a>
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed">{proj.description}</p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {proj.tech.map((t, i) => (
                      <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 border border-zinc-700/60">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer note */}
          <div className="pt-2 text-center border-t border-zinc-800/80 text-xs text-zinc-500">
            Hosted on GitHub Pages • Built with Vite, React & TypeScript
          </div>

        </div>
      </div>
    </div>
  );
}
