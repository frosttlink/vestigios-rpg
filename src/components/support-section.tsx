import { HeartHandshake } from "lucide-react";
import Image from "next/image";
import { SectionCard } from "@/components/section-card";

export function SupportSection() {
  return (
    <section className="mb-32">
      <div className="grid lg:grid-cols-2 gap-8">
        <SectionCard glow className="p-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2 h-2 rounded-full bg-zinc-500" />
            <span className="font-mono text-xs tracking-[0.3em] text-zinc-500 uppercase">
              Apoio
            </span>
          </div>

          <h2 className="text-4xl font-black font-mono tracking-[0.05em] mb-6 text-zinc-100">
            [AJUDE O PROJETO A CONTINUAR!]
          </h2>

          <div className="space-y-4 text-zinc-400 leading-8 font-mono text-sm">
            <p>
              Vestígios RPG é um projeto não só de sistema de RPG, mas também de
              livros, ARG, histórias, campanhas e MUITAS outras coisas pra vocês
              aproveitarem.
            </p>
          </div>

          <a
            href="https://livepix.gg/vestigiosrpg"
            target="_blank"
            rel="noopener noreferrer"
            className="
              mt-8 inline-flex items-center gap-3
              px-6 py-4
              border border-zinc-700
              rounded-lg
              text-zinc-200
              hover:border-zinc-400 hover:text-white
              hover:shadow-[0_0_30px_rgba(255,255,255,0.08)]
              transition-all duration-500
              font-mono text-sm uppercase tracking-[0.2em]
            "
          >
            <HeartHandshake size={16} />
            Apoiar Projeto
          </a>
        </SectionCard>

        <SectionCard
          glow
          className="p-10 flex flex-col items-center justify-center"
        >
          <div className="border border-zinc-800 rounded-lg p-4 bg-black/50">
            <Image
              src="/qrcode.jpeg"
              alt="QR Code"
              width={200}
              height={200}
              className="rounded"
            />
          </div>

          <p className="text-zinc-500 mt-6 text-center font-mono text-xs tracking-[0.2em]">
            {"// [QR CODE VINCULADO]"}
          </p>
        </SectionCard>
      </div>
    </section>
  );
}
