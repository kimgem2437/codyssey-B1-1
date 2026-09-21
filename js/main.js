const GITHUB_USERNAME = "kimgem2437";


const header =
    document.querySelector("#header");

const menuToggle =
    document.querySelector("#menu-toggle");

const navMenu =
    document.querySelector(".nav-menu");

const navLinks =
    document.querySelectorAll(".nav-menu a");

const themeToggle =
    document.querySelector("#theme-toggle");

const scrollTopButton =
    document.querySelector("#scroll-top");

const projectsStatus =
    document.querySelector("#projects-status");

const projectsList =
    document.querySelector("#projects-list");

const contactForm =
    document.querySelector("#contact-form");

const nameInput =
    document.querySelector("#name");

const emailInput =
    document.querySelector("#email");

const messageInput =
    document.querySelector("#message");

const nameError =
    document.querySelector("#name-error");

const emailError =
    document.querySelector("#email-error");

const messageError =
    document.querySelector("#message-error");

const formSuccess =
    document.querySelector("#form-success");


/* 모바일 햄버거 메뉴 */

menuToggle.addEventListener(
    "click",
    () => {
        navMenu.classList.toggle("active");

        const isOpen =
            navMenu.classList.contains("active");

        menuToggle.setAttribute(
            "aria-expanded",
            String(isOpen)
        );
    }
);


navLinks.forEach((link) => {
    link.addEventListener(
        "click",
        () => {
            navMenu.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );
        }
    );
});


/* 다크 모드 */

const savedTheme =
    localStorage.getItem("theme");


if (savedTheme === "dark") {
    document.documentElement.setAttribute(
        "data-theme",
        "dark"
    );

    themeToggle.textContent = "☀️";
}


themeToggle.addEventListener(
    "click",
    () => {
        const currentTheme =
            document.documentElement.getAttribute(
                "data-theme"
            );

        if (currentTheme === "dark") {
            document.documentElement.removeAttribute(
                "data-theme"
            );

            localStorage.setItem(
                "theme",
                "light"
            );

            themeToggle.textContent = "🌙";
        } else {
            document.documentElement.setAttribute(
                "data-theme",
                "dark"
            );

            localStorage.setItem(
                "theme",
                "dark"
            );

            themeToggle.textContent = "☀️";
        }
    }
);


/* 스크롤 이벤트 */

window.addEventListener(
    "scroll",
    () => {
        if (window.scrollY >= 60) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }


        if (window.scrollY >= 300) {
            scrollTopButton.classList.add(
                "visible"
            );
        } else {
            scrollTopButton.classList.remove(
                "visible"
            );
        }
    }
);


scrollTopButton.addEventListener(
    "click",
    () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
);


/* Intersection Observer */

const revealElements =
    document.querySelectorAll(".reveal");


const observer =
    new IntersectionObserver(
        (entries) => {
            entries.forEach(
                (entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(
                            "visible"
                        );
                    }
                }
            );
        },
        {
            threshold: 0.2
        }
    );


revealElements.forEach(
    (element) => {
        observer.observe(element);
    }
);


/* GitHub 프로젝트 상태 */

const projectsState = {
    loading: false,
    projects: [],
    error: null
};


/* 프로젝트 화면 출력 */

const renderProjects = () => {
    if (projectsState.loading) {
        projectsStatus.textContent =
            "프로젝트를 불러오는 중...";

        projectsList.innerHTML = "";

        return;
    }


    if (projectsState.error) {
        projectsStatus.innerHTML = `
            <p>
                프로젝트를 불러올 수 없습니다.
            </p>

            <button
                type="button"
                id="retry-projects"
                class="retry-button"
            >
                다시 시도
            </button>
        `;

        projectsList.innerHTML = "";


        const retryButton =
            document.querySelector(
                "#retry-projects"
            );


        retryButton.addEventListener(
            "click",
            fetchProjects
        );

        return;
    }


    if (projectsState.projects.length === 0) {
        projectsStatus.textContent =
            "표시할 프로젝트가 없습니다.";

        projectsList.innerHTML = "";

        return;
    }


    projectsStatus.textContent = "";


    const projectCards =
        projectsState.projects.map(
            (project) => {
                const {
                    name,
                    description,
                    html_url,
                    language,
                    stargazers_count
                } = project;


                return `
                    <article class="project-card">
                        <h3>
                            ${name}
                        </h3>

                        <p class="project-description">
                            ${
                                description
                                ?? "프로젝트 설명이 없습니다."
                            }
                        </p>

                        <p class="project-meta">
                            ${
                                language
                                ?? "Language 없음"
                            }
                            · ⭐ ${stargazers_count}
                        </p>

                        <a
                            href="${html_url}"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub 보기 →
                        </a>
                    </article>
                `;
            }
        );


    projectsList.innerHTML =
        projectCards.join("");
};


/* GitHub API */

const fetchProjects = async () => {
    projectsState.loading = true;
    projectsState.error = null;

    renderProjects();


    try {
        const response =
            await fetch(
                `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`
            );


        if (!response.ok) {
            throw new Error(
                `GitHub API 오류: ${response.status}`
            );
        }


        const projects =
            await response.json();


        projectsState.projects =
            projects;
    } catch (error) {
        projectsState.error =
            error;

        projectsState.projects =
            [];
    } finally {
        projectsState.loading =
            false;

        renderProjects();
    }
};


fetchProjects();


/* 이메일 형식 확인 */

const isValidEmail = (email) => {
    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailPattern.test(email);
};


/* 이름 검증 */

const validateName = () => {
    const name =
        nameInput.value.trim();


    if (name === "") {
        nameError.textContent =
            "이름을 입력해주세요.";

        return false;
    }


    nameError.textContent = "";

    return true;
};


/* 이메일 검증 */

const validateEmail = () => {
    const email =
        emailInput.value.trim();


    if (email === "") {
        emailError.textContent =
            "이메일을 입력해주세요.";

        return false;
    }


    if (!isValidEmail(email)) {
        emailError.textContent =
            "올바른 이메일 형식을 입력해주세요.";

        return false;
    }


    emailError.textContent = "";

    return true;
};


/* 메시지 검증 */

const validateMessage = () => {
    const message =
        messageInput.value.trim();


    if (message === "") {
        messageError.textContent =
            "메시지를 입력해주세요.";

        return false;
    }


    messageError.textContent = "";

    return true;
};


/* 입력 이벤트 */

nameInput.addEventListener(
    "input",
    validateName
);

emailInput.addEventListener(
    "input",
    validateEmail
);

messageInput.addEventListener(
    "input",
    validateMessage
);


/* 폼 제출 */

contactForm.addEventListener(
    "submit",
    (event) => {
        event.preventDefault();


        formSuccess.textContent = "";


        const isNameValid =
            validateName();

        const isEmailValid =
            validateEmail();

        const isMessageValid =
            validateMessage();


        if (
            !isNameValid
            || !isEmailValid
            || !isMessageValid
        ) {
            return;
        }


        formSuccess.textContent =
            "문의 내용이 정상적으로 작성되었습니다.";


        contactForm.reset();
    }
);