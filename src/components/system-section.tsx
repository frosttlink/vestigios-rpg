"use client";

import { BookOpen } from "lucide-react";
import { useState } from "react";
import { BookWarningDialog } from "@/components/book-warning-dialog";
import { SectionCard } from "@/components/section-card";

export function SystemSection() {
  const [showWarning, setShowWarning] = useState(false);

  return (
    <>
      <section className="mb-32">
        <SectionCard glow className="p-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2 h-2 rounded-full bg-zinc-500" />
            <span className="font-mono text-xs tracking-[0.3em] text-zinc-500 uppercase">
              Sistema
            </span>
          </div>

          <h2 className="text-4xl font-black font-mono tracking-[0.05em] mb-4 text-zinc-100">
            [LIVRO DE REGRAS]
          </h2>

          <p className="text-zinc-400 font-mono text-sm mb-8">
            Acesse o sistema e o livro de regras de Vestígios RPG:
          </p>

          <button
            type="button"
            onClick={() => setShowWarning(true)}
            className="
              inline-flex items-center gap-3
              px-6 py-4
              border border-zinc-700
              rounded-lg
              text-zinc-200
              hover:border-zinc-400 hover:text-white
              hover:shadow-[0_0_30px_rgba(255,255,255,0.08)]
              transition-all duration-500
              font-mono text-sm uppercase tracking-[0.2em]
              cursor-pointer
            "
          >
            <BookOpen size={16} />
            Acessar Sistema
          </button>
        </SectionCard>
      </section>

      <BookWarningDialog
        isOpen={showWarning}
        onClose={() => setShowWarning(false)}
      />
    </>
  );
}
