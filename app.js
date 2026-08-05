// ==================== CONFIGURAÇÃO (essência da ficha) ====================
    const EMPRESA = 'SondaGuard';
    const SETOR = 'Operacional';

    const TERMO = 'Declaro que assumo total responsabilidade pela guarda e conservação do equipamento de proteção individual abaixo descrito, e que recebi orientação sobre o seu uso correto, comprometendo-me a: Utilizá-lo obrigatoriamente durante as minhas atividades na Cia; ser responsável pela sua guarda e conservação; obrigando-me a comunicar ao meu líder imediato qualquer avaria ou dano que o mesmo venha a sofrer; restitui-lo ao setor de EPI, quando solicitado; devolvê-lo ao RH por ocasião do meu desligamento da empresa; responsabilizando-me pelo ressarcimento do valor correspondente, em caso de perda ou extravio; restituição do valor de uso e formação das medidas de segurança e saúde no trabalho, quando determinado; reposição do material, nos casos de utilização e finalidade de uso; a empresa deverá advertir imediatamente o empregado quando determinado que o colaborador assumiu o uso ou a troca.';

    const LEIS = 'Ciente da Lei 623, § 1º, inciso I, do artigo 158 da CLT, que dispõe sobre a obrigação do empregado de utilizar o EPI fornecido pela empresa, sujeito às penalidades previstas em lei (NR-1, subitem 1.8.11).';

    const REASONS = ['Admissão', 'Troca por Desgaste', 'Troca por Vencimento', 'Perda/Extravio', 'Danos por Acidente'];

    const LOGO_B64 = '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';
    function setLogo() {
      const img = document.getElementById('logo');
      if (img) { img.src = 'logo.png'; img.onerror = function () { img.onerror = null; img.src = 'data:image/png;base64,' + LOGO_B64; }; }
    }

    // ==================== ESTADO ====================
    const LS_KEY = 'epi_app_v7';
    const PEND_KEY = 'epi_pending_v1';
    let state = { employees: [], epis: [], entregas: [], cart: [], cur: {}, sig1: null, sig2: null };
    let counters = { emp: 1, epi: 1 };
    let syncStatus = 'idle'; // idle | syncing | ok | error | offline

    // ====== Backend (API) — desabilitado para GitHub Pages + Firebase ======
    const USE_API = false;
    const API_BASE = '';
    let curScreen = 'home';
    let _pushTimer = null;
    let db, auth, fbUser;
    let _listenersAttached = false;

    function load() {
      try { const s = JSON.parse(localStorage.getItem(LS_KEY)); if (s) state = s; } catch (e) { }
      if (!localStorage.getItem(LS_KEY)) { seed(); save(); }
      recomputeCounters();
    }
    function loadPending() {
      try { return JSON.parse(localStorage.getItem(PEND_KEY)) || []; } catch (e) { return []; }
    }
    function savePending(p) { try { localStorage.setItem(PEND_KEY, JSON.stringify(p)); } catch (e) { } }
    function addPending(type, action, data) {
      const p = loadPending();
      p.push({ type, action, data, ts: Date.now() });
      savePending(p);
      updateSyncBadge();
    }
    function save() {
      try { localStorage.setItem(LS_KEY, JSON.stringify(state)); } catch (e) { showToast('⚠️ Armazenamento cheio — exporte um backup (JSON)'); }
      if (db) pushToFirebase();
    }
    function recomputeCounters() {
      counters.emp = state.employees.reduce((m, e) => Math.max(m, e.id || 0), 0) + 1;
      counters.epi = state.epis.reduce((m, e) => Math.max(m, e.id || 0), 0) + 1;
    }
    function seed() {
      state = {
        employees: [
          { id: 1, nome: 'JOAO DA SILVA', matricula: '100001', cargo: 'TECNICO DE AUTOMACAO INDUSTRIAL PLENO', admissao: '2024-07-01', telefone: '' },
          { id: 2, nome: 'MARIA SANTOS', matricula: '100002', cargo: 'ASSISTENTE ADMINISTRATIVO', admissao: '2025-11-11', telefone: '' },
          { id: 3, nome: 'PEDRO OLIVEIRA', matricula: '100003', cargo: 'TECNICO DE SEGURANCA NO TRABALHO', admissao: '2026-06-01', telefone: '' },
          { id: 4, nome: 'ANA SOUZA', matricula: '100004', cargo: 'TECNICO DE AUTOMACAO INDUSTRIAL SÊNIOR', admissao: '2024-12-12', telefone: '' },
          { id: 5, nome: 'CARLOS FERREIRA', matricula: '100005', cargo: 'ANALISTA DE REDES JR II', admissao: '2021-06-21', telefone: '' },
          { id: 6, nome: 'LUCIA LIMA', matricula: '100006', cargo: 'ANALISTA DE REDE SENIOR II', admissao: '2018-06-15', telefone: '' },
          { id: 7, nome: 'ROBERTO ALMEIDA', matricula: '100007', cargo: 'TECNICO DE TELECOMUNICAÇÕES', admissao: '2021-12-03', telefone: '' },
          { id: 8, nome: 'PATRICIA COSTA', matricula: '100008', cargo: 'TECNICO DE AUTOMACAO INDUSTRIAL SENIOR', admissao: '2026-03-30', telefone: '' },
          { id: 9, nome: 'FERNANDO MARTINS', matricula: '100009', cargo: 'TECNICO DE CABEAMENTO', admissao: '2024-08-01', telefone: '' },
          { id: 10, nome: 'JULIANA PEREIRA', matricula: '100010', cargo: 'TÉCNICO DE REDE DE TELECOMUNICAÇÕES JR II', admissao: '2012-11-12', telefone: '' },
          { id: 11, nome: 'GUSTAVO RODRIGUES', matricula: '100011', cargo: 'TECNICO DE FIBRA OPTICA', admissao: '2026-05-19', telefone: '' },
          { id: 12, nome: 'CAMILA BARBOSA', matricula: '100012', cargo: 'TÉCNICO DE FIBRA ÓPTICA', admissao: '2018-10-23', telefone: '' },
          { id: 13, nome: 'RAFAEL ARAUJO', matricula: '100013', cargo: 'TÉCNICO DE FIBRA ÓTICA', admissao: '2021-06-21', telefone: '' },
          { id: 14, nome: 'BEATRIZ CORREIA', matricula: '100014', cargo: 'TECNICO DE AUTOMAÇÃO INDUSTRIAL PLENO', admissao: '2024-12-12', telefone: '' },
          { id: 15, nome: 'THIAGO NUNES', matricula: '100015', cargo: 'TÉCNICO DE AUTOMAÇÃO INDUSTRIAL SÊNIOR', admissao: '2024-11-01', telefone: '' },
          { id: 16, nome: 'DANIELA MOREIRA', matricula: '100016', cargo: 'ANALISTA DE REDES JR II', admissao: '2024-05-08', telefone: '' },
          { id: 17, nome: 'LEONARDO CARDOSO', matricula: '100017', cargo: 'TECNICO EM AUTOMAÇÃO INDUSTRIAL PLENO', admissao: '2026-06-08', telefone: '' },
          { id: 18, nome: 'AMANDA RIBEIRO', matricula: '100018', cargo: 'TECNICO DE AUTOMAÇÃO INDUSTRIAL SENIOR', admissao: '2021-03-22', telefone: '' },
          { id: 19, nome: 'BRUNO CARVALHO', matricula: '100019', cargo: 'TÉCNICO DE AUTOMAÇÃO INDUSTRIAL PLENO', admissao: '2022-03-14', telefone: '' },
          { id: 20, nome: 'TATIANA MELO', matricula: '100020', cargo: 'COORDENADOR TECNICO DE TI', admissao: '2013-01-02', telefone: '' },
          { id: 21, nome: 'MARCOS GOMES', matricula: '100021', cargo: 'ANALISTA DE REDES SR II', admissao: '2025-05-14', telefone: '' },
          { id: 22, nome: 'PRISCILA TEIXEIRA', matricula: '100022', cargo: 'TÉCNICO DE AUTOMAÇÃO INDUSTRIAL PLENO', admissao: '2021-03-19', telefone: '' },
          { id: 23, nome: 'ALEXANDRE DIAS', matricula: '100023', cargo: 'TECNICO DE AUTOMACAO INDUSTRIAL PLENO', admissao: '2025-12-12', telefone: '' },
          { id: 24, nome: 'VANESSA CASTRO', matricula: '100024', cargo: 'TECNICO EM SEGURANÇA DO TRABALHO', admissao: '2024-10-11', telefone: '' },
          { id: 25, nome: 'DIEGO NASCIMENTO', matricula: '100025', cargo: 'ANALISTA DE REDES JR II', admissao: '2025-07-08', telefone: '' },
          { id: 26, nome: 'RENATA SILVEIRA', matricula: '100026', cargo: 'COORDENADOR DE TECNICO', admissao: '2020-10-01', telefone: '' },
          { id: 27, nome: 'FABIO TEIXEIRA', matricula: '100027', cargo: 'TECNICO DE CABEAMENTO', admissao: '2025-09-18', telefone: '' },
          { id: 28, nome: 'ISABELA DUARTE', matricula: '100028', cargo: 'ANALISTA DE REDES PLENO', admissao: '2023-09-20', telefone: '' },
          { id: 29, nome: 'ANDRE LOPES', matricula: '100029', cargo: 'TECNICO DE AUTOMACAO INDUSTRIAL SÊNIOR', admissao: '2024-11-01', telefone: '' },
          { id: 30, nome: 'CARLA MONTEIRO', matricula: '100030', cargo: 'TÉCNICO DE FIBRA ÓTICA', admissao: '2022-02-02', telefone: '' },
          { id: 31, nome: 'MURILO BATISTA', matricula: '100031', cargo: 'TECNICO DE CABEAMENTO', admissao: '2026-03-18', telefone: '' },
          { id: 32, nome: 'NATALIA FREITAS', matricula: '100032', cargo: 'ASSISTENTE ADMINISTRATIVO', admissao: '2023-10-02', telefone: '' },
          { id: 33, nome: 'RICARDO PINTO', matricula: '100033', cargo: 'TECNICO DE AUTOMAÇÃO INDUSTRIAL SENIOR', admissao: '2025-09-09', telefone: '' },
          { id: 34, nome: 'LARISSA CAMPOS', matricula: '100034', cargo: 'TÉCNICO DE AUTOMAÇÃO INDUSTRIAL PLENO', admissao: '2024-12-19', telefone: '' },
          { id: 35, nome: 'HENRIQUE RAMOS', matricula: '100035', cargo: 'TECNICO DE AUTOMACAO INDUSTRIAL SÊNIOR', admissao: '2026-03-13', telefone: '' },
          { id: 36, nome: 'SANDRA MACEDO', matricula: '100036', cargo: 'ANALISTA DE REDE SR II', admissao: '2021-03-18', telefone: '' },
          { id: 37, nome: 'DANIEL FERNANDES', matricula: '100037', cargo: 'TECNICO DE AUTOMACAO INDUSTRIAL SÊNIOR', admissao: '2024-06-21', telefone: '' },
          { id: 38, nome: 'VIVIANE ARAUJO', matricula: '100038', cargo: 'ANALISTA DE REDE SENIOR', admissao: '2024-04-15', telefone: '' }
        ], epis: [
          { id: 1, nome: 'Capacete de Segurança Classe B 3M', ca: '12345', caVal: '2028-06-30', tamanhos: ['Único'], estoque: { 'Único': 30 } },
          { id: 2, nome: 'Abafador Concha Acuplastic 3M', ca: '34567', caVal: '2027-12-15', tamanhos: ['Único'], estoque: { 'Único': 30 } },
          { id: 3, nome: 'Óculos de Segurança Lente Incolor', ca: '45678', caVal: '2027-11-05', tamanhos: ['Único'], estoque: { 'Único': 50 } },
          { id: 4, nome: 'Botina Manobreira Metatarso Composite', ca: '56789', caVal: '2027-09-20', tamanhos: ['36', '37', '38', '39', '40', '41', '42', '43', '44', '45'], estoque: { '36': 3, '37': 4, '38': 5, '39': 6, '40': 7, '41': 6, '42': 5, '43': 4, '44': 3, '45': 2 } },
          { id: 5, nome: 'Camisa Retardante a Chamas ATPV', ca: '67890', caVal: '2027-08-22', tamanhos: ['P', 'M', 'G', 'GG', 'XG'], estoque: { P: 10, M: 15, G: 12, GG: 8, XG: 5 } },
          { id: 6, nome: 'Calça Retardante a Chamas ATPV', ca: '78901', caVal: '2027-08-22', tamanhos: ['P', 'M', 'G', 'GG', 'XG'], estoque: { P: 10, M: 15, G: 12, GG: 8, XG: 5 } },
          { id: 7, nome: 'Luva Anti-corte EPI', ca: '89012', caVal: '2028-04-18', tamanhos: ['P', 'M', 'G', 'GG'], estoque: { P: 20, M: 25, G: 20, GG: 10 } },
          { id: 8, nome: 'Luva Anti-impacto', ca: '90123', caVal: '2028-03-10', tamanhos: ['P', 'M', 'G', 'GG'], estoque: { P: 10, M: 12, G: 10, GG: 6 } },
          { id: 9, nome: 'Touca Balaclava Hercules', ca: '90234', caVal: '2028-05-01', tamanhos: ['Único'], estoque: { 'Único': 20 } }
        ], entregas: [], cart: [], cur: {}, sig1: null, sig2: null
      };
      save();
    }
    // ==================== FIREBASE ====================
    function initFirebase() {
      if (typeof firebase === 'undefined' || !firebaseConfig || firebaseConfig.apiKey === 'COLE_AQUI') {
        console.warn('Firebase não configurado — usando modo offline');
        return false;
      }
      firebase.initializeApp(firebaseConfig);
      auth = firebase.auth();
      db = firebase.firestore();
      return true;
    }
    async function connectFirebase() {
      if (!auth) return false;
      try {
        await auth.signInAnonymously();
        fbUser = auth.currentUser;
        listenFirebase();
        pushToFirebase();
        return true;
      } catch (e) {
        console.error('Firebase anonymous auth failed:', e);
        return false;
      }
    }
    function listenFirebase() {
      if (_listenersAttached) return;
      _listenersAttached = true;
      db.collection('employees').onSnapshot(snap => {
        state.employees = snap.docs.map(d => ({ id: Number(d.id), ...d.data() }));
        recomputeCounters();
        try { localStorage.setItem(LS_KEY, JSON.stringify(state)); } catch (e) { }
        if (curScreen) go(curScreen);
      });
      db.collection('epis').onSnapshot(snap => {
        state.epis = snap.docs.map(d => ({ id: Number(d.id), ...d.data() }));
        recomputeCounters();
        try { localStorage.setItem(LS_KEY, JSON.stringify(state)); } catch (e) { }
      });
      db.collection('entregas').onSnapshot(snap => {
        state.entregas = snap.docs.map(d => ({ id: d.id, ...d.data() }));
        try { localStorage.setItem(LS_KEY, JSON.stringify(state)); } catch (e) { }
      });
      syncStatus = 'ok';
      updateSyncBadge();
    }
    function pushToFirebase() {
      if (!db) return;
      clearTimeout(_pushTimer);
      _pushTimer = setTimeout(async () => {
        try {
          const ops = [];
          state.employees.forEach(e => {
            const ref = db.collection('employees').doc(String(e.id));
            ops.push({ ref, data: { id: e.id, nome: e.nome, matricula: e.matricula, cargo: e.cargo || '', telefone: e.telefone || '', admissao: e.admissao || '', updatedAt: e.updatedAt || new Date().toISOString() } });
          });
          state.epis.forEach(p => {
            const ref = db.collection('epis').doc(String(p.id));
            ops.push({ ref, data: { id: p.id, nome: p.nome, ca: p.ca, caVal: p.caVal || '', tamanhos: p.tamanhos || ['Único'], estoque: p.estoque || {}, renovacaoDias: p.renovacaoDias || 0, estoqueMin: p.estoqueMin || 0, updatedAt: p.updatedAt || new Date().toISOString() } });
          });
          state.entregas.forEach(d => {
            const ref = db.collection('entregas').doc(d.id);
            ops.push({ ref, data: d });
          });
          for (let i = 0; i < ops.length; i += 500) {
            const batch = db.batch();
            ops.slice(i, i + 500).forEach(op => batch.set(op.ref, op.data));
            await batch.commit();
          }
          syncStatus = 'ok';
          updateSyncBadge();
        } catch (e) {
          syncStatus = 'offline';
          updateSyncBadge();
        }
      }, 300);
    }
    function isAdmin() { return true; }
    async function syncEmpPublic(id) {
      if (!db) { go('home'); showToast('❌ Firebase não configurado'); return; }
      try {
        const empDoc = await db.collection('employees').doc(String(id)).get();
        if (!empDoc.exists) { go('home'); showToast('❌ Colaborador não encontrado'); return; }
        const emp = { id: Number(empDoc.id), ...empDoc.data() };
        const entregasSnap = await db.collection('entregas').where('employeeId', '==', Number(id)).get();
        state.cur.emp = emp;
        state._empPublic = entregasSnap.docs.map(d => ({ id: d.id, ...d.data() }));
        go('empview');
      } catch (e) { go('home'); showToast('❌ Erro ao buscar dados'); }
    }

    // ==================== UTILS ====================
    function go(id) {
      curScreen = id;
      document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
      document.getElementById(id).classList.add('active');
      if (id === 'home') renderHome();
      if (id === 'search') renderSearch('');
      if (id === 'employee') renderEmployee();
      if (id === 'empview') renderEmpView();
      if (id === 'selectepi') renderEPIs('');
      if (id === 'signature') renderSig();
      if (id === 'history') renderHistory('');
      if (id === 'delivered') renderDelivered('');
      if (id === 'employees') renderEmps('');
      if (id === 'epis') renderEpiMgmt('');
      ['home', 'history', 'employees', 'epis'].forEach(s => {
        const el = document.getElementById('nv-' + s);
        if (el) el.classList.toggle('active', s === id);
      });
      window.scrollTo(0, 0);
    }
    function showToast(m) { const t = document.getElementById('toast'); t.textContent = m; t.classList.add('show'); clearTimeout(showToast._t); showToast._t = setTimeout(() => t.classList.remove('show'), 3000); }
    function updateSyncBadge() {
      const b = document.getElementById('syncBadge');
      if (!b) return;
      const pending = loadPending();
      const map = { idle: '', syncing: '🔄 Sincronizando...', ok: '', error: '⚠️ Erro ao sincronizar', offline: '📡 Offline — dados salvos local' };
      let txt = map[syncStatus] || '';
      if (pending.length && syncStatus !== 'syncing') txt = '⏳ ' + pending.length + ' pendente(s)';
      b.textContent = txt;
      b.className = 'sync-badge' + (syncStatus === 'error' || syncStatus === 'offline' ? ' sync-warn' : syncStatus === 'ok' && !pending.length ? ' sync-ok' : '');
    }
    function esc(s) { const d = document.createElement('div'); d.textContent = (s == null ? '' : String(s)); return d.innerHTML; }
    function fmtDate(s) { if (!s) return ''; try { return new Date(s).toLocaleDateString('pt-BR'); } catch (e) { return s; } }
    function fmtDateTime(s) { if (!s) return ''; try { return new Date(s).toLocaleString('pt-BR'); } catch (e) { return s; } }
    function parseDate(s) { if (!s) return null; const m = String(s).match(/^(\d{4})-(\d{2})-(\d{2})/); if (m) return new Date(+m[1], +m[2] - 1, +m[3]); const d = new Date(s); return isNaN(d.getTime()) ? null : d; }
    function todayStart() { const n = new Date(); return new Date(n.getFullYear(), n.getMonth(), n.getDate()); }
    function isCAVencido(e) { const v = parseDate(e.caVal); return v && v < todayStart(); }
    function caDias(e) { const v = parseDate(e.caVal); if (!v) return null; return Math.ceil((v - todayStart()) / 86400000); }
    function estoqueLimitado(e) { return !!(e && e.estoque && Object.keys(e.estoque).length); }
    function stockLim(e, t) { return estoqueLimitado(e) ? ((e.estoque[t] || 0)) : Infinity; }

    function toggleDark() {
      const html = document.documentElement; const on = html.classList.toggle('dark');
      localStorage.setItem('epi_dark', on ? '1' : '0');
      document.querySelector('.icon-btn').textContent = on ? '☀️' : '🌙';
    }
    (function () { if (localStorage.getItem('epi_dark') === '1') { document.documentElement.classList.add('dark'); document.querySelector('.icon-btn').textContent = '☀️'; } })();

    // ==================== HOME ====================
    function renderHome() {
      const today = new Date().toDateString();
      const todayD = state.entregas.filter(d => new Date(d.data).toDateString() === today);
      document.getElementById('stToday').textContent = todayD.length;
      document.getElementById('stTotal').textContent = state.entregas.length;
      document.getElementById('stEmp').textContent = state.employees.length;
      document.getElementById('stEpi').textContent = state.epis.length;

      const alerts = [];
      state.epis.forEach(e => {
        if (isCAVencido(e)) alerts.push({ t: 'danger', msg: `🚫 CA VENCIDO: ${esc(e.nome)} (CA ${esc(e.ca)})` });
        else if (caDias(e) != null && caDias(e) <= 90) alerts.push({ t: 'warning', msg: `⚠️ CA de ${esc(e.nome)} vence em ${caDias(e)} dias` });
      });
      state.epis.forEach(e => {
        const total = Object.values(e.estoque || {}).reduce((a, b) => a + b, 0);
        if (estoqueLimitado(e) && total === 0) alerts.push({ t: 'warning', msg: `📦 Sem estoque: ${esc(e.nome)}` });
      });
      document.getElementById('homeAlerts').innerHTML = alerts.length
        ? alerts.map(a => `<div class="alert alert-${a.t}">${a.msg}</div>`).join('')
        : '<div class="alert alert-success">✅ Tudo sob controle!</div>';
    }

    // ==================== BUSCA ====================
    function renderSearch(q) {
      q = (q || '').toLowerCase();
      const r = state.employees.filter(e => e.nome.toLowerCase().includes(q) || e.matricula.includes(q) || (e.telefone || '').includes(q));
      document.getElementById('searchResults').innerHTML = r.map(e => `
    <div class="card" onclick="selectEmp(${e.id})">
      <div style="display:flex;align-items:center;gap:12px;">
        <div class="avatar" style="width:40px;height:40px;font-size:16px;">${esc(e.nome.charAt(0))}</div>
        <div style="flex:1;">
          <div style="font-weight:600;">${esc(e.nome)}</div>
          <div style="color:var(--gray);font-size:12px;">Mat: ${esc(e.matricula)} | ${esc(e.cargo || '-')}</div>
        </div>
        <span class="badge badge-info">${state.entregas.filter(d => d.employeeId === e.id).length} entregas</span>
      </div>
    </div>`).join('') || '<p class="empty">Nenhum colaborador encontrado</p>';
    }

    function selectEmp(id) {
      state.cur.emp = state.employees.find(e => e.id === id);
      state.cart = [];
      state.sig1 = state.sig2 = null;
      go('employee');
    }

    // ==================== FUNCIONÁRIO ====================
    function renderEmployee() {
      const e = state.cur.emp;
      const entregas = state.entregas.filter(d => d.employeeId === e.id);
      const hoje = new Date().toDateString();
      const entregueHoje = entregas.filter(d => new Date(d.data).toDateString() === hoje).length;

      document.getElementById('empInfo').innerHTML = `
    <div class="card static" style="margin-top:12px;">
      <div style="display:flex;gap:14px;align-items:center;">
        <div class="avatar">${esc(e.nome.charAt(0))}</div>
        <div style="flex:1;">
          <div style="font-size:17px;font-weight:700;">${esc(e.nome)}</div>
          <div style="color:var(--gray);font-size:13px;">Mat: ${esc(e.matricula)} | Cargo: ${esc(e.cargo || '-')}</div>
          <div style="color:var(--gray);font-size:12px;">Admissão: ${fmtDate(e.admissao)} · ${entregas.length} entregas totais · ${entregueHoje} hoje</div>
        </div>
        <button class="btn btn-warning small" onclick="openQR(${e.id})" title="QR Code da ficha">🔳 QR</button>
      </div>
    </div>`;

      const alerts = [];
      entregas.forEach(d => {
        d.itens.forEach(it => {
          const epi = state.epis.find(x => x.id === it.epiId);
          const dias = epi ? caDias(epi) : null;
          if (dias != null && dias <= 0) alerts.push({ t: 'danger', msg: `🚫 CA do EPI entregue vencido: ${esc(it.nome)}` });
        });
      });
      state.epis.forEach(ep => {
        if (isDueRenewal(ep.id)) {
          const d = renovacaoDueDate(ep.id);
          alerts.push({ t: 'warning', msg: `♻️ Renovar: ${esc(ep.nome)} (venc. ${fmtDate(d)})` });
        }
      });
      document.getElementById('empAlerts').innerHTML = alerts.length
        ? alerts.map(a => `<div class="alert alert-${a.t}">${a.msg}</div>`).join('')
        : '';

      document.getElementById('empDelivered').innerHTML = empDeliveredHTML(state.entregas.filter(d => d.employeeId === e.id));

      renderCart(); updateFinish();
    }

    function renderCart() {
      document.getElementById('cart').innerHTML = state.cart.map((it, i) => `
    <div class="item-row"><div>
      <div style="font-weight:600;">${it.qty}x ${esc(it.nome)}</div>
      <div style="font-size:12px;color:var(--gray);">Tam ${esc(it.tam)} | ${esc(it.motivo)}</div>
    </div><button class="btn btn-danger small" onclick="removeItem(${i})">✕</button></div>`).join('') || '<p class="empty">Nenhum EPI adicionado</p>';
    }
    function updateFinish() {
      const b = document.getElementById('btnFinish');
      const qty = state.cart.reduce((a, i) => a + i.qty, 0);
      b.disabled = state.cart.length === 0;
      b.textContent = `FINALIZAR (${qty} ${qty === 1 ? 'item' : 'itens'})`;
    }
    function removeItem(i) { state.cart.splice(i, 1); renderCart(); updateFinish(); }

    // ==================== EPIs ====================
    function renderEPIs(q) {
      q = (q || '').toLowerCase();
      const r = state.epis.filter(e => e.nome.toLowerCase().includes(q) || e.ca.includes(q));
      document.getElementById('epiList').innerHTML = r.map(e => {
      const venc = isCAVencido(e);
      const total = Object.values(e.estoque || {}).reduce((a, b) => a + b, 0);
      const estLabel = estoqueLimitado(e) ? total : '∞';
        return `
    <div class="card ${venc ? '' : 'static'}" ${venc ? '' : 'onclick="pickEPI(' + e.id + ')"'}>
      <div style="display:flex;justify-content:space-between;align-items:start;">
        <div>
          <div style="font-weight:600;">${esc(e.nome)}</div>
          <div style="font-size:12px;color:var(--gray);">CA: ${esc(e.ca)} | Tam: ${e.tamanhos.join(', ')} | Est: ${estLabel}</div>
          ${venc ? '<div style="font-size:12px;color:var(--red);font-weight:600;margin-top:4px;">🚫 CA VENCIDO — entrega bloqueada</div>'
            : e.caVal ? `<div style="font-size:12px;color:var(--green);margin-top:4px;">✓ CA válido até ${fmtDate(e.caVal)}</div>` : ''}
        </div>
      </div>
    </div>`;
      }).join('') || '<p class="empty">Nenhum EPI encontrado</p>';
    }

    function lastDeliveryDate(epiId) {
      const emp = state.cur.emp;
      if (!emp) return null;
      const last = state.entregas
        .filter(d => d.employeeId === emp.id && d.itens.some(i => i.epiId === epiId))
        .sort((a, b) => new Date(b.data) - new Date(a.data))[0];
      return last ? new Date(last.data) : null;
    }
    function isDueRenewal(epiId) {
      const epi = state.epis.find(x => x.id === epiId);
      if (!epi || !epi.renovacaoDias) return false;
      const last = lastDeliveryDate(epiId);
      if (!last) return false;
      return Math.floor((new Date() - last) / 86400000) >= epi.renovacaoDias;
    }
    function renovacaoDueDate(epiId) {
      const epi = state.epis.find(x => x.id === epiId);
      const last = lastDeliveryDate(epiId);
      if (!epi || !last || !epi.renovacaoDias) return null;
      const due = new Date(last);
      due.setDate(due.getDate() + epi.renovacaoDias);
      return due;
    }
    function pickEPI(id) {
      const epi = state.epis.find(e => e.id === id);
      if (isCAVencido(epi)) { showToast('🚫 CA vencido — entrega bloqueada'); return; }
      state.cur.epi = epi; state.cur.tam = null;
      document.getElementById('cfgName').textContent = epi.nome;
      document.getElementById('sizeGrid').innerHTML = epi.tamanhos.map(t => {
        const lim = stockLim(epi, t);
        const disabled = lim === 0 ? 'disabled style="opacity:.35"' : '';
        const label = lim === Infinity ? '∞' : lim;
        return `<button class="size-btn" onclick="pickSize('${t}',this)" ${disabled}>${t}<br><span style="font-size:10px;font-weight:400;">(${label})</span></button>`;
      }).join('');
      bindReasons();
      const dueRenew = isDueRenewal(id);
      document.querySelectorAll('#reasonGroup .radio-option').forEach(o => {
        const want = dueRenew ? 'Troca por Vencimento' : 'Troca por Desgaste';
        const on = o.querySelector('input').value === want;
        o.querySelector('input').checked = on;
        o.classList.toggle('selected', on);
      });
      if (dueRenew) showToast('♻️ Renovação vencida — motivo sugerido');
      go('configitem');
    }
    function pickSize(t, btn) { document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('selected')); btn.classList.add('selected'); state.cur.tam = t; }
    function changeQty(d) { const i = document.getElementById('qty'); const v = (parseInt(i.value) || 1) + d; if (v >= 1) i.value = v; }
    function bindReasons() { document.querySelectorAll('#reasonGroup .radio-option').forEach(o => o.onclick = () => { document.querySelectorAll('#reasonGroup .radio-option').forEach(x => x.classList.remove('selected')); o.classList.add('selected'); o.querySelector('input').checked = true; }); }
    function addItem() {
      if (!state.cur.tam) { showToast('⚠️ Selecione o tamanho'); return; }
      const epi = state.cur.epi;
      const qty = parseInt(document.getElementById('qty').value) || 1;
      if (stockLim(epi, state.cur.tam) < qty) { showToast('🚫 Estoque insuficiente'); return; }
      const reasonEl = document.querySelector('input[name="reason"]:checked');
      state.cart.push({ epiId: epi.id, nome: epi.nome, ca: epi.ca, tam: state.cur.tam, qty, motivo: reasonEl ? reasonEl.value : 'Troca por Desgaste', obs: document.getElementById('obs').value });
      save(); showToast('✅ Item adicionado'); go('employee');
    }

    // ==================== ASSINATURA ====================

    function renderSig() {
      const e = state.cur.emp;
      document.getElementById('sigSummary').innerHTML = `
    <div class="card static" style="font-size:13px;">
      <div><strong>👤 ${esc(e.nome)}</strong> — Mat: ${esc(e.matricula)}</div>
      <div style="color:var(--gray);">📅 ${new Date().toLocaleString('pt-BR')}</div>
      <div style="color:var(--gray);">💼 Cargo: ${esc(e.cargo || '-')}</div>
    </div>
    <div class="section-title">Resumo</div>
    ${state.cart.map(it => `<div class="item-row" style="font-size:13px;"><span>${it.qty}x ${esc(it.nome)} (${esc(it.tam)})</span><span style="color:var(--gray);">${esc(it.motivo)}</span></div>`).join('')}
    <div class="alert alert-warning" style="font-size:12px;">Assine nos dois campos para confirmar a entrega.</div>`;
      for (const n of [1, 2]) {
        setupCanvas(n);
        const txtInput = document.getElementById('sigText' + n);
        if (state['sig' + n]) {
          const c = document.getElementById('signatureCanvas' + (n === 1 ? '' : '2'));
          const img = new Image();
          img.onload = () => { const ctx = c.getContext('2d'); const dpr = window.devicePixelRatio || 1; ctx.drawImage(img, 0, 0, c.width / dpr, c.height / dpr); };
          img.src = state['sig' + n];
        } else {
          if (txtInput) txtInput.value = '';
        }
      }
      checkConfirm();
    }
    function setupCanvas(n) {
      const c = document.getElementById('signatureCanvas' + (n === 1 ? '' : '2'));
      const rect = c.getBoundingClientRect();
      const dw = Math.round(rect.width) || 400;
      const dh = Math.round(rect.height) || 120;
      const dpr = window.devicePixelRatio || 1;
      c.width = dw * dpr; c.height = dh * dpr;
      c.style.width = dw + 'px'; c.style.height = dh + 'px';
      const ctx = c.getContext('2d'); ctx.scale(dpr, dpr);
      ctx.strokeStyle = '#1e3a8a'; ctx.lineWidth = 2.5; ctx.lineCap = 'round';
      let drawing = false;
      function pos(e) { const r = c.getBoundingClientRect(); const t = e.touches ? e.touches[0] : e; return [t.clientX - r.left, t.clientY - r.top]; }
      function start(e) { drawing = true; document.getElementById('sigText' + n).value = ''; const [x, y] = pos(e); ctx.beginPath(); ctx.moveTo(x, y); }
      function move(e) { if (!drawing) return; const [x, y] = pos(e); ctx.lineTo(x, y); ctx.stroke(); state['sig' + n] = c.toDataURL(); checkConfirm(); }
      function end() { drawing = false; }
      c.onmousedown = start; c.onmousemove = move; c.onmouseup = end; c.onmouseleave = end;
      c.ontouchstart = e => { e.preventDefault(); start(e); };
      c.ontouchmove = e => { e.preventDefault(); move(e); };
      c.ontouchend = e => { e.preventDefault(); end(); };
    }
    function clearSigN(n) { const c = document.getElementById('signatureCanvas' + (n === 1 ? '' : '2')); const ctx = c.getContext('2d'); const dpr = window.devicePixelRatio || 1; ctx.clearRect(0, 0, c.width / dpr, c.height / dpr); state['sig' + n] = null; document.getElementById('sigText' + n).value = ''; checkConfirm(); }
    function renderSigText(n) {
      const input = document.getElementById('sigText' + n);
      const txt = input.value.trim();
      const c = document.getElementById('signatureCanvas' + (n === 1 ? '' : '2'));
      const ctx = c.getContext('2d');
      const dpr = window.devicePixelRatio || 1;
      const dw = c.width / dpr, dh = c.height / dpr;
      ctx.clearRect(0, 0, dw, dh);
      if (!txt) { state['sig' + n] = null; checkConfirm(); return; }
      const fontSize = Math.max(20, Math.min(48, dw / txt.length * 1.2));
      ctx.font = fontSize + 'px "Brush Script MT", "Segoe Script", cursive';
      ctx.fillStyle = '#1e3a8a';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(txt, dw / 2, dh / 2);
      state['sig' + n] = c.toDataURL();
      checkConfirm();
    }
    function checkConfirm() { document.getElementById('btnConfirm').disabled = !(state.sig1 && state.sig2); }

    function confirmDelivery() {
      // validação de estoque no momento da confirmação
      for (const it of state.cart) {
        const epi = state.epis.find(x => x.id === it.epiId);
        if (stockLim(epi, it.tam) < it.qty) { showToast('🚫 Estoque insuficiente: ' + it.nome); return; }
      }
      const data = new Date().toISOString();
      const delivery = {
        id: 'FICHA-' + Date.now(),
        data,
        employeeId: state.cur.emp.id,
        employeeName: state.cur.emp.nome,
        matricula: state.cur.emp.matricula,
        cargo: state.cur.emp.cargo,
        admissao: state.cur.emp.admissao,
        itens: state.cart.map(it => ({ ...it })),
        sig1: state.sig1, sig2: state.sig2
      };
      // baixa no estoque
      const _now = new Date().toISOString();
      state.cart.forEach(it => {
        const epi = state.epis.find(x => x.id === it.epiId);
        if (estoqueLimitado(epi)) { epi.estoque[it.tam] = (epi.estoque[it.tam] || 0) - it.qty; epi.updatedAt = _now; }
      });
      delivery.createdAt = _now; delivery.updatedAt = _now;
      state.entregas.push(delivery);
      state.lastDelivery = delivery;
      state.cart = [];
      addPending('entrega', 'upsert', { ...delivery });
      save();
      document.getElementById('deliveryId').textContent = 'ID: ' + delivery.id;
      go('success'); showToast('✅ Entrega registrada!');
    }
    function newDelivery() { state.cur.emp = null; state.cart = []; state.sig1 = state.sig2 = null; go('home'); }

    // ==================== HISTÓRICO ====================
    function renderHistory(q) {
      q = (q || '').toLowerCase();
      const list = [...state.entregas].reverse().filter(d => d.employeeName.toLowerCase().includes(q));
      const admin = isAdmin();
      document.getElementById('histList').innerHTML = list.length ? list.map(d => {
        const totalItens = d.itens.reduce((a, i) => a + i.qty, 0);
        return `
    <div class="card static">
      <div style="display:flex;justify-content:space-between;align-items:center;">
        <div>
          <div style="font-weight:600;">👤 ${esc(d.employeeName)} <span class="badge badge-info">${esc(d.matricula)}</span></div>
          <div style="font-size:12px;color:var(--gray);">📅 ${fmtDateTime(d.data)} · ${totalItens} itens</div>
          <div style="font-size:12px;color:var(--gray);">${d.itens.map(i => `${i.qty}x ${esc(i.nome)}`).join(' · ')}</div>
        </div>
        <div style="display:flex;gap:6px;align-items:center;">
          ${admin ? `<button class="btn btn-danger small" onclick="delEntrega('${d.id}')" title="Excluir">🗑</button>` : ''}
          <button class="btn btn-primary small" onclick="viewDelivery('${d.id}')">📄 Ficha</button>
        </div>
      </div>
    </div>`;
      }).join('') : '<p class="empty">Nenhuma entrega registrada</p>';
    }

    function viewDelivery(id) {
      state.lastDelivery = state.entregas.find(d => d.id === id);
      if (state.lastDelivery) generatePDF();
    }
    function delEntrega(id) {
      if (!isAdmin()) { showToast('❌ Apenas administradores podem excluir entregas'); return; }
      if (!confirm('Excluir esta entrega? O estoque será devolvido.')) return;
      const d = state.entregas.find(x => x.id === id);
      if (d) {
        const _now = new Date().toISOString();
        (d.itens || []).forEach(it => {
          const epi = state.epis.find(x => x.id === it.epiId);
          if (epi && epi.estoque && epi.estoque[it.tam] !== undefined) {
            epi.estoque[it.tam] = (epi.estoque[it.tam] || 0) + it.qty;
            epi.updatedAt = _now;
          }
        });
      }
      state.entregas = state.entregas.filter(x => x.id !== id);
      state.deletedEntregas = state.deletedEntregas || [];
      state.deletedEntregas.push(id);
      addPending('entrega', 'delete', { id });
      save();
      renderHistory('');
      showToast('🗑 Entrega excluída');
    }

    // ==================== EPIs ENTREGUES ====================
    function empDeliveredHTML(entregas) {
      const agg = {};
      (entregas || []).forEach(d => {
        d.itens.forEach(it => {
          if (!agg[it.epiId]) agg[it.epiId] = { nome: it.nome, ca: it.ca, qty: 0, last: d.data };
          agg[it.epiId].qty += it.qty;
          if (!agg[it.epiId].last || new Date(d.data) > new Date(agg[it.epiId].last)) agg[it.epiId].last = d.data;
        });
      });
      const list = Object.values(agg).sort((a, b) => b.qty - a.qty);
      if (!list.length) return '<p class="empty">Nenhum EPI entregue para este colaborador.</p>';
      return list.map(a => `
    <div class="item-row" style="font-size:13px;">
      <div><div style="font-weight:600;">${a.qty}x ${esc(a.nome)}</div>
      <div style="font-size:11px;color:var(--gray);">CA: ${esc(a.ca || '-')} · último: ${fmtDate(a.last)}</div></div>
    </div>`).join('');
    }

    function renderDelivered(q) {
      q = (q || '').toLowerCase();
      const agg = {};
      state.entregas.forEach(d => {
        d.itens.forEach(it => {
          if (!agg[it.epiId]) agg[it.epiId] = { epiId: it.epiId, nome: it.nome, ca: it.ca, qty: 0, empCount: new Set(), recentes: [] };
          agg[it.epiId].qty += it.qty;
          agg[it.epiId].empCount.add(d.employeeId);
          agg[it.epiId].recentes.push({ data: d.data, employeeName: d.employeeName, qty: it.qty, tam: it.tam, motivo: it.motivo });
        });
      });
      const list = Object.values(agg).filter(a => a.nome.toLowerCase().includes(q));
      list.sort((a, b) => b.qty - a.qty);
      document.getElementById('deliveredList').innerHTML = list.length ? list.map(a => `
    <div class="card static">
      <div style="display:flex;justify-content:space-between;align-items:start;gap:8px;">
        <div style="font-weight:600;">${esc(a.nome)}</div>
        <span class="badge badge-info">${a.qty}x</span>
      </div>
      <div style="font-size:12px;color:var(--gray);margin:4px 0;">CA: ${esc(a.ca || '-')} · ${a.empCount.size} colaborador(es)</div>
      <div style="font-size:12px;color:var(--gray);">${a.recentes.slice(-3).map(en => `${en.qty}x ${esc(en.employeeName)} (${esc(en.tam)}) — ${fmtDate(en.data)}`).join('<br>')}</div>
    </div>`).join('') : '<p class="empty">Nenhum EPI entregue</p>';
    }

    // ==================== GERENCIAR ====================
    function renderEmps(q) {
      q = (q || '').toLowerCase();
      const r = state.employees.filter(e => e.nome.toLowerCase().includes(q) || e.matricula.includes(q));
      document.getElementById('empMgmt').innerHTML = r.map(e => `
    <div class="card static"><div style="display:flex;justify-content:space-between;align-items:center;">
      <div><div style="font-weight:600;">${esc(e.nome)}</div>
      <div style="font-size:12px;color:var(--gray);">Mat: ${esc(e.matricula)} | Cargo: ${esc(e.cargo || '-')}</div></div>
      <div style="display:flex;gap:6px;">
        <button class="btn btn-warning small" onclick="openQR(${e.id})" title="QR Code">🔳</button>
        <button class="btn btn-primary small" onclick="editEmp(${e.id})">✏️</button>
        <button class="btn btn-danger small" onclick="delEmp(${e.id})">🗑</button>
      </div></div></div>`).join('') || '<p class="empty">Nenhum funcionário</p>';
    }
    function clearEmpForm() { ['empId', 'fNome', 'fMatricula', 'fCargo', 'fTelefone'].forEach(k => document.getElementById(k).value = ''); document.getElementById('fAdmissao').value = ''; document.getElementById('empTitle').textContent = '➕ Novo Funcionário'; }
    function editEmp(id) { const e = state.employees.find(x => x.id === id); document.getElementById('empId').value = e.id; document.getElementById('fNome').value = e.nome; document.getElementById('fMatricula').value = e.matricula; document.getElementById('fCargo').value = e.cargo || ''; document.getElementById('fTelefone').value = e.telefone || ''; document.getElementById('fAdmissao').value = e.admissao || ''; document.getElementById('empTitle').textContent = '✏️ Editar'; go('addemp'); }
    function delEmp(id) { if (confirm('Excluir funcionário?')) { state.deletedEmployees = state.deletedEmployees || []; state.deletedEmployees.push(id); state.employees = state.employees.filter(e => e.id !== id); addPending('employee', 'delete', { id }); save(); renderEmps(''); } }
    function saveEmp() {
      const id = document.getElementById('empId').value;
      const nome = document.getElementById('fNome').value.trim(), matricula = document.getElementById('fMatricula').value.trim();
      if (!nome || !matricula) { showToast('⚠️ Nome e matrícula obrigatórios'); return; }
      const exists = state.employees.find(e => e.matricula === matricula && String(e.id) !== id);
      if (exists) { showToast('⚠️ Matrícula já cadastrada'); return; }
      const data = { nome, matricula, cargo: document.getElementById('fCargo').value.trim() || 'Operacional', telefone: document.getElementById('fTelefone').value.trim(), admissao: document.getElementById('fAdmissao').value, updatedAt: new Date().toISOString() };
      let emp;
      if (id) { emp = state.employees.find(x => x.id == id); Object.assign(emp, data); }
      else { emp = { id: counters.emp++, ...data }; state.employees.push(emp); }
      addPending('employee', 'upsert', { ...emp });
      save(); go('employees'); renderEmps('');
    }

    function renderEpiMgmt(q) {
      q = (q || '').toLowerCase();
      const r = state.epis.filter(e => e.nome.toLowerCase().includes(q) || e.ca.includes(q));
      document.getElementById('epiMgmt').innerHTML = r.map(e => {
      const total = Object.values(e.estoque || {}).reduce((a, b) => a + b, 0);
      const venc = isCAVencido(e);
      const estLabel = estoqueLimitado(e) ? total : '∞';
        return `
    <div class="card static"><div style="display:flex;justify-content:space-between;align-items:center;">
      <div><div style="font-weight:600;">${esc(e.nome)} ${venc ? '<span class="badge badge-danger">CA vencido</span>' : ''}</div>
      <div style="font-size:12px;color:var(--gray);">CA: ${esc(e.ca)} | Estoque: ${estLabel} | Válido: ${fmtDate(e.caVal) || '-'}</div></div>
      <div style="display:flex;gap:6px;">
        <button class="btn btn-primary small" onclick="editEpi(${e.id})">✏️</button>
        <button class="btn btn-danger small" onclick="delEpi(${e.id})">🗑</button>
      </div></div></div>`;
      }).join('') || '<p class="empty">Nenhum EPI</p>';
    }
    function clearEpiForm() { ['epiId', 'eNome', 'eCA', 'eEstoque', 'eRenov'].forEach(k => document.getElementById(k).value = ''); document.getElementById('eCAVal').value = ''; document.getElementById('eTamanhos').value = ''; document.getElementById('epiTitle').textContent = '➕ Novo EPI'; }
    function editEpi(id) { const e = state.epis.find(x => x.id === id); document.getElementById('epiId').value = e.id; document.getElementById('eNome').value = e.nome; document.getElementById('eCA').value = e.ca; document.getElementById('eCAVal').value = e.caVal || ''; document.getElementById('eTamanhos').value = (e.tamanhos || []).join(', '); document.getElementById('eEstoque').value = Object.entries(e.estoque || {}).map(([t, n]) => t + '=' + n).join(', '); document.getElementById('eRenov').value = e.renovacaoDias || ''; document.getElementById('epiTitle').textContent = '✏️ Editar'; go('addepi'); }
    function delEpi(id) { if (confirm('Excluir EPI?')) { state.deletedEpis = state.deletedEpis || []; state.deletedEpis.push(id); state.epis = state.epis.filter(e => e.id !== id); addPending('epi', 'delete', { id }); save(); renderEpiMgmt(''); } }
    function parseEstoque(str) {
      const out = {};
      (str || '').split(',').forEach(p => {
        const [k, v] = p.split('=').map(s => s.trim());
        if (k && v) out[k] = parseInt(v) || 0;
      });
      return out;
    }
    function saveEpi() {
      const id = document.getElementById('epiId').value;
      const nome = document.getElementById('eNome').value.trim(), ca = document.getElementById('eCA').value.trim();
      if (!nome || !ca) { showToast('⚠️ Nome e CA obrigatórios'); return; }
      const tamanhos = (document.getElementById('eTamanhos').value || 'Único').split(',').map(t => t.trim()).filter(Boolean);
      const caVal = document.getElementById('eCAVal').value;
      const estoque = parseEstoque(document.getElementById('eEstoque').value);
      const renovacaoDias = parseInt(document.getElementById('eRenov').value) || 0;
      const updatedAt = new Date().toISOString();
      let epi;
      if (id) { epi = state.epis.find(x => x.id == id); epi.nome = nome; epi.ca = ca; epi.caVal = caVal; epi.tamanhos = tamanhos; epi.estoque = estoque; epi.renovacaoDias = renovacaoDias; epi.updatedAt = updatedAt; }
      else { epi = { id: counters.epi++, nome, ca, caVal, tamanhos, estoque, renovacaoDias, estoqueMin: 0, updatedAt }; state.epis.push(epi); }
      addPending('epi', 'upsert', { ...epi });
      save(); go('epis'); renderEpiMgmt('');
    }

    // ==================== BACKUP / RESTORE ====================
    function exportData() {
      const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = 'backup_epi_' + new Date().toISOString().slice(0, 10) + '.json';
      a.click();
      showToast('✅ Backup exportado');
    }
    function importData(ev) {
      const f = ev.target.files[0];
      if (!f) return;
      const r = new FileReader();
      r.onload = () => {
        try {
          const data = JSON.parse(r.result);
          if (!data || !Array.isArray(data.employees) || !Array.isArray(data.epis)) { showToast('❌ Arquivo inválido'); return; }
          state = {
            employees: data.employees || [],
            epis: data.epis || [],
            entregas: data.entregas || [],
            cart: [],
            cur: {},
            sig1: null,
            sig2: null
          };
          save();
          recomputeCounters();
          showToast('✅ Backup restaurado');
          go('home');
        } catch (err) { showToast('❌ Não foi possível ler o arquivo'); }
      };
      r.readAsText(f);
      ev.target.value = '';
    }

    // ==================== QR CODE / FICHA DO COLABORADOR ====================
    function empQRUrl(e) {
      const base = location.href.split('#')[0].split('?')[0];
      return base + (base.indexOf('?') >= 0 ? '&' : '?') + 'emp=' + e.id;
    }
    function openQR(id) {
      const e = state.employees.find(x => x.id === id);
      if (!e) return;
      const url = empQRUrl(e);
      document.getElementById('qrName').textContent = e.nome;
      document.getElementById('qrMat').textContent = 'Mat: ' + e.matricula;
      const inp = document.getElementById('qrUrl'); inp.value = url;
      inp.onclick = function () { this.select(); try { document.execCommand('copy'); } catch (err) { } showToast('🔗 Link copiado'); };
      const wrap = document.getElementById('qrBox'); wrap.innerHTML = '';
      try { new QRCode(wrap, { text: url, width: 220, height: 220, correctLevel: QRCode.CorrectLevel.H }); }
      catch (err) { wrap.innerHTML = '<p class="empty">Falha ao gerar QR (sem internet).<br>Link: ' + esc(url) + '</p>'; }
      document.getElementById('qrModal').classList.add('show');
    }
    function closeQR() { document.getElementById('qrModal').classList.remove('show'); }

    // ==================== LEITOR DE QR CODE ====================
    let _scanStream = null, _scanTimer = null;
    function startScan() {
      const video = document.getElementById('scannerVideo');
      const status = document.getElementById('scanStatus');
      document.getElementById('scanModal').classList.add('show');
      status.textContent = 'Iniciando câmera…';
      video.srcObject = null;
      if (!('BarcodeDetector' in window)) {
        status.textContent = 'Este navegador não suporta leitura de QR na câmera.';
        return;
      }
      const detector = new BarcodeDetector({ formats: ['qr_code'] });
      navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } }).then(stream => {
        _scanStream = stream; video.srcObject = stream;
        status.textContent = 'Aponte para o QR Code…';
        _scanTimer = setInterval(async () => {
          try {
            const codes = await detector.detect(video);
            if (codes && codes.length) {
              const text = codes[0].rawValue;
              stopScan();
              handleScanned(text);
              status.textContent = '';
            }
          } catch (err) { }
        }, 400);
      }).catch(() => { status.textContent = 'Sem permissão de câmera. Abra o link do QR no navegador.'; });
    }
    function stopScan() {
      if (_scanTimer) { clearInterval(_scanTimer); _scanTimer = null; }
      document.getElementById('scanModal').classList.remove('show');
      if (_scanStream) { _scanStream.getTracks().forEach(t => t.stop()); _scanStream = null; }
      const v = document.getElementById('scannerVideo'); if (v) v.srcObject = null;
    }
    function handleScanned(text) {
      let id = 0;
      try { id = parseInt(new URL(text).searchParams.get('emp') || '0', 10); } catch (err) { }
      if (!id) { id = parseInt(text, 10) || 0; }
      const e = state.employees.find(x => x.id === id);
      if (e) { state.cur.emp = e; state.cart = []; go('empview'); showToast('✅ ' + e.nome); }
      else if (id && USE_API) { state.cur.emp = { id, nome: 'Carregando...', matricula: '' }; state.cart = []; go('empview'); syncEmpPublic(id); }
      else showToast('❌ Colaborador não encontrado no QR');
    }

    function renderEmpView() {
      const e = state.cur.emp;
      document.getElementById('empViewInfo').innerHTML = `
    <div class="card static" style="margin-top:12px;">
      <div style="display:flex;gap:14px;align-items:center;">
        <div class="avatar">${esc(e.nome.charAt(0))}</div>
        <div style="flex:1;">
          <div style="font-size:17px;font-weight:700;">${esc(e.nome)}</div>
          <div style="color:var(--gray);font-size:13px;">Mat: ${esc(e.matricula)} | Cargo: ${esc(e.cargo || '-')}</div>
          <div style="color:var(--gray);font-size:12px;">Admissão: ${fmtDate(e.admissao)}</div>
        </div>
      </div>
    </div>`;
      const list = (state._empPublic || state.entregas.filter(d => d.employeeId === e.id)).slice().reverse();
      document.getElementById('empDelivered2').innerHTML = empDeliveredHTML(state._empPublic || state.entregas.filter(d => d.employeeId === e.id));
      document.getElementById('empViewHistory').innerHTML = list.length ? list.map(d => {
        const total = d.itens.reduce((a, i) => a + i.qty, 0);
        return `
    <div class="card static">
      <div style="font-weight:600;">📅 ${fmtDateTime(d.data)} <span class="badge badge-info">${total} ${total === 1 ? 'item' : 'itens'}</span></div>
      <div style="font-size:12px;color:var(--gray);margin:6px 0;">${d.itens.map(i => `${i.qty}x ${esc(i.nome)} (${esc(i.tam)}) — ${esc(i.motivo)}`).join('<br>')}</div>
      <div style="display:flex;gap:6px;">
        <button class="btn btn-primary small" onclick="viewDelivery('${d.id}')">📄 Baixar Ficha</button>
        <button class="btn btn-success small" onclick="viewDeliveryWA('${d.id}')">📤 WhatsApp</button>
      </div>
    </div>`;
      }).join('') : '<p class="empty">Nenhuma entrega de EPI registrada para este colaborador.</p>';
    }
    function viewDeliveryWA(id) {
      state.lastDelivery = state.entregas.find(d => d.id === id);
      if (state.lastDelivery) sendWhatsApp();
    }

    // ==================== PDF ====================
    function generatePDF() {
      const { jsPDF } = window.jspdf;
      const doc = new jsPDF('p', 'mm', 'a4');
      const d = state.lastDelivery;
      if (!d) { showToast('❌ Entrega não encontrada'); return; }
      const e = d;
      const pw = 210, ph = 297;
      const ml = 12, mr = pw - 12;
      const now = new Date();
      const dataFmt = String(now.getDate()).padStart(2, '0') + '/' + String(now.getMonth() + 1).padStart(2, '0') + '/' + now.getFullYear();

      function drawPageHeader(pageNum, total) {
        doc.setFillColor(30, 58, 138);
        doc.rect(0, 0, pw, 22, 'F');
        doc.setTextColor(255, 255, 255);
        doc.setFontSize(11); doc.setFont('helvetica', 'bold');
        doc.text('FICHA DE CONTROLE DE EPI', pw / 2, 7, { align: 'center' });
        doc.setFontSize(7); doc.setFont('helvetica', 'normal');
        doc.text('SondaGuard', pw / 2, 12, { align: 'center' });
        doc.setFontSize(6);
        doc.text('Elaborador: Rafael Almeida', pw / 2, 16.5, { align: 'center' });
        doc.text('Aprovador: Alica Dayane Araujo Abreu', pw / 2, 20, { align: 'center' });
        doc.setFontSize(6.5);
        doc.text('Data: ' + dataFmt, 5, 7);
        doc.text('Revisão: 02', 5, 11);
        doc.text('Nº Contrato: 5900123734', 5, 15);
        doc.setTextColor(0, 0, 0);
      }

      function drawTerm(y) {
        doc.setFont('helvetica', 'bold'); doc.setFontSize(9);
        doc.text('TERMO DE RESPONSABILIDADE', ml, y); y += 5;
        doc.setFont('helvetica', 'normal'); doc.setFontSize(7);
        const termo = 'Declaro para os devidos fins, que ficarei responsável por todos os materiais e equipamentos de proteção individual – E.P.I.s recebidos neste ato pela SondaGuard, bem como fui capacitado e orientado nos procedimentos práticos de utilização e benefícios a minha saúde e integridade física. Portanto obrigo-me a usa-los para a finalidade a que se destinam, responsabilizando-me ainda por sua guarda e conservação, comunicando à empresa qualquer alteração que torne impróprio o seu uso, conforme o que determina a N.R.-6.7.1 da portaria 3214 da CLT. Declaro ainda que, em caso de danos, perda ou extravio, por negligência de minha parte, ficarei obrigado a pagá-los, tendo em vista pertencerem ao patrimônio desta Empresa e terem finalidade única e exclusiva de prestar segurança e bem estar dos funcionários.';
        let lines = doc.splitTextToSize(termo, pw - 24);
        doc.text(lines, ml, y); y += lines.length * 3; y += 6;
        doc.setFontSize(7);
        doc.text('Assinatura do Funcionário: _______________________________________________', ml, y); y += 8;
        return y;
      }

      function drawEmployeeInfo(y) {
        const rowH = 5.5;
        // Row 1: NOME | DATA DE ADMISSÃO | C.B.O
        doc.setFont('helvetica', 'bold'); doc.setFontSize(8);
        doc.text('NOME:', ml, y);
        doc.setFont('helvetica', 'normal'); doc.text(e.employeeName || '-', ml + 18, y);
        doc.setFont('helvetica', 'bold'); doc.text('DATA DE ADMISSÃO:', 115, y);
        doc.setFont('helvetica', 'normal'); doc.text(fmtDate(e.admissao) || '-', 148, y);
        doc.setFont('helvetica', 'bold'); doc.text('C.B.O:', 175, y);
        doc.setFont('helvetica', 'normal'); doc.text(e.cargo || '-', 188, y);
        doc.line(ml, y + 1.5, mr, y + 1.5); y += rowH;

        // Row 2: FUNÇÃO | DATA DE DEMISSÃO
        doc.setFont('helvetica', 'bold'); doc.text('FUNÇÃO:', ml, y);
        doc.setFont('helvetica', 'normal'); doc.text(e.cargo || '-', ml + 18, y);
        doc.setFont('helvetica', 'bold'); doc.text('DATA DE DEMISSÃO:', 115, y);
        doc.setFont('helvetica', 'normal'); doc.text('(___/___/______)', 148, y);
        doc.line(ml, y + 1.5, mr, y + 1.5); y += rowH;

        // Row 3: MATRÍCULA | SETOR | UNIDADE / OBRA | CONTRATO
        doc.setFont('helvetica', 'bold'); doc.text('MATRÍCULA:', ml, y);
        doc.setFont('helvetica', 'normal'); doc.text(e.matricula || '-', ml + 22, y);
        doc.setFont('helvetica', 'bold'); doc.text('SETOR:', 65, y);
        doc.setFont('helvetica', 'normal'); doc.text(SETOR, 80, y);
        doc.setFont('helvetica', 'bold'); doc.text('UNIDADE / OBRA:', 115, y);
        doc.setFont('helvetica', 'normal'); doc.text('-', 145, y);
        doc.setFont('helvetica', 'bold'); doc.text('CONTRATO:', 165, y);
        doc.setFont('helvetica', 'normal'); doc.text('5900123734', 185, y);
        doc.line(ml, y + 1.5, mr, y + 1.5); y += rowH;
        return y;
      }

      function drawTableHeader(y) {
        const headerH = 10;
        const cols = [
          { label: 'QT.', x: ml, w: 8 },
          { label: 'DESCRIÇÃO DO EQUIPAMENTO', x: ml + 8, w: 58 },
          { label: 'Nº C.A', x: ml + 66, w: 18 },
          { label: 'QTD', x: ml + 84, w: 10 },
          { label: 'DATA DE\nRECEBIMENTO', x: ml + 94, w: 22 },
          { label: 'ASSINATURA\nDO FUNCIONÁRIO', x: ml + 116, w: 28 },
          { label: 'DATA DE\nDEVOLUÇÃO', x: ml + 144, w: 20 },
          { label: 'QTD', x: ml + 164, w: 10 },
          { label: 'MOTIVO\nSUBSTITUIÇÃO', x: ml + 174, w: 16 },
          { label: 'Obs.', x: ml + 190, w: 8 }
        ];
        doc.setTextColor(0, 0, 0);
        doc.setDrawColor(0, 0, 0);
        doc.setLineWidth(0.3);
        doc.setFontSize(5.5); doc.setFont('helvetica', 'bold');
        cols.forEach(c => {
          doc.rect(c.x, y, c.w, headerH, 'D');
          const lines = c.label.split('\n');
          lines.forEach((l, i) => doc.text(l, c.x + 1, y + 3 + i * 2.8));
        });
        doc.setLineWidth(0.2);
        return { y: y + headerH, cols };
      }

      function drawTableRows(y, cols, items) {
        const rowH = 7;
        doc.setFont('helvetica', 'normal'); doc.setFontSize(7);
        items.forEach((it, idx) => {
          if (y + rowH > ph - 30) { doc.addPage(); drawPageHeader(2, 2); y = 28; const h = drawTableHeader(y); y = h.y; }
          doc.rect(cols[0].x, y, cols[0].w, rowH);
          doc.rect(cols[1].x, y, cols[1].w, rowH);
          doc.rect(cols[2].x, y, cols[2].w, rowH);
          doc.rect(cols[3].x, y, cols[3].w, rowH);
          doc.rect(cols[4].x, y, cols[4].w, rowH);
          doc.rect(cols[5].x, y, cols[5].w, rowH);
          doc.rect(cols[6].x, y, cols[6].w, rowH);
          doc.rect(cols[7].x, y, cols[7].w, rowH);
          doc.rect(cols[8].x, y, cols[8].w, rowH);
          doc.rect(cols[9].x, y, cols[9].w, rowH);
          doc.text(String(idx + 1), cols[0].x + 2.5, y + 5);
          doc.text(it.nome || '-', cols[1].x + 1, y + 5);
          doc.text(it.ca || '-', cols[2].x + 1, y + 5);
          doc.text(String(it.qty || ''), cols[3].x + 2, y + 5);
          doc.text(fmtDate(d.data), cols[4].x + 1, y + 5);
          doc.text('-', cols[5].x + 8, y + 5);
          doc.text('-', cols[6].x + 6, y + 5);
          doc.text('-', cols[7].x + 2, y + 5);
          doc.text(it.motivo || '-', cols[8].x + 1, y + 5);
          doc.text(it.tam || '-', cols[9].x + 1, y + 5);
          y += rowH;
        });
        // Fill remaining empty rows
        const remaining = Math.max(0, 10 - items.length);
        for (let i = 0; i < remaining; i++) {
          if (y + rowH > ph - 30) break;
          cols.forEach(c => doc.rect(c.x, y, c.w, rowH));
          doc.text(String(items.length + i + 1), cols[0].x + 2.5, y + 5);
          y += rowH;
        }
        return y;
      }

      function drawSignatures(y) {
        // Colaborador
        doc.setFont('helvetica', 'bold'); doc.setFontSize(8);
        doc.text('Assinatura do Colaborador:', ml, y);
        if (d.sig1) { try { doc.addImage(d.sig1, 'PNG', ml, y + 2, 50, 15); } catch (err) { } }
        doc.line(ml, y + 20, ml + 70, y + 20);
        doc.setFont('helvetica', 'normal'); doc.setFontSize(7);
        doc.text(e.employeeName || '', ml, y + 24);

        // SESMT
        const y2 = y + 30;
        doc.setFont('helvetica', 'bold'); doc.setFontSize(8);
        doc.text('Assinatura do Responsável pela Entrega (SESMT):', ml, y2);
        if (d.sig2) { try { doc.addImage(d.sig2, 'PNG', ml, y2 + 2, 50, 15); } catch (err) { } }
        doc.line(ml, y2 + 20, ml + 70, y2 + 20);
        doc.setFont('helvetica', 'normal'); doc.setFontSize(7);
        doc.text('Responsável', ml, y2 + 24);

        // Local e Data
        const y3 = y2 + 32;
        doc.setFont('helvetica', 'bold'); doc.setFontSize(7);
        doc.text('Local: ', ml, y3);
        doc.setFont('helvetica', 'normal'); doc.text('Parauapebas, PA', ml + 14, y3);
        doc.setFont('helvetica', 'bold'); doc.text('Data: ', ml + 60, y3);
        doc.setFont('helvetica', 'normal'); doc.text(fmtDateTime(d.data), ml + 72, y3);
        return y3 + 8;
      }

      // === PAGE 1: FICHA DE CONTROLE DE EPI ===
      drawPageHeader();
      let y = 28;
      y = drawTerm(y);
      y = drawEmployeeInfo(y);
      y += 2;
      const tbl = drawTableHeader(y);
      y = tbl.y;
      y = drawTableRows(y, tbl.cols, d.itens || []);
      y += 6;
      y = drawSignatures(y);

      const nomeArq = 'Ficha_EPI_' + (e.employeeName || '').replace(/\s/g, '_') + '_' + d.id + '.pdf';
      doc.save(nomeArq);
      showToast('📄 PDF gerado!');
    }

    // ==================== WHATSAPP ====================
    function sendWhatsApp() {
      const d = state.lastDelivery;
      const emp = state.employees.find(x => x.id === d.employeeId);
      const tel = (emp && emp.telefone) ? emp.telefone.replace(/\D/g, '') : '';
      if (tel.length < 10) { showToast('📱 Colaborador sem telefone cadastrado'); return; }
      const texto = 'Ficha de Entrega de EPI\n' + EMPRESA + '\n' +
        'Colaborador: ' + d.employeeName + ' (Mat: ' + d.matricula + ')\n' +
        'Data: ' + fmtDateTime(d.data) + '\n\n' +
        d.itens.map(i => '• ' + i.qty + 'x ' + i.nome + ' (' + i.tam + ') — ' + i.motivo).join('\n');
      window.open('https://wa.me/55' + tel + '?text=' + encodeURIComponent(texto), '_blank');
    }

    // ==================== INIT ====================
    load();
    setLogo();
    updateSyncBadge();
    const fbReady = initFirebase();
    (function () {
      const qp = new URLSearchParams(location.search);
      const empId = parseInt(qp.get('emp') || '0', 10);
      if (empId) {
        if (fbReady && db) {
          connectFirebase().then(() => syncEmpPublic(empId));
        } else {
          const e = state.employees.find(x => x.id === empId);
          if (e) { state.cur.emp = e; state.cart = []; go('empview'); }
          else { go('home'); showToast('❌ Colaborador não encontrado'); }
        }
      } else {
        if (fbReady && db) {
          connectFirebase().then(() => go('home'));
        } else {
          go('home');
        }
      }
    })();
  