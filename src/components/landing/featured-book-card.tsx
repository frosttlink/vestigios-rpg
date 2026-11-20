"use client";

import { ArrowRight, BookOpen } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { BookWarningDialog } from "@/components/book-warning-dialog";

interface FeaturedBookCardProps {
  title: string;
  image: string;
  link: string;
}

const TAGS = ["GRATUITO", "SISTEMA OFICIAL", "PDF"];

export function FeaturedBookCard({
  title,
  image,
  link,
}: FeaturedBookCardProps) {
  const [showWarning, setShowWarning] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setShowWarning(true)}
        className="group relative block w-full overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950/60 text-left transition-all duration-500 hover:border-white/50 hover:shadow-[0_0_45px_rgba(255,255,255,0.07)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:col-span-2 lg:col-span-2"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, transparent 50%, rgba(255,255,255,0.12) 50%)",
            backgroundSize: "100% 4px",
          }}
          aria-hidden="true"
        />

        <span
          className="pointer-events-none absolute top-0 left-0 h-5 w-5 rounded-tl-xl border-t border-l border-white/50"
          aria-hidden="true"
        />

        <span
          className="pointer-events-none absolute right-0 bottom-0 h-5 w-5 rounded-br-xl border-r border-b border-white/50"
          aria-hidden="true"
        />

        <div className="relative grid sm:grid-cols-[0.85fr_1.15fr]">
          <div className="relative flex items-center justify-center overflow-hidden bg-zinc-900/40 p-5 sm:p-7">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle at 50% 40%, rgba(255,255,255,0.06), transparent 60%)",
              }}
              aria-hidden="true"
            />

            <div className="relative h-60 w-full max-w-[13rem] overflow-hidden rounded-md border border-zinc-700 shadow-[0_25px_60px_rgba(0,0,0,0.75)] transition-all duration-700 group-hover:-translate-y-1 group-hover:border-zinc-400 group-hover:shadow-[0_30px_70px_rgba(0,0,0,0.85)] sm:h-64">
              <Image
                src={image}
                alt={title}
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-white/5" />
            </div>

            <span className="absolute top-4 left-4 rounded border border-zinc-600/80 bg-black/70 px-2 py-1 font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-300 backdrop-blur-sm">
              Dossiê 01
            </span>
          </div>

          <div className="relative flex flex-col justify-between gap-6 border-t border-zinc-800/70 p-6 sm:border-t-0 sm:border-l md:p-8">
            <div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-zinc-400" />

                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500">
                  Destaque do acervo
                </span>
              </div>

              <h3 className="mt-4 font-mono text-2xl font-black tracking-wider text-zinc-100 transition-colors duration-300 group-hover:text-white md:text-3xl">
                {title}
              </h3>

              <p className="mt-4 max-w-lg font-mono text-xs leading-7 text-zinc-500">
                Regras, criação de personagem, combate, investigação e todas as
                mecânicas do sistema em um só lugar.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {TAGS.map((tag) => (
                  <span
                    key={tag}
                    className="rounded border border-zinc-800 bg-black/30 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.18em] text-zinc-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <span className="inline-flex w-fit items-center gap-3 rounded-lg border border-zinc-700 bg-black/40 px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-300 transition-all duration-300 group-hover:border-white/60 group-hover:bg-white/5 group-hover:text-white">
              <BookOpen size={13} />
              Acessar sistema
              <ArrowRight
                size={12}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </span>
          </div>
        </div>
      </button>

      <BookWarningDialog
        isOpen={showWarning}
        onClose={() => setShowWarning(false)}
        onConfirm={() => {
          window.open(link, "_blank", "noopener,noreferrer");
          setShowWarning(false);
        }}
      />
    </>
  );
}
