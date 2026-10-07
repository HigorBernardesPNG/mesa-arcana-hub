(() => {
  const cfg = window.MESA_ARCANA_CONFIG || {};
  const app = document.getElementById('app');
  const nav = document.getElementById('nav');
  const menuToggle = document.getElementById('menuToggle');
  const footerVersion = document.getElementById('footerVersion');

  footerVersion.textContent = `${cfg.canal || 'Mesa Arcana'} · ${cfg.versao || ''}`;

  const icons = {
    map: '⌗',
    move: '◇',
    magic: '✦',
    light: '◐',
    lan: '⌁',
    save: '▣'
  };

  function inicio() {
    return `
      <section class="page">
        <div class="hero">
          <div class="hero-copy">
            <span class="eyebrow">Mesa Arcana</span>
            <h1>O mapa é o <span>centro da aventura.</span></h1>
            <p>Uma plataforma de apoio visual para RPG de mesa. Organize mapas, personagens, criaturas, movimento, alcance, magias, iluminação e efeitos sem transformar a sessão em uma ficha digital.</p>
            <div class="hero-actions">
              <a class="btn btn-primary" href="#/download"><span class="btn-icon">↓</span> Baixar Mesa Arcana</a>
              <a class="btn" href="#/recursos">Conhecer recursos</a>
            </div>
            <div class="hero-note"><i></i><span>Mestre no aplicativo · Jogadores entram pelo navegador na mesma rede</span></div>
          </div>
          <div class="arcane-board" aria-label="Representação visual de uma mesa virtual com grid">
            <div class="board-toolbar"><strong>MAPA DA SESSÃO</strong><div class="board-dots"><span></span><span></span><span></span></div></div>
            <div class="grid-map">
              <div class="spell-area"></div>
              <div class="token token-player">PJ</div>
              <div class="token token-npc">NPC</div>
              <div class="token token-monster">M</div>
            </div>
            <div class="board-caption">grid · alcance · efeitos</div>
          </div>
        </div>

        <div class="flow">
          <div class="flow-header">
            <div><span class="eyebrow">Fluxo simples</span><h2>Da campanha à mesa em poucos passos.</h2></div>
            <p>A aplicação do Mestre executa localmente. Os jogadores usam o navegador pelo link ou QR Code da sessão.</p>
          </div>
          <div class="flow-steps">
            <div class="flow-step"><span>01</span><strong>Abra ou carregue a campanha</strong></div>
            <div class="flow-step"><span>02</span><strong>Prepare mapa e entidades</strong></div>
            <div class="flow-step"><span>03</span><strong>Compartilhe a sessão pela LAN</strong></div>
            <div class="flow-step"><span>04</span><strong>Jogue e salve para continuar depois</strong></div>
          </div>
        </div>
      </section>`;
  }

  function recursos() {
    const cards = [
      [icons.map, 'Mapa e grid', 'Importe seu mapa, ajuste linhas e escala e use o grid como referência visual central da sessão.'],
      [icons.move, 'Movimento e alcance', 'Movimentação por quadrados, tamanhos de criatura, distâncias e pré-visualização de alcance.'],
      [icons.magic, 'Ações e magias', 'Ataques visuais, magias, áreas, efeitos persistentes, concentração e ações raciais.'],
      [icons.light, 'Iluminação e visão', 'Ambientes claros, penumbra e escuridão, visão no escuro, tochas e efeitos de luz.'],
      [icons.lan, 'Sessão pela rede local', 'O Mestre executa o aplicativo e os jogadores entram pelo navegador usando link, código ou QR Code.'],
      [icons.save, 'Campanhas portáteis', 'Salve, carregue, exporte e importe campanhas para continuar a aventura em outro momento.']
    ];

    return `
      <section class="page">
        <div class="section-head">
          <span class="eyebrow">Apoio visual</span>
          <h1 class="page-title">O que importa na mesa permanece em primeiro plano.</h1>
          <p>A Mesa Arcana foi construída para complementar o RPG presencial: mapa, movimento, alcance, áreas, efeitos e histórico. As regras e decisões continuam com o grupo.</p>
        </div>
        <div class="feature-grid">
          ${cards.map(([icon, title, text]) => `<article class="feature-card"><div class="feature-icon">${icon}</div><h3>${title}</h3><p>${text}</p></article>`).join('')}
        </div>
      </section>`;
  }

  function download() {
    return `
      <section class="page">
        <div class="download-layout">
          <div class="download-copy">
            <span class="eyebrow">Download</span>
            <h1 class="page-title">Leve a Mesa Arcana para sua próxima sessão.</h1>
            <p class="lead">Instale o aplicativo apenas no computador do Mestre. Os jogadores não precisam instalar nada: entram pelo navegador conectado à mesma rede.</p>
            <div class="download-list">
              <div><i>✓</i><span>Aplicativo do Mestre para Windows</span></div>
              <div><i>✓</i><span>Servidor local iniciado pelo próprio aplicativo</span></div>
              <div><i>✓</i><span>Jogadores conectados pelo navegador</span></div>
              <div><i>✓</i><span>Campanhas salvas localmente</span></div>
            </div>
          </div>

          <article class="download-card">
            <div class="download-card-top">
              <div class="product-id"><img src="./assets/mesa-arcana.png" alt="Ícone Mesa Arcana" /><div><strong>Mesa Arcana</strong><span>Aplicativo do Mestre</span></div></div>
              <span class="version-pill">${cfg.canal || 'Teste'}</span>
            </div>
            <div class="download-card-body">
              <h2>Instalador para Windows</h2>
              <p>Baixe o pacote, extraia quando necessário e execute o instalador da Mesa Arcana.</p>
              <button class="download-button" id="downloadButton" type="button"><span>↓</span> Baixar Mesa Arcana</button>
              <div class="download-meta">
                <div class="meta-box"><span>Versão</span><strong>${cfg.versao || 'Atual'}</strong></div>
                <div class="meta-box"><span>Plataforma</span><strong>Windows</strong></div>
              </div>
              <div class="download-status" id="downloadStatus"></div>
            </div>
            <div class="download-card-foot">Esta é uma distribuição de teste. A disponibilidade desta versão pode ser encerrada pelo responsável pelo projeto.</div>
          </article>
        </div>
      </section>`;
  }

  const routes = { inicio, recursos, download };

  function currentRoute() {
    const raw = location.hash.replace(/^#\/?/, '').split('/')[0];
    return routes[raw] ? raw : 'inicio';
  }

  function setActive(route) {
    document.querySelectorAll('[data-route]').forEach(link => link.classList.toggle('active', link.dataset.route === route));
  }

  function bindDownload() {
    const button = document.getElementById('downloadButton');
    if (!button) return;

    button.addEventListener('click', () => {
      const status = document.getElementById('downloadStatus');
      status.className = 'download-status';
      status.textContent = 'Abrindo download pelo GitHub Releases…';

      const link = document.createElement('a');
      link.href = cfg.arquivoDownload;
      link.rel = 'noopener';
      document.body.appendChild(link);
      link.click();
      link.remove();

      setTimeout(() => {
        status.textContent = 'Download solicitado.';
      }, 600);
    });
  }

  function render() {
    const route = currentRoute();
    app.innerHTML = routes[route]();
    setActive(route);
    nav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    if (route === 'download') bindDownload();
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  menuToggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(open));
  });

  window.addEventListener('hashchange', render);
  if (!location.hash) location.hash = '#/inicio';
  render();
})();
