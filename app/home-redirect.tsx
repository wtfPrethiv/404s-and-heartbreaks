"use client";

import { useEffect, useState } from "react";

const FROM = 12;

export function HomeRedirect() {
  const [seconds, setSeconds] = useState(FROM);

  useEffect(() => {
    const id = window.setInterval(() => {
      setSeconds((s) => {
        if (s <= 1) {
          window.clearInterval(id);
          return 0;
        }
        return s - 1;
      });
    }, 1000);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    if (seconds === 0) {
      window.location.href = "https://pr3thivv.lol";
    }
  }, [seconds]);

  return (
    <a
      href="https://pr3thivv.lol"
      className="inline-flex flex-col text-left transition-opacity hover:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
    >
      <span className="mb-2 block font-mono text-[length:clamp(0.55rem,0.7vw,0.72rem)] uppercase tracking-[0.16em] opacity-70">
        Redirecting in {seconds} second{seconds === 1 ? "" : "s"}
      </span>
      <span className="block font-display text-[length:clamp(2rem,5.4vw,5.8rem)] uppercase leading-[0.86] tracking-[-0.045em]">
        Back to
        <br />
        home
      </span>
    </a>
  );
}
