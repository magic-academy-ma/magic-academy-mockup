# Magic Academy — Interactive Web Mockup & Design System

> **“서사는 마법적으로, 원인은 명확하게.”**  
> Multi-Agent 사회 시뮬레이션 프로젝트 **Magic Academy**의 고해상도 인터랙티브 프로토타입 및 디자인 시스템입니다.

🔗 **Live Demo (GitHub Pages):** [https://magic-academy-ma.github.io/magic-academy-mockup/](https://magic-academy-ma.github.io/magic-academy-mockup/)

---

## 🏛️ 화면 목록 & 네비게이터

| No. | 화면명 | 파일 경로 | 주요 기능 및 특징 |
|:---:|---|---|---|
| **00** | **Design System** | [`screens/00-design-system.html`](screens/00-design-system.html) | 60:30:10 컬러 팔레트, 타이포그래피, Spacing, 모션 토큰, 컴포넌트 쇼케이스 |
| **01** | **Onboarding** | [`screens/01-onboarding.html`](screens/01-onboarding.html) | 3단계 스토리텔링 슬라이드, 캠퍼스 일러스트 히어로 |
| **02** | **Persona Select** | [`screens/02-persona-select.html`](screens/02-persona-select.html) | 5인 캐릭터(Adel, Leo, Ria, Kai, Sera) 선택 카드 UI |
| **03** | **Simulation Main** | [`screens/03-simulation.html`](screens/03-simulation.html) | 월드 맵 관찰, Left Panel(에이전트 목록/필터), Right Panel(상세 상태), STUDENT_MISSING 사건 알림, Event Log |
| **04** | **Inspector Drawer** | [`screens/04-inspector.html`](screens/04-inspector.html) | 6단계 인과 추적 (Condition → Candidate → Policy → Conflict Resolution → Commit → Runtime Effect) |
| **05** | **Relationship Graph** | [`screens/05-relationship.html`](screens/05-relationship.html) | 에이전트 간 신뢰도/갈등 관계 노드 그래프 모달 |
| **06** | **Persona Setup** | [`screens/06-persona-setup.html`](screens/06-persona-setup.html) | MBTI 5종 선택, Big Five 성격 5단위 슬라이더, 시뮬레이션 및 Magic Layer 파라미터 설정 |
| **07** | **Login** | [`screens/07-login.html`](screens/07-login.html) | 마법학교 로그인 화면, 소셜 로그인 |
| **08** | **Main / Hub** | [`screens/08-main.html`](screens/08-main.html) | 대시보드 허브, 최근 관찰 기록, 새 시뮬레이션 시작 |
| **09** | **Save Modal** | [`screens/09-save-modal.html`](screens/09-save-modal.html) | 시뮬레이션 상태 스냅샷 저장 모달 |
| **10** | **My Page** | [`screens/10-mypage.html`](screens/10-mypage.html) | 사용자 프로필, 저장된 시뮬레이션 목록, 관찰 통계 |

---

## 🎨 Design System Summary

* **Surface Base**: `#021029` (Deep Navy)
* **Surface Raised / Cards**: `#3a3939` (Muted Slate)
* **Primary / Brand Accent**: `#d7c6a7` (Cream Ivory)
* **Interactive / CTA**: `#00b4d8` (Glowing Cyan)
* **Magic Event**: `#f4a442` (Warm Gold) / `#D4AF37` (Golden Amber)
* **Critical / Missing**: `#e05252` (Red)

---

## 🚀 로컬 실행 방법

별도의 빌드 도구 없이 정적 웹 서버로 바로 실행 가능합니다.

```bash
# Python 3
python3 -m http.server 8080

# Node.js
npx serve .
```

브라우저에서 `http://localhost:8080`으로 접속하여 탐색할 수 있습니다.
