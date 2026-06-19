import { AdIcon, Globe, HeartHandshake, X, MessageCircle, Play, Camera } from "lucide-react";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { SectionCard } from "@/components/section-card";

const SOCIAL_LINKS = [
  {
    name: "X (Twitter)",
    href: "https://x.com/VestigiosRPGsys",
    icon: X,
    lore: "Transmissões fragmentadas do Sistema. Mensagens curtas, sinais codificados e atualizações instáveis do universo Vestígios.",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/vestigios_rpg",
    icon: Camera,
    lore: "Registros visuais do mundo em colapso. Evidências e artefatos dos vestígios encontrados.",
  },
  {
    name: "Youtube",
    href: "https://youtube.com/@vestigiosrpg?si=vKU60KQeEAcFXxen",
    icon: Play,
    lore: "Arquivos audiovisuais classificados. Relatos, campanhas e transmissões do que não deveria ser visto.",
  },
  {
    name: "Whatsapp",
    href: "https://www.whatsapp.com/channel/0029Vb7I6VrBA1eysc9UnT1q",
    icon: MessageCircle,
    lore: "Canal direto de comunicação. Alertas do Sistema e sinais em tempo real.",
  },
];

export default function RedesSociais() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-black text-zinc-100">
        <div className="max-w-3xl mx-auto px-6 pt-28 pb-24">
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 bg-zinc-300 rounded-full animate-pulse" />
              <span className="font-mono text-xs tracking-[0.3em] text-zinc-500 uppercase">
                Conexões
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-black font-mono tracking-wider text-zinc-100 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
              [REDES SOCIAIS]
            </h1>

            <p className="mt-4 text-zinc-500 font-mono text-sm">
              {"// ACOMPANHE NOVIDADES E PROJETOS"}
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
            {SOCIAL_LINKS.map((social) => {
            const Icon = social.icon;

            return (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <SectionCard hover glow className="p-6 md:p-8 cursor-pointer">
                  <div className="flex items-center gap-5">
                    <div className="shrink-0 w-14 h-14 rounded-xl border border-zinc-700 bg-zinc-900 flex items-center justify-center group-hover:border-zinc-500 transition-colors duration-300">
                      <Icon
                        size={24}
                        className="text-zinc-300 group-hover:text-white transition-colors duration-300"
                      />
                    </div>

                    <div>
                      <h3 className="font-mono font-semibold text-zinc-200 group-hover:text-white transition-colors duration-300">
                        {social.name}
                      </h3>

                      <p className="mt-1 text-zinc-500 font-mono text-xs leading-relaxed">
                        {social.lore}
                      </p>
                    </div>
                  </div>
                </SectionCard>
              </a>
            );
          })}

            <SectionCard glow className="p-6 md:p-8">
              <div className="flex items-center gap-5">
                <div className="shrink-0 w-14 h-14 rounded-xl border border-zinc-700 bg-zinc-900 flex items-center justify-center">
                  <HeartHandshake size={24} className="text-zinc-300" />
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="font-mono font-semibold text-zinc-200">
                    Apoie o Projeto
                  </h3>

                  <p className="mt-1 text-zinc-500 font-mono text-xs tracking-[0.1em]">
                    {"//"} Contribua para o universo Vestígios continuar
                    crescendo.
                  </p>

                  <a
                    href="https://livepix.gg/vestigiosrpg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      mt-4 inline-flex items-center gap-2
                      px-5 py-2.5
                      border border-zinc-700
                      rounded-lg
                      text-zinc-200 font-mono text-xs uppercase tracking-[0.2em]
                      hover:border-zinc-400 hover:text-white
                      hover:shadow-[0_0_30px_rgba(255,255,255,0.08)]
                      transition-all duration-300
                    "
                  >
                    <HeartHandshake size={14} />
                    livepix.gg/vestigiosrpg
                  </a>
                </div>
              </div>
            </SectionCard>
          </div>

          <div className="mt-20">
            <SectionCard className="p-8 relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                  backgroundImage:
                    "linear-gradient(to bottom, transparent 50%, rgba(255,255,255,0.1) 50%)",
                  backgroundSize: "100% 4px",
                }}
              />

              <div className="relative">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-500" />
                  <span className="font-mono text-[10px] tracking-[0.3em] text-zinc-600 uppercase">
                    Pista
                  </span>
                </div>

                <p className="font-mono text-sm text-zinc-400 italic leading-relaxed">
                  &quot;Nem todos os vestígios levam a respostas. Alguns levam a
                  mais perguntas.&quot;
                </p>

                <div className="mt-5 border border-zinc-800/50 rounded-lg p-4 bg-black/40">
                  <code className="block font-mono text-xs text-zinc-600 break-all leading-relaxed">
                    {`> SIGA OS RASTROS. DECIFRE O CÓDIGO. \n> O UNIVERSO GUARDA SEGREDOS.`}
                  </code>
                </div>
              </div>
            </SectionCard>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
