"use client";

import { BookOpen } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { BookWarningDialog } from "@/components/book-warning-dialog";
import { SectionCard } from "@/components/section-card";

export function SystemSection() {
  const [showWarning, setShowWarning] = useState(false);

  return (
    <>
      <section className="mb-32">
        <SectionCard
          glow
          className="p-8 md:p-12 grid items-center gap-12 lg:grid-cols-[320px_1fr]"
        >
          <div className="relative flex justify-center perspective-distant">
            <div className="relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 shadow-[0_30px_80px_rgba(0,0,0,0.6)] transition-all duration-700 origin-right transform-3d hover:transform-[rotateY(25deg)] hover:shadow-[0_40px_120px_rgba(255,255,255,0.08)]">
              <Image
                src="/guia-basico.jpeg"
                alt="Capa do livro de regras"
                width={280}
                height={410}
                className="h-auto w-full object-cover"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/25 via-transparent to-white/5" />
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-2 h-2 rounded-full bg-zinc-500" />
              <span className="font-mono text-xs tracking-[0.3em] uppercase text-zinc-500">
                Sistema
              </span>
            </div>

            <h2 className="mb-6 font-mono text-4xl font-black tracking-wider text-zinc-100">
              [LIVRO DE REGRAS]
            </h2>

            <p className="mb-10 max-w-xl font-mono text-sm leading-7 text-zinc-400">
              Acesse o sistema oficial e consulte o Livro de Regras de Vestígios
              RPG para conhecer todas as mecânicas, personagens e regras da
              campanha.
            </p>

            <button
              type="button"
              onClick={() => setShowWarning(true)}
              className="inline-flex items-center gap-3 rounded-lg border border-zinc-700 bg-zinc-900/40 px-7 py-4 font-mono text-sm uppercase tracking-[0.2em] text-zinc-200 transition-all duration-500 hover:border-zinc-400 hover:bg-zinc-800/40 hover:text-white hover:shadow-[0_0_40px_rgba(255,255,255,0.08)]"
            >
              <BookOpen size={16} />
              Acessar Sistema
            </button>
          </div>
        </SectionCard>
      </section>

      <BookWarningDialog
        isOpen={showWarning}
        onClose={() => setShowWarning(false)}
        onConfirm={() => {
          window.open(
            "https://docs.google.com/document/d/1UAfO5_sJZYXKasnBu9qwJ4VdkPlLAGzrg11YUlxosrU/edit?usp=drivesdk",
            "_blank",
          );
          setShowWarning(false);
        }}
      />
    </>
  );
}
