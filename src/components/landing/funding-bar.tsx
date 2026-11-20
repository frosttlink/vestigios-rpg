"use client";

import { ArrowRight, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { FUNDING } from "./config";

const currency = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

export function FundingBar() {
  const { current, goal, link, archive, project, status, cta, milestones } =
    FUNDING;
  const containerRef = useRef<HTMLDivElement>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [filled, setFilled] = useState(false);

  const raised = Math.min(Math.max(current, 0), goal);
  const percent = goal > 0 ? (raised / goal) * 100 : 0;
  const activeIndex = milestones.findIndex(
    (milestone) => raised < milestone.threshold,
  );
  const activeMilestone = milestones[activeIndex];
  const lastReachedIndex = milestones.reduce(
    (last, milestone, index) => (raised >= milestone.threshold ? index : last),
    -1,
  );
  const complete = raised >= goal;

  useEffect(() => {
    const frame = requestAnimationFrame(() => setFilled(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setMobileOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileOpen]);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed right-4 bottom-4 z-40 flex flex-col-reverse items-end md:right-6 md:bottom-6 md:w-[18rem]"
    >
      <button
        type="button"
        onClick={() => setMobileOpen((open) => !open)}
        aria-expanded={mobileOpen}
        aria-controls="funding-panel"
        className="pointer-events-auto flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950/90 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.15em] text-zinc-400 shadow-[0_0_24px_rgba(0,0,0,0.8)] backdrop-blur-xl transition-colors hover:border-white/50 hover:text-zinc-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:hidden"
      >
        <span className="funding-pulse h-1.5 w-1.5 rounded-full bg-white" />
        <span>Meta {currency.format(goal)}</span>
        <span className="text-white">{currency.format(raised)}</span>
        <span className="ml-1 text-zinc-600">{mobileOpen ? "−" : "+"}</span>
      </button>

      <div
        id="funding-panel"
        className={`${mobileOpen ? "block" : "hidden"} md:block`}
      >
        <div className="pointer-events-auto relative mb-2 w-[calc(100vw-2rem)] max-w-[18rem] rounded-xl border border-zinc-800 bg-zinc-950/90 p-4 shadow-[0_0_40px_rgba(255,255,255,0.05)] backdrop-blur-xl md:mb-0 md:w-full md:max-w-none">
          <div
            className="funding-scanlines pointer-events-none absolute inset-0 rounded-xl"
            aria-hidden="true"
          />

          <div
            className="pointer-events-none absolute inset-0 rounded-xl opacity-[0.04]"
            style={{
              backgroundImage: "url('/noise.png')",
              backgroundRepeat: "repeat",
              backgroundSize: "128px",
            }}
            aria-hidden="true"
          />

          <span
            className="pointer-events-none absolute top-0 left-0 h-4 w-4 rounded-tl-xl border-t border-l border-white/60"
            aria-hidden="true"
          />

          <span
            className="pointer-events-none absolute right-0 bottom-0 h-4 w-4 rounded-br-xl border-r border-b border-white/60"
            aria-hidden="true"
          />

          <div className="relative">
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              aria-label="Fechar painel de financiamento"
              className="absolute top-0 right-0 p-1 text-zinc-600 transition-colors hover:text-zinc-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:hidden"
            >
              <X size={14} />
            </button>

            <div className="flex items-start justify-between gap-2 pr-6 md:pr-0">
              <div>
                <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-zinc-500 md:text-[9px] md:tracking-[0.22em]">
                  {archive}
                </p>

                <p className="mt-1 font-mono text-[8px] uppercase tracking-[0.2em] text-zinc-700">
                  Projeto: {project}
                </p>
              </div>

              <span className="flex shrink-0 items-center gap-1.5 font-mono text-[7px] uppercase tracking-[0.12em] text-white md:text-[8px] md:tracking-[0.16em]">
                <span className="funding-pulse h-1.5 w-1.5 rounded-full bg-white" />
                {status}
              </span>
            </div>

            <div className="mt-4 flex items-end justify-between gap-2">
              <div>
                <p className="funding-glitch font-mono text-2xl font-bold tracking-tight text-zinc-100">
                  {currency.format(raised)}
                </p>

                <p className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-600">
                  arrecadados / meta {currency.format(goal)}
                </p>
              </div>

              <span className="font-mono text-[10px] tracking-[0.2em] text-zinc-500">
                {Math.round(percent)}%
              </span>
            </div>

            <div
              className="relative mt-4 h-2 w-full overflow-hidden rounded-full border border-zinc-800 bg-black/80"
              role="progressbar"
              aria-valuemin={0}
              aria-valuemax={goal}
              aria-valuenow={raised}
              aria-label={`Meta de arrecadação: ${currency.format(raised)} de ${currency.format(goal)}`}
            >
              <div
                className="funding-fill absolute inset-y-0 left-0 bg-linear-to-r from-zinc-700 via-zinc-300 to-white shadow-[0_0_12px_rgba(255,255,255,0.28)]"
                style={{
                  width: filled && percent > 0 ? `max(${percent}%, 2px)` : "0%",
                }}
              />

              {milestones.slice(1).map((milestone, index) => (
                <span
                  key={milestone.threshold}
                  className="absolute inset-y-0 w-px bg-zinc-950"
                  style={{
                    left: `${((index + 1) / milestones.length) * 100}%`,
                  }}
                />
              ))}
            </div>

            <ol
              className="mt-3 grid grid-cols-5 gap-1.5"
              aria-label="Marcos da campanha"
            >
              {milestones.map((milestone, index) => {
                const reached = raised >= milestone.threshold;
                const active = index === activeIndex;
                const hit = index === lastReachedIndex;

                let markerClass = "bg-zinc-800";
                let labelClass = "text-zinc-700";
                let stateLabel = "???";

                if (reached) {
                  markerClass = hit
                    ? "bg-white funding-marker--hit"
                    : "bg-white/80";
                  labelClass = "text-white";
                  stateLabel = "OK";
                } else if (active) {
                  markerClass = "bg-white/40 funding-pulse";
                  labelClass = "text-zinc-300";
                  stateLabel = "AGORA";
                }

                return (
                  <li
                    key={milestone.threshold}
                    className="min-w-0"
                    aria-label={`Marco ${index + 1}: ${reached ? "concluído" : active ? "atual" : "bloqueado"}`}
                  >
                    <span
                      className={`block h-1 rounded-full transition-colors duration-500 ${markerClass}`}
                    />

                    <span
                      className={`mt-1.5 block font-mono text-[8px] tracking-[0.1em] ${labelClass}`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span
                      className={`mt-0.5 block font-mono text-[7px] uppercase tracking-[0.08em] ${labelClass}`}
                    >
                      {stateLabel}
                    </span>
                  </li>
                );
              })}
            </ol>

            {complete ? (
              <div className="mt-4 border-t border-zinc-800/70 pt-3">
                <p className="funding-glitch font-mono text-[10px] uppercase tracking-[0.2em] text-white">
                  Meta concluída
                </p>
              </div>
            ) : activeMilestone?.title ? (
              <div className="mt-4 border-t border-zinc-800/70 pt-3">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white">
                  {activeMilestone.title}
                </p>

                <p className="mt-2 font-mono text-[11px] leading-5 text-zinc-500">
                  {activeMilestone.description}
                </p>
              </div>
            ) : null}

            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Apoiar a produção do curta no LivePix (abre em nova aba)"
              className="group mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-zinc-700 bg-black/40 px-3 py-2.5 font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-300 transition-all duration-300 hover:border-white/60 hover:bg-white/5 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {cta}
              <ArrowRight
                size={11}
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
