<p align="center">
  <img src="https://img.shields.io/badge/VESTÍGIOS_RPG-DC2626?style=for-the-badge&logo=&logoColor=white&labelColor=000000" alt="Vestígios RPG" />
</p>

<h1 align="center">
  <code>VESTÍGIOS RPG</code>
</h1>

<p align="center">
  <em>"Tudo que existe deixa vestígios."</em><br>
  Um universo de RPG, ARG, mistério e horror.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js_16-000000?style=flat-square&logo=next.js&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/React_19-61DAFB?style=flat-square&logo=react&logoColor=000000" alt="React" />
  <img src="https://img.shields.io/badge/Tailwind_CSS_4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
</p>

---

## Sobre

**Vestígios RPG** é o site principal do universo Vestígios — um projeto autoral que combina RPG de mesa com elementos de ARG (Alternate Reality Game), mistério e horror cósmico. O site serve como portal de imersão para jogadores e Curiosos, apresentando o lore, enigmas, biblioteca de investigação e uma estética que remete a terminais abandonados e arquivos redacted.

## Stack

| Tecnologia | Versão | Uso |
|------------|--------|-----|
| **Next.js** | 16 | Framework React (App Router + Turbopack) |
| **React** | 19 | UI Library |
| **Tailwind CSS** | 4 | Estilização |
| **TypeScript** | 5 | Tipagem estática |
| **Biome** | 2 | Lint + Format |

## Estrutura do Projeto

```
vestigios-rpg/
├── public/
│   └── noise.png              # Textura de ruído para efeitos visuais
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Layout raiz com efeitos CRT/noise
│   │   ├── page.tsx           # Página principal
│   │   ├── globals.css        # Estilos globais
│   │   ├── biblioteca/        # Seção de investigação
│   │   ├── enigmas/           # Enigmas do ARG
│   │   └── redes-sociais/     # Redes sociais do universo
│   ├── components/
│   │   ├── header.tsx         # Cabeçalho com variações
│   │   ├── hero-section.tsx   # Hero principal
│   │   ├── nav-grid.tsx       # Grid de navegação
│   │   ├── about-section.tsx  # Seção "Sobre"
│   │   ├── system-section.tsx # Seção do sistema
│   │   ├── redacted-section.tsx # Conteúdo redacted
│   │   ├── clue-terminal.tsx  # Terminal de pistas
│   │   ├── youtube-feed.tsx   # Feed de vídeos (via API)
│   │   ├── footer.tsx         # Rodapé
│   │   └── ui/                # Componentes reutilizáveis
│   └── ...
├── biome.json
├── next.config.ts
├── tailwind.config.ts
└── package.json
```

## Rotas

| Rota | Descrição |
|------|-----------|
| `/` | Página principal com hero, nav e seções |
| `/biblioteca` | Biblioteca de investigação |
| `/enigmas` | Enigmas e pistas do ARG |
| `/redes-sociais` | Redes sociais do universo Vestígios |

## Licença

Projeto autoral — Todos os direitos reservados.

---

<p align="center">
  <sub>Feito com dedicação para o universo <b>Vestígios</b> 🕯️</sub>
</p>
