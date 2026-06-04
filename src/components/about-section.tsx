import { SectionCard } from "@/components/section-card";

export function AboutSection() {
  return (
    <section className="mb-32">
      <SectionCard glow className="p-10 md:p-16">
        <div className="flex items-center gap-3 mb-10">
          <span className="w-2 h-2 rounded-full bg-zinc-500" />
          <span className="font-mono text-xs tracking-[0.3em] text-zinc-500 uppercase">
            Sobre
          </span>
        </div>

        <h2 className="text-4xl font-black font-mono tracking-[0.05em] mb-10 text-zinc-100">
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
    </section>
  );
}
