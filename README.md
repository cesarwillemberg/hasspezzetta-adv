# Hass & Pezzetta — Advocacia

Site institucional do escritório **Hass & Pezzetta Advocacia**, construído com Next.js 16 + App Router, React 19 e TypeScript. Conta com suporte a múltiplos idiomas (PT-BR, EN, ES), tema claro/escuro e design responsivo.

---

## Sumário

- [Hass \& Pezzetta — Advocacia](#hass--pezzetta--advocacia)
  - [Sumário](#sumário)
  - [Sobre o Projeto](#sobre-o-projeto)
  - [Stack Tecnológica](#stack-tecnológica)
  - [Funcionalidades](#funcionalidades)
  - [Estrutura de Pastas](#estrutura-de-pastas)
  - [Páginas](#páginas)
    - [`/` — Home](#--home)
    - [`/equipe` — Nossa Equipe](#equipe--nossa-equipe)
    - [`/servicos` — Serviços](#servicos--serviços)
    - [`/direitos` — Seus Direitos](#direitos--seus-direitos)
    - [`/contato` — Contato](#contato--contato)
  - [Componentes](#componentes)
    - [`Navbar`](#navbar)
    - [`LanguageSwitcher`](#languageswitcher)
    - [`ThemeToggle`](#themetoggle)
    - [`Providers`](#providers)
    - [`Button`](#button)
    - [`Section` / `SectionHeader`](#section--sectionheader)
    - [`LawyerCard`](#lawyercard)
    - [`ServiceCard`](#servicecard)
    - [`Footer`](#footer)
  - [Internacionalização (i18n)](#internacionalização-i18n)
    - [Detecção de Locale (`src/i18n/request.ts`)](#detecção-de-locale-srci18nrequestts)
    - [Arquivos de Tradução (`src/locale/`)](#arquivos-de-tradução-srclocale)
    - [Uso nos Componentes](#uso-nos-componentes)
  - [Tema Claro / Escuro](#tema-claro--escuro)
    - [Paleta de Cores (CSS Custom Properties)](#paleta-de-cores-css-custom-properties)
  - [Estilização](#estilização)
  - [Tipagem TypeScript](#tipagem-typescript)
  - [Instalação e Execução](#instalação-e-execução)
    - [Pré-requisitos](#pré-requisitos)
    - [Passos](#passos)
  - [Scripts Disponíveis](#scripts-disponíveis)
  - [Variáveis de Ambiente](#variáveis-de-ambiente)
  - [Informações do Escritório](#informações-do-escritório)
    - [Equipe](#equipe)
  - [Deploy on Vercel](#deploy-on-vercel)

---

## Sobre o Projeto

Site institucional do escritório **Hass & Pezzetta Advocacia**, localizado em Ijuí – RS, Brasil. O objetivo do site é apresentar os serviços jurídicos oferecidos, a equipe de advogados, informar os clientes sobre seus direitos trabalhistas e fornecer um canal de contato direto com o escritório.

O projeto foi desenvolvido com foco em:

- **Performance** — Imagens `.avif`, fontes otimizadas via `next/font`, renderização server-side.
- **Acessibilidade** — Semântica HTML correta, `aria-label` em botões interativos.
- **SEO** — Metadata dinâmica por página e locale via `generateMetadata()`.
- **Internacionalização** — Suporte a 3 idiomas: Português (PT-BR), Inglês (EN) e Espanhol (ES).
- **UX** — Modo escuro/claro com persistência por preferência do sistema ou escolha do usuário.

---

## Stack Tecnológica

| Tecnologia | Versão | Uso |
|---|---|---|
| [Next.js](https://nextjs.org/) | 16.1.6 | Framework principal (App Router, SSR, metadata) |
| [React](https://react.dev/) | 19.2.3 | Biblioteca de UI |
| [React DOM](https://react.dev/) | 19.2.3 | Renderização do React no DOM |
| [TypeScript](https://www.typescriptlang.org/) | ^5 | Tipagem estática |
| [Tailwind CSS](https://tailwindcss.com/) | ^4 | Estilização utilitária |
| [PostCSS](https://postcss.org/) + [@tailwindcss/postcss](https://tailwindcss.com/docs/installation/using-postcss) | ^4 | Processamento do Tailwind via PostCSS |
| [SASS](https://sass-lang.com/) | ^1.97.3 | Estilos globais, variáveis CSS e tema |
| [next-intl](https://next-intl-docs.vercel.app/) | ^4.8.3 | Internacionalização (i18n) — traduções PT-BR, EN e ES, detecção de locale por cookie e `Accept-Language` |
| [next-themes](https://github.com/pacocoursey/next-themes) | ^0.4.6 | Gerenciamento de tema claro/escuro/sistema |
| [Font Awesome](https://fontawesome.com/) | ^7.2.0 | Ícones SVG (`free-solid-svg-icons`, `free-brands-svg-icons`, `react-fontawesome`) |
| [Google Fonts](https://fonts.google.com/) | — | Fontes Inter e Outfit carregadas server-side via `next/font` |
| [React Compiler](https://react.dev/learn/react-compiler) (`babel-plugin-react-compiler`) | 1.0.0 | Otimização automática de re-renders pelo compilador do React |
| [ESLint](https://eslint.org/) + [eslint-config-next](https://nextjs.org/docs/app/api-reference/config/eslint) | ^9 / 16.1.6 | Linting e qualidade de código |

---

## Funcionalidades

- **Navbar fixa e responsiva** com mudança de aparência ao rolar a página (scroll-aware), menu hambúrguer no mobile e links de navegação ativos destacados.
- **Troca de idioma** via dropdown com bandeiras (🇧🇷 PT, 🇺🇸 EN, 🇪🇸 ES), persistida em cookie (`NEXT_LOCALE`) com duração de 1 ano.
- **Detecção automática de idioma** pelo cabeçalho `Accept-Language` do navegador na primeira visita.
- **Tema claro/escuro/sistema** via `next-themes`, persistido com o atributo `class` no `<html>`.
- **Metadata dinâmica por página** e locale para SEO otimizado.
- **Cálculo dinâmico de anos de experiência** a partir da data de fundação (26/03/2024).
- **Formulário de contato** com campos de nome, e-mail, assunto e mensagem.
- **Cards de advogados** com foto, nome, especialidade, bio e link para LinkedIn.
- **Cards de serviços** com ícone (Font Awesome), título e descrição.
- **Seção "Seus Direitos"** com materiais para download (PDF) e vídeos incorporados do YouTube.
- **Design totalmente responsivo** para mobile, tablet e desktop.

---

## Estrutura de Pastas

```
projeto_hasspezzetta/
├── public/
│   └── assets/
│       ├── imgs/
│       │   ├── equipe/          # Fotos dos advogados (.avif)
│       │   ├── hero/            # Imagem da seção hero (.avif)
│       │   └── logo/            # Logotipo do escritório (.avif)
│       └── info/
│           └── infos.md         # Informações de contato e conteúdo do escritório
├── src/
│   ├── app/                     # Next.js App Router
│   │   ├── layout.tsx           # Layout raiz (Navbar, Footer, Providers, fontes)
│   │   ├── page.tsx             # Página inicial (Home)
│   │   ├── contato/
│   │   │   └── page.tsx         # Página de Contato
│   │   ├── direitos/
│   │   │   └── page.tsx         # Página "Seus Direitos"
│   │   ├── equipe/
│   │   │   └── page.tsx         # Página da Equipe
│   │   └── servicos/
│   │       └── page.tsx         # Página de Serviços
│   ├── components/
│   │   ├── Footer.tsx           # Rodapé com endereço, menu e redes sociais
│   │   ├── LanguageSwitcher.tsx # Dropdown de troca de idioma
│   │   ├── Navbar.tsx           # Barra de navegação fixa e responsiva
│   │   ├── Providers.tsx        # Provedor de tema (next-themes)
│   │   ├── ThemeToggle.tsx      # Botão de alternância de tema
│   │   ├── cards/
│   │   │   ├── LawyerCard.tsx   # Card de advogado com foto e bio
│   │   │   └── ServiceCard.tsx  # Card de serviço com ícone
│   │   └── ui/
│   │       ├── Button.tsx       # Componente de botão reutilizável (variantes e tamanhos)
│   │       └── Section.tsx      # Componente de seção com SectionHeader
│   ├── i18n/
│   │   └── request.ts           # Configuração do next-intl (detecção de locale)
│   ├── locale/
│   │   ├── pt-BR.json           # Traduções em Português (Brasil)
│   │   ├── en.json              # Traduções em Inglês
│   │   └── es.json              # Traduções em Espanhol
│   ├── providers/               # (Reservado para providers futuros)
│   ├── styles/
│   │   └── globals.scss         # Estilos globais, variáveis CSS e tema Tailwind
│   └── types/
│       └── index.ts             # Interfaces TypeScript (NavItem, Lawyer, Service)
├── eslint.config.mjs            # Configuração do ESLint
├── next-env.d.ts                # Tipos automáticos do Next.js
├── next.config.ts               # Configuração do Next.js com plugin next-intl
├── package.json                 # Dependências e scripts
├── postcss.config.mjs           # Configuração do PostCSS (Tailwind)
└── tsconfig.json                # Configuração do TypeScript
```

---

## Páginas

### `/` — Home
Página principal com cinco seções:
1. **Hero** — Título, subtítulo e botões de CTA (Agendar Consulta / Saiba Mais) sobre imagem com overlay escuro.
2. **Sobre** — Descrição do escritório, anos de experiência (calculado dinamicamente) e número de casos de sucesso.
3. **Serviços (resumo)** — Grid com cards dos principais serviços.
4. **Equipe (resumo)** — Grid com cards dos sócios fundadores.
5. **CTA Banner** — Chamada para ação para agendar consulta.

### `/equipe` — Nossa Equipe
- Seção **Nossa História** com texto descritivo.
- Seção **Nossa Equipe** com grid de `LawyerCard` dos três sócios fundadores.

### `/servicos` — Serviços
- Grid completo com os seis serviços oferecidos pelo escritório, cada um com ícone Font Awesome, título e descrição.

### `/direitos` — Seus Direitos
Página informativa dividida em quatro seções:
1. **Trabalhadores da Saúde** — Links para download de guias em PDF e vídeo do YouTube.
2. **Operador de Linha de Produção / Ambientes Frios** — Links para download de guias e vídeo.
3. **Cálculos** — Calculadoras ou referências de cálculos trabalhistas.
4. **Formulário de Avaliação** — Formulário para avaliação personalizada do caso.

### `/contato` — Contato
- Formulário com nome, e-mail, assunto e mensagem.
- Informações de endereço, telefone, e-mail e redes sociais (LinkedIn, Instagram, WhatsApp).

---

## Componentes

### `Navbar`
- Fixa no topo (`fixed top-0`), transparente ao topo e com fundo blur ao rolar.
- Logotipo + nome do escritório à esquerda.
- Links de navegação com destaque no link ativo.
- `LanguageSwitcher` e `ThemeToggle` no desktop; menu hambúrguer no mobile.

### `LanguageSwitcher`
- Dropdown com bandeiras dos países.
- Ao selecionar, salva o locale num cookie `NEXT_LOCALE` (1 ano) e faz `router.refresh()`.
- Fecha automaticamente ao clicar fora (listener `mousedown`).

### `ThemeToggle`
- Alterna entre os temas `light`, `dark` e `system`.

### `Providers`
- Envolve a aplicação com `ThemeProvider` do `next-themes`.
- Configurado com `attribute="class"` e `defaultTheme="system"`.

### `Button`
- Variantes: `primary`, `secondary`, `outline`.
- Tamanhos: `sm`, `md` (padrão), `lg`.
- Renderiza como `<a>` (com `href`) ou `<button>` (sem `href`).
- Suporta `target="_blank"` para links externos.

### `Section` / `SectionHeader`
- `Section` — Wrapper de seção com padding padronizado, suporte a `bgWhite`, `id` e `className` extras.
- `SectionHeader` — Título e subtítulo centralizados da seção.

### `LawyerCard`
- Exibe foto, nome, especialidade, bio e link para LinkedIn do advogado.

### `ServiceCard`
- Exibe ícone (Font Awesome `IconDefinition`), título e descrição do serviço.

### `Footer`
- Logo e descrição do escritório.
- Menu de navegação.
- Informações de endereço completo.
- Links para contato (WhatsApp, e-mail) e redes sociais.

---

## Internacionalização (i18n)

Gerenciada pelo **next-intl** (v4), sem segmentação de rotas por locale (sem `/pt-BR/...` na URL).

### Detecção de Locale (`src/i18n/request.ts`)
A ordem de prioridade para determinar o locale é:
1. Cookie `NEXT_LOCALE` (definido ao trocar o idioma manualmente).
2. Cabeçalho HTTP `Accept-Language` (idioma preferido do navegador).
3. Fallback para o locale padrão: `en`.

**Locales suportados:** `pt-BR`, `en`, `es`

### Arquivos de Tradução (`src/locale/`)
Cada arquivo JSON contém namespaces organizados por contexto:

| Namespace | Descrição |
|---|---|
| `Navigation` | Itens do menu de navegação |
| `Theme` | Labels do seletor de tema |
| `HomePage` | Hero title, subtitle e CTAs |
| `About` | Seção "Sobre o Escritório" |
| `Services` | Títulos e descrições dos serviços |
| `History` | Seção "Nossa História" |
| `Team` | Seção "Nossa Equipe" e bios dos advogados |
| `Contact` | Labels e placeholders do formulário de contato |
| `Rights` | Conteúdo da página "Seus Direitos" |
| `Footer` | Textos do rodapé |
| `CtaBanner` | Seção de call-to-action |

### Uso nos Componentes
- **Server Components:** `getTranslations({ locale, namespace })` e `getLocale()` do `next-intl/server`.
- **Client Components:** `useTranslations(namespace)` e `useLocale()` do `next-intl`.

---

## Tema Claro / Escuro

Gerenciado pelo **next-themes**, aplicado via classe `dark` no elemento `<html>`.

### Paleta de Cores (CSS Custom Properties)

| Variável | Claro | Escuro | Uso |
|---|---|---|---|
| `--primary` | `#1e3a8a` | `#1e40af` | Azul principal (títulos, botões) |
| `--secondary` | `#d4af37` | `#fbbf24` | Dourado (destaques, bordas) |
| `--background` | `#ffffff` | `#0a0a0a` | Fundo da página |
| `--foreground` | `#171717` | `#ededed` | Texto principal |
| `--muted` | `#f3f4f6` | `#1f2937` | Fundos secundários |
| `--muted-foreground` | `#6b7280` | `#9ca3af` | Texto secundário |
| `--border` | `#e5e7eb` | `#374151` | Bordas |

As variáveis são integradas ao Tailwind v4 via `@theme` no arquivo `globals.scss`, permitindo usar classes como `text-primary`, `bg-secondary`, `border-border`, etc.

---

## Estilização

- **Tailwind CSS v4** configurado via `@tailwindcss/postcss`.
- **SASS** para o arquivo de estilos globais (`globals.scss`) com `@import "tailwindcss"`.
- **Fontes Google** carregadas server-side via `next/font`:
  - `Inter` — Fonte principal do corpo, variável CSS `--font-inter`.
  - `Outfit` — Fonte dos títulos e headings, variável CSS `--font-outfit`.
- **Classe utilitária `.law-container`** — Container com `max-w-7xl` e padding horizontal responsivo.
- **Scrollbar customizada** definida no `globals.scss`.
- Logotipo inverte com `dark:invert dark:brightness-0` para adaptar-se ao tema escuro.

---

## Tipagem TypeScript

Interfaces definidas em `src/types/index.ts`:

```ts
// Item de navegação da Navbar
interface NavItem {
  key: string;   // chave de tradução (ex: "home")
  href: string;  // rota (ex: "/")
}

// Dados de um advogado
interface Lawyer {
  id: string;
  name: string;
  specialty: string;
  bio: string;
  imageUrl: string;
  linkedin?: string; // opcional
}

// Dados de um serviço
interface Service {
  id: string;
  titleKey: string;  // chave de tradução
  descKey: string;   // chave de tradução
  icon: string;      // nome do ícone
}
```

---

## Instalação e Execução

### Pré-requisitos
- Node.js >= 18
- npm, yarn, pnpm ou bun

### Passos

```bash
# 1. Clone o repositório
git clone https://github.com/cesarwillemberg/hasspezzetta-adv.git
cd hasspezzetta-adv

# 2. Instale as dependências
npm install

# 3. Inicie o servidor de desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador.

---

## Scripts Disponíveis

| Script | Comando | Descrição |
|---|---|---|
| Desenvolvimento | `npm run dev` | Inicia o servidor Next.js em modo dev com hot-reload |
| Build | `npm run build` | Gera o build de produção otimizado |
| Produção | `npm run start` | Inicia o servidor com o build de produção |
| Lint | `npm run lint` | Executa o ESLint no projeto |

---

## Variáveis de Ambiente

O projeto não requer variáveis de ambiente obrigatórias para funcionar localmente. Caso necessite adicionar integrações futuras (ex: envio de formulário via API, analytics), crie um arquivo `.env.local` na raiz:

```env
# Exemplo
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

---

## Informações do Escritório

| | |
|---|---|
| **Nome** | Hass & Pezzetta Advocacia |
| **Endereço** | Rua 14 de Julho, 149 — Centro, Ijuí - RS, Brasil |
| **Localização** | Edifício Jamile — Sala 405, 4º andar |
| **E-mail** | hasspezzettaadv@gmail.com |
| **Telefone** | +55 55 3940-0016 |
| **WhatsApp** | [wa.me/message/ZTCJQAWF5IF5I1](https://wa.me/message/ZTCJQAWF5IF5I1) |
| **Fundação** | 26 de março de 2024 |

### Equipe

| Advogado | Especialidade |
|---|---|
| Bernardo Luiz Pezzetta Willemberg | Direito do Trabalho e Direito Desportivo |
| Diulie Kelly Beck Hass | Direito do Consumidor e Direito Digital |
| Jolair de Ávila Hass | Recuperação Tributária e Direito Previdenciário |

---

> *"Na defesa dos seus direitos e interesses. Uma equipe com fome de vitória."*

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
