export const LANDING_FEATURES = {
  funding: true,
  library: true,
  argTeaser: true,
  faq: true,
};

interface FundingMilestone {
  threshold: number;
  title?: string;
  description?: string;
}

export const FUNDING: {
  current: number;
  goal: number;
  link: string;
  archive: string;
  project: string;
  status: string;
  cta: string;
  milestones: FundingMilestone[];
} = {
  current: 2,
  goal: 500,
  link: "https://livepix.gg/vestigiosrpg",
  archive: "ARQUIVO_04 / FINANCIAMENTO",
  project: "CURTA VESTÍGIOS",
  status: "EM PRODUÇÃO",
  cta: "APOIAR A PRODUÇÃO",
  milestones: [
    {
      threshold: 100,
      title: "Primeira etapa",
      description:
        "A equipe inicia a produção do roteiro e organização dos próximos passos.",
    },
    { threshold: 200 },
    { threshold: 300 },
    { threshold: 400 },
    { threshold: 500 },
  ],
};
