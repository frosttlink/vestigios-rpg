import { SectionCard } from "@/components/section-card";

const FAQ = [
  {
    question: "O que é Vestígios RPG?",
    answer:
      "É um projeto de amigos para criar um universo de RPG com sistema original, livros, campanhas, ARG, cinematics e analog horrors.",
  },
  {
    question: "Preciso pagar para jogar?",
    answer:
      "Não. Vestígios é um projeto indie e sem ajuda financeira. Os materiais são gratuitos e o apoio via LivePix é opcional.",
  },
  {
    question: "Como começo a jogar?",
    answer:
      "Acesse o Livro de Regras e as fichas na Biblioteca, reúna seu grupo e siga as orientações do sistema para criar os personagens.",
  },
  {
    question: "O que é o ARG?",
    answer:
      "Um jogo de realidade alternativa com pistas, códigos e arquivos espalhados pelo site. Os enigmas conectam o universo à história.",
  },
  {
    question: "O projeto está ativo?",
    answer:
      "Sim. Novos materiais são publicados aos poucos. Acompanhe as redes sociais e as transmissões para não perder as atualizações.",
  },
];

export function FaqSection() {
  return (
    <section className="mb-32">
      <SectionCard glow className="p-6 md:p-12">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-2 h-2 rounded-full bg-zinc-500" />
          <span className="font-mono text-xs tracking-[0.3em] text-zinc-500 uppercase">
            Dúvidas
          </span>
        </div>

        <h2 className="text-2xl md:text-4xl font-black font-mono tracking-wider mb-10 text-zinc-100">
          [PERGUNTAS FREQUENTES]
        </h2>

        <div className="space-y-3">
          {FAQ.map((item) => (
            <details
              key={item.question}
              className="group rounded-lg border border-zinc-800 bg-zinc-900/40 px-5 py-4 open:border-zinc-600 transition-colors duration-300"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-mono text-sm text-zinc-200 marker:hidden [&::-webkit-details-marker]:hidden">
                {item.question}
                <span className="shrink-0 text-lg text-zinc-500 transition-transform duration-300 group-open:rotate-45">
                  +
                </span>
              </summary>

              <p className="mt-3 font-mono text-xs leading-6 text-zinc-500">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </SectionCard>
    </section>
  );
}
