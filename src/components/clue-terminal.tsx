"use client";

import type { StaticImageData } from "next/image";
import Image from "next/image";
import { useEffect, useState } from "react";

interface ClueTerminalProps {
  content: string;
  delay?: number;
  onComplete?: () => void;
  image?: string | StaticImageData;
}

export function ClueTerminal({
  content,
  delay = 0,
  onComplete,
  image,
}: ClueTerminalProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const visibilityTimer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(visibilityTimer);
  }, [delay]);

  useEffect(() => {
    if (!isVisible) return;

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= content.length) {
        setDisplayedText(content.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
        onComplete?.();
      }
    }, 15);

    return () => clearInterval(interval);
  }, [isVisible, content, onComplete]);

  if (!isVisible) return null;

  return (
    <div className="bg-zinc-950/90 text-zinc-200 rounded-lg border border-zinc-800 p-6 shadow-[0_0_30px_rgba(255,255,255,0.03)] font-mono text-sm whitespace-pre-wrap wrap-break-word min-h-25 backdrop-blur-sm">
      {/* Header do terminal */}
      <div className="flex items-center gap-2 mb-6 pb-4 border-b border-zinc-800">
        <div className="w-3 h-3 rounded-full bg-zinc-600" />
        <div className="w-3 h-3 rounded-full bg-zinc-500" />
        <div className="w-3 h-3 rounded-full bg-zinc-400" />

        <span className="ml-2 text-xs text-zinc-500 tracking-widest">
          TERMINAL_DE_INVESTIGAÇÃO
        </span>
      </div>

      <div className="mb-6">
        <span className="text-zinc-600 text-xs tracking-[0.3em]">
          ACESSO AUTORIZADO
        </span>
      </div>

      {/* Conteúdo */}
      <div className="flex items-start gap-3">
        <span className="text-zinc-500 shrink-0">{">"}</span>

        <div className="leading-relaxed">
          {displayedText}
          <span className="animate-pulse text-zinc-100 ml-1">_</span>
        </div>
      </div>

      {/* Imagem */}
      {image && (
        <div className="mt-8 pt-6 border-t border-zinc-800 flex justify-center">
          <Image
            src={image}
            alt="Pista visual"
            width={400}
            height={400}
            className="rounded-lg border border-zinc-800 shadow-[0_0_25px_rgba(255,255,255,0.04)] max-w-full h-auto"
          />
        </div>
      )}
    </div>
  );
}
