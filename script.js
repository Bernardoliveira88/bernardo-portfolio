(() => {
  const menuToggle = document.getElementById('menuToggle');
  const siteNav = document.getElementById('siteNav');
  const navLinks = [...document.querySelectorAll('.nav-link[href^="#"]')];
  const sections = navLinks.map(link => document.querySelector(link.getAttribute('href'))).filter(Boolean);
  const filterButtons = [...document.querySelectorAll('.filter-button')];
  const projectCards = [...document.querySelectorAll('.project-card')];
  const dialog = document.getElementById('projectDialog');
  const dialogTitle = document.getElementById('dialogTitle');
  const dialogStatus = document.getElementById('dialogStatus');
  const dialogSummary = document.getElementById('dialogSummary');
  const dialogDetails = document.getElementById('dialogDetails');
  const dialogStack = document.getElementById('dialogStack');
  const dialogNote = document.getElementById('dialogNote');

  if (document.getElementById('year')) document.getElementById('year').textContent = new Date().getFullYear();

  function closeMenu() {
    if (!menuToggle || !siteNav) return;
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Abrir menu de navegação');
    siteNav.classList.remove('is-open');
  }

  menuToggle?.addEventListener('click', () => {
    const opened = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!opened));
    menuToggle.setAttribute('aria-label', opened ? 'Abrir menu de navegação' : 'Fechar menu de navegação');
    siteNav?.classList.toggle('is-open', !opened);
  });
  navLinks.forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeMenu();
  });

  if ('IntersectionObserver' in window && sections.length) {
    const observer = new IntersectionObserver(entries => {
      const visible = entries.filter(entry => entry.isIntersecting).sort((a,b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      navLinks.forEach(link => {
        const active = link.getAttribute('href') === `#${visible.target.id}`;
        link.classList.toggle('is-active', active);
        if (active) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    }, { rootMargin: '-20% 0px -60% 0px', threshold: [0, .1, .25, .5] });
    sections.forEach(section => observer.observe(section));
  }

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const selected = button.dataset.filter;
      filterButtons.forEach(item => {
        const active = item === button;
        item.classList.toggle('is-selected', active);
        item.setAttribute('aria-pressed', String(active));
      });
      projectCards.forEach(card => {
        const categories = (card.dataset.category || '').split(/\s+/);
        card.hidden = selected !== 'todos' && !categories.includes(selected);
      });
    });
  });

  const projects = {
    healthtech: {
      title: 'HealthTech', status: 'Projeto de back-end',
      summary: 'Sistema de gestão clínica hospitalar com módulos e fluxos voltados à operação de equipes de saúde.',
      details: [
        ['O que explora', 'Suporte a consultas e prontuários, fluxos de trabalho de enfermagem, passagens de plantão, comunicação com familiares e análises operacionais.'],
        ['Implementação', 'Autenticação JWT, modelagem de dados com PostgreSQL e Prisma, processamento assíncrono com BullMQ e Redis, além de processamento de áudio e resumos assistidos por IA usando Google Gemini.'],
        ['Foco técnico', 'Organização do back-end, integração entre serviços, filas assíncronas e apoio de IA em tarefas de informação.']
      ],
      stack: ['Node.js','TypeScript','Fastify','Prisma','PostgreSQL','Redis','BullMQ','JWT','Docker','Google Gemini','Zod'],
      note: 'Descrição baseada no currículo. A página não afirma que o sistema esteja publicamente implantado.'
    },
    gracon: {
      title: 'Gracon', status: 'MVP · Gestão inteligente de contratos',
      summary: 'MVP que explora como IA e busca semântica podem facilitar a organização e consulta de contratos.',
      details: [
        ['O que explora', 'Recebimento de contratos em PDF, extração de informações estruturadas por IA, busca semântica e versionamento de documentos.'],
        ['Acesso e organização', 'Ambiente de trabalho autenticado e gerenciamento de perfis de acesso.'],
        ['Foco técnico', 'Processamento de documentos, dados estruturados, busca vetorial e organização de acesso.']
      ],
      stack: ['Node.js','TypeScript','Fastify','Prisma','PostgreSQL','pgvector','Google Gemini','Zod','Resend','Vitest','Docker'],
      note: 'Apresentado como MVP, conforme descrito no currículo.'
    },
    proximity: {
      title: 'Proximity', status: 'Protótipo em desenvolvimento',
      summary: 'Uma ideia de produto que busca ajudar pessoas distantes dos grandes centros a entender os próximos passos para acessar serviços públicos.',
      details: [
        ['Problema', 'Informações fragmentadas, distância e dificuldade de entender as etapas podem tornar o acesso a serviços públicos mais complexo.'],
        ['Proposta', 'Explorar o uso de IA para interpretar uma solicitação em linguagem natural e organizar orientações e próximos passos, dando importância a fontes oficiais e à explicitação do que ainda precisa ser confirmado.'],
        ['Estágio atual', 'É uma demo inicial e uma hipótese de produto. Precisa de mais validação com usuários, melhoria da jornada e revisão das informações por contexto local.'],
        ['Resiliência', 'O desenvolvimento inclui um motor determinístico de contingência para manter um comportamento básico quando a chamada à IA falha. Isso não substitui a validação das orientações.']
      ],
      stack: ['TypeScript','TanStack Start','Gemini API','Motor determinístico de contingência'],
      note: 'Não representa cobertura nacional, confirmação de vagas ou garantia de acesso a serviços; esses pontos exigem validação específica.'
    }
  };

  function addDetail(label, text) {
    const wrapper = document.createElement('section');
    wrapper.className = 'dialog-detail';
    const heading = document.createElement('h3');
    heading.textContent = label;
    const paragraph = document.createElement('p');
    paragraph.textContent = text;
    wrapper.append(heading, paragraph);
    dialogDetails.append(wrapper);
  }
  function openProject(key, trigger) {
    const project = projects[key];
    if (!project || !dialog) return;
    dialogStatus.textContent = project.status;
    dialogTitle.textContent = project.title;
    dialogSummary.textContent = project.summary;
    dialogDetails.replaceChildren();
    project.details.forEach(([label, text]) => addDetail(label, text));
    dialogStack.replaceChildren();
    project.stack.forEach(label => {
      const chip = document.createElement('span');
      chip.textContent = label;
      dialogStack.append(chip);
    });
    dialogNote.textContent = project.note;
    dialog.showModal();
    dialog.dataset.triggerId = trigger?.id || '';
    dialog.querySelector('.dialog-close')?.focus();
  }
  document.querySelectorAll('[data-project]').forEach(button => {
    button.addEventListener('click', () => openProject(button.dataset.project, button));
  });
  dialog?.querySelector('.dialog-close')?.addEventListener('click', () => dialog.close());
  dialog?.addEventListener('click', event => {
    if (event.target === dialog) dialog.close();
  });
  dialog?.addEventListener('close', () => {
    const triggerId = dialog.dataset.triggerId;
    const trigger = triggerId ? document.getElementById(triggerId) : null;
    trigger?.focus();
  });
})();
