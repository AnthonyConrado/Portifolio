<h1 align="center">Portfólio · Anthony Conrado</h1>

<p align="center">
  <a href="https://anthony-conrado.vercel.app"><strong>anthony-conrado.vercel.app</strong></a>
</p>

<p align="center">
  Portfólio pessoal feito com <strong>React</strong>, <strong>TypeScript</strong> e <strong>Vite</strong>, acessível segundo a <strong>ABNT NBR 17225</strong>.
</p>

<p align="center">
  <img alt="React" src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=111">
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
  <img alt="Vite" src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white">
  <img alt="Acessibilidade NBR 17225" src="https://img.shields.io/badge/acessibilidade-NBR%2017225-b794f6?style=for-the-badge">
</p>

---

## Sobre

Página única com apresentação, projetos (com janela de detalhes e galeria), sobre, certificados, skills, serviços, processo de trabalho e contato com mensagem pronta para o WhatsApp.

Sem bibliotecas além do React: animações, ícones e ilustrações são feitos com CSS, SVG e canvas.

## Acessibilidade

- Menu de acessibilidade: tamanho do texto, alto contraste, fonte legível, espaçamento, destaque de links, pausa das animações e guia de leitura (as escolhas ficam salvas no navegador)
- Link "Pular para o conteúdo" e navegação completa por teclado, com foco visível
- Títulos em ordem, regiões nomeadas e textos alternativos em todas as imagens
- Respeita o "reduzir movimento" do sistema
- Contraste conferido conforme a NBR 17225 (5.11)
- Funciona sem rolagem lateral a partir de 320px de largura

## Como rodar

Pré-requisito: [Node.js](https://nodejs.org/) 18 ou superior.

```bash
npm install
npm run dev        # http://localhost:5173
```

Outros comandos:

```bash
npm run build      # gera a versão de produção em dist/
npm run preview    # serve a pasta dist/ localmente
npm run typecheck  # checagem de tipos do TypeScript
```

## Currículo e prévia de compartilhamento

- O currículo fica em `public/curriculo-anthony-conrado.pdf`. Para atualizar, substitua o arquivo mantendo o mesmo nome.
- A imagem que aparece ao compartilhar o link (LinkedIn, WhatsApp) é `public/og-image.jpg`. Se o endereço do site mudar (domínio próprio, por exemplo), atualize `og:url`, `og:image` e `canonical` em `index.html`.

## Deploy na Vercel

1. Suba este projeto para um repositório no GitHub.
2. Na Vercel, clique em **Add New → Project** e escolha o repositório.
3. A Vercel detecta o Vite sozinha. Clique em **Deploy**.

## Estrutura

```
src/
├── assets/                 # fotos e prints dos projetos
├── components/
│   ├── thumbs/             # ilustrações SVG dos projetos
│   ├── AccessibilityMenu.tsx
│   ├── About.tsx
│   ├── Background.tsx      # fundo com ondas, partículas e luz do mouse
│   ├── Certificates.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── IconSprite.tsx      # todos os ícones num sprite SVG
│   ├── Navbar.tsx
│   ├── Projects.tsx        # filtros, destaques, cards e janela de detalhes
│   ├── Services.tsx        # Serviços e Processo
│   ├── Skills.tsx
│   ├── TechMarquee.tsx     # faixa de tecnologias e números
│   └── ui.tsx              # Icon, ExternalLink, Tags, Modal, SectionTitle
├── data/                   # textos e listas: projetos, tecnologias, contato
├── hooks/                  # useA11y, useToast, useTypewriter, useScroll
├── styles/global.css
├── App.tsx
└── main.tsx
```

Para mudar um texto, um projeto ou uma tecnologia, edite os arquivos em `src/data/`.

## Autor

**Anthony Gonçalves Conrado**, desenvolvedor full stack júnior em Guarulhos, SP.

[![GitHub](https://img.shields.io/badge/GitHub-AnthonyConrado-181717?style=flat-square&logo=github)](https://github.com/AnthonyConrado)
[![E-mail](https://img.shields.io/badge/E--mail-anthonyns973%40icloud.com-b794f6?style=flat-square&logo=maildotru&logoColor=white)](mailto:anthonyns973@icloud.com)
