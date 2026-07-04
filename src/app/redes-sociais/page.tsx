import { Camera, HeartHandshake, MessageCircle, Play, X } from "lucide-react";
import { Suspense } from "react";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { SectionCard } from "@/components/section-card";
import { BackButton } from "@/components/ui/back-button";
import { YouTubeFeed, YouTubeFeedSkeleton } from "@/components/youtube-feed";

const PARTICLES = [
  { x: "10%", y: "15%", delay: "0s", size: 2 },
  { x: "85%", y: "25%", delay: "1.2s", size: 1.5 },
  { x: "20%", y: "45%", delay: "2.5s", size: 2.5 },
  { x: "75%", y: "60%", delay: "0.6s", size: 1.5 },
  { x: "50%", y: "80%", delay: "1.8s", size: 2 },
  { x: "90%", y: "10%", delay: "3s", size: 1.5 },
  { x: "40%", y: "35%", delay: "0.3s", size: 2 },
];

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
    lore: "Registros visuais do mundo em colapso. Evidências, artefatos. Nem toda fotografia mostra tudo o que realmente estava lá.",
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

      <main className="relative min-h-screen bg-black text-zinc-100 overflow-hidden">
        {/* PARTÍCULAS FLUTUANTES */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {PARTICLES.map((p) => (
            <div
              key={`${p.x}-${p.y}`}
              className="absolute rounded-full bg-zinc-500"
              style={{
                left: p.x,
                top: p.y,
                width: p.size,
                height: p.size,
                animation: `float-particle 6s ease-in-out ${p.delay} infinite`,
              }}
            />
          ))}
        </div>

        <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-24">
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 bg-zinc-300 rounded-full animate-pulse" />
              <span className="font-mono text-xs tracking-[0.3em] text-zinc-500 uppercase z-20">
                Conexões
              </span>
            </div>

            <h1 className="text-3xl md:text-6xl font-black font-mono tracking-wider text-zinc-100 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
              [REDES SOCIAIS]
            </h1>

            <p className="relative mt-4 text-zinc-500 font-mono text-sm ">
              {"// ACOMPANHE NOVIDADES E PROJETOS"}
            </p>

            <div className="relative mt-8 ">
              <BackButton />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
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
                  <SectionCard
                    hover
                    glow
                    className="p-6 md:p-8 cursor-pointer min-h-37.5"
                  >
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

            <SectionCard glow className="p-6 md:p-8 lg:col-span-2">
              <div className="flex items-center gap-5">
                <div className="shrink-0 w-14 h-14 rounded-xl border border-zinc-700 bg-zinc-900 flex items-center justify-center">
                  <HeartHandshake size={24} className="text-zinc-300" />
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="font-mono font-semibold text-zinc-200">
                    Apoie o Projeto
                  </h3>

                  <p className="mt-1 text-zinc-500 font-mono text-xs tracking-widest">
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
                      rounded-lg break-all
                      text-zinc-200 font-mono text-xs uppercase tracking-[0.2em]
                      hover:border-zinc-400 hover:text-white
                      hover:shadow-[0_0_30px_rgba(255,255,255,0.08)]
                      transition-all duration-300
                    "
                  >
                    {/* <HeartHandshake size={14} classname=""/> */}
                    livepix.gg/vestigiosrpg
                  </a>
                </div>
              </div>
            </SectionCard>
          </div>

          <Suspense fallback={<YouTubeFeedSkeleton />}>
            <YouTubeFeed />
          </Suspense>

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
