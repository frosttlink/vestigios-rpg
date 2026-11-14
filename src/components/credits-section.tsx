import { Users } from "lucide-react";
import { SectionCard } from "@/components/section-card";

interface TeamMember {
  name: string;
  roles: string;
}

const TEAM: TeamMember[] = [
  {
    name: "Liz",
    roles: "Roteiro, dublagem, edição, direção e redes sociais.",
  },
  {
    name: "Aline",
    roles: "Desenhos e roteiro.",
  },
  {
    name: "Laura",
    roles: "Dublagem e desenhos.",
  },
  {
    name: "Leo",
    roles: "Programação, edição, músicas e dublagem.",
  },
  {
    name: "Fellipe",
    roles: "Dublagem, apresentação e testes do jogo.",
  },
  {
    name: "Pedro",
    roles: "Músicas, apresentação e dublagem.",
  },
  {
    name: "Sara",
    roles: "Design, desenhos e dublagem.",
  },
  {
    name: "Yuri",
    roles: "Dublagem e desenhos.",
  },
  {
    name: "Nick",
    roles: "Produção, dublagem e redes sociais.",
  },
  {
    name: "Klaifever",
    roles: "Roteiro e dublagem.",
  },
  {
    name: "Tsuki",
    roles: "Apresentação, roteiro e dublagem.",
  },
  {
    name: "Lucas",
    roles: "Programação e banco de dados.",
  },
  {
    name: "Davi",
    roles: "Dublagem.",
  },
  {
    name: "Louie",
    roles: "Escritor e roteiro.",
  },
];

export function CreditsSection() {
  return (
    <section className="mb-32">
      <SectionCard glow className="p-6 md:p-12">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-2 h-2 rounded-full bg-zinc-500" />
          <span className="font-mono text-xs tracking-[0.3em] text-zinc-500 uppercase">
            Créditos
          </span>
        </div>

        <h2 className="text-2xl md:text-4xl font-black font-mono tracking-wider mb-6 text-zinc-100">
          [AGRADECIMENTOS À EQUIPE]
        </h2>

        <p className="max-w-3xl font-mono text-sm leading-8 text-zinc-400 mb-10">
          Vestígios RPG só existe graças à dedicação de cada pessoa que colocou
          um pouco de si neste projeto. Nosso muito obrigado a todos vocês.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {TEAM.map((member) => (
            <div
              key={member.name}
              className="
                group
                rounded-lg border border-zinc-800 bg-zinc-900/40
                p-5
                hover:border-zinc-600
                hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]
                transition-all duration-500
              "
            >
              <div className="flex items-center gap-2 mb-2">
                <Users
                  size={14}
                  className="text-zinc-600 group-hover:text-zinc-400 transition-colors duration-300"
                />
                <h3 className="font-mono text-sm font-semibold tracking-widest text-zinc-200 group-hover:text-white transition-colors duration-300">
                  {member.name}
                </h3>
              </div>

              <p className="font-mono text-xs leading-6 text-zinc-500 group-hover:text-zinc-400 transition-colors duration-300">
                {member.roles}
              </p>
            </div>
          ))}
        </div>
      </SectionCard>
    </section>
  );
}
