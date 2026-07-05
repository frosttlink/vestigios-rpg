"use client";

import { BookOpen, Eye, Globe, Menu, X } from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

interface HeaderProps {
  variant?: "hero" | "compact";
}

export function Header({ variant = "compact" }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";

      const handleEsc = (e: KeyboardEvent) => {
        if (e.key === "Escape") closeMenu();
      };
      document.addEventListener("keydown", handleEsc);
      return () => {
        document.body.style.overflow = "";
        document.removeEventListener("keydown", handleEsc);
      };
    }

    document.body.style.overflow = "";
  }, [menuOpen, closeMenu]);

  const mobileLinks =
    variant === "hero"
      ? [
          { href: "/biblioteca", label: "Biblioteca" },
          { href: "/enigmas", label: "Enigmas" },
          { href: "/redes-sociais", label: "Redes" },
          {
            href: "https://livepix.gg/vestigiosrpg",
            label: "Apoiar",
            external: true,
          },
        ]
      : [
          { href: "/biblioteca", label: "Biblioteca" },
          { href: "/redes-sociais", label: "Redes" },
          { href: "/enigmas", label: "ARG" },
        ];

  if (variant === "hero") {
    return (
      <header className="absolute top-0 left-0 right-0 z-20">
        <nav className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 text-white">
              <div className="w-10 md:w-12 h-10 md:h-12 rounded-lg border border-zinc-700 bg-black/40 backdrop-blur flex items-center justify-center">
                <Eye size={20} />
              </div>

              <div>
                <h1 className="font-bold tracking-wide text-sm md:text-base">
                  Vestígios RPG
                </h1>

                <p className="text-xs text-zinc-400">
                  Tudo que existe deixa vestígios
                </p>
              </div>
            </Link>

            <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest">
              <Link
                href="/biblioteca"
                className="text-zinc-300 hover:text-white transition"
              >
                Biblioteca
              </Link>

              <Link
                href="/enigmas"
                className="text-zinc-300 hover:text-white transition"
              >
                Enigmas
              </Link>

              <Link
                href="/redes-sociais"
                className="text-zinc-300 hover:text-white transition"
              >
                Redes
              </Link>

              <a
                href="https://livepix.gg/vestigiosrpg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-300 hover:text-white transition"
              >
                Apoiar
              </a>
            </div>

            <button
              type="button"
              className="md:hidden p-2 text-zinc-200 hover:text-white transition-colors"
              onClick={() => setMenuOpen(true)}
              aria-label="Abrir menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </nav>

        {menuOpen && <MobileMenu links={mobileLinks} onClose={closeMenu} />}
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-black/80 backdrop-blur-xl">
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg border border-zinc-800 bg-zinc-950 flex items-center justify-center">
              <Eye size={18} className="text-zinc-200" />
            </div>

            <div>
              <h1 className="font-semibold text-sm md:text-base text-zinc-100">
                Vestígios RPG
              </h1>

              <p className="text-xs text-zinc-500">
                Tudo que existe deixa vestígios
              </p>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/biblioteca"
              className="text-zinc-400 hover:text-zinc-100 transition"
            >
              <BookOpen size={18} />
            </Link>

            <Link
              href="/redes-sociais"
              className="text-zinc-400 hover:text-zinc-100 transition"
            >
              <Globe size={18} />
            </Link>

            <Link
              href="/enigmas"
              className="px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-200 text-sm hover:bg-zinc-800 transition"
            >
              ARG
            </Link>
          </div>

          <button
            type="button"
            className="md:hidden p-2 text-zinc-200 hover:text-white transition-colors"
            onClick={() => setMenuOpen(true)}
            aria-label="Abrir menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </nav>

      {menuOpen && <MobileMenu links={mobileLinks} onClose={closeMenu} />}
    </header>
  );
}

function MobileMenu({
  links,
  onClose,
}: {
  links: { href: string; label: string; external?: boolean }[];
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="absolute top-0 left-0 right-0 bg-zinc-950 border-b border-zinc-800 shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800/60">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg border border-zinc-800 bg-black/40 flex items-center justify-center">
              <Eye size={16} className="text-zinc-300" />
            </div>
            <span className="font-mono text-xs tracking-[0.2em] text-zinc-400 uppercase">
              Navegação
            </span>
          </div>

          <button
            type="button"
            className="p-2 text-zinc-400 hover:text-white transition-colors"
            onClick={onClose}
            aria-label="Fechar menu"
          >
            <X size={20} />
          </button>
        </div>

        <div className="px-6 py-6 flex flex-col gap-2">
          {links.map((link) => {
            const content = (
              <span className="flex items-center gap-4 px-4 py-4 rounded-lg border border-zinc-800/60 bg-black/40 font-mono text-sm tracking-[0.15em] text-zinc-300 hover:bg-zinc-900 hover:border-zinc-600 hover:text-white transition-all duration-300">
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-600 shrink-0" />
                {link.label}
              </span>
            );

            if (link.external) {
              return (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onClose}
                  className="block"
                >
                  {content}
                </a>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="block"
              >
                {content}
              </Link>
            );
          })}
        </div>

        <div className="px-6 pb-6">
          <div className="flex items-center justify-center gap-3 pt-4 border-t border-zinc-800/40">
            <span className="font-mono text-[10px] tracking-[0.3em] text-zinc-700 uppercase">
              Sistema Vestígios
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
