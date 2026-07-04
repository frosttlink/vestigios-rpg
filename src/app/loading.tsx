export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div className="flex flex-col items-center gap-6">
        <div className="w-8 h-8 rounded-full border-2 border-zinc-800 border-t-zinc-400 animate-spin" />

        <div className="flex items-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-zinc-600 animate-pulse" />
          <span className="font-mono text-[10px] tracking-[0.3em] text-zinc-600 uppercase">
            Carregando
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-zinc-600 animate-pulse" />
        </div>

        <div className="flex gap-1.5">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-1 h-1 rounded-full bg-zinc-700"
              style={{
                animation: `float-particle 1.2s ease-in-out ${i * 0.2}s infinite`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
