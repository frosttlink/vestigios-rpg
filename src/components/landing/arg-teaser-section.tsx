import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { CLUES } from "@/app/enigmas/clues-data";
import { SectionCard } from "@/components/section-card";

export function ArgTeaserSection() {
  return (
    <section className="mb-16 md:mb-20">
      <SectionCard glow className="relative overflow-hidden p-6 md:p-12">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, transparent 50%, rgba(255,255,255,0.1) 50%)",
            backgroundSize: "100% 4px",
          }}
        />

        <div className="relative grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-2 h-2 rounded-full bg-zinc-500" />
              <span className="font-mono text-xs tracking-[0.3em] text-zinc-500 uppercase">
                ARG
              </span>
            </div>

            <h2 className="text-2xl md:text-4xl font-black font-mono tracking-wider mb-6 text-zinc-100">
              [SISTEMA DE PISTAS]
            </h2>

            <p className="max-w-xl font-mono text-sm leading-8 text-zinc-400 mb-8">
              Registros recuperados de empresas, fitas e arquivos classificados.
              Siga os rastros, decifre os códigos e descubra o que o universo
              guarda.
            </p>

            <Link
              href="/enigmas"
              className="
                group inline-flex items-center gap-3
                rounded-lg border border-zinc-700 bg-zinc-900/40 px-7 py-4
                font-mono text-sm uppercase tracking-[0.2em] text-zinc-200
                hover:border-zinc-400 hover:bg-zinc-800/40 hover:text-white
                hover:shadow-[0_0_40px_rgba(255,255,255,0.08)]
                transition-all duration-500
              "
            >
              Acessar Enigmas
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </Link>
          </div>

          <div className="rounded-lg border border-zinc-800 bg-black/60 p-5 shadow-[0_0_30px_rgba(255,255,255,0.03)]">
            <div className="flex items-center gap-2 pb-4 mb-4 border-b border-zinc-800">
              <div className="w-3 h-3 rounded-full bg-zinc-600" />
              <div className="w-3 h-3 rounded-full bg-zinc-500" />
              <div className="w-3 h-3 rounded-full bg-zinc-400" />

              <span className="ml-2 text-xs text-zinc-500 tracking-widest">
                TERMINAL_DE_INVESTIGAÇÃO
              </span>
            </div>

            <div className="space-y-2 font-mono text-xs sm:text-sm text-zinc-500">
              <p>
                <span className="text-zinc-600">{">"}</span> SISTEMA ONLINE
              </p>
              <p>
                <span className="text-zinc-600">{">"}</span> {CLUES.length}{" "}
                REGISTROS DISPONÍVEIS
              </p>
              <p>
                <span className="text-zinc-600">{">"}</span> ACESSO AUTORIZADO
              </p>
              <p className="pt-2 text-zinc-400">
                <span className="animate-pulse">_</span>
              </p>
            </div>
          </div>
        </div>
      </SectionCard>
    </section>
  );
}
