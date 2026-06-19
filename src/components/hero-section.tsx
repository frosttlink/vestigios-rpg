import { ArrowRight } from "lucide-react"
import Image from "next/image"

const PARTICLES = [
  { x: "15%", y: "20%", delay: "0s", size: 3 },
  { x: "75%", y: "30%", delay: "1s", size: 2 },
  { x: "50%", y: "60%", delay: "2s", size: 4 },
  { x: "85%", y: "70%", delay: "0.5s", size: 2 },
  { x: "25%", y: "80%", delay: "1.5s", size: 3 },
  { x: "60%", y: "15%", delay: "2.5s", size: 2 },
  { x: "10%", y: "55%", delay: "3s", size: 3 },
  { x: "90%", y: "45%", delay: "0.8s", size: 2 },
]

export function HeroSection() {
  return (
    <section className="relative h-screen overflow-hidden">

      {/* Effects */} 
      <div
        className="absolute inset-0 animate-bg-shift"
        style={{
          background: "radial-gradient(circle at 50% 40%, #1a1a1a 0%, #000000 80%)",
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
          backgroundImage: "linear-gradient(to bottom, transparent 50%, rgba(255,255,255,0.12) 50%)",
          backgroundSize: "100% 4px",
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: "linear-gradient(0deg, transparent 24%, rgba(255,255,255,0.05) 25%, rgba(255,255,255,0.05) 26%, transparent 27%, transparent 74%, rgba(255,255,255,0.05) 75%, rgba(255,255,255,0.05) 76%, transparent 77%)",
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
          background: "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.04), transparent 60%)",
          animation: "pulse-glow 4s ease-in-out infinite",
        }}
      />

      <div className="absolute inset-x-0 bottom-0 h-48 bg-linear-to-t from-black via-black/90 to-transparent" />

      {/* Logo and Hero */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center max-w-4xl px-6">
          <div className="animate-fade-slide-up">
            <div className="flex items-center justify-center gap-3 mb-8"></div>
          </div>

          <div className="relative flex justify-center mb-8 animate-fade-slide-up-delay">
            {/* Glow atrás */}
            <div className="absolute inset-0 blur-3xl opacity-30 animate-pulse"
              style={{
                background: "radial-gradient(circle, rgba(255,255,255,0.15), transparent 70%)",
              }}
            />

            {/* Fantasma vermelho */}
            <Image
              src="/logo-vestigios.png"
              alt=""
              width={1599}
              height={899}
              aria-hidden
              className="absolute opacity-20 translate-x-0.5 mix-blend-screen animate-glitch-red pointer-events-none"
            />

            {/* Fantasma azul */}
            <Image
              src="/logo-vestigios.png"
              alt=""
              width={1599}
              height={899}
              aria-hidden
              className="absolute opacity-20 -translate-x-0.5 mix-blend-screen animate-glitch-blue pointer-events-none"
            />

            {/* Logo principal */}
            <Image
              src="/logo-vestigios.png"
              alt="VESTIGIOS"
              width={1599}
              height={899}
              className="relative z-10 drop-shadow-[0_0_25px_rgba(255,255,255,0.18)] animate-logo-breathe select-none"
            />

            {/* Névoa */}
            <div
              className="absolute inset-0 opacity-10 blur-xl animate-fog pointer-events-none"
              style={{
                background: "linear-gradient(90deg, transparent, rgba(255,255,255,.5), transparent)",
              }}
            />
          </div>

          <div className="animate-fade-slide-up-delay-2">
            <p className="text-zinc-500 uppercase tracking-[0.5em] text-sm md:text-base font-mono mb-14 animate-tagline">
              Tudo que existe deixa vestígios
            </p>

            <a
              href="#conteudo"
              className="group inline-flex items-center gap-3 px-8 py-4 border border-zinc-700 rounded-lg text-zinc-200 hover:border-zinc-400 hover:text-white hover:shadow-[0_0_30px_rgba(255,255,255,0.08)] transition-all duration-500 font-mono text-sm uppercase tracking-[0.2emP]"
            >
              Explorar Universo
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Animate Scroll */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <div className="animate-scroll-indicator flex flex-col items-center gap-2">
          <span className="text-zinc-600 font-mono text-[10px] tracking-[0.3em] uppercase">
            Scroll
          </span>
          <div className="w-px h-8 bg-linear-to-b from-zinc-600 to-transparent" />
        </div>
      </div>
    </section>
  )
}
