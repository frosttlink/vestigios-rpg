import { Calendar, Clock, ExternalLink, Play } from "lucide-react";
import Image from "next/image";
import { SectionCard } from "@/components/section-card";

interface Video {
  id: string;
  title: string;
  description: string;
  publishedAt: string;
  thumbnails: {
    default: { url: string };
    medium: { url: string };
    high: { url: string };
  };
  channelTitle: string;
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function timeAgo(dateStr: string) {
  const diff = Date.now() - new Date(dateStr).getTime();
  const days = Math.floor(diff / 86_400_000);
  if (days === 0) return "Hoje";
  if (days === 1) return "Ontem";
  if (days < 7) return `${days} dias atrás`;
  if (days < 30) return `${Math.floor(days / 7)} sem atrás`;
  return formatDate(dateStr);
}

export async function YouTubeFeed() {
  const apiUrl = process.env.NEXT_PUBLIC_YOUTUBE_API_URL;

  if (!apiUrl) {
    return (
      <div className="mt-20">
        <SectionCard className="p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 rounded-full bg-amber-500/60 animate-pulse" />
            <span className="font-mono text-xs tracking-[0.3em] text-zinc-500 uppercase">
              Sinal Instável
            </span>
          </div>
          <div className="border border-zinc-800/50 rounded-lg p-5 bg-black/40">
            <code className="font-mono text-xs text-zinc-600 break-all leading-relaxed">
              {`> ERRO: API_URL não configurada\n> O SISTEMA DE TRANSMISSÃO ESTA INDISPONIVEL.\n> TENTE NOVAMENTE MAIS TARDE.`}
            </code>
          </div>
        </SectionCard>
      </div>
    );
  }

  let videos: Video[] = [];
  let error: string | null = null;

  try {
    const res = await fetch(`${apiUrl}/api/videos`, {
      next: { revalidate: 300 },
    });
    if (!res.ok) throw new Error(`Erro ${res.status}`);
    const data = await res.json();
    videos = data.videos;
  } catch (err) {
    error = err instanceof Error ? err.message : "Erro desconhecido";
  }

  if (error) {
    return (
      <div className="mt-20">
        <SectionCard className="p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 rounded-full bg-amber-500/60 animate-pulse" />
            <span className="font-mono text-xs tracking-[0.3em] text-zinc-500 uppercase">
              Sinal Instável
            </span>
          </div>
          <div className="border border-zinc-800/50 rounded-lg p-5 bg-black/40">
            <code className="font-mono text-xs text-zinc-600 break-all leading-relaxed">
              {`> ERRO: ${error}\n> O SISTEMA DE TRANSMISSÃO ESTA INDISPONIVEL.\n> TENTE NOVAMENTE MAIS TARDE.`}
            </code>
          </div>
        </SectionCard>
      </div>
    );
  }

  if (videos.length === 0) return null;

  return (
    <div className="mt-20">
      <SectionCard glow className="p-8 md:p-10 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, transparent 50%, rgba(255,255,255,0.1) 50%)",
            backgroundSize: "100% 4px",
          }}
        />

        <div className="relative">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-2 h-2 rounded-full bg-amber-600 animate-pulse" />
            <span className="font-mono text-xs tracking-[0.3em] text-zinc-500 uppercase">
              Transmissões
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {videos.map((video) => (
              <a
                key={video.id}
                href={`https://youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="rounded-lg border border-zinc-800 bg-zinc-950/50 overflow-hidden hover:border-zinc-600 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] transition-all duration-500">
                  <div className="relative aspect-video bg-zinc-900 overflow-hidden">
                    <Image
                      src={
                        video.thumbnails.high?.url ||
                        video.thumbnails.medium.url
                      }
                      alt={video.title}
                      width={480}
                      height={360}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-14 h-14 rounded-full border-2 border-white/70 flex items-center justify-center backdrop-blur-sm">
                        <Play size={22} className="text-white/90 ml-0.5" />
                      </div>
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="font-mono text-sm text-zinc-200 group-hover:text-white transition-colors duration-300 line-clamp-2 leading-relaxed">
                      {video.title}
                    </h3>

                    <div className="mt-3 flex items-center gap-4 text-zinc-500 font-mono text-[11px]">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={12} />
                        {formatDate(video.publishedAt)}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock size={12} />
                        {timeAgo(video.publishedAt)}
                      </span>
                    </div>

                    <div className="mt-4 flex items-center gap-2 text-zinc-600 group-hover:text-zinc-400 transition-colors duration-300 font-mono text-[10px] uppercase tracking-[0.2em]">
                      <ExternalLink size={11} />
                      Assistir
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </SectionCard>
    </div>
  );
}

export function YouTubeFeedSkeleton() {
  return (
    <div className="mt-20">
      <SectionCard className="p-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-2 h-2 rounded-full bg-zinc-500 animate-pulse" />
          <span className="font-mono text-xs tracking-[0.3em] text-zinc-500 uppercase">
            Transmissões
          </span>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="animate-pulse rounded-lg bg-zinc-900/50 border border-zinc-800"
            >
              <div className="aspect-video bg-zinc-800 rounded-t-lg" />
              <div className="p-4 space-y-3">
                <div className="h-4 bg-zinc-800 rounded w-3/4" />
                <div className="h-3 bg-zinc-800/50 rounded w-1/2" />
              </div>
            </div>
          ))}
        </div>
      </SectionCard>
    </div>
  );
}