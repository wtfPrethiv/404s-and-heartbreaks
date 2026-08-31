"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [time, setTime] = useState<string>("");
  const [crtEnabled, setCrtEnabled] = useState<boolean>(true);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toISOString().replace("T", " ").substring(0, 19) + " UTC"
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Keyboard shortcut: press '4' or 'Enter' or 'Space' to navigate to /404
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }
      if (e.key === "4") {
        window.location.href = "/404";
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <main
      className={`relative min-h-screen w-full bg-[#000000] text-[#e0e0e0] font-mono select-none flex flex-col justify-between p-3 sm:p-6 md:p-10 overflow-x-hidden ${
        crtEnabled ? "crt-overlay" : ""
      }`}
    >
      {/* Background ambient grid glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0,173,111,0.12),rgba(255,255,255,0))]"
      />

      {/* Terminal Window Frame */}
      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col flex-1 border border-neutral-800 bg-[#050505]/95 shadow-[0_0_50px_rgba(0,0,0,0.8)] rounded-sm p-4 sm:p-8 justify-between backdrop-blur">
        {/* Top Terminal Status Header */}
        <header className="border-b border-neutral-800/80 pb-4 mb-6 text-xs text-neutral-400">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#00ad6f] animate-pulse" />
              <span className="text-neutral-200 font-semibold tracking-wider">
                TERMINAL // 404s-AND-HEARTBREAKS.SYS
              </span>
              <span className="hidden sm:inline text-neutral-600">|</span>
              <span className="hidden sm:inline text-neutral-400">
                HOST: pr3thivv.lol
              </span>
            </div>
            <div className="flex items-center gap-4 text-[11px] text-neutral-400">
              <span className="hidden md:inline text-neutral-400">
                {time || "2026-08-31 00:00:00 UTC"}
              </span>
              <button
                type="button"
                onClick={() => setCrtEnabled((prev) => !prev)}
                className="px-2 py-0.5 border border-neutral-800 hover:border-neutral-600 hover:text-white transition-colors cursor-pointer text-[10px] uppercase tracking-wider"
              >
                CRT FX: {crtEnabled ? "ON" : "OFF"}
              </button>
            </div>
          </div>
        </header>

        {/* Center Content: ASCII Art Banner */}
        <div className="my-auto py-4 sm:py-6 flex flex-col items-center justify-center text-center">
          {/* Main ASCII Typography */}
          <div className="w-full overflow-x-auto overflow-y-hidden py-2 scrollbar-none flex justify-center">
            <pre className="text-emerald-400 font-mono text-[clamp(6px,1.25vw,13px)] leading-[1.12] tracking-normal inline-block text-left font-bold drop-shadow-[0_0_12px_rgba(0,173,111,0.35)]">
{`
 __      __  ______  __       ______  ____   __  ___ ______   ______ ____ 
/  \\    /  |/      \\/  |     /      \\/    \\ /  |/  //      \\ /      /    \\
\\   \\  /   /$$$$$$  $$ |    /$$$$$$  $$$$  \\/$$$  |/$$$$$$  /$$$$$$/ $$$$ \\
 \\   \\/   /$$ |__$$ $$ |    $$ |  $$/$$ $$  $$ $$ |$$    $$/  $$ | $$ | $$ |
  \\      / $$    $$ $$ |___ $$ \\__   $$ |$$$   $$ |$$       $$ | $$ | $$ |
   \\____/  $$$$$$$$/$$$$$$$/ \\$$$$$$/$$/ \\_/   $$/  \\$$$$$$/   \\$$/  \\$$$$/ 

      __ __  ____  __ __   ______        __ __   ______   ____   _____  ______ ______ 
     /  /  |/    \\/  /  | /      \\      /  /  | /      \\ /    \\ /     \\/      /      \\
     $$/$$ |$$$$  $$/$$ |/$$$$$$  |     $$/$$ |/$$$$$$  /$$$$  |$$$$$  $$$$$$/$$$$$$  |
       $$ |$$ | $$ | $$ |$$ \\__$$/        $$ |$$    $$/$$ | $$ |    $$ | $$ | $$ \\__$$/ 
       $$ |$$ | $$ | $$ |$$    $$\\        $$ |$$       $$ | $$ |    $$ | $$ |   $$\\   
       $$/ \\$$$$/  $$/  \\$$$$$$  |       $$/  \\$$$$$$/ \\$$$$/ \\$$$$$/  \\$$/ \\$$$$$$  |
                         \\____$$/                                           \\____$$/ 
`}
            </pre>
          </div>

          {/* ASCII Heart / Signal Graphic */}
          <div className="mt-4 mb-6 flex flex-col items-center">
            <pre className="text-neutral-500 font-mono text-[10px] sm:text-xs leading-none select-none">
{`
      .---.  .---.
     /     \\/     \\      [ SIGNAL: 404 LOST IN TRANSMISSION ]
    |   /\\    /\\   |     [ ERROR: RESOURCE NOT FOUND        ]
     \\ \\  \\  /  / /      [ DEST:  https://pr3thivv.lol      ]
      \\ \\  \\/  / /
       \\ \\    / /
        \\ \\  / /
         \\ \\/ /
          \\/ /
           \\/
`}
            </pre>
          </div>

          {/* Prompt Section */}
          <div className="mt-4 w-full max-w-lg mx-auto bg-neutral-950/80 border border-neutral-800 rounded p-4 sm:p-6 text-left">
            <div className="text-xs text-neutral-500 mb-2 font-mono flex items-center justify-between">
              <span>root@detour:~#</span>
              <span className="text-[10px] uppercase text-neutral-600">
                [Press 4 or Click Below]
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-sm sm:text-base font-mono">
              <span className="text-neutral-400 font-medium">
                proceed with :
              </span>
              <Link
                href="/404"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="group relative inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 hover:bg-[#00ad6f] text-emerald-400 hover:text-black border border-emerald-500/40 hover:border-[#00ad6f] font-bold transition-all duration-150 shadow-[0_0_15px_rgba(0,173,111,0.15)] hover:shadow-[0_0_25px_rgba(0,173,111,0.6)] focus:outline-none focus:ring-2 focus:ring-[#00ad6f] rounded-xs"
              >
                <span className="text-emerald-500 group-hover:text-black transition-colors">
                  {isHovered ? "[>" : "[ "}
                </span>
                <span className="tracking-widest">404</span>
                <span className="text-emerald-500 group-hover:text-black transition-colors">
                  {isHovered ? "<]" : " ]"}
                </span>
                <span className="ml-1 text-xs opacity-75 group-hover:translate-x-0.5 transition-transform">
                  &rarr;
                </span>
              </Link>
              <span className="inline-block w-2 h-4 bg-emerald-400 animate-pulse ml-1" />
            </div>
          </div>
        </div>

        {/* Footer Meta & Redirect Info */}
        <footer className="border-t border-neutral-800/80 pt-4 mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-400">
          <div className="flex items-center gap-3 text-[11px]">
            <span className="text-neutral-400">404s and heartbreaks™</span>
            <span>•</span>
            <span>A collection of my personal 404 pages</span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span className="text-neutral-400">
              Auto-forwarding target:{" "}
              <a
                href="https://pr3thivv.lol"
                className="text-neutral-300 hover:text-[#00ad6f] underline decoration-neutral-700 underline-offset-2 transition-colors"
              >
                pr3thivv.lol
              </a>
            </span>
          </div>
        </footer>
      </div>

      {/* Embedded CRT scanlines styles */}
      <style jsx global>{`
        .crt-overlay {
          position: relative;
        }
        .crt-overlay::before {
          content: " ";
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          background: linear-gradient(
              rgba(18, 16, 16, 0) 50%,
              rgba(0, 0, 0, 0.25) 50%
            ),
            linear-gradient(
              90deg,
              rgba(255, 0, 0, 0.03),
              rgba(0, 255, 0, 0.01),
              rgba(0, 0, 255, 0.03)
            );
          z-index: 40;
          background-size: 100% 3px, 6px 100%;
          pointer-events: none;
          opacity: 0.6;
        }
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-none {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </main>
  );
}
