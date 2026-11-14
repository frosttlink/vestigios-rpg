import { Camera, Mail, MessageCircle, Play, X } from "lucide-react";

const SOCIALS = [
  { name: "X (Twitter)", href: "https://x.com/VestigiosRPGsys", icon: X },
  {
    name: "Instagram",
    href: "https://www.instagram.com/vestigios_rpg",
    icon: Camera,
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@vestigiosrpg?si=vKU60KQeEAcFXxen",
    icon: Play,
  },
  {
    name: "WhatsApp",
    href: "https://www.whatsapp.com/channel/0029Vb7I6VrBA1eysc9UnT1q",
    icon: MessageCircle,
  },
];

export function Footer() {
  return (
    <footer className="border-t border-zinc-800/60 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "url('/noise.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "256px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
              <h3 className="font-mono text-sm tracking-[0.2em] text-zinc-300 uppercase">
                Vestígios RPG
              </h3>
            </div>

            <p className="text-zinc-600 font-mono text-xs tracking-[0.15em] mt-3">
              Tudo que existe deixa vestígios
            </p>
          </div>

          <div className="flex flex-col gap-4 md:items-end">
            <div className="flex items-center gap-3 text-zinc-500">
              <Mail size={16} />
              <span className="font-mono text-sm">rpgvestigios@gmail.com</span>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {SOCIALS.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    title={social.name}
                    className="
                      flex h-10 w-10 items-center justify-center rounded-lg
                      border border-zinc-800 bg-zinc-950/60 text-zinc-500
                      hover:border-zinc-600 hover:text-zinc-200
                      hover:shadow-[0_0_20px_rgba(255,255,255,0.06)]
                      transition-all duration-300
                    "
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-zinc-800/40 text-center">
          <p className="font-mono text-[10px] tracking-[0.3em] text-zinc-700">
            {"// SISTEMA DE RPG — TODOS OS DIREITOS RESERVADOS"}
          </p>
        </div>
      </div>
    </footer>
  );
}
