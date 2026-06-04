"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const PARTICLES = [
  { x: "15%", y: "20%", delay: "0s", size: 3 },
  { x: "75%", y: "30%", delay: "1s", size: 2 },
  { x: "50%", y: "60%", delay: "2s", size: 4 },
  { x: "85%", y: "70%", delay: "0.5s", size: 2 },
  { x: "25%", y: "80%", delay: "1.5s", size: 3 },
  { x: "60%", y: "15%", delay: "2.5s", size: 2 },
  { x: "10%", y: "55%", delay: "3s", size: 3 },
  { x: "90%", y: "45%", delay: "0.8s", size: 2 },
];

export function HeroSection() {
  const [glitchDone, setGlitchDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setGlitchDone(true), 5200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      <div
        className="absolute inset-0 animate-bg-shift"
        style={{
          background:
            "radial-gradient(circle at 50% 40%, #1a1a1a 0%, #000000 80%)",
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: "url('/noise.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "256px",
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, transparent 50%, rgba(255,255,255,0.12) 50%)",
          backgroundSize: "100% 4px",
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(0deg, transparent 24%, rgba(255,255,255,0.05) 25%, rgba(255,255,255,0.05) 26%, transparent 27%, transparent 74%, rgba(255,255,255,0.05) 75%, rgba(255,255,255,0.05) 76%, transparent 77%)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {PARTICLES.map((p) => (
          <div
            key={`${p.x}-${p.y}`}
            className="absolute rounded-full bg-zinc-400"
            style={{
              left: p.x,
              top: p.y,
              width: p.size,
              height: p.size,
              animation: `float-particle 6s ease-in-out ${p.delay} infinite`,
            }}
          />
        ))}
      </div>

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.04), transparent 60%)",
          animation: "pulse-glow 4s ease-in-out infinite",
        }}
      />

      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black via-black/90 to-transparent" />

      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center max-w-4xl px-6">
          <div className="animate-fade-slide-up">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="w-2 h-2 bg-zinc-300 rounded-full animate-pulse" />
              <span className="font-mono text-xs tracking-[0.3em] text-zinc-500 uppercase">
                Sistema de RPG &mdash; ARG
              </span>
            </div>
          </div>

          <div className="animate-fade-slide-up-delay">
            <h1
              className={`${glitchDone ? "glitch-text--done" : "glitch-text"} text-7xl md:text-9xl font-black tracking-[0.15em] mb-8 text-zinc-100 drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]`}
              data-text="VESTÍGIOS"
            >
              VESTÍGIOS
            </h1>
          </div>

          <div className="animate-fade-slide-up-delay-2">
            <p className="text-zinc-500 uppercase tracking-[0.5em] text-sm md:text-base font-mono mb-14">
              Tudo que existe deixa vestígios
            </p>

            <Link
              href="#conteudo"
              className="
                group inline-flex items-center gap-3
                px-8 py-4
                border border-zinc-700
                rounded-lg
                text-zinc-200
                hover:border-zinc-400 hover:text-white
                hover:shadow-[0_0_30px_rgba(255,255,255,0.08)]
                transition-all duration-500
                font-mono text-sm uppercase tracking-[0.2em]
              "
            >
              Explorar Universo
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <div className="animate-scroll-indicator flex flex-col items-center gap-2">
          <span className="text-zinc-600 font-mono text-[10px] tracking-[0.3em] uppercase">
            Scroll
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-zinc-600 to-transparent" />
        </div>
      </div>
    </section>
  );
}
