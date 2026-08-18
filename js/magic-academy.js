/* Magic Academy — Shared Interactions */

/* ── Viewport Scale (Figma-present style) ────────────────── */
function initScreenScale() {
  const screen = document.querySelector('.screen, .sim-screen, .ob-screen');
  if (!screen) return; // scrollable pages (index, design-system) are excluded

  const DESIGN_W = 1440;
  const DESIGN_H = 900;

  function apply() {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const scale = Math.min(vw / DESIGN_W, vh / DESIGN_H);
    const ox = Math.round((vw - DESIGN_W * scale) / 2);
    const oy = Math.round((vh - DESIGN_H * scale) / 2);
    // Use CSS custom property to avoid forced sync layout reads
    document.documentElement.style.setProperty('--screen-scale', scale);
    document.documentElement.style.setProperty('--screen-ox', ox + 'px');
    document.documentElement.style.setProperty('--screen-oy', oy + 'px');
  }

  apply();
  window.addEventListener('resize', apply, { passive: true });
}

/* ── Screen Navigation ───────────────────────────────────── */
function navigateTo(screenFile) {
  window.location.href = screenFile;
}

/* ── Inspector Drawer ────────────────────────────────────── */
function openInspector(drawerId = 'inspector') {
  const el = document.getElementById(drawerId);
  if (el) el.classList.add('open');
}

function closeInspector(drawerId = 'inspector') {
  const el = document.getElementById(drawerId);
  if (el) el.classList.remove('open');
}

function toggleInspector(drawerId = 'inspector') {
  const el = document.getElementById(drawerId);
  if (el) el.classList.toggle('open');
}

/* ── Event Notice ────────────────────────────────────────── */
function showEventNotice(noticeId = 'event-notice') {
  const el = document.getElementById(noticeId);
  if (el) {
    el.classList.add('visible');
    el.style.pointerEvents = 'auto';
  }
}

function hideEventNotice(noticeId = 'event-notice') {
  const el = document.getElementById(noticeId);
  if (el) el.classList.remove('visible');
}

/* ── Modal ───────────────────────────────────────────────── */
function openModal(modalId) {
  const el = document.getElementById(modalId);
  if (el) {
    el.classList.add('open');
    el.style.pointerEvents = 'auto';
  }
}

function closeModal(modalId) {
  const el = document.getElementById(modalId);
  if (el) {
    el.classList.remove('open');
    el.style.pointerEvents = 'none';
  }
}

/* ── Agent Marker Interactions ───────────────────────────── */
function initAgentMarkers() {
  const markers = document.querySelectorAll('.agent-marker');
  const panel = document.getElementById('agent-panel');

  markers.forEach(marker => {
    marker.addEventListener('click', (e) => {
      e.stopPropagation();

      /* deselect all others */
      markers.forEach(m => m.classList.remove('state-selected'));

      /* skip MISSING agents (can't select) */
      if (marker.classList.contains('state-missing')) return;

      marker.classList.add('state-selected');

      /* populate and show agent panel */
      if (panel) {
        const agentName  = marker.dataset.agent  || '';
        const agentLoc   = marker.dataset.loc    || '';
        const agentMood  = marker.dataset.mood   || '보통';
        const stressVal  = parseInt(marker.dataset.stress  || '50', 10);
        const fatigueVal = parseInt(marker.dataset.fatigue || '40', 10);
        const satVal     = parseInt(marker.dataset.sat     || '60', 10);

        const nameEl = panel.querySelector('.panel-agent-name');
        const locEl  = panel.querySelector('.panel-agent-loc');

        if (nameEl) nameEl.textContent = agentName;
        if (locEl)  locEl.textContent  = agentLoc;

        updateBar(panel, 'stress',  stressVal);
        updateBar(panel, 'fatigue', fatigueVal);
        updateBar(panel, 'sat',     satVal);

        panel.style.display = 'flex';
        panel.style.animation = 'float-up 220ms ease both';
      }
    });
  });

  /* click away to deselect */
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.agent-marker') && !e.target.closest('#agent-panel')) {
      markers.forEach(m => m.classList.remove('state-selected'));
      if (panel) panel.style.display = 'none';
    }
  });
}

function updateBar(panel, key, value) {
  const fill = panel.querySelector(`[data-bar="${key}"]`);
  if (fill) fill.style.width = value + '%';
  const label = panel.querySelector(`[data-bar-val="${key}"]`);
  if (label) label.textContent = value;
}

/* ── Persona Card Selection ──────────────────────────────── */
function initPersonaCards() {
  const cards = document.querySelectorAll('.persona-card');
  const nextBtn = document.getElementById('btn-next');

  cards.forEach(card => {
    card.addEventListener('click', () => {
      cards.forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      if (nextBtn) {
        nextBtn.disabled = false;
        nextBtn.classList.remove('btn-outline');
        nextBtn.classList.add('btn-primary');
      }
    });
  });
}

/* ── Relationship Graph ──────────────────────────────────── */
function initGraphNodes() {
  const nodes = document.querySelectorAll('.graph-node');
  const edges = document.querySelectorAll('.graph-edge');

  nodes.forEach(node => {
    node.addEventListener('click', () => {
      const id = node.dataset.id;

      nodes.forEach(n => n.classList.remove('selected'));
      node.classList.add('selected');

      /* highlight connected edges */
      edges.forEach(edge => {
        const connected = edge.dataset.from === id || edge.dataset.to === id;
        edge.style.opacity = connected ? '1' : '0.15';
        if (connected) {
          edge.style.strokeWidth = '2';
        } else {
          edge.style.strokeWidth = '1';
        }
      });
    });
  });

  /* click on canvas to reset */
  const canvas = document.getElementById('graph-canvas');
  if (canvas) {
    canvas.addEventListener('click', (e) => {
      if (e.target === canvas || e.target.tagName === 'svg') {
        nodes.forEach(n => n.classList.remove('selected'));
        edges.forEach(e => { e.style.opacity = '0.6'; e.style.strokeWidth = '1.5'; });
      }
    });
  }
}

/* ── Onboarding Slides ───────────────────────────────────── */
function initOnboarding() {
  const slides = document.querySelectorAll('.ob-slide');
  const pageLine = document.querySelector('.onboarding__page-line');
  const pageNum  = document.querySelector('.onboarding__page-num');
  let current = 0;

  function goTo(n) {
    slides.forEach((s, i) => s.style.display = i === n ? 'flex' : 'none');
    if (pageLine) pageLine.style.setProperty('--progress', ((n + 1) / slides.length * 100) + '%');
    if (pageNum)  pageNum.textContent = `0${n + 1} / 0${slides.length}`;
    current = n;
  }

  const nextBtn = document.getElementById('ob-next');
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (current < slides.length - 1) goTo(current + 1);
      else navigateTo('02-persona-select.html');
    });
  }

  goTo(0);
}

/* ── Simulation Tick Counter ─────────────────────────────── */
function initTickCounter() {
  const el = document.querySelector('.topbar__tick span');
  if (!el) return;
  let tick = parseInt(el.textContent || '10', 10);

  setInterval(() => {
    tick++;
    el.textContent = tick;
  }, 2400); /* 2.4s per tick for visual effect */
}

/* ── Inspector "원인 보기" from Event Notice ──────────────── */
function initEventNoticeLink() {
  const link = document.querySelector('.event-notice__cta');
  if (link) {
    link.addEventListener('click', () => {
      hideEventNotice();
      openInspector();
    });
  }
}

/* ── DOMContentLoaded bootstrap ──────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initScreenScale();
  /* auto-detect page type and init */
  if (document.querySelector('.agent-marker')) initAgentMarkers();
  if (document.querySelector('.persona-card'))  initPersonaCards();
  if (document.querySelector('.graph-node'))    initGraphNodes();
  if (document.querySelector('.ob-slide'))      initOnboarding();
  if (document.querySelector('.topbar__tick'))  initTickCounter();
  if (document.querySelector('.event-notice'))  {
    initEventNoticeLink();
    /* auto-show event notice after 800ms on simulation screen */
    if (document.getElementById('sim-screen')) {
      setTimeout(() => showEventNotice(), 800);
    }
  }
});
