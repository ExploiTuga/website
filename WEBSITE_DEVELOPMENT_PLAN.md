# exploiTuga Website — Development Plan

## 1. Contexto

O **exploiTuga** é uma comunidade portuguesa de cybersecurity, hacking e segurança informática.

A comunidade reúne pessoas interessadas em:

* Cybersecurity
* Ethical Hacking
* Penetration Testing
* Security Research
* OSINT
* Threat Intelligence
* CTFs
* Desenvolvimento de ferramentas de segurança
* Open Source
* Partilha de conhecimento

O website será o **portal público oficial da organização exploiTuga**.

O projeto está alojado no GitHub:

```text
https://github.com/exploiTuga/website
```

A organização principal é:

```text
https://github.com/exploiTuga
```

O website deve funcionar como a porta de entrada pública para a comunidade e servir como ponto central para apresentar:

* A comunidade
* Os projetos
* O research
* As ferramentas
* A documentação
* Os contribuidores
* O Discord
* Os recursos da comunidade

---

# 2. Objetivo

Criar um website moderno, profissional, rápido, responsivo e visualmente apelativo para uma comunidade de cybersecurity.

O website deve transmitir:

* Profissionalismo
* Cybersecurity
* Tecnologia
* Open Source
* Research
* Comunidade
* Colaboração

O design não deve parecer um template genérico de startup.

Deve ter uma identidade visual própria, moderna e técnica, adequada a uma comunidade de cybersecurity.

Evitar:

* Excesso de elementos "hacker cliché"
* Matrix rain exagerado
* Skulls
* Hacking visual estereotipado
* Excesso de neon
* Animações desnecessárias
* Design demasiado corporativo

O objetivo é criar uma identidade visual tecnológica e profissional.

---

# 3. Stack tecnológica

Utilizar:

* Astro
* TypeScript
* HTML semântico
* CSS moderno
* Componentização Astro
* Git
* GitHub

Evitar frameworks JavaScript pesados quando não forem necessários.

O website deve ser preferencialmente:

* Static-first
* Fast
* SEO-friendly
* Accessible
* Mobile-first
* Easy to maintain

Utilizar JavaScript apenas quando existir uma necessidade real.

---

# 4. Arquitetura do projeto

A estrutura inicial recomendada:

```text
website/
│
├── public/
│   ├── favicon.svg
│   ├── logo.svg
│   ├── images/
│   │   ├── projects/
│   │   ├── research/
│   │   └── community/
│   │
│   └── robots.txt
│
├── src/
│   │
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── ProjectCard.astro
│   │   ├── ProjectGrid.astro
│   │   ├── ResearchCard.astro
│   │   ├── CommunityCard.astro
│   │   └── Button.astro
│   │
│   ├── layouts/
│   │   └── Layout.astro
│   │
│   ├── pages/
│   │   ├── index.astro
│   │   ├── projects/
│   │   │   └── index.astro
│   │   ├── research/
│   │   │   └── index.astro
│   │   ├── community/
│   │   │   └── index.astro
│   │   └── about/
│   │       └── index.astro
│   │
│   ├── data/
│   │   ├── projects.ts
│   │   └── navigation.ts
│   │
│   └── styles/
│       └── global.css
│
├── .github/
│   └── workflows/
│       └── deploy.yml
│
├── astro.config.mjs
├── package.json
├── tsconfig.json
├── README.md
└── WEBSITE_DEVELOPMENT_PLAN.md
```

A estrutura pode ser adaptada se existir uma solução tecnicamente melhor.

Não criar complexidade desnecessária apenas para seguir esta estrutura.

---

# 5. Identidade visual

## Marca

Nome oficial:

```text
exploiTuga
```

Utilizar exatamente esta capitalização:

```text
exploiTuga
```

Não alterar para:

```text
Exploituga
ExploiTuga
EXPLOITUGA
```

O nome oficial é:

```text
exploiTuga
```

---

## Estilo visual

O design deve ser:

* Dark-first
* Moderno
* Técnico
* Minimalista
* Profissional
* Cybersecurity-oriented

Deve existir uma hierarquia visual clara.

A interface deve funcionar muito bem em:

* Desktop
* Laptop
* Tablet
* Mobile

---

## Cores

Não escolher cores aleatórias.

Criar um sistema de design centralizado com CSS variables.

Exemplo:

```css
:root {
  --color-background: ...;
  --color-surface: ...;
  --color-surface-hover: ...;
  --color-text: ...;
  --color-text-muted: ...;
  --color-primary: ...;
  --color-primary-hover: ...;
  --color-border: ...;
}
```

As cores devem transmitir cybersecurity e tecnologia sem cair num visual excessivamente neon.

Se for utilizada uma cor de destaque, deve ser aplicada de forma consistente.

---

# 6. Tipografia

Utilizar uma combinação de tipografia adequada a um projeto tecnológico.

A tipografia deve:

* Ser altamente legível
* Ter boa renderização em desktop e mobile
* Ter hierarquia clara
* Funcionar bem em headings e body text

Evitar utilizar demasiadas fontes.

Idealmente:

```text
1 fonte principal
+
1 fonte opcional para elementos técnicos
```

---

# 7. Navegação

O Header deve ter:

```text
exploiTuga

Projects
Research
Community
About

GitHub
Discord
```

No mobile, utilizar um menu responsivo.

O Header deve ser:

* Sticky ou fixed quando fizer sentido
* Simples
* Rápido
* Acessível

Os links externos devem abrir corretamente e utilizar atributos de segurança apropriados quando necessário.

---

# 8. Homepage

A homepage deve ser o principal ponto de entrada.

Estrutura:

```text
Homepage
│
├── Hero
│
├── Introduction
│
├── Featured Projects
│
├── Research
│
├── Community
│
├── GitHub
│
└── Discord CTA
```

---

# 9. Hero Section

O Hero deve comunicar imediatamente:

```text
exploiTuga
Comunidade Portuguesa de Cybersecurity
```

Texto sugerido:

```text
Uma comunidade portuguesa dedicada à cybersecurity,
security research, open source e partilha de conhecimento.
```

O Hero deve ter CTAs:

```text
Explorar Projetos
Juntar-me à Comunidade
```

Links:

```text
Projects → /projects
Discord → Discord oficial
```

Não utilizar texto genérico como:

```text
We are changing the future of technology.
```

O conteúdo deve ser específico para cybersecurity e para o exploiTuga.

---

# 10. Featured Projects

Criar uma secção:

```text
Projetos em Destaque
```

Inicialmente, os projetos podem ser dados estáticos.

Criar um ficheiro:

```text
src/data/projects.ts
```

Exemplo conceptual:

```typescript
export const projects = [
  {
    name: "Project Name",
    description: "Project description",
    category: "Cybersecurity",
    status: "Active",
    repository: "https://github.com/exploiTuga/project",
    documentation: "/projects/project"
  }
];
```

A arquitetura deve permitir futuramente substituir estes dados estáticos por dados provenientes da GitHub API.

Não implementar GitHub API nesta primeira fase, mas preparar a arquitetura para essa evolução.

---

# 11. Projects Page

Criar:

```text
/projects
```

Esta página deverá apresentar todos os projetos públicos do exploiTuga.

Cada projeto deve apresentar:

* Nome
* Descrição
* Categoria
* Estado
* GitHub
* Documentation
* Tags

Exemplo:

```text
Project Name

Cybersecurity Tool

Descrição curta do projeto.

[GitHub] [Documentation]
```

Categorias possíveis:

```text
Cybersecurity
OSINT
Security Research
Pentesting
Web Security
Network Security
CTF
Tooling
Open Source
```

---

# 12. Research

Criar:

```text
/research
```

Esta secção será dedicada a:

* Security Research
* Threat Intelligence
* Vulnerability Research
* OSINT
* Malware Analysis
* Write-ups
* Artigos técnicos

Inicialmente pode utilizar conteúdo estático.

A arquitetura deve permitir futuramente adicionar posts através de Astro Content Collections.

---

# 13. Community

Criar:

```text
/community
```

Conteúdo:

* Quem somos
* O que fazemos
* Como participar
* Como contribuir
* Discord
* GitHub
* Eventos
* CTFs

Deve existir um CTA claro:

```text
Junta-te ao Discord
```

---

# 14. About

Criar:

```text
/about
```

Explicar:

* O que é o exploiTuga
* Missão
* Áreas de interesse
* Filosofia
* Open Source
* Comunidade

Manter o texto factual.

Não inventar números, estatísticas ou afirmações que não tenham sido fornecidas.

---

# 15. Discord Integration

O website deverá ter links claros para o Discord oficial.

Enquanto o URL oficial não estiver definido, utilizar:

```text
PLACEHOLDER_DISCORD_URL
```

Não inventar um URL.

O mesmo se aplica ao domínio.

---

# 16. GitHub Integration

O website deverá ter links para:

```text
https://github.com/exploiTuga
```

E para cada projeto:

```text
https://github.com/exploiTuga/<repository>
```

Não inventar repositories que ainda não existem.

---

# 17. Futuras integrações

A arquitetura deve permitir futuramente:

## GitHub API

Obter automaticamente:

* Repositories
* Stars
* Forks
* Contributors
* Releases
* Languages
* Last update

Arquitetura futura:

```text
GitHub Organization
        │
        ▼
GitHub API
        │
        ▼
Data Layer
        │
        ▼
Astro Build
        │
        ▼
Projects Page
```

Não implementar esta integração na primeira versão, mas manter a arquitetura preparada.

---

## Documentation

Futuramente:

```text
docs.exploituga.pt
```

O website deve ter links preparados para a documentação.

Por agora:

```text
Documentation → Coming Soon
```

Não criar páginas falsas de documentação.

---

# 18. SEO

Implementar desde o início:

* Title tags
* Meta descriptions
* Canonical URLs
* Open Graph
* Twitter/X cards
* Sitemap
* robots.txt
* Favicon

Homepage:

```text
Title:
exploiTuga — Comunidade Portuguesa de Cybersecurity

Description:
Comunidade portuguesa dedicada à cybersecurity, security research, ethical hacking, open source e partilha de conhecimento.
```

Não utilizar títulos genéricos como:

```text
Home
Website
Cybersecurity
```

---

# 19. Accessibility

O website deve cumprir boas práticas de acessibilidade.

Implementar:

* HTML semântico
* Labels corretos
* Navegação por teclado
* Focus states
* Contraste adequado
* Alt text em imagens
* ARIA apenas quando necessário
* Respeitar `prefers-reduced-motion`

Evitar:

* Texto apenas em imagens
* Elementos clicáveis sem semântica
* Links sem contexto
* Animações excessivas

---

# 20. Performance

Objetivo:

```text
Fast
```

O website deve:

* Minimizar JavaScript
* Otimizar imagens
* Utilizar lazy loading quando apropriado
* Evitar dependências desnecessárias
* Evitar bibliotecas pesadas
* Gerar páginas estáticas quando possível

O Astro deve ser utilizado de acordo com a sua filosofia:

```text
HTML-first
JavaScript only when needed
```

---

# 21. Animações

Utilizar animações subtis.

Exemplos:

* Fade-in
* Hover states
* Transições suaves
* Pequenos efeitos de entrada

Evitar:

* Animações constantes
* Backgrounds pesados
* Matrix rain
* Glitch excessivo
* Efeitos que prejudiquem a leitura

As animações devem melhorar a experiência, não ser o foco principal.

---

# 22. Responsive Design

O website deve ser testado em:

```text
Mobile
375px
390px
430px

Tablet
768px

Desktop
1024px
1280px
1440px
1920px
```

O layout deve adaptar-se corretamente.

Não utilizar apenas `desktop-first`.

---

# 23. Security

O website deve seguir boas práticas de segurança.

Não armazenar:

* API keys
* Tokens
* Secrets
* Passwords

No repository.

Se forem necessárias variáveis de ambiente:

```text
.env
```

deve estar no `.gitignore`.

Nunca commitar:

```text
.env
.env.local
*.key
*.pem
secrets.*
```

---

# 24. Git Workflow

Utilizar:

```text
main
```

como branch de produção.

Para desenvolvimento:

```text
feature/<feature-name>
```

Exemplo:

```text
feature/projects-page
feature/discord-integration
feature/new-homepage
```

Workflow:

```text
main
 │
 ├── feature/homepage
 │
 ├── feature/projects
 │
 └── feature/research
```

Depois:

```text
Feature Branch
      │
      ▼
Pull Request
      │
      ▼
Review
      │
      ▼
Merge
      │
      ▼
main
```

---

# 25. Commits

Utilizar mensagens claras.

Exemplos:

```text
feat: add projects page
feat: add Discord community section
fix: improve mobile navigation
fix: correct SEO metadata
docs: update README
style: improve project cards
chore: update dependencies
```

Evitar:

```text
update
changes
stuff
fix
test
```

---

# 26. Local Development

O projeto deve funcionar com:

```bash
npm install
```

Desenvolvimento:

```bash
npm run dev
```

Build:

```bash
npm run build
```

Preview:

```bash
npm run preview
```

Antes de cada commit, executar:

```bash
npm run build
```

O projeto deve compilar sem erros.

---

# 27. GitHub Actions

Criar futuramente:

```text
.github/workflows/deploy.yml
```

O workflow deverá:

```text
Push to main
      │
      ▼
GitHub Actions
      │
      ├── Checkout
      ├── Setup Node
      ├── npm install
      ├── npm run build
      └── Deploy to GitHub Pages
```

O deployment deve ocorrer automaticamente após alterações na branch `main`.

---

# 28. GitHub Pages

O website será inicialmente publicado através de GitHub Pages.

Repository:

```text
https://github.com/exploiTuga/website
```

URL inicial esperada:

```text
https://exploiTuga.github.io/website/
```

Se a configuração da organização permitir utilizar o domínio raiz da organização, avaliar posteriormente:

```text
https://exploiTuga.github.io
```

Não assumir que esta configuração está disponível sem validar.

Futuramente poderá ser configurado um domínio próprio.

---

# 29. Domínio futuro

O website deve estar preparado para um domínio personalizado.

Exemplo:

```text
https://exploituga.pt
```

Futuras subdomains:

```text
https://docs.exploituga.pt
https://status.exploituga.pt
```

Não implementar DNS neste momento.

---

# 30. Conteúdo

Não inventar:

* Número de membros
* Número de projetos
* Estatísticas
* Parceiros
* Patrocinadores
* Eventos
* Prémios
* Certificações
* Números de Discord
* URLs que não tenham sido fornecidos

Quando uma informação ainda não existir, utilizar:

```text
Coming Soon
```

ou remover temporariamente a secção.

---

# 31. Primeira versão — MVP

A primeira versão deverá conter:

```text
/
├── Hero
├── About
├── Featured Projects
├── Research
├── Community
└── Footer

/projects
/research
/community
/about
```

Também deve incluir:

* Responsive design
* Dark theme
* SEO
* Accessibility
* GitHub link
* Discord placeholder
* Favicon
* Sitemap
* robots.txt

---

# 32. Critérios de qualidade

Antes de considerar a primeira versão terminada, verificar:

### Build

```text
npm run build
```

Deve terminar sem erros.

### TypeScript

Sem erros TypeScript.

### Links

Todos os links internos devem funcionar.

### Mobile

Testar navegação mobile.

### Desktop

Testar resoluções desktop.

### Accessibility

Verificar:

* Keyboard navigation
* Contrast
* Alt text
* Focus states

### SEO

Verificar:

* Title
* Description
* Open Graph
* Sitemap

### Performance

Evitar dependências e scripts desnecessários.

---

# 33. Prioridade de desenvolvimento

Implementar nesta ordem:

```text
1. Setup Astro
        │
        ▼
2. Design System
        │
        ▼
3. Global Layout
        │
        ▼
4. Header
        │
        ▼
5. Footer
        │
        ▼
6. Homepage
        │
        ▼
7. Projects
        │
        ▼
8. Research
        │
        ▼
9. Community
        │
        ▼
10. About
        │
        ▼
11. SEO
        │
        ▼
12. Accessibility
        │
        ▼
13. GitHub Actions
        │
        ▼
14. GitHub Pages
```

---

# 34. Regra principal para o desenvolvimento

O website deve ser desenvolvido como um projeto real de produção.

Não criar apenas uma demo visual.

O código deve ser:

* Limpo
* Modular
* Manutenível
* Tipado
* Documentado quando necessário
* Seguro
* Responsivo
* Acessível
* Performante

Não implementar funcionalidades futuras prematuramente.

Construir uma base sólida e simples que possa evoluir.

---

# 35. Resultado esperado

No final da primeira fase, deverá existir:

```text
exploiTuga Website
│
├── Homepage
├── Projects
├── Research
├── Community
└── About
```

Com:

```text
Astro
TypeScript
Responsive Design
Dark Theme
SEO
Accessibility
GitHub Integration
Discord Integration
GitHub Pages
Automated Deployment
```

Arquitetura futura:

```text
                         exploiTuga
                              │
                              ▼
                         WEBSITE
                              │
          ┌───────────────────┼───────────────────┐
          │                   │                   │
          ▼                   ▼                   ▼
       Projects            Research           Community
          │                   │                   │
          ▼                   ▼                   ▼
    GitHub API          Content System        Discord
          │                   │                   │
          └───────────────────┼───────────────────┘
                              │
                              ▼
                     Documentation
                              │
                              ▼
                    docs.exploituga.pt
```

O objetivo é criar uma infraestrutura digital coerente para o **exploiTuga**, começando por um website simples, rápido e profissional e evoluindo gradualmente para um portal integrado com GitHub, documentação e Discord.
