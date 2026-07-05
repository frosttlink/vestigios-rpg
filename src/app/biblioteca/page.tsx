"use client";

import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { BackButton } from "@/components/ui/back-button";

interface BookEntry {
  title: string;
  description?: string;
  code?: string;
  status: "available" | "soon";
  image?: string;
  link?: string;
}

const BOOKS: BookEntry[] = [
  {
    title: "Fichas de jogador oficial de Vestígios RPG",
    status: "available",
    image: "/ficha-ofc.jpeg",
    link: "https://drive.google.com/file/d/18t0rrx56M087AK-ZRj2EEHdSXmqcSWQd/view",
  },
  {
    title: "Livro de regras e sistema de Vestígios RPG",
    status: "available",
    image: "/guia-basico.jpeg",
    link: "https://docs.google.com/document/d/1UAfO5_sJZYXKasnBu9qwJ4VdkPlLAGzrg11YUlxosrU/edit?usp=drivesdk",
  },
  {
    title: "Ameaças e Personagens oficiais do sistema de Vestígios RPG",
    status: "available",
    image: "/ficha-am.jpeg",
    link: "https://drive.google.com/file/d/1lwFvTnMyWua-GAo2bXvRTILaPHLDwqsl/view?usp=drivesdk",
  },
  {
    title: "Campanhas e Temporadas prontas oficiais do sistema Vestígios RPG",
    status: "soon",
    image: "/placeholder.jpg",
  },
  {
    title:
      "HQ da Linha principal da história da campanha oficial de Vestígios RPG",
    status: "soon",
    image: "/placeholder.jpg",
  },
];

const PARTICLES = [
  { x: "10%", y: "20%", delay: "0s", size: 2 },
  { x: "85%", y: "30%", delay: "1.5s", size: 1.5 },
  { x: "15%", y: "55%", delay: "3s", size: 2.5 },
  { x: "75%", y: "70%", delay: "0.8s", size: 1.5 },
  { x: "50%", y: "90%", delay: "2s", size: 2 },
  { x: "90%", y: "15%", delay: "2.5s", size: 1.5 },
  { x: "30%", y: "40%", delay: "1s", size: 2 },
];

export default function Biblioteca() {
  return (
    <>
      <Header />

      <main className="relative min-h-screen bg-black text-zinc-100 overflow-hidden selection:bg-zinc-800 selection:text-white">
        {/* CAMADAS ATMOSFÉRICAS */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 50% 30%, #1a1a1a 0%, #000000 70%)",
          }}
        />

        <div
          className="absolute inset-0 pointer-events-none opacity-[0.06]"
          style={{
            backgroundImage: "url('/noise.png')",
            backgroundRepeat: "repeat",
            backgroundSize: "256px",
          }}
        />

        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, transparent 50%, rgba(255,255,255,0.1) 50%)",
            backgroundSize: "100% 4px",
          }}
        />

        <div
          className="absolute inset-0 pointer-events-none opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(0deg, transparent 24%, rgba(255,255,255,0.05) 25%, rgba(255,255,255,0.05) 26%, transparent 27%, transparent 74%, rgba(255,255,255,0.05) 75%, rgba(255,255,255,0.05) 76%, transparent 77%)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* PARTÍCULAS FLUTUANTES */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {PARTICLES.map((p) => (
            <div
              key={`${p.x}-${p.y}`}
              className="absolute rounded-full bg-zinc-500"
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

        {/* CONTEÚDO */}
        <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-24">
          {/* HEADER DA PÁGINA */}
          <div className="mb-20 animate-fade-slide-up">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 bg-zinc-300 rounded-full animate-pulse" />
              <span className="font-mono text-xs tracking-[0.3em] text-zinc-500 uppercase flex items-center gap-2">
                Acervo
              </span>
            </div>

            <h1 className="text-3xl md:text-6xl font-black font-mono tracking-wider text-zinc-100 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
              [BIBLIOTECA]
            </h1>

            <p className="mt-4 text-zinc-500 font-mono text-sm tracking-wide">
              {"// ACERVO DE DOCUMENTOS, LIVROS E MATERIAIS"}
            </p>

            <BackButton />
          </div>

          {/* GRID BIBLIOTECA */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-16 justify-items-center sm:justify-items-start">
            {BOOKS.map((book, index) => (
              <div
                key={book.title || `book-${index}`}
                className={`group flex flex-col items-center sm:items-start transition-all duration-500 ${
                  book.status === "soon"
                    ? "opacity-50 grayscale hover:grayscale-0"
                    : ""
                }`}
                style={{
                  animation: `fade-slide-up 0.8s ease-out ${0.15 + index * 0.1}s forwards`,
                  opacity: 0,
                }}
              >
                {/* CAPA DO LIVRO */}
                {book.status === "available" && book.link ? (
                  <Link
                    href={book.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative w-full h-80 max-w-60 mb-6 shrink-0 block"
                  >
                    <div className="absolute inset-0 rounded-lg overflow-hidden border border-zinc-800 bg-zinc-900 shadow-[0_10px_40px_rgba(0,0,0,0.8)] transition-all duration-500 group-hover:shadow-[0_20px_60px_rgba(255,255,255,0.12)] group-hover:border-zinc-600 group-hover:transform-[translateY(-12px)_scale(1.02)_rotateY(6deg)] transform-3d origin-right">
                      <Image
                        src={book.image || "/placeholder.jpg"}
                        alt={book.title || "Livro sem título"}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-white/10 transition-opacity duration-500 group-hover:opacity-80" />
                    </div>
                  </Link>
                ) : (
                  <div className="relative w-full h-80 max-w-60 mb-6 shrink-0">
                    <div className="absolute inset-0 rounded-lg overflow-hidden border border-zinc-800 bg-zinc-900 shadow-[0_10px_40px_rgba(0,0,0,0.8)]">
                      <Image
                        src={book.image || "/placeholder.jpg"}
                        alt={book.title || "Livro sem título"}
                        fill
                        className="object-cover"
                      />

                      <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-white/10" />
                    </div>
                  </div>
                )}

                {/* INFORMAÇÕES DO LIVRO */}
                <div className="flex flex-col max-w-60 relative z-20">
                  {/* STATUS COM INDICADOR VISUAL */}
                  <div className="flex items-center gap-2 mb-3">
                    {book.status === "available" ? (
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)] animate-pulse shrink-0" />
                    ) : (
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-700 shrink-0" />
                    )}
                    <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-zinc-400 group-hover:text-zinc-300 transition-colors">
                      {book.status === "available" ? "disponível" : "em breve"}
                    </span>
                  </div>

                  {/* TÍTULO */}
                  <h3 className="font-mono text-sm md:text-base font-medium text-zinc-200 leading-relaxed group-hover:text-white transition-colors">
                    {book.title || "[ TÍTULO DESCONHECIDO ]"}
                  </h3>

                  {/* BOTÃO ACESSAR */}
                  {book.status === "available" && book.link && (
                    <div className="mt-5">
                      <Link
                        href={book.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[10px] font-mono tracking-[0.2em] uppercase text-zinc-400 border border-zinc-800 px-4 py-2 rounded hover:bg-zinc-800 hover:text-zinc-100 transition-colors cursor-pointer"
                      >
                        [ ACESSAR ]
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* FOOTER TEXTO */}
          <div className="mt-32 text-center border-t border-zinc-900 pt-10 animate-fade-slide-up">
            <p className="font-mono text-[10px] tracking-[0.4em] text-zinc-600">
              {"// O CONHECIMENTO É UM VESTÍGIO"}
            </p>
          </div>

          <p className="text-zinc-900/5 select-text font-mono tracking-wides cursor-default">
            caixa de pandora: MUVWNEY2Vm85WE5ocnV5eERHZXM0VEd5UDBVcmx3SllD
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
