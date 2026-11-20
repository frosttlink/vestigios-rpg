import { ArrowRight, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SectionCard } from "@/components/section-card";
import { FeaturedBookCard } from "./featured-book-card";

const FEATURED_BOOK = {
  title: "Livro de regras",
  image: "/guia-basico.jpeg",
  link: "https://docs.google.com/document/d/1UAfO5_sJZYXKasnBu9qwJ4VdkPlLAGzrg11YUlxosrU/edit?usp=drivesdk",
};

const AVAILABLE = [
  {
    title: "Fichas de jogador",
    image: "/ficha-ofc.jpeg",
    link: "https://drive.google.com/file/d/1ZcMWMgpZezTZLJmHOYJODbe8aD3Thk-7/view",
  },
  {
    title: "Ameaças e personagens",
    image: "/ficha-am.jpeg",
    link: "https://drive.google.com/file/d/168gzcOn_fkcZFMRoqgIL3S6SgDv7ZxtC/view",
  },
];

const SOON = ["Campanhas e temporadas", "HQ da linha principal"];

export function LibraryHighlightSection() {
  return (
    <section className="mb-16 md:mb-20">
      <SectionCard glow className="p-6 md:p-12">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-2 h-2 rounded-full bg-zinc-500" />
          <span className="font-mono text-xs tracking-[0.3em] text-zinc-500 uppercase">
            Acervo
          </span>
        </div>

        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-4xl font-black font-mono tracking-wider mb-4 text-zinc-100">
              [BIBLIOTECA EM DESTAQUE]
            </h2>

            <p className="max-w-2xl font-mono text-sm leading-8 text-zinc-400">
              Documentos, fichas e materiais oficiais para começar a jogar.
              Novos arquivos serão liberados com o tempo.
            </p>
          </div>

          <Link
            href="/biblioteca"
            className="
              group inline-flex items-center gap-2 shrink-0
              font-mono text-xs uppercase tracking-[0.2em] text-zinc-400
              hover:text-white transition-colors duration-300
            "
          >
            Ver acervo completo
            <ArrowRight
              size={14}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </Link>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <FeaturedBookCard {...FEATURED_BOOK} />

          {AVAILABLE.map((item) => (
            <a
              key={item.title}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group block overflow-hidden rounded-lg border border-zinc-800
                bg-zinc-950/50
                hover:border-zinc-600
                hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]
                transition-all duration-500
              "
            >
              <div className="relative aspect-3/4 bg-zinc-900 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
              </div>

              <div className="p-4">
                <h3 className="font-mono text-sm text-zinc-200 group-hover:text-white transition-colors duration-300">
                  {item.title}
                </h3>

                <span className="mt-3 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600 group-hover:text-zinc-400 transition-colors duration-300">
                  Abrir documento
                  <ArrowRight size={11} />
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-5 rounded-lg border border-dashed border-zinc-800 p-5">
          <div className="flex items-center gap-3 mb-3">
            <Clock size={13} className="text-zinc-600" />
            <span className="font-mono text-[10px] tracking-[0.3em] text-zinc-600 uppercase">
              Em breve
            </span>
          </div>

          <div className="flex flex-wrap gap-3">
            {SOON.map((item) => (
              <span
                key={item}
                className="rounded border border-zinc-800/60 bg-black/30 px-3 py-2 font-mono text-xs text-zinc-600"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </SectionCard>
    </section>
  );
}
