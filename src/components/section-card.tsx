interface SectionCardProps {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
  hover?: boolean;
  as?: "section" | "div";
}

export function SectionCard({
  children,
  className = "",
  glow = false,
  hover = false,
  as: Tag = "section",
}: SectionCardProps) {
  return (
    <Tag
      className={`
        bg-zinc-950/70 backdrop-blur-sm
        border border-zinc-800
        rounded-xl
        ${glow ? "shadow-[0_0_30px_rgba(255,255,255,0.04)]" : "shadow-[0_0_20px_rgba(255,255,255,0.03)]"}
        ${hover ? "hover:border-zinc-600 hover:shadow-[0_0_40px_rgba(255,255,255,0.06)] transition-all duration-500" : ""}
        ${className}
      `}
    >
      {children}
    </Tag>
  );
}
