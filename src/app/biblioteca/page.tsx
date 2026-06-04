import { BookOpen } from "lucide-react";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { SectionCard } from "@/components/section-card";

interface BookEntry {
  title: string;
  description?: string;
  code?: string;
  status: "available" | "soon";
}

const BOOKS: BookEntry[] = [
  {
    title: "Caixa de Pandora",
    description:
      "Documentos confidenciais encontrados durante as investigações.",
    code: "MUVWNEY2Vm85WE5ocnV5eERHZXM0VEd5UDBVcmx3SllD",
    status: "available",
  },
  {
    title: "Livro de regras e sistema de Vestígios RPG",
    status: "available",
  },
  {
    title: "Ameaças e Personagens oficiais do sistema de Vestígios RPG",
    status: "available",
  },
  {
    title: "Campanhas e Temporadas prontas oficiais do sistema Vestígios RPG",
    status: "soon",
  },
  {
    title:
      "HQ da Linha principal da história da campanha oficial de Vestígios RPG",
    status: "soon",
  },
];

export default function Biblioteca() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-black text-zinc-100">
        <div className="max-w-5xl mx-auto px-6 pt-28 pb-24">
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 bg-zinc-300 rounded-full animate-pulse" />
              <span className="font-mono text-xs tracking-[0.3em] text-zinc-500 uppercase">
                Acervo
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-black font-mono tracking-[0.05em] text-zinc-100 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
              [BIBLIOTECA]
            </h1>

            <p className="mt-4 text-zinc-500 font-mono text-sm">
              {"// ACERVO DE DOCUMENTOS, LIVROS E MATERIAIS"}
            </p>

            <div className="mt-8">
              <Link
                href="/"
                className="
                  inline-flex items-center gap-2
                  px-4 py-2
                  border border-zinc-800
                  text-zinc-400 font-mono text-xs tracking-[0.2em]
                  rounded-lg
                  hover:border-zinc-600 hover:text-zinc-200
                  transition-all duration-300
                "
              >
                {"[VOLTAR]"}
              </Link>
            </div>
          </div>

          <div className="space-y-5">
            {BOOKS.map((book) => (
              <SectionCard
                key={book.title}
                glow={book.status === "available"}
                className={`p-6 md:p-8 ${book.status === "soon" ? "opacity-50" : ""}`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`
                      shrink-0 w-10 h-10 rounded-lg border flex items-center justify-center
                      ${book.status === "available" ? "border-zinc-700 bg-zinc-900" : "border-zinc-800/50 bg-zinc-950/50"}
                    `}
                  >
                    <BookOpen
                      size={18}
                      className={
                        book.status === "available"
                          ? "text-zinc-300"
                          : "text-zinc-700"
                      }
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3
                        className={`
                          font-mono font-semibold text-sm md:text-base
                          ${book.status === "available" ? "text-zinc-200" : "text-zinc-600"}
                        `}
                      >
                        {book.title}
                      </h3>

                      <span
                        className={`
                          font-mono text-[10px] tracking-[0.2em] uppercase px-2 py-0.5 rounded border
                          ${book.status === "available" ? "border-zinc-700 text-zinc-400" : "border-zinc-800 text-zinc-700"}
                        `}
                      >
                        {book.status === "available"
                          ? "(disponível)"
                          : "(em breve)"}
                      </span>
                    </div>

                    {book.description && (
                      <p className="mt-2 text-zinc-500 font-mono text-xs leading-relaxed">
                        {book.description}
                      </p>
                    )}

                    {book.code && (
                      <div className="mt-4 bg-black/60 border border-zinc-800 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
                          <span className="font-mono text-[10px] tracking-[0.2em] text-zinc-600 uppercase">
                            Dados codificados
                          </span>
                        </div>
                        <code className="block font-mono text-xs text-zinc-400 break-all leading-relaxed select-all">
                          {book.code}
                        </code>
                      </div>
                    )}
                  </div>
                </div>
              </SectionCard>
            ))}
          </div>

          <div className="mt-14 text-center">
            <p className="font-mono text-[10px] tracking-[0.3em] text-zinc-700">
              {"// O CONHECIMENTO É UM VESTÍGIO"}
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
