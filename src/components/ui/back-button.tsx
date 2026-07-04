import Link from "next/link";

export function BackButton() {
  return (
    <div className="mt-10">
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-5 py-2.5 border border-zinc-800 bg-zinc-950 text-zinc-400 font-mono text-xs tracking-[0.2em] rounded-lg hover:border-zinc-500 hover:text-zinc-100 transition-all duration-300"
      >
        [ VOLTAR ]
      </Link>
    </div>
  );
}
