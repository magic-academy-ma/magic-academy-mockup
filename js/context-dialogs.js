(function () {
  const SAVE_DATA = {
    version: 1,
    name: '첫 번째 시뮬레이션',
    tick: 10,
    seed: '7f3a9c21',
    persona: { name: 'Leo', mbti: 'ESTP' },
    events: [
      { tick: 2, name: 'Adel — stress 상승 시작', type: 'stress' },
      { tick: 7, name: 'Leo & Adel 갈등 발생', type: 'relation' },
      { tick: 10, name: '학생 실종 — STUDENT_MISSING', type: 'missing' }
    ]
  };

  function closeOnBackdrop(event) {
    if (event.target === event.currentTarget) event.currentTarget.close();
  }

  function saveMarkup() {
    return `<dialog class="context-dialog" id="save-context-dialog" aria-labelledby="save-context-title">
      <div class="context-dialog__header"><strong class="context-dialog__title" id="save-context-title">시뮬레이션 저장</strong><button class="btn btn-ghost context-dialog__close" data-dialog-close aria-label="저장 창 닫기">✕</button></div>
      <div class="context-dialog__body">
        <div class="context-dialog__field"><label for="save-context-name">저장 이름</label><input id="save-context-name" value="${SAVE_DATA.name}"></div>
        <div class="context-dialog__summary"><div><span>Current Tick</span><strong>10</strong></div><div><span>Seed</span><strong>${SAVE_DATA.seed}</strong></div><div><span>Persona</span><strong>Leo (ESTP)</strong></div><div><span>Active Agents</span><strong>4 / 5</strong></div></div>
      </div>
      <div class="context-dialog__footer"><button class="btn btn-outline" id="save-context-export">JSON 내보내기</button><button class="btn btn-ghost" data-dialog-close>취소</button><button class="btn btn-primary" id="save-context-confirm">저장</button></div>
    </dialog>`;
  }

  function guideMarkup() {
    const steps = [
      ['Agent를 선택하세요', '왼쪽 목록이나 지도 위 초상화를 누르면 현재 상태와 최근 기억을 볼 수 있습니다.'],
      ['시간을 흐르게 하세요', '상단 재생 버튼으로 시간을 진행하고 일시정지해 원하는 장면을 확인하세요.'],
      ['사건의 원인을 살펴보세요', '알림이나 로그에서 사건을 열어 원인과 관련 기억을 확인하세요.'],
      ['관계와 대화를 연결하세요', '대화 기록과 관계 그래프를 함께 보며 변화의 맥락을 확인하세요.']
    ];
    return `<dialog class="context-dialog" id="guide-context-dialog" aria-labelledby="guide-context-title">
      <div class="context-dialog__header"><strong class="context-dialog__title" id="guide-context-title">관찰 가이드</strong><button class="btn btn-ghost context-dialog__close" data-dialog-close aria-label="가이드 닫기">✕</button></div>
      <div class="context-dialog__body"><div class="context-dialog__steps">${steps.map((step, index) => `<div class="context-dialog__step"><strong>${index + 1}. ${step[0]}</strong><p>${step[1]}</p></div>`).join('')}</div></div>
      <div class="context-dialog__footer"><button class="btn btn-primary" data-dialog-close>관찰 계속하기</button></div>
    </dialog>`;
  }

  function toast(message) {
    document.querySelector('.context-toast')?.remove();
    const element = document.createElement('div');
    element.className = 'context-toast';
    element.setAttribute('role', 'status');
    element.innerHTML = `<span>${message}</span><a href="10-mypage-simulations.html">내 기록 보기</a>`;
    document.body.appendChild(element);
    setTimeout(() => element.remove(), 5000);
  }

  function exportSave() {
    SAVE_DATA.name = document.getElementById('save-context-name').value.trim() || SAVE_DATA.name;
    const blob = new Blob([JSON.stringify(SAVE_DATA, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `ma-save-tick${SAVE_DATA.tick}-${SAVE_DATA.persona.mbti.toLowerCase()}.json`;
    link.click();
    URL.revokeObjectURL(url);
  }

  function init(options) {
    const includeGuide = options?.guide !== false;
    document.body.insertAdjacentHTML('beforeend', saveMarkup() + (includeGuide ? guideMarkup() : ''));
    document.querySelectorAll('.context-dialog').forEach(dialog => {
      dialog.addEventListener('click', closeOnBackdrop);
      dialog.querySelectorAll('[data-dialog-close]').forEach(button => button.addEventListener('click', () => dialog.close()));
    });
    document.getElementById('save-context-export').addEventListener('click', exportSave);
    document.getElementById('save-context-confirm').addEventListener('click', () => {
      document.getElementById('save-context-dialog').close();
      toast('시뮬레이션을 저장했습니다.');
    });
  }

  window.MagicAcademyDialogs = {
    init,
    openSave() { document.getElementById('save-context-dialog').showModal(); },
    openGuide() { document.getElementById('guide-context-dialog').showModal(); }
  };
})();
