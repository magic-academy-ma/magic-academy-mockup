(() => {
  const people = {
    ria: { name: '리아', image: 'assets/character/Ria_INFP.png', trait: '마음을 먼저 살피는 상상가' },
    adel: { name: '아델', image: 'assets/character/Adel_ISTJ.png', trait: '차분하게 계획을 세우는 관찰자' },
    leo: { name: '레오', image: 'assets/character/Leo_ESTP.png', trait: '망설임 없이 뛰어드는 탐험가' },
    kai: { name: '카이', image: 'assets/character/Kai_ENTJ.png', trait: '모두의 방향을 고민하는 이끔이' },
    sera: { name: '세라', image: 'assets/character/Sera_ESFJ.png', trait: '사람 사이를 따뜻하게 잇는 친구' },
    orion: { name: '오리온 교수', image: 'assets/character/professor_orion.png', trait: '질문으로 가능성을 여는 스승' }
  };

  const stories = [
    { title: '첫 만남', time: '오전 8:20 · 등교 시간', event: '새 학기의 첫 만남', eventPlace: 'square', description: '새 학기 아침, 여섯 인물이 각자의 기대를 품고 광장에 도착합니다.', dialogue: ['리아 · 아델', '“같이 교실까지 걸어갈래?”'], relation: '아델과 첫 대화를 시작했어요.', action: '광장에서 아델에게 먼저 인사해요.', feeling: '새로운 친구를 만날 생각에 조금 설레요.', clue: '리아는 낯선 자리에서 혼자 있는 사람을 지나치지 못해요. 아델이 시간표를 여러 번 확인하는 모습을 보고 먼저 다가갔습니다.', selected: 'ria', positions: { ria:[26,73], adel:[34,69], leo:[66,72], kai:[72,68], sera:[25,32], orion:[67,30] } },
    { title: '낯선 쪽지', time: '오전 10:10 · 쉬는 시간', event: '책 사이에서 발견한 쪽지', eventPlace: 'library', description: '도서관의 오래된 책에서 정체를 알 수 없는 쪽지가 발견됩니다.', dialogue: ['아델 · 리아', '“이 문양, 어제 광장에서 봤어.”'], relation: '리아에게 자신의 발견을 가장 먼저 알려요.', action: '쪽지의 문양과 캠퍼스 지도를 비교해요.', feeling: '뜻밖의 단서를 놓치지 않으려 집중하고 있어요.', clue: '아델은 작은 차이도 꼼꼼히 기억합니다. 어제 광장 바닥에서 본 문양과 닮았다는 사실을 떠올려 도서관에 남았습니다.', selected: 'adel', positions: { ria:[68,27], adel:[73,23], leo:[27,73], kai:[31,69], sera:[26,31], orion:[68,68] } },
    { title: '서로 다른 의견', time: '오후 12:30 · 점심 시간', event: '쪽지를 둘러싼 의견 차이', eventPlace: 'classroom', description: '바로 조사하자는 레오와 먼저 알리자는 카이의 의견이 엇갈립니다.', dialogue: ['레오 · 카이', '“직접 확인하면 금방 알 수 있어.”'], relation: '카이와 생각은 다르지만 함께 움직이기로 해요.', action: '쪽지에 적힌 장소로 먼저 가자고 제안해요.', feeling: '위험보다 새로운 발견에 대한 기대가 더 커요.', clue: '레오는 직접 부딪혀 확인하는 편입니다. 다만 혼자 나서면 친구들이 불안해할 것을 알아 카이의 계획을 기다립니다.', selected: 'leo', positions: { ria:[28,29], adel:[22,34], leo:[34,25], kai:[39,30], sera:[68,28], orion:[69,70] } },
    { title: '마력의 흔들림', time: '오후 2:05 · 실험 수업', event: '연구실의 마력이 흔들려요', eventPlace: 'lab', description: '작은 마력 이상이 일어나자 각자 다른 방식으로 친구들을 돕습니다.', dialogue: ['세라 · 레오', '“괜찮아, 천천히 같이 나가자.”'], relation: '레오가 세라를 더 믿게 되었어요.', action: '놀란 친구들을 차분히 출구로 안내해요.', feeling: '모두가 무사한지 확인하고 싶어 긴장했어요.', clue: '세라는 분위기의 변화를 빠르게 알아차립니다. 레오가 평소보다 말이 없어진 것을 보고 가장 먼저 곁으로 다가갔습니다.', selected: 'sera', positions: { ria:[69,68], adel:[63,73], leo:[72,64], kai:[67,75], sera:[77,71], orion:[27,29] } },
    { title: '함께 찾는 답', time: '오후 4:20 · 방과 후', event: '네 장소의 단서가 이어져요', eventPlace: 'square', description: '흩어진 단서를 한자리에 모으자 혼자서는 보이지 않던 연결이 드러납니다.', dialogue: ['카이 · 모두', '“각자 본 것을 순서대로 맞춰 보자.”'], relation: '서로의 강점을 믿고 역할을 나눴어요.', action: '모두의 단서를 광장 지도 위에 정리해요.', feeling: '책임감이 크지만 친구들과 함께라 든든해요.', clue: '카이는 복잡한 상황에서 먼저 순서를 만듭니다. 이번에는 결론을 서두르지 않고 모두의 말을 들은 뒤 역할을 나눴습니다.', selected: 'kai', positions: { ria:[24,72], adel:[31,75], leo:[38,69], kai:[45,74], sera:[52,70], orion:[64,30] } },
    { title: '교수의 질문', time: '오후 5:10 · 해 질 무렵', event: '답 대신 건넨 하나의 질문', eventPlace: 'library', description: '오리온 교수는 정답을 알려주는 대신, 선택의 의미를 되묻습니다.', dialogue: ['오리온 교수 · 아델', '“그 단서가 친구에게는 어떤 의미였을까?”'], relation: '학생들이 서로의 선택을 이해하기 시작해요.', action: '학생들이 스스로 답을 찾도록 질문을 건네요.', feeling: '각자의 생각이 이어지는 모습을 흐뭇하게 바라봐요.', clue: '오리온 교수는 빠른 정답보다 스스로 찾은 이유가 오래 남는다고 믿습니다. 학생들이 서로의 관점을 들을 수 있는 질문을 골랐습니다.', selected: 'orion', positions: { ria:[65,29], adel:[71,25], leo:[27,73], kai:[33,69], sera:[40,74], orion:[77,31] } },
    { title: '우리의 약속', time: '오후 6:40 · 하루의 끝', event: '다음 만남을 위한 약속', eventPlace: 'square', description: '하루의 선택들이 모여, 여섯 인물 사이에 새로운 약속이 생깁니다.', dialogue: ['여섯 사람', '“내일은 함께 북쪽 정원을 살펴보자.”'], relation: '여섯 사람 모두를 잇는 첫 약속이 생겼어요.', action: '친구들과 내일의 조사 계획을 기록해요.', feeling: '혼자가 아니라는 생각에 마음이 편안해졌어요.', clue: '리아는 오늘 나눈 대화가 사라지지 않도록 약속을 글로 남겼습니다. 작은 배려가 모두의 다음 선택을 이어 주었습니다.', selected: 'ria', positions: { ria:[29,72], adel:[36,69], leo:[43,74], kai:[50,69], sera:[57,74], orion:[64,68] } }
  ];

  const elements = {
    map: document.querySelector('#campus-map'), characters: document.querySelector('#characters'), range: document.querySelector('#story-range'), output: document.querySelector('#step-output'), description: document.querySelector('#step-description'), time: document.querySelector('#time-label'), event: document.querySelector('#event-bubble strong'), dialogueNames: document.querySelector('.dialogue-names'), dialogueText: document.querySelector('#dialogue p'), avatar: document.querySelector('#selected-avatar'), name: document.querySelector('#selected-title'), trait: document.querySelector('#selected-trait'), action: document.querySelector('#selected-action'), feeling: document.querySelector('#selected-feeling'), relation: document.querySelector('#selected-relation'), clue: document.querySelector('#clue-text'), clueToggle: document.querySelector('#clue-toggle'), cluePanel: document.querySelector('#clue-panel'), play: document.querySelector('#play-toggle'), previous: document.querySelector('#previous-step'), status: document.querySelector('#stage-status')
  };

  let step = 0;
  let selected = stories[0].selected;
  let timer = null;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function renderCharacters() {
    elements.characters.innerHTML = Object.entries(people).map(([id, person]) => `<button class="character" type="button" data-person="${id}" aria-label="${person.name} 살펴보기"><img src="${person.image}" alt=""><span>${person.name}</span></button>`).join('');
    elements.characters.querySelectorAll('.character').forEach(button => button.addEventListener('click', () => {
      selected = button.dataset.person;
      renderPerson(selected);
      renderSelection();
    }));
  }

  function renderPerson(id) {
    const person = people[id];
    const story = stories[step];
    elements.avatar.src = person.image;
    elements.avatar.alt = person.name;
    elements.name.textContent = person.name;
    elements.trait.textContent = person.trait;
    if (id === story.selected) {
      elements.action.textContent = story.action;
      elements.feeling.textContent = story.feeling;
      elements.relation.textContent = story.relation;
      elements.clue.textContent = story.clue;
    } else {
      elements.action.textContent = `${story.event}을(를) 지켜보고 있어요.`;
      elements.feeling.textContent = '친구들의 다음 선택을 조심스럽게 기다려요.';
      elements.relation.textContent = '오늘의 대화가 새로운 관계로 이어지고 있어요.';
      elements.clue.textContent = `${person.name}은(는) 자신의 성격과 지금까지 본 장면을 바탕으로 다음 행동을 고르고 있습니다.`;
    }
  }

  function renderSelection() {
    elements.characters.querySelectorAll('.character').forEach(button => {
      const active = button.dataset.person === selected;
      button.classList.toggle('is-selected', active);
      button.setAttribute('aria-pressed', String(active));
    });
  }

  function renderStep(nextStep) {
    step = Math.max(0, Math.min(6, nextStep));
    const story = stories[step];
    selected = story.selected;
    elements.range.value = String(step + 1);
    elements.output.value = `${step + 1} / 7 · ${story.title}`;
    elements.output.textContent = `${step + 1} / 7 · ${story.title}`;
    elements.description.textContent = story.description;
    elements.time.textContent = story.time;
    elements.event.textContent = story.event;
    elements.dialogueNames.textContent = story.dialogue[0];
    elements.dialogueText.textContent = story.dialogue[1];
    elements.previous.disabled = step === 0;

    document.querySelectorAll('.place').forEach(place => {
      const isEvent = place.dataset.place === story.eventPlace;
      place.classList.toggle('has-event', isEvent);
      place.classList.toggle('is-active', isEvent);
      place.setAttribute('aria-pressed', String(isEvent));
    });
    elements.characters.querySelectorAll('.character').forEach(button => {
      const position = story.positions[button.dataset.person];
      button.style.left = `${position[0]}%`;
      button.style.top = `${position[1]}%`;
    });
    renderPerson(selected);
    renderSelection();
  }

  function stopPlayback() {
    window.clearInterval(timer);
    timer = null;
    elements.play.setAttribute('aria-pressed', 'false');
    elements.play.innerHTML = '<span aria-hidden="true">▶</span><span>재생</span>';
    elements.status.textContent = reduceMotion ? '정적인 장면으로 관찰 중' : '이야기 관찰 중';
  }

  function startPlayback() {
    if (reduceMotion) return;
    if (step === 6) renderStep(0);
    elements.play.setAttribute('aria-pressed', 'true');
    elements.play.innerHTML = '<span aria-hidden="true">Ⅱ</span><span>일시정지</span>';
    elements.status.textContent = '이야기 재생 중';
    timer = window.setInterval(() => {
      if (step === 6) return stopPlayback();
      renderStep(step + 1);
    }, 3200);
  }

  renderCharacters();
  renderStep(0);
  if (reduceMotion) {
    document.body.classList.add('is-static');
    elements.play.disabled = true;
    elements.play.title = '움직임 줄이기 설정에서는 자동 재생을 사용하지 않습니다.';
    elements.status.textContent = '정적인 장면으로 관찰 중';
  }

  elements.range.addEventListener('input', event => { stopPlayback(); renderStep(Number(event.target.value) - 1); });
  elements.play.addEventListener('click', () => timer ? stopPlayback() : startPlayback());
  elements.previous.addEventListener('click', () => { stopPlayback(); renderStep(step - 1); });
  elements.clueToggle.addEventListener('click', () => {
    const willOpen = elements.cluePanel.hidden;
    elements.cluePanel.hidden = !willOpen;
    elements.clueToggle.setAttribute('aria-expanded', String(willOpen));
    elements.clueToggle.querySelector('span').textContent = willOpen ? '−' : '＋';
  });
  document.querySelectorAll('.place').forEach(place => place.addEventListener('click', () => {
    document.querySelectorAll('.place').forEach(item => { item.classList.remove('is-active'); item.setAttribute('aria-pressed', 'false'); });
    place.classList.add('is-active');
    place.setAttribute('aria-pressed', 'true');
  }));

  document.querySelectorAll('.place img, .character img, #selected-avatar').forEach(image => image.addEventListener('error', () => {
    document.body.classList.add('is-static');
    stopPlayback();
    image.closest('.place-image, .character, .selected-person')?.classList.add('image-fallback');
  }, { once: true }));
})();
