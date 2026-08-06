# Rafael Correa — Portfólio

> Portfólio pessoal focado em Ciência de Dados, Engenharia de Dados, Business Intelligence e Inteligência Artificial.

Este projeto apresenta minha trajetória, projetos selecionados e experiência profissional em uma interface dark, responsiva e orientada a produto. A experiência combina narrativa visual, microinterações e animações discretas para destacar o trabalho sem comprometer performance ou acessibilidade.

## Visão geral

O portfólio foi desenvolvido para comunicar, de forma objetiva e visualmente refinada:

- Projetos reais com imagens, GIFs, tecnologias e links para os repositórios.
- Experiência como Desenvolvedor de Software na IBMEC Jr. Soluções.
- Interesse em oportunidades de estágio nas áreas de dados, engenharia, BI e IA.
- Domínio prático de Python, SQL, aplicações web, automação e visualização de dados.

## Seções

- **Navbar** — navegação principal com acesso rápido às áreas do portfólio.
- **Hero** — apresentação, áreas de atuação, tecnologias e chamada para explorar os projetos.
- **Projetos** — cards responsivos com destaque para Financial Insights, imagens reais, stacks, GitHub e Live Demo.
- **Experiência** — card premium com IBMEC Jr. Soluções, atividades, métricas e aprendizados.
- **Contato** — CTA, canais de contato, glow sutil e headline revelada com Anime.js.
- **Footer** — links, tecnologias utilizadas, currículo e botão Back to Top.

## Destaques técnicos

- **Next.js 15** com App Router e renderização otimizada.
- **React 19** e **TypeScript** com tipagem estrita.
- **Tailwind CSS** para utilitários e tokens visuais.
- **Framer Motion** para entradas em viewport, stagger, springs e interações 3D.
- **Anime.js** utilizado pontualmente para a linha e revelação tipográfica do contato.
- **Lucide React** e Simple Icons para ícones consistentes.
- **Geist** como tipografia principal via `next/font`.
- Imagens locais servidas pelo diretório `public`.
- Layout responsivo para desktop, tablet e mobile.
- Suporte a `prefers-reduced-motion` nas animações principais.

## Stack

| Categoria | Tecnologias |
| --- | --- |
| Framework | Next.js 15, React 19 |
| Linguagem | TypeScript |
| Estilos | Tailwind CSS 4, CSS Modules via `globals.css` |
| Animação | Framer Motion, Anime.js |
| Ícones | Lucide React, Simple Icons |
| Tipografia | Geist |
| Qualidade | ESLint, TypeScript, build otimizado do Next.js |

## Estrutura do projeto

```text
.
├── app/
│   ├── globals.css       # Tokens, layout global e estilos das seções
│   ├── layout.tsx        # Layout raiz, fontes e metadados
│   └── page.tsx          # Composição principal da página
├── components/
│   ├── Navbar.tsx        # Navegação
│   ├── Hero.tsx          # Apresentação inicial
│   ├── Projects.tsx      # Projetos selecionados
│   ├── Experience.tsx    # Experiência profissional
│   ├── Contact.tsx       # CTA e canais de contato
│   └── Footer.tsx        # Encerramento e links finais
├── public/
│   ├── financial-insights.gif
│   ├── mercadinho.png
│   ├── api-estagio.png
│   ├── organizador-arquivos.png
│   └── curriculo-rafael-correa-soares-nogueira.pdf
├── docs/                 # Notas e referências de design
├── package.json
└── README.md
```

## Como executar localmente

### Pré-requisitos

- Node.js 20 ou superior.
- npm 10 ou superior.

### Instalação

```bash
git clone https://github.com/RafaelCorrea160407/rafael-portifolio.git
cd rafael-portifolio
npm install
```

### Ambiente de desenvolvimento

```bash
npm run dev
```

Abra `http://localhost:3000` no navegador.

### Verificação de qualidade

```bash
npm run lint
npm run build
```

### Produção local

```bash
npm run start
```

O comando `npm run start` deve ser executado após `npm run build`.

## Personalização

- Atualize os dados e links dos projetos em `components/Projects.tsx`.
- Substitua as imagens em `public/` mantendo os caminhos usados pelos componentes.
- Atualize experiência e aprendizados em `components/Experience.tsx`.
- Atualize links de contato em `components/Contact.tsx`.
- Ajuste tokens, espaçamentos e efeitos globais em `app/globals.css`.
- Substitua o PDF em `public/curriculo-rafael-correa-soares-nogueira.pdf` para atualizar o currículo baixado.

## Projetos apresentados

### Financial Insights

Plataforma de análise financeira que transforma dados em indicadores, visualizações e insights para apoiar decisões. A seção utiliza um GIF demonstrativo como principal elemento visual.

### Meu Negócio

Sistema de gestão para mercadinho com foco em operação, produtos, estoque, vendas, clientes e relatórios.

### Validador de Estágio

API para validação e acompanhamento de estágios, documentada com OpenAPI e organizada por recursos da aplicação.

### Organizador Inteligente

Ferramenta de automação para organização de arquivos, com foco em reduzir tarefas repetitivas e tornar o fluxo de trabalho mais previsível.

## Acessibilidade e movimento

As animações foram desenhadas para reforçar hierarquia e feedback, não para competir com o conteúdo. O projeto respeita `prefers-reduced-motion`, mantém foco visível nos elementos interativos e utiliza HTML semântico nas seções e navegação.

## Status

Portfólio em evolução contínua. Novos projetos, melhorias visuais e atualizações de conteúdo serão incorporados conforme minha trajetória profissional avançar.

## Autor

**Rafael Correa**  
Data Science · Data Engineering · Business Intelligence · Artificial Intelligence

- GitHub: <https://github.com/RafaelCorrea160407>
- Email: <mailto:rafaelcsn123@gmail.com>

## Licença

Este projeto está disponível sob a licença MIT. Consulte o arquivo `LICENSE` para mais detalhes.
