"use client"

import Link from "next/link";
import Image from "next/image";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

interface BookEntry {
  title: string
  description?: string
  code?: string
  status: "available" | "soon"
  image?: string
  link?: string
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
    status: "soon",
    image: "/placeholder-book.jpeg",
  },
  {
    title: "Campanhas e Temporadas prontas oficiais do sistema Vestígios RPG",
    status: "soon",
    image: "/placeholder-book.jpeg",
  },
  {
    title: "HQ da Linha principal da história da campanha oficial de Vestígios RPG",
    status: "soon",
    image: "/placeholder-book.jpeg",
  },
];


export default function Biblioteca() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-black text-zinc-100 selection:bg-zinc-800 selection:text-white">
        <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-24">

          {/* HEADER DA PÁGINA */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-xs tracking-[0.3em] text-zinc-500 uppercase flex items-center gap-2">
                <span className="w-2 h-2 bg-zinc-700 rounded-full"></span>
                Acervo
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-black font-mono tracking-widest text-zinc-100">
              [BIBLIOTECA]
            </h1>

            <p className="mt-4 text-zinc-500 font-mono text-sm tracking-wide">
              {"// ACERVO DE DOCUMENTOS, LIVROS E MATERIAIS"}
            </p>

            <div className="mt-10">
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-zinc-800 bg-zinc-950 text-zinc-400 font-mono text-xs tracking-[0.2em] rounded-lg hover:border-zinc-500 hover:text-zinc-100 transition-all duration-300"
              >
                [ VOLTAR ]
              </Link>
            </div>
          </div>

          {/* GRID BIBLIOTECA */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-16">
            {BOOKS.map((book) => (
              <div
                key={book.title || Math.random().toString()}
                className={`group flex flex-col transition-all duration-500 ${
                  book.status === "soon" ? "opacity-50 grayscale hover:grayscale-0" : ""
                }`}
              >
                {/* CAPA DO LIVRO (FIX: Altura explícita para evitar overlap) */}
                <div className="relative w-full h-80 max-w-60 mb-6 shrink-0">
                  <div className="absolute inset-0 rounded-lg overflow-hidden border border-zinc-800 bg-zinc-900 shadow-[0_10px_40px_rgba(0,0,0,0.8)] transition-all duration-500 group-hover:-translate-y-3 group-hover:scale-[1.02] group-hover:shadow-[0_20px_50px_rgba(255,255,255,0.05)] group-hover:border-zinc-700">
                    
                    <Image
                      src={book.image || "/placeholder-book.jpeg"}
                      alt={book.title || "Livro sem título"}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* OVERLAY CINEMÁTICO */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-white/5 transition-opacity duration-500 group-hover:opacity-80" />
                  </div>
                </div>

                {/* INFORMAÇÕES DO LIVRO (FIX: z-20 garante que o texto fique acima da imagem) */}
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
                    <div className="mt-5 group-hover:opacity-100 transition-all duration-300">
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
          <div className="mt-32 text-center border-t border-zinc-900 pt-10">
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