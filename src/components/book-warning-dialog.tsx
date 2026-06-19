"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

interface BookWarningDialogProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
}

export function BookWarningDialog({ isOpen, onClose, onConfirm }: BookWarningDialogProps) {
  const router = useRouter();
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) return;

    dialogRef.current?.focus();
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div
        ref={dialogRef}
        tabIndex={-1}
        className="
          relative
          w-full max-w-lg mx-4
          bg-zinc-950/90
          border border-zinc-800
          rounded-xl
          p-8
          shadow-[0_0_60px_rgba(255,255,255,0.05)]
          backdrop-blur-xl
        "
      >
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none rounded-xl overflow-hidden"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, transparent 50%, rgba(255,255,255,0.1) 50%)",
            backgroundSize: "100% 4px",
          }}
        />

        <div className="relative">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 bg-zinc-300 rounded-full animate-pulse" />
            <span className="font-mono text-xs tracking-[0.3em] text-zinc-500 uppercase">
              AVISO DO SISTEMA
            </span>
          </div>

          <div className="space-y-4 mb-8">
            <p className="text-zinc-300 font-mono text-sm leading-relaxed">
              {"// AVISO: As ilustrações do livro ainda não foram prontas."}
            </p>

            <p className="text-zinc-500 font-mono text-xs leading-relaxed">
              {"[SYSTEM]"}
              {" -> "}
              Elas estarão disponíveis em breve.
            </p>

            <p className="text-zinc-400 font-mono text-sm">
              {"[>]"} Deseja continuar mesmo assim?
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={onConfirm}
              className="
                flex-1 px-6 py-3
                border border-zinc-700
                rounded-lg
                text-zinc-200 font-mono text-sm uppercase tracking-[0.2em]
                hover:border-zinc-400 hover:text-white
                hover:shadow-[0_0_30px_rgba(255,255,255,0.08)]
                transition-all duration-300
              "
            >
              [SIM]
            </button>

            <button
              type="button"
              onClick={onClose}
              className="
                flex-1 px-6 py-3
                border border-zinc-800
                rounded-lg
                text-zinc-600 font-mono text-sm uppercase tracking-[0.2em]
                hover:border-zinc-600 hover:text-zinc-400
                transition-all duration-300
              "
            >
              [NÃO]
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
