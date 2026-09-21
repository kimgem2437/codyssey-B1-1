# B1-1 Portfolio Website

HTML, CSS, JavaScript를 사용하여 제작한 반응형 개인 포트폴리오 웹사이트입니다.

프로필 캐릭터의 보라색을 메인 컬러로 사용하여 전체 UI의 색상과 분위기를 통일했습니다.

GitHub API를 통해 Repository 정보를 동적으로 불러오며,
반응형 레이아웃, 다크 모드, 스크롤 인터랙션, Contact Form 유효성 검사 등을 구현했습니다.

---

## Tech Stack

- HTML5
- CSS3
- JavaScript ES6+
- GitHub REST API
- LocalStorage
- Intersection Observer API
- GitHub Pages

---

## Project Structure

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
    ├── profile.jpeg
    ├── desktopmode.png
    ├── mobilemode.png
    └── darkmode.png
```

---

## 주요 기능

### 반응형 웹 디자인

모바일 환경을 기본으로 작성하고 Media Query를 사용하여
Tablet과 Desktop 환경으로 확장했습니다.

- Mobile: 기본 스타일
- Tablet: 768px 이상
- Desktop: 1024px 이상

Desktop에서는 일반 Navigation Menu를 표시하고,
Mobile에서는 햄버거 메뉴를 사용합니다.

---

### 모바일 햄버거 메뉴

모바일 화면에서 메뉴 버튼을 클릭하면
`classList.toggle()`을 사용하여 Navigation Menu를 열고 닫습니다.

메뉴가 열린 상태는 `active` 클래스로 관리합니다.

---

### Light / Dark Mode

Light Mode와 Dark Mode를 전환할 수 있습니다.

선택한 테마는 `LocalStorage`에 저장하여
페이지를 새로고침한 이후에도 유지되도록 구현했습니다.

---

### 스크롤 인터랙션

페이지 스크롤 위치에 따라 UI가 변경됩니다.

- 60px 이상 스크롤 시 Header 스타일 변경
- 300px 이상 스크롤 시 Scroll Top 버튼 표시
- Scroll Top 버튼 클릭 시 페이지 최상단으로 이동
- Navigation 메뉴 클릭 시 해당 Section으로 부드럽게 이동

---

### Intersection Observer

각 Section이 화면에 들어오는 시점을 감지하여
스크롤 애니메이션을 적용했습니다.

```text
threshold: 0.2
```

요소가 화면에 약 20% 이상 표시되면
`visible` 클래스를 추가하여 애니메이션을 실행합니다.

---

### GitHub API

GitHub REST API를 사용하여 최근 Repository 정보를 가져와
Projects 영역에 동적으로 표시합니다.

```text
https://api.github.com/users/kimgem2437/repos
```

프로젝트 카드에는 다음 정보를 표시합니다.

- Repository 이름
- 프로젝트 설명
- 주요 언어
- Star 수
- GitHub Repository 링크

API 요청 상태는 다음과 같이 구분하여 처리했습니다.

- Loading
- Success
- Error
- Empty

API 요청에 실패한 경우 다시 요청할 수 있도록
`다시 시도` 버튼을 제공합니다.

---

### Contact Form

Contact Form에서 다음 항목을 입력받습니다.

- 이름
- 이메일
- 메시지

JavaScript를 사용하여 다음 조건을 검증합니다.

- 이름 필수 입력
- 이메일 필수 입력
- 이메일 형식 확인
- 메시지 필수 입력

잘못된 입력값이 있는 경우
각 입력창 가까이에 오류 메시지를 표시합니다.

Form 제출 시 `preventDefault()`를 사용하여
페이지 새로고침을 막고 JavaScript에서 직접 입력값을 검증합니다.

---

## 구현 기준

| 항목 | 적용 기준 |
| --- | --- |
| Mobile | 기본 스타일 |
| Tablet | 768px 이상 |
| Desktop | 1024px 이상 |
| Header 스타일 변경 | Scroll 60px 이상 |
| Scroll Top 표시 | Scroll 300px 이상 |
| Intersection Observer | threshold 0.2 |

---

## Screenshots

### Desktop

데스크톱 환경에서 전체 페이지를 캡처한 화면입니다.

![Desktop Mode](images/desktopmode.png)

---

### Mobile

Chrome 개발자 도구를 사용하여 모바일 환경의 전체 페이지를 캡처한 화면입니다.

![Mobile Mode](images/mobilemode.png)

---

### Dark Mode

Dark Mode를 적용한 화면입니다.

![Dark Mode](images/darkmode.png)

---

## Deployment

GitHub Pages를 사용하여 배포합니다.

**배포 URL:** GitHub Pages 배포 후 추가