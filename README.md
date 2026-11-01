# Portfólio — Bernardo Oliveira

Site estático, responsivo e sem etapa de build. Foi montado com HTML, CSS e JavaScript puro para ser fácil de revisar, personalizar e publicar.

## Como visualizar

1. Extraia a pasta `bernardo-portfolio`.
2. Abra `index.html` em um navegador atualizado.
3. Para testar o menu e a navegação local, não é necessária uma chave de API nem instalar dependências.

## Publicar

O site está publicado na Vercel (projeto `bernardo-portfolio`, time nexustech3): cada push na `main` atualiza https://bernardo-portfolio-nine.vercel.app e cada branch ganha uma prévia própria.

## Arquivos principais

- `index.html` — conteúdo, estilos (Tailwind via CDN + bloco `<style>`) e o script de navegação, menu mobile e janelas de estudo de caso.
- `assets/retrato-bernardo.webp` — retrato preparado para o site.
- `assets/Curriculo_Bernardo_Oliveira.pdf` — currículo em português.
- `assets/Resume_Bernardo_Oliveira_EN.pdf` — currículo em inglês.

## Projetos e demos

| Projeto | Demo | Observação |
|---|---|---|
| Proximity | https://proximity-bernardo.vercel.app | Busca por regras; com `GEMINI_API_KEY` no projeto da Vercel passa a usar IA. |
| HealthTech (RoundLog) | https://healthtech-bernardo.vercel.app | Modo demo do front-end (`NEXT_PUBLIC_DEMO_MODE=true`), branch `feat/demo-mode` do Healthtech-web. |
| Gracon (NexusDoc) | https://nexus-doc-web-ten.vercel.app | Deploy mantido pela equipe. |
| Seamoney | https://seamoney-bernardo.vercel.app/app | Demo offline, branch `fix/next-security-upgrade` do fork. |
| Sistema de Votação | — | Projeto acadêmico de hardware (Tinkercad). |

## Observações sobre o conteúdo

- Textos baseados no currículo de Out/2026 e no README do perfil do GitHub.
- Cada projeto informa se é individual ou em equipe e qual foi a atuação do Bernardo.
- O telefone não foi colocado diretamente na página pública; ele aparece apenas nos PDFs do currículo.
- A lista de tecnologias não é apresentada como escala de proficiência. Python aparece como conhecimento em aprendizado.

## Personalização rápida

Edite os textos em `index.html`. O conteúdo das janelas de estudo de caso fica no objeto `projectsData`, no script ao final do arquivo. As cores principais ficam no início do arquivo, em `tailwind.config` e nas variáveis `--bg`, `--text` e `--accent`.
