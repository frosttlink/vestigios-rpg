"use client";

import Link from "next/link";
import { useState } from "react";
import { ClueTerminal } from "@/components/clue-terminal";
import { CLUES } from "./clues-data";

export default function ArgPistas() {
  const [selectedClueId, setSelectedClueId] = useState<number | null>(null);

  const selectedClue = CLUES.find((clue) => clue.id === selectedClueId);

  return (
    <main className="min-h-screen bg-black relative overflow-hidden text-green-400">
      {/* Fundo */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#1a1a1a_0%,#000000_70%)]" />

      {/* Noise */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: "url('/noise.png')",
          backgroundRepeat: "repeat",
        }}
      />

      {/* Scanlines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, transparent 50%, rgba(255,255,255,0.15) 50%)",
          backgroundSize: "100% 4px",
        }}
      />

      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_70%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-10 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-2 h-2 bg-zinc-300 rounded-full animate-pulse" />

              <span className="font-mono text-xs tracking-[0.3em] text-zinc-400">
                SISTEMA ONLINE
              </span>
            </div>

            <h1 className="text-5xl font-black font-mono tracking-widest text-zinc-100 drop-shadow-[0_0_15px_rgba(255,255,255,0.15)]">
              [SISTEMA DE PISTAS]
            </h1>

            <p className="mt-3 text-zinc-500 font-mono text-sm">
              {">>>"} Clique em uma pista para revelar seu conteúdo
            </p>
          </div>

          <Link
            href="/"
            className="px-4 py-2 border border-zinc-700 text-zinc-300 font-mono text-sm rounded hover:bg-zinc-800/ hover:border-zinc-500 hover:shadow-[0_0_15px_rgba(96,165,250,0.3)] transition-all"
          >
            [VOLTAR]
          </Link>
        </div>

        {/* Conteúdo */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className=" border border-zinc-800 rounded-lg p-4 bg-black/70 backdrop-blur-sm shadow-[0_0_20px_rgba(255,255,255,0.04)]">
              <h2 className=" text-zinc-200 font-mono text-sm mb-4 pb-2 border-b border-zinc-800 tracking-[0.2em]">
                PISTAS DISPONÍVEIS
              </h2>

              <div className="space-y-2">
                {CLUES.map((clue) => (
                  <button
                    type="button"
                    key={clue.id}
                    onClick={() => setSelectedClueId(clue.id)}
                    className={`w-full text-left px-3 py-3 rounded font-mono text-sm transition-all duration-200 ${
                      selectedClueId === clue.id
                        ? `
                            bg-zinc-100
                            text-black
                            font-bold
                            shadow-[0_0_30px_rgba(255,255,255,0.15)]
                          `
                        : `
                            bg-zinc-900
                            text-zinc-400
                            border
                            border-zinc-800

                            hover:border-zinc-800
                            hover:bg-zinc-800
                            hover:translate-x-1
                          `
                    }`}
                  >
                    <span className="text-xs opacity-70">#{clue.id}</span>{" "}
                    {clue.title}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Painel Principal */}
          <div className="lg:col-span-3">
            {selectedClue ? (
              <div className="min-h-175 border border-zinc-800 rounded-lg p-6 bg-black/70 backdrop-blur-sm shadow-[0_0_30px_rgba(255,255,255,0.04)]">
                <div className="mb-6 text-zinc-300 font-mono text-sm border-b border-zinc-800 pb-3">
                  [PISTA #{selectedClue.id}] - {selectedClue.title}
                </div>

                <ClueTerminal
                  content={selectedClue.content}
                  image={selectedClue.image}
                />
              </div>
            ) : (
              <div className=" min-h-175 flex items-center justify-center border border-dashed border-zinc-800 rounded-lg bg-black/40">
                <div className="text-center">
                  <p className="font-mono text-zinc-600 tracking-[0.2em]">
                    AGUARDANDO SELEÇÃO DE PISTA...
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Rodapé */}
        <div className="mt-8 text-center">
          <p className="text-zinc-600 font-mono text-xs tracking-[0.2em]">
            Clique nos indicadores acima para navegar entre as pistas
          </p>
        </div>
      </div>
    </main>
  );
}
