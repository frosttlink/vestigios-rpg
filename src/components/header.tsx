import { BookOpen, Eye, Globe, Menu, Puzzle } from "lucide-react";
import Link from "next/link";

interface HeaderProps {
  variant?: "hero" | "compact";
}

export function Header({ variant = "compact" }: HeaderProps) {
  if (variant === "hero") {
    return (
      <header className="absolute top-0 left-0 right-0 z-50">
        <nav className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 text-white">
              <div className="w-12 h-12 rounded-lg border border-zinc-700 bg-black/40 backdrop-blur flex items-center justify-center">
                <Eye size={20} />
              </div>

              <div>
                <h1 className="font-bold tracking-wide">Vestígios RPG</h1>

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
          </div>
        </nav>
      </header>
    )
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
              <h1 className="font-semibold text-zinc-100">Vestígios RPG</h1>

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
              href="/enigmas"
              className="text-zinc-400 hover:text-zinc-100 transition"
            >
              <Puzzle size={18} />
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

          <button type="button" className="md:hidden">
            <Menu size={20} className="text-zinc-200" />
          </button>
        </div>
      </nav>
    </header>
  )
}
