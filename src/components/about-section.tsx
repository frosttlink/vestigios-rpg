import { SectionCard } from "@/components/section-card";
import { HeartHandshake } from "lucide-react";

export function AboutSection() {
  return (
    <section className="mb-32">
     <div className="grid lg:grid-cols-[1.5fr_1fr] gap-8">
       <SectionCard glow className="p-10 md:p-16">
        <div className="flex items-center gap-3 mb-10">
          <span className="w-2 h-2 rounded-full bg-zinc-500" />
          <span className="font-mono text-xs tracking-[0.3em] text-zinc-500 uppercase">
            Sobre
          </span>
        </div>

        <h2 className="text-4xl font-black font-mono tracking-wider mb-10 text-zinc-100">
          [O QUE NÓS SOMOS?]
        </h2>

        <div className="max-w-3xl space-y-6">
          <p className="text-zinc-400 leading-8 font-mono text-sm">
            Vestígios RPG é um projeto de amigos para criar um universo de RPG.
          </p>

          <p className="text-zinc-400 leading-8 font-mono text-sm">
            Sistema original, livros, campanhas, cinematics, analog horrors e
            diversas outras coisas que vão ser produzidas com o tempo.
          </p>

          <p className="text-zinc-400 leading-8 font-mono text-sm">
            Esse é um projeto indie e sem nenhuma ajuda financeira.
          </p>
        </div>
      </SectionCard>

      <SectionCard glow className="p-10 md:p-16">
          <div className="flex items-center gap-3 mb-10">
            <span className="w-2 h-2 rounded-full bg-zinc-500" />
            <span className="font-mono text-xs tracking-[0.3em] text-zinc-500 uppercase">
              Apoio
            </span>
          </div>

          <h2 className="text-4xl font-black font-mono tracking-wider mb-6 text-zinc-100">
            [AJUDE O PROJETO A CONTINUAR!]
          </h2>

          <div className="space-y-4 text-zinc-400 leading-8 font-mono text-sm">
            <p>
              Vestígios RPG é um projeto não só de sistema de RPG, mas também de
              livros, ARG, histórias, campanhas e MUITAS outras coisas pra vocês
              aproveitarem.
            </p>
          </div>

          <a
            href="https://livepix.gg/vestigiosrpg"
            target="_blank"
            rel="noopener noreferrer"
            className="
              mt-8 inline-flex items-center gap-3
              px-6 py-4
              border border-zinc-700
              rounded-lg
              text-zinc-200
              hover:border-zinc-400 hover:text-white
              hover:shadow-[0_0_30px_rgba(255,255,255,0.08)]
              transition-all duration-500
              font-mono text-sm uppercase tracking-[0.2em]
            "
          >
            <HeartHandshake size={16} />
            Apoiar Projeto
          </a>
        </SectionCard>
     </div>
    </section>
  );
}
