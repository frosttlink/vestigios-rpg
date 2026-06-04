import type { LucideIcon } from "lucide-react";
import { BookOpen, Puzzle, Sparkles } from "lucide-react";
import Link from "next/link";

interface NavItem {
  href: string | null;
  icon: LucideIcon | null;
  title: string;
  desc: string;
  disabled?: boolean;
}

const NAV_ITEMS: NavItem[] = [
  {
    href: "/redes-sociais",
    icon: null,
    title: "Redes Sociais",
    desc: "Acompanhe novidades e projetos.",
  },
  {
    href: "/biblioteca",
    icon: BookOpen,
    title: "Biblioteca",
    desc: "Livros, materiais e documentos.",
  },
  {
    href: "/enigmas",
    icon: Puzzle,
    title: "Enigmas",
    desc: "Mistérios e desafios.",
  },
  {
    href: null,
    icon: Sparkles,
    title: "[REDACTED]",
    desc: "/// ACESSO NÃO AUTORIZADO",
    disabled: true,
  },
];

export function NavGrid() {
  return (
    <section className="grid md:grid-cols-4 gap-6 mb-32">
      {NAV_ITEMS.map((item) => {
        if (item.disabled) {
          return (
            <div
              key={item.title}
              className="
                bg-zinc-950/50
                border border-zinc-800/50
                rounded-xl p-8
                cursor-not-allowed
                select-none
                relative overflow-hidden
              "
            >
              <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage:
                    "linear-gradient(to bottom, transparent 50%, rgba(255,255,255,0.1) 50%)",
                  backgroundSize: "100% 4px",
                }}
              />

              <div className="relative">
                {item.icon && <item.icon size={24} className="text-zinc-700" />}

                <h3 className="mt-6 text-xl font-mono font-semibold text-zinc-700 tracking-[0.1em]">
                  {item.title}
                </h3>

                <p className="text-zinc-700/60 mt-2 font-mono text-xs tracking-[0.2em]">
                  {item.desc}
                </p>
              </div>
            </div>
          );
        }

        const Icon = item.icon;

        return (
          <Link
            key={item.title}
            href={item.href as string}
            className="
              group
              bg-zinc-950/70 backdrop-blur-sm
              border border-zinc-800
              rounded-xl p-8
              hover:border-zinc-600
              hover:shadow-[0_0_40px_rgba(255,255,255,0.06)]
              hover:-translate-y-1
              transition-all duration-500
            "
          >
            {Icon && (
              <Icon
                size={24}
                className="text-zinc-400 group-hover:text-zinc-200 transition-colors duration-300"
              />
            )}

            <h3 className="mt-6 text-xl font-semibold text-zinc-200 group-hover:text-white transition-colors duration-300">
              {item.title}
            </h3>

            <p className="text-zinc-500 mt-2 group-hover:text-zinc-400 transition-colors duration-300">
              {item.desc}
            </p>
          </Link>
        );
      })}
    </section>
  );
}
