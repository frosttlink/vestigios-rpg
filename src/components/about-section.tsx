import { SectionCard } from "@/components/section-card";

const TAGS = ["GRATUITO", "INDIE", "FEITO POR AMIGOS"];

export function AboutSection() {
  return (
    <section className="mb-16 md:mb-20">
      <SectionCard glow className="p-6 md:p-12">
        <div className="flex items-center gap-3 mb-8">
          <span className="w-2 h-2 rounded-full bg-zinc-500" />
          <span className="font-mono text-xs tracking-[0.3em] text-zinc-500 uppercase">
            Sobre
          </span>
        </div>

        <h2 className="text-2xl md:text-4xl font-black font-mono tracking-wider mb-8 text-zinc-100">
          [O QUE É VESTÍGIOS RPG?]
        </h2>

        <div className="max-w-4xl space-y-6">
          <p className="text-zinc-400 leading-8 font-mono text-sm">
            Vestígios é um universo de terror indie feito por amigos, sem
            nenhuma ajuda financeira e com conteúdo gratuito para quem quiser
            explorar.
          </p>

          <p className="text-zinc-400 leading-8 font-mono text-sm">
            O que começou no RPG de mesa cresceu e virou livros, campanhas, ARG,
            analog horrors, músicas e histórias conectadas.
          </p>

          <p className="text-zinc-400 leading-8 font-mono text-sm">
            O próximo passo é levar esse universo para animações e
            curtas-metragens, mantendo tudo acessível.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          {TAGS.map((tag) => (
            <span
              key={tag}
              className="rounded border border-zinc-800 bg-black/30 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600"
            >
              {tag}
            </span>
          ))}
        </div>
      </SectionCard>
    </section>
  );
}
