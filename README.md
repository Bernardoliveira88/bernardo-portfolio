# Portfólio — Bernardo Oliveira

Site estático, responsivo e sem etapa de build. Foi montado com HTML, CSS e JavaScript puro para ser fácil de revisar, personalizar e publicar.

## Como visualizar

1. Extraia a pasta `bernardo-portfolio`.
2. Abra `index.html` em um navegador atualizado.
3. Para testar o menu e a navegação local, não é necessária uma chave de API nem instalar dependências.

## Publicar

Qualquer hospedagem de sites estáticos funciona. Uma opção simples é criar um repositório no GitHub, enviar o conteúdo desta pasta e ativar o GitHub Pages para a branch principal e a pasta raiz. Também é possível enviar a pasta descompactada a um serviço de hospedagem estática.

## Arquivos principais

- `index.html` — conteúdo e estrutura.
- `styles.css` — identidade visual, layout responsivo e estados de interação.
- `script.js` — menu mobile, navegação ativa, filtros e janelas de detalhes dos projetos.
- `assets/retrato-bernardo.webp` — retrato preparado para o site.
- `assets/Curriculo_Bernardo_Oliveira.pdf` — versão PDF do currículo original.

## Observações sobre o conteúdo

- O Proximity está identificado como **protótipo em desenvolvimento**; a descrição não promete cobertura nacional nem serviços confirmados.
- HealthTech e Gracon foram descritos com base no currículo fornecido.
- Os cards dos projetos abrem detalhes dentro do próprio site porque não foram fornecidas URLs públicas específicas para cada projeto.
- O telefone não foi colocado diretamente na página pública; o currículo para download mantém os dados do documento original. O contato direto está disponível por e-mail, GitHub e LinkedIn.
- A lista de tecnologias não é apresentada como escala de proficiência. Python aparece como conhecimento em aprendizado, conforme o currículo.

## Personalização rápida

Edite os textos em `index.html`. Para atualizar o conteúdo dos modais, edite o objeto `projects` em `script.js`. As cores principais ficam no início de `styles.css` nas variáveis `--bg`, `--text` e `--red`.
