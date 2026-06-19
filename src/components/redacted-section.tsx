import { SectionCard } from "@/components/section-card";

export function RedactedSection() {
  return (
    <section className="mb-32">
      <SectionCard className="p-16 text-center relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, transparent 50%, rgba(255,255,255,0.1) 50%)",
            backgroundSize: "100% 4px",
          }}
        />

        <div className="relative">
          <div className="inline-block border border-zinc-700/50 px-6 py-2 rounded mb-6">
            <span className="font-mono text-[10px] tracking-[0.4em] text-zinc-600 uppercase">
              ESPAÇO RESERVADO
            </span>
          </div>

          <h2 className="text-5xl font-black font-mono tracking-widest text-zinc-800 select-none">
            [REDACTED]
          </h2>

          <div className="mt-6 flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-zinc-800" />
            <span className="font-mono text-[10px] tracking-[0.4em] text-zinc-700 uppercase">
              Classificado
            </span>
            <div className="h-px w-12 bg-zinc-800" />
          </div>

          <p className="mt-6 font-mono text-xs tracking-[0.2em] text-zinc-700/60">
            {"/// ACESSO RESTRITO A PESSOAL AUTORIZADO ///"}
          </p>
        </div>
      </SectionCard>
    </section>
  );
}
