# B1-1 Portfolio Website

순수 HTML, CSS, JavaScript를 사용하여 제작한 반응형 개인 포트폴리오 웹사이트입니다.

프로필 캐릭터의 보라색을 메인 컬러로 사용하여 전체 UI의 색상과 분위기를 통일했습니다.

GitHub API를 이용해 Repository 정보를 동적으로 불러오고, 다크 모드와 반응형 레이아웃, Form 유효성 검사 등 기본적인 프론트엔드 기능을 직접 구현했습니다.

---

## 사용 기술

- HTML5
- CSS3
- JavaScript ES6+
- GitHub REST API
- LocalStorage
- Intersection Observer API
- GitHub Pages

---

## 프로젝트 구조

```text
codyssey-B1-1/
├── index.html
├── README.md
│
├── css/
│   └── style.css
│
├── js/
│   └── main.js
│
└── images/
    ├── darkmode.png
    ├── desktopmode.png
    ├── mobilemode.png
    └── profile.jpeg
```

---

## 주요 기능

### 반응형 웹 디자인

모바일 환경을 기본으로 스타일을 작성하고 Media Query를 이용하여 Tablet과 Desktop 환경으로 확장했습니다.

- Mobile: 기본 스타일
- Tablet: 768px 이상
- Desktop: 1024px 이상

Desktop 환경에서는 일반 Navigation Menu를 표시하고, Mobile 환경에서는 햄버거 메뉴를 사용합니다.

---

### 모바일 햄버거 메뉴

모바일 환경에서 메뉴 버튼을 클릭하면 `active` 클래스를 추가하거나 제거하여 Navigation Menu를 표시하거나 숨깁니다.

```text
사용자 클릭
→ click 이벤트 발생
→ active 클래스 변경
→ 메뉴 표시 상태 변경
```

---

### 다크 모드

Light Mode와 Dark Mode를 전환할 수 있습니다.

현재 테마는 LocalStorage에 저장되어 페이지를 새로고침해도 사용자가 선택한 테마가 유지됩니다.

```text
버튼 클릭
→ 현재 테마 확인
→ data-theme 변경
→ CSS 변수 변경
→ LocalStorage 저장
```

---

### 스크롤 인터랙션

스크롤 위치에 따라 UI가 변경됩니다.

- 60px 이상 스크롤: Header 스타일 변경
- 300px 이상 스크롤: Scroll Top 버튼 표시
- Scroll Top 버튼 클릭: 페이지 최상단으로 부드럽게 이동

앵커 링크에는 Smooth Scroll을 적용했습니다.

---

### Intersection Observer

각 Section이 화면에 들어오는 시점을 감지하여 스크롤 애니메이션을 적용했습니다.

```text
Intersection Observer threshold: 0.2
```

요소의 약 20% 이상이 화면에 들어오면 `visible` 클래스를 추가합니다.

---

### GitHub API

GitHub REST API를 사용하여 Repository 데이터를 동적으로 조회합니다.

```text
https://api.github.com/users/kimgem2437/repos
```

API를 통해 다음 정보를 프로젝트 카드에 표시합니다.

- Repository 이름
- 설명
- 주요 언어
- Star 수
- GitHub Repository 링크

API 요청 상태는 다음 네 가지로 나누어 처리합니다.

```text
Loading
Success
Error
Empty
```

오류가 발생하면 사용자가 다시 요청할 수 있도록 `다시 시도` 버튼을 제공합니다.

---

### Contact Form 유효성 검사

Contact Form에는 다음 입력값이 있습니다.

- 이름
- 이메일
- 메시지

JavaScript를 사용하여 다음 항목을 검증합니다.

- 이름 필수 입력
- 이메일 필수 입력
- 이메일 형식 확인
- 메시지 필수 입력

잘못된 입력이 있는 경우 해당 입력창 근처에 오류 메시지를 표시합니다.

Form 제출 시 `preventDefault()`를 사용하여 기본 페이지 새로고침을 막고 JavaScript에서 직접 유효성 검사를 수행합니다.

---

## JavaScript 주요 기능

프로젝트에서는 다음 JavaScript 기능을 사용했습니다.

- `const`
- `let`
- Arrow Function
- Template Literal
- Destructuring
- `map()`
- `forEach()`
- `querySelector()`
- `querySelectorAll()`
- `addEventListener()`
- `classList`
- `textContent`
- `innerHTML`
- `fetch()`
- `async / await`
- `try / catch / finally`
- LocalStorage
- Intersection Observer

---

## 이벤트 → 상태 → 렌더링

이번 프로젝트에서는 사용자 이벤트에 따라 상태를 변경하고, 변경된 상태에 맞춰 화면을 갱신하는 흐름을 구현했습니다.

### 다크 모드

```text
버튼 클릭
→ Theme 상태 변경
→ data-theme 변경
→ 화면 변경
```

### GitHub API

```text
API 요청
→ Loading / Success / Error 상태 변경
→ renderProjects()
→ 프로젝트 화면 변경
```

### Contact Form

```text
사용자 입력
→ 유효성 검사
→ 오류 상태 변경
→ 오류 메시지 표시 / 제거
```

### 모바일 메뉴

```text
버튼 클릭
→ active 클래스 변경
→ 메뉴 표시 / 숨김
```

---

## Screenshots

### Desktop

데스크톱 환경에서 전체 페이지를 캡처한 화면입니다.

![Desktop Mode](images/desktopmode.png)

---

### Mobile

Chrome 개발자 도구의 모바일 화면을 이용하여 반응형 페이지 전체를 캡처했습니다.

![Mobile Mode](images/mobilemode.png)

---

### Dark Mode

다크 모드를 적용한 화면입니다.

![Dark Mode](images/darkmode.png)

---

## 실행 방법

Repository를 Clone합니다.

```bash
git clone https://github.com/kimgem2437/codyssey-B1-1.git
```

프로젝트 폴더로 이동합니다.

```bash
cd codyssey-B1-1
```

VS Code에서 `index.html`을 열고 Live Server를 실행합니다.

---

## 배포

GitHub Pages를 사용하여 배포합니다.

배포 URL:

```text
GitHub Pages 배포 후 URL 추가
```

---

## 구현 기준

| 항목 | 적용 기준 |
| --- | --- |
| Mobile | 기본 스타일 |
| Tablet | 768px 이상 |
| Desktop | 1024px 이상 |
| Header 변경 | Scroll 60px 이상 |
| Scroll Top 표시 | Scroll 300px 이상 |
| Intersection Observer | threshold 0.2 |

---

## 구현한 핵심 개념

이번 프로젝트를 통해 다음 흐름을 학습했습니다.

```text
HTML
→ 웹페이지 구조

CSS
→ 레이아웃과 디자인

JavaScript
→ 사용자 이벤트와 동작

DOM
→ JavaScript에서 HTML 요소 제어

State
→ 현재 UI 상태 저장

Render
→ 상태에 따라 화면 갱신

API
→ 외부 서버 데이터 사용
```

특히 다음 흐름을 중심으로 구현했습니다.

```text
사용자 행동
     ↓
이벤트 발생
     ↓
JavaScript 처리
     ↓
상태 변경
     ↓
DOM 변경
     ↓
화면 갱신
```