import { Mail } from "lucide-react";

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

          <div className="flex items-center gap-3 text-zinc-500">
            <Mail size={16} />
            <span className="font-mono text-sm">rpgvestigios@gmail.com</span>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-zinc-800/40 text-center">
          <p className="font-mono text-[10px] tracking-[0.3em] text-zinc-700">
            {"// SISTEMA DE RPG &mdash; TODOS OS DIREITOS RESERVADOS"}
          </p>
        </div>
      </div>
    </footer>
  );
}
