"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { DoorOpen, GalleryHorizontalEnd, Moon, Send, Sun, UsersRound, Workflow, Layers } from "lucide-react";
import bapcareShot from "./screenshots/bapcare.png";
import championFitnessShot from "./screenshots/champion-fitness.png";
import championSchoolShot from "./screenshots/championschool.png";
import koroidShot from "./screenshots/koroid.png";

const telegramUrl = "https://t.me/zenggen";
const navIcons = [DoorOpen, UsersRound, Layers, Workflow, GalleryHorizontalEnd, Send];
const caseScreenshots = {
  "bapcare.com": bapcareShot.src,
  "champion-fitness.kz": championFitnessShot.src,
  "championschool.kz": championSchoolShot.src,
  "koroid.agency": koroidShot.src,
};

const copy = {
  ru: {
    lang: "RU",
    theme: "Тема",
    hello: "Привет!",
    welcome: "Добро пожаловать в Spectral",
    question: "Как нам стоит вас называть?",
    namePlaceholder: "Ваше имя",
    start: "Запустить сценарий",
    scroll: "Скролл или стрелки переключают сцены",
    next: "Дальше",
    back: "Назад",
    skip: "Пропустить к форме",
    nav: ["Вход", "Команда", "Услуги", "Процесс", "Кейсы", "Форма"],
    bridgeAbout: "Отлично! Давайте расскажу о нас поподробнее",
    bridgeServices: "А теперь расскажем о наших услугах",
    bridgeWork: "А теперь немного о том как мы работаем",
    bridgeCases: "Убедитесь на уже готовых примерах:",
    bridgeFinal: "Последний переход. Если сигнал совпал - оставьте короткий контакт.",
    aboutKicker: "SPECTRAL / команда полного цикла",
    aboutTitleA: "Делаем сайты,",
    aboutTitleB: "которые продают.",
    aboutLead:
      "Мы соединяем стратегию, визуальную систему, UX, motion и код так, чтобы сайт не просто выглядел дорого, а приводил заявки и помогал бизнесу говорить убедительно.",
    points: [
      ["Быстрый запуск", "Первую рабочую версию можно довести до публикации за 1-2 недели."],
      ["Фокус на конверсии", "Структура, тексты и анимации ведут человека к понятному действию."],
      ["Прозрачный процесс", "Вы видите этапы, решения и следующий шаг без тумана и бесконечных правок."],
      ["Дизайн с характером", "Не собираем шаблон. Подбираем визуальный язык под задачу бизнеса."],
    ],
    servicesKicker: "наши услуги",
    servicesTitle: "Идеальное сотрудничество.",
    servicesLead: "Мы проектируем и разрабатываем высоконагруженные коммерческие решения, мобильные приложения, игры и внедряем ИИ под ваши задачи.",
    servicesHint: "Нажмите на плитку, чтобы узнать подробности и стек технологий.",
    servicesSelectService: "Выберите услугу на витрине слева, чтобы изучить стек и состав работ.",
    services: {
      list: [
        {
          id: "web",
          name: "Web Development",
          desc: "Мы проектируем и разрабатываем высоконагруженные коммерческие сайты, интернет-магазины, социальные сети и уникальные имиджевые промо-страницы. Наш фокус — скорость работы, безупречный UX/UI и высокая конверсия.",
          items: ["Коммерческие сайты", "Интернет-магазины", "Веб-сервисы и порталы", "Промо-лендинги"],
          tech: "React / Next.js / Node.js / Three.js"
        },
        {
          id: "mobile",
          name: "Mobile App Development",
          desc: "Создаем нативные и кроссплатформенные мобильные приложения для iOS и Android с плавным интерфейсом, оффлайн-режимом и интеграцией с любыми внешними сервисами и API.",
          items: ["iOS & Android", "Кроссплатформенные решения", "Высокая производительность", "Интеграция API"],
          tech: "Flutter / React Native / Swift / Kotlin"
        },
        {
          id: "game",
          name: "Game Development",
          desc: "Разрабатываем интерактивные 2D и 3D игры, геймифицированные промо-кампании, веб-игры и интерактивные симуляторы. Внедряем передовую графику и физику прямо в браузере.",
          items: ["3D и 2D игры", "Геймификация для бизнеса", "WebGL и PlayCanvas", "Интерактивные механики"],
          tech: "WebGL / Three.js / Unity / Unreal"
        },
        {
          id: "ai",
          name: "AI Development",
          desc: "Интегрируем искусственный интеллект в бизнес-процессы: нейросети, LLM (ChatGPT/Gemini/Claude), компьютерное зрение, автоматический анализ данных и умные агенты для автоматизации рутины.",
          items: ["Интеграция LLM", "Компьютерное зрение", "Умные AI-агенты", "Анализ данных и ML"],
          tech: "Python / PyTorch / OpenAI API / LangChain"
        }
      ]
    },
    workKicker: "как мы работаем",
    workTitle: "От идеи до запуска без хаоса.",
    workLead:
      "Текст здесь можно будет заменить на твой. Пока оставил структуру: сначала разбираем цель, потом собираем сценарий, дизайн, разработку и запуск.",
    workSteps: [
      ["01", "Разбор", "Бла-бла-бла про аудиторию, оффер, конкурентов и боли бизнеса."],
      ["02", "Сценарий", "Бла-бла-бла про структуру страницы и путь пользователя к заявке."],
      ["03", "Дизайн", "Бла-бла-бла про графику, адаптив, цвета, анимации и дорогую подачу."],
      ["04", "Запуск", "Бла-бла-бла про верстку, скорость, тестирование, аналитику и публикацию."],
    ],
    casesKicker: "готовые проекты",
    casesTitle: "Выберите кейс на витрине.",
    casesLead:
      "Карточки стоят как игровые артефакты: выбранный сайт подсвечивается, а справа появляется короткая история проекта.",
    caseHint: "Нажмите →, чтобы выбрать первый кейс",
    caseEmpty:
      "Сначала выберите кейс. Карточка подсветится белыми гранями, станет крупнее, а справа появится краткая история сайта.",
    selectedLabel: "выбранный кейс",
    openCase: "Открыть сайт",
    cases: [
      {
        name: "Champion Fitness",
        url: "https://champion-fitness.kz/",
        domain: "champion-fitness.kz",
        tags: ["сеть филиалов", "fitness", "продажи"],
        palette: "linear-gradient(135deg,#2c2105,#d6a816 54%,#ffdf67)",
        summary:
          "Сайт для сети из 8 фитнес-клубов в Астане. Сделан как коммерческий хаб: абонементы, франшиза, магазин и понятный путь к заявке. Стиль - спортивный, уверенный, темный premium.",
      },
      {
        name: "Bapcare",
        url: "https://bapcare.com",
        domain: "bapcare.com",
        tags: ["AI", "beauty", "product"],
        palette: "linear-gradient(135deg,#073a32,#27b88f 56%,#b7f3dc)",
        summary:
          "Лендинг AI-сервиса анализа лица. Фокус на продуктовой подаче: сканер, Face Score и персональный план ухода. Стиль - чистый, технологичный, легкий.",
      },
      {
        name: "Champion School",
        url: "https://championschool.kz",
        domain: "championschool.kz",
        tags: ["education", "leads", "fitness"],
        palette: "linear-gradient(135deg,#030405,#10141b 56%,#2b3038)",
        summary:
          "Лендинг школы фитнес-тренеров для офлайн и онлайн-набора учеников. Сделан вокруг доверия, программы и заявки. Стиль - энергичный, образовательный, конверсионный.",
      },
      {
        name: "Koroid Agency",
        url: "https://koroid.agency",
        domain: "koroid.agency",
        tags: ["agency", "motion", "branding"],
        palette: "linear-gradient(135deg,#050505,#202228 56%,#747982)",
        summary:
          "Имиджевый сайт digital-агентства. Задача - сильная подача бренда, темная эстетика и насыщенное движение. Стиль - дерзкий, cinematic, motion-first.",
      },
    ],
    ctaQuestion: (name) => `Смогли ли мы вас заинтересовать, ${name}?`,
    ctaAnswer: "Если да, заполните форму, чтобы связаться с нами",
    formKicker: "финальный контакт",
    formTitle: "Расскажите минимум, а остальное уточним в диалоге.",
    formLead:
      "Пока форма никуда не отправляет данные. Она показывает, какую информацию нужно будет собирать: контакт и идею будущего сайта.",
    contactLabel: "Контакт",
    contactPlaceholder: "Telegram, телефон или WhatsApp",
    ideaLabel: "Идея для сайта",
    ideaPlaceholder: "Например: сайт для фитнес-клуба, лидогенерация, запуск продукта...",
    submit: "Собрать бриф",
    copyBrief: "Скопировать бриф",
    copied: "Скопировано",
    openTelegram: "Открыть Telegram",
    resultTitle: "Бриф собран.",
    resultText: "Теперь его можно скопировать и отправить в Telegram @zenggen.",
  },
  en: {
    lang: "EN",
    theme: "Theme",
    hello: "Hello!",
    welcome: "Welcome to Spectral",
    question: "What should we call you?",
    namePlaceholder: "Your name",
    start: "Start sequence",
    scroll: "Scroll or arrows switch scenes",
    next: "Next",
    back: "Back",
    skip: "Skip to form",
    nav: ["Entry", "Team", "Services", "Process", "Cases", "Form"],
    bridgeAbout: "Great! Let me tell you more about us",
    bridgeServices: "Now, let us show you our services",
    bridgeWork: "Now a little about how we work",
    bridgeCases: "See it in finished examples:",
    bridgeFinal: "Final transition. If the signal matched - leave a quick contact.",
    aboutKicker: "SPECTRAL / full-cycle team",
    aboutTitleA: "We build sites",
    aboutTitleB: "that sell.",
    aboutLead:
      "We connect strategy, visual systems, UX, motion and code so the site does not just look premium, but brings leads and helps the business speak clearly.",
    points: [
      ["Fast launch", "The first working version can be published in 1-2 weeks."],
      ["Conversion focus", "Structure, copy and animation guide people toward a clear action."],
      ["Transparent process", "You see stages, decisions and the next step without fog or endless edits."],
      ["Visual character", "No template assembly. We shape the visual language around the business goal."],
    ],
    servicesKicker: "our services",
    servicesTitle: "Ideal cooperation.",
    servicesLead: "We design and develop high-performance commercial web solutions, mobile applications, games, and integrate AI systems.",
    servicesHint: "Click on any tile to see full work details and tech stack.",
    servicesSelectService: "Select a service from the showcase on the left to view tech stack and deliverables.",
    services: {
      list: [
        {
          id: "web",
          name: "Web Development",
          desc: "We design and build high-performance commercial websites, e-commerce stores, social media platforms, and unique promotional sites. We focus on loading speeds, flawless UX/UI, and high sales conversion.",
          items: ["Commercial Websites", "Online Stores", "Web Portals & Apps", "Promo Landing Pages"],
          tech: "React / Next.js / Node.js / Three.js"
        },
        {
          id: "mobile",
          name: "Mobile App Development",
          desc: "We build native and cross-platform mobile apps for iOS and Android featuring smooth UI performance, fully offline modes, and seamless API integrations.",
          items: ["iOS & Android Apps", "Cross-Platform Tech", "High Performance UI", "API & Cloud Integration"],
          tech: "Flutter / React Native / Swift / Kotlin"
        },
        {
          id: "game",
          name: "Game Development",
          desc: "We develop interactive 2D and 3D games, gamified promotional campaigns, web-based games, and interactive training simulators. We integrate advanced mechanics and physics directly in browsers.",
          items: ["3D & 2D Games", "Business Gamification", "WebGL & PlayCanvas", "Interactive Mechanics"],
          tech: "WebGL / Three.js / Unity / Unreal"
        },
        {
          id: "ai",
          name: "AI Development",
          desc: "We integrate artificial intelligence into business workflows: custom LLMs (ChatGPT/Gemini/Claude), computer vision models, auto-data processing, and intelligent autonomous agents.",
          items: ["LLM Integrations", "Computer Vision", "Autonomous AI Agents", "Data Analytics & ML"],
          tech: "Python / PyTorch / OpenAI API / LangChain"
        }
      ]
    },
    workKicker: "how we work",
    workTitle: "From idea to launch without chaos.",
    workLead:
      "You can replace this copy later. For now, the structure is here: goal, page scenario, design, development and launch.",
    workSteps: [
      ["01", "Discovery", "Placeholder copy about audience, offer, competitors and business pain."],
      ["02", "Scenario", "Placeholder copy about page structure and the user's path to a request."],
      ["03", "Design", "Placeholder copy about graphics, responsive layout, color, animation and premium feel."],
      ["04", "Launch", "Placeholder copy about markup, speed, testing, analytics and publishing."],
    ],
    casesKicker: "finished projects",
    casesTitle: "Choose a case from the showcase.",
    casesLead:
      "Cards stand like game artifacts: the selected site lights up, and a short project story appears next to it.",
    caseHint: "Press → to select the first case",
    caseEmpty:
      "Select a case first. The card will glow with white edges, grow slightly, and the short website story will appear on the right.",
    selectedLabel: "selected case",
    openCase: "Open website",
    cases: [
      {
        name: "Champion Fitness",
        url: "https://champion-fitness.kz/",
        domain: "champion-fitness.kz",
        tags: ["branch network", "fitness", "sales"],
        palette: "linear-gradient(135deg,#2c2105,#d6a816 54%,#ffdf67)",
        summary:
          "Website for a network of 8 fitness clubs in Astana. Built as a commercial hub: memberships, franchise, shop and a clear route to inquiry. Style: athletic, confident, dark premium.",
      },
      {
        name: "Bapcare",
        url: "https://bapcare.com",
        domain: "bapcare.com",
        tags: ["AI", "beauty", "product"],
        palette: "linear-gradient(135deg,#073a32,#27b88f 56%,#b7f3dc)",
        summary:
          "Landing page for an AI face analysis service. Product-focused story: scanner, Face Score and a personal care plan. Style: clean, tech-forward and light.",
      },
      {
        name: "Champion School",
        url: "https://championschool.kz",
        domain: "championschool.kz",
        tags: ["education", "leads", "fitness"],
        palette: "linear-gradient(135deg,#030405,#10141b 56%,#2b3038)",
        summary:
          "Landing page for a fitness trainer school, built for offline and online student acquisition. Style: energetic, educational and conversion-focused.",
      },
      {
        name: "Koroid Agency",
        url: "https://koroid.agency",
        domain: "koroid.agency",
        tags: ["agency", "motion", "branding"],
        palette: "linear-gradient(135deg,#050505,#202228 56%,#747982)",
        summary:
          "Image website for a digital agency. The goal was strong brand presence, dark aesthetics and rich movement. Style: bold, cinematic, motion-first.",
      },
    ],
    ctaQuestion: (name) => `Did we manage to interest you, ${name}?`,
    ctaAnswer: "If yes, fill out the form so we can contact you",
    formKicker: "final contact",
    formTitle: "Share the minimum. We will clarify the rest in conversation.",
    formLead:
      "For now, the form does not submit anywhere. It shows the information we will collect: contact details and the site idea.",
    contactLabel: "Contact",
    contactPlaceholder: "Telegram, phone or WhatsApp",
    ideaLabel: "Website idea",
    ideaPlaceholder: "For example: fitness-club site, lead generation, product launch...",
    submit: "Build brief",
    copyBrief: "Copy brief",
    copied: "Copied",
    openTelegram: "Open Telegram",
    resultTitle: "Brief assembled.",
    resultText: "You can copy it and send it to Telegram @zenggen.",
  },
};

const sceneAccent = [
  ["#8fc7ef", "#7de4d8", "#ffad9d"], // scene 0
  ["#7de4d8", "#ffad9d", "#f3cb73"], // scene 1
  ["#7de4d8", "#f3cb73", "#8fc7ef"], // scene 2
  ["#f3cb73", "#8fc7ef", "#ffad9d"], // scene 3
  ["#ffad9d", "#8fc7ef", "#7de4d8"], // scene 4
  ["#8fc7ef", "#f3cb73", "#ffad9d"], // scene 5
  ["#f3cb73", "#7de4d8", "#8fc7ef"], // scene 6
  ["#ffad9d", "#7de4d8", "#f3cb73"], // scene 7
  ["#8fc7ef", "#ffad9d", "#7de4d8"], // scene 8
  ["#7de4d8", "#ffad9d", "#f3cb73"], // scene 9
  ["#f3cb73", "#8fc7ef", "#ffad9d"], // scene 10
];

const emptyForm = { contact: "", idea: "" };
const wipeStripCount = 6;
const wipeInTotalMs = 456;
const wipeOutTotalMs = 400;

function buildBrief({ contact, idea }, name, lang) {
  const ru = lang === "ru";
  return [
    ru ? "Новая заявка SPECTRAL" : "New SPECTRAL request",
    `${ru ? "Имя" : "Name"}: ${name || "-"}`,
    `${ru ? "Контакт" : "Contact"}: ${contact || "-"}`,
    `${ru ? "Идея сайта" : "Website idea"}: ${idea || "-"}`,
  ].join("\n");
}

function useTyping(text, active, speed = 38, delay = 0) {
  const [value, setValue] = useState("");

  useEffect(() => {
    if (!active) {
      setValue("");
      return undefined;
    }

    setValue("");
    const characters = Array.from(text);
    let frame = 0;
    let startedAt = 0;
    let previousIndex = 0;

    function tick(now) {
      if (!startedAt) startedAt = now;

      const nextIndex = Math.min(characters.length, Math.floor((now - startedAt) / speed) + 1);
      if (nextIndex !== previousIndex) {
        previousIndex = nextIndex;
        setValue(characters.slice(0, nextIndex).join(""));
      }

      if (nextIndex < characters.length) {
        frame = window.requestAnimationFrame(tick);
      }
    }

    const timeout = window.setTimeout(() => {
      frame = window.requestAnimationFrame(tick);
    }, delay);

    return () => {
      window.clearTimeout(timeout);
      window.cancelAnimationFrame(frame);
    };
  }, [active, delay, speed, text]);

  return value;
}

function useMorphTyping(first, second, active) {
  const [value, setValue] = useState("");
  const [phase, setPhase] = useState("first");

  useEffect(() => {
    if (!active) {
      setValue("");
      setPhase("first");
      return undefined;
    }

    let cancelled = false;
    const timers = [];
    const wait = (ms) => new Promise((resolve) => timers.push(window.setTimeout(resolve, ms)));

    async function run() {
      setPhase("first");
      setValue("");
      for (let i = 1; i <= first.length; i += 1) {
        if (cancelled) return;
        setValue(first.slice(0, i));
        await wait(34);
      }
      await wait(1100);
      for (let i = first.length; i >= 0; i -= 1) {
        if (cancelled) return;
        setValue(first.slice(0, i));
        await wait(18);
      }
      setPhase("second");
      await wait(260);
      for (let i = 1; i <= second.length; i += 1) {
        if (cancelled) return;
        setValue(second.slice(0, i));
        await wait(30);
      }
    }

    run();
    return () => {
      cancelled = true;
      timers.forEach(window.clearTimeout);
    };
  }, [active, first, second]);

  return { value, phase, done: active && phase === "second" && value.length >= second.length };
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function renderHighlightedText(text, words) {
  const activeWords = words.filter(Boolean);
  if (!activeWords.length || !text) return text;

  const expression = new RegExp(`(${activeWords.map(escapeRegExp).join("|")})`, "gi");
  return text.split(expression).map((part, index) => {
    const highlighted = activeWords.some((word) => part.toLowerCase() === word.toLowerCase());
    return highlighted ? (
      <span className="gradient-word" key={`${part}-${index}`}>
        {part}
      </span>
    ) : (
      part
    );
  });
}

export default function Home() {
  const [lang, setLang] = useState("ru");
  const [theme, setTheme] = useState("dark");
  const booting = false;
  const [scene, setScene] = useState(0);
  const [prevScene, setPrevScene] = useState(0);
  const [transitionKey, setTransitionKey] = useState(0);
  const [wipePhase, setWipePhase] = useState("idle");

  useEffect(() => {
    if (scene !== prevScene) {
      setPrevScene(scene);
      setTransitionKey((prev) => prev + 1);
    }
  }, [scene, prevScene]);

  const [name, setName] = useState("");
  const [nameTouched, setNameTouched] = useState(false);
  const [form, setForm] = useState(emptyForm);
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);
  const [selectedCase, setSelectedCase] = useState(null);
  const [bursts, setBursts] = useState([]);
  const sceneRef = useRef(scene);
  const lockRef = useRef(false);
  const touchRef = useRef(0);
  const nameInputRef = useRef(null);
  const navRef = useRef(null);
  const navButtonRefs = useRef([]);
  const wipeTimersRef = useRef([]);
  const wipeFramesRef = useRef([]);
  const [navMarker, setNavMarker] = useState({ left: 6, width: 0 });
  const c = copy[lang];
  const [focusedService, setFocusedService] = useState(null);
  const lastScene = 10;
  const visibleNavScenes = [0, 2, 4, 6, 8, lastScene];
  const activeNavIndex = Math.min(navIcons.length - 1, Math.max(0, Math.floor(scene / 2)));
  const bridgeSceneText = {
    1: c.bridgeAbout,
    3: c.bridgeServices,
    5: c.bridgeWork,
    7: c.bridgeCases,
    9: c.bridgeFinal,
  }[scene];
  const displayName = name.trim() || (lang === "ru" ? "друг" : "friend");
  const [accentA, accentB, accentC] = sceneAccent[scene];

  // Intro animation phase: hello → welcome → rainbow → fadeOut → nameInput
  const [introPhase, setIntroPhase] = useState("hello");
  const helloText = useTyping(c.hello, !booting && scene === 0 && (introPhase === "hello" || introPhase === "welcome" || introPhase === "rainbow"), 52, 280);
  const welcomeText = useTyping(c.welcome, !booting && scene === 0 && (introPhase === "welcome" || introPhase === "rainbow"), 34, 0);
  const questionText = useTyping(c.question, !booting && scene === 0 && introPhase === "nameInput", 34, 220);

  // Phase transitions for intro sequence
  useEffect(() => {
    if (scene !== 0 || booting) return undefined;

    // hello → welcome: once hello is fully typed
    if (introPhase === "hello" && helloText === c.hello) {
      const timer = window.setTimeout(() => setIntroPhase("welcome"), 600);
      return () => window.clearTimeout(timer);
    }

    // welcome → rainbow: once welcome text is fully typed
    if (introPhase === "welcome" && welcomeText === c.welcome) {
      const timer = window.setTimeout(() => setIntroPhase("rainbow"), 400);
      return () => window.clearTimeout(timer);
    }

    // rainbow → fadeOut: hold rainbow glow for a moment
    if (introPhase === "rainbow") {
      const timer = window.setTimeout(() => setIntroPhase("fadeOut"), 1200);
      return () => window.clearTimeout(timer);
    }

    // fadeOut → nameInput: after fade-out animation completes
    if (introPhase === "fadeOut") {
      const timer = window.setTimeout(() => setIntroPhase("nameInput"), 500);
      return () => window.clearTimeout(timer);
    }

    return undefined;
  }, [introPhase, helloText, welcomeText, c.hello, c.welcome, scene, booting]);

  const cta = useMorphTyping(c.ctaQuestion(displayName), c.ctaAnswer, !booting && scene === lastScene);
  const ctaHighlightWords =
    cta.phase === "second"
      ? lang === "ru"
        ? ["форму", "связаться"]
        : ["form", "contact"]
      : lang === "ru"
        ? ["заинтересовать"]
        : ["manage", "interest"];
  const brief = useMemo(() => buildBrief(form, displayName, lang), [displayName, form, lang]);
  const currentServiceData = useMemo(
    () => c.services.list.find((service) => service.id === focusedService) || null,
    [c.services.list, focusedService],
  );

  useEffect(() => {
    const savedLang = localStorage.getItem("spectral-lang");
    const savedTheme = localStorage.getItem("spectral-theme");
    if (savedLang === "ru" || savedLang === "en") setLang(savedLang);
    if (savedTheme === "light" || savedTheme === "dark") setTheme(savedTheme);
  }, []);

  useEffect(() => {
    sceneRef.current = scene;
  }, [scene]);

  useEffect(() => {
    function syncNavMarker() {
      const nav = navRef.current;
      const button = navButtonRefs.current[activeNavIndex];
      if (!nav || !button) return;
      setNavMarker({
        left: button.offsetLeft,
        width: button.offsetWidth,
      });
    }

    syncNavMarker();
    window.addEventListener("resize", syncNavMarker);
    return () => window.removeEventListener("resize", syncNavMarker);
  }, [activeNavIndex, lang]);

  useEffect(() => {
    if (scene === 8) setSelectedCase(null);
    if (scene === 4) setFocusedService(null);
  }, [scene]);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dataset.theme = theme;
    document.title = lang === "ru" ? "SPECTRAL - сайт как запуск" : "SPECTRAL - website as launch sequence";
    localStorage.setItem("spectral-lang", lang);
    localStorage.setItem("spectral-theme", theme);
  }, [lang, theme]);

  useEffect(() => {
    if (booting || !bridgeSceneText) return undefined;
    const timer = window.setTimeout(() => {
      goTo(scene + 1);
    }, Math.min(5200, 1450 + bridgeSceneText.length * 32));
    return () => window.clearTimeout(timer);
  }, [booting, bridgeSceneText, scene]);

  useEffect(() => {
    return () => {
      wipeTimersRef.current.forEach(window.clearTimeout);
      wipeTimersRef.current = [];
      wipeFramesRef.current.forEach(window.cancelAnimationFrame);
      wipeFramesRef.current = [];
    };
  }, []);

  function playBootSound() {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      const audio = new AudioContext();
      const gain = audio.createGain();
      gain.gain.setValueAtTime(0.0001, audio.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.045, audio.currentTime + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.0001, audio.currentTime + 0.46);
      gain.connect(audio.destination);
      [110, 165, 247].forEach((freq, index) => {
        const oscillator = audio.createOscillator();
        oscillator.type = index === 0 ? "sine" : "triangle";
        oscillator.frequency.setValueAtTime(freq, audio.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(freq * 1.45, audio.currentTime + 0.36);
        oscillator.connect(gain);
        oscillator.start(audio.currentTime + index * 0.035);
        oscillator.stop(audio.currentTime + 0.5);
      });
    } catch {
      // Browser autoplay policies may block startup sound until a user gesture.
    }
  }

  function addBurst(x = window.innerWidth / 2, y = window.innerHeight / 2, big = false) {
    setBursts((items) => [...items.slice(-8), { id: crypto.randomUUID(), x, y, big }]);
  }

  function runStripWipe(onCovered, burstX = window.innerWidth / 2, burstY = window.innerHeight / 2) {
    if (lockRef.current) return;
    lockRef.current = true;
    setWipePhase("in");
    addBurst(burstX, burstY, true);

    const wipeInTimer = window.setTimeout(() => {
      onCovered();

      const firstFrame = window.requestAnimationFrame(() => {
        const secondFrame = window.requestAnimationFrame(() => {
          setWipePhase("out");

          const wipeOutTimer = window.setTimeout(() => {
            setWipePhase("idle");
            lockRef.current = false;
          }, wipeOutTotalMs);

          wipeTimersRef.current.push(wipeOutTimer);
        });

        wipeFramesRef.current.push(secondFrame);
      });

      wipeFramesRef.current.push(firstFrame);
    }, wipeInTotalMs);

    wipeTimersRef.current.push(wipeInTimer);
  }

  function goTo(next) {
    const target = Math.max(0, Math.min(lastScene, next));
    if (target === sceneRef.current || lockRef.current) return;
    if (sceneRef.current === 0 && target > 0 && !name.trim()) {
      setNameTouched(true);
      nameInputRef.current?.focus();
      addBurst(window.innerWidth / 2, window.innerHeight / 2, true);
      return;
    }
    runStripWipe(() => {
      sceneRef.current = target;
      setScene(target);
    });
  }

  function toggleLanguage() {
    if (lockRef.current) return;
    runStripWipe(
      () => setLang((current) => (current === "ru" ? "en" : "ru")),
      window.innerWidth * 0.82,
      window.innerHeight * 0.12,
    );
  }

  useEffect(() => {
    function onKeyDown(event) {
      if (booting) return;

      // Case Gallery key navigation (Scene 8)
      if (sceneRef.current === 8 && (event.key === "ArrowRight" || event.key === "ArrowLeft")) {
        event.preventDefault();
        setSelectedCase((current) => {
          if (current === null) return 0;
          const direction = event.key === "ArrowRight" ? 1 : -1;
          return Math.max(0, Math.min(c.cases.length - 1, current + direction));
        });
        addBurst(window.innerWidth * 0.58, window.innerHeight * 0.5, event.key === "ArrowRight");
        return;
      }

      // Services key navigation (Scene 4)
      if (sceneRef.current === 4 && (event.key === "ArrowRight" || event.key === "ArrowLeft")) {
        event.preventDefault();
        setFocusedService((current) => {
          if (current === null) return "web";
          const ids = ["web", "mobile", "game", "ai"];
          const idx = ids.indexOf(current);
          const direction = event.key === "ArrowRight" ? 1 : -1;
          const nextIdx = Math.max(0, Math.min(ids.length - 1, idx + direction));
          return ids[nextIdx];
        });
        addBurst(window.innerWidth * 0.58, window.innerHeight * 0.5, event.key === "ArrowRight");
        return;
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [booting]);

  function startExperience() {
    if (!name.trim()) {
      setNameTouched(true);
      nameInputRef.current?.focus();
      return;
    }
    playBootSound();
    goTo(1);
  }

  function updateForm(event) {
    const { name: field, value } = event.target;
    setForm((values) => ({ ...values, [field]: value }));
    setSent(false);
    setCopied(false);
  }

  async function copyBrief() {
    try {
      await navigator.clipboard.writeText(brief);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  function submit(event) {
    event.preventDefault();
    setSent(true);
    addBurst(window.innerWidth * 0.72, window.innerHeight * 0.58, true);
  }

  return (
    <main
      className={`experience-shell${
        introPhase === "hello" || introPhase === "welcome" || introPhase === "rainbow"
          ? " intro-rainbow intro-rainbow-glow"
          : ""
      }`}
      onPointerDown={(event) => addBurst(event.clientX, event.clientY)}
      style={{
        "--accent-a": accentA,
        "--accent-b": accentB,
        "--accent-c": accentC,
        "--progress": `${(scene / lastScene) * 100}%`,
      }}
    >
      <div className="ambient-field" aria-hidden="true">
        <span className="orb one" />
        <span className="orb two" />
        <span className="orb three" />
        <span className="noise" />
      </div>

      <header className="topline">
        <button className="brand-pill" onClick={() => goTo(0)} type="button">
          <span className="brand-mark" aria-hidden="true">
            <img src="/logo_spectral.png" alt="" draggable="false" />
          </span>
          <b>SPECTRAL</b>
        </button>
        <nav
          className="scene-dots"
          aria-label="Scenes"
          ref={navRef}
          style={{ "--nav-marker-left": `${navMarker.left}px`, "--nav-marker-width": `${navMarker.width}px` }}
        >
          <span className="scene-dots-marker" aria-hidden="true" />
          {visibleNavScenes.map((sceneIndex, index) => {
            const Icon = navIcons[index];
            return (
              <button
                className={activeNavIndex === index ? "active" : ""}
                key={c.nav[index]}
                onClick={() => goTo(sceneIndex)}
                ref={(node) => {
                  navButtonRefs.current[index] = node;
                }}
                type="button"
              >
                <Icon width={17} height={17} strokeWidth={2.25} aria-hidden="true" />
                {c.nav[index]}
              </button>
            );
          })}
        </nav>
        <div className="top-actions">
          <button
            type="button"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label={c.theme}
            className={`theme-toggle ${theme === "dark" ? "theme-dark" : "theme-light"}`}
          >
            <span className="theme-toggle-circle">
              <span className="theme-toggle-icon">
                {theme === "dark" ? (
                  <Moon width={19} height={19} strokeWidth={2.35} aria-hidden="true" />
                ) : (
                  <Sun width={19} height={19} strokeWidth={2.35} aria-hidden="true" />
                )}
              </span>
            </span>
            <span className="theme-toggle-label">
              {theme === "dark" ? "Night" : "Day"}
            </span>
          </button>
          <button
            type="button"
            onClick={toggleLanguage}
            aria-label={c.lang}
            className="language-toggle"
          >
            <span className="language-toggle-content">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              <span>{c.lang}</span>
            </span>
          </button>
        </div>
      </header>

      <div className="timeline" aria-hidden="true">
        <i />
      </div>

      <section className={`scene-layer ${
        scene === 0 && (introPhase === "hello" || introPhase === "welcome" || introPhase === "rainbow")
          ? "intro-rainbow-active"
          : ""
      }`}>

        {scene === 0 && (
          <>
            <div className={`intro-rainbow-bg ${
              (introPhase === "hello" || introPhase === "welcome" || introPhase === "rainbow") ? "active" : "fade-out"
            }`} />
            <div className={`intro-rainbow-mask ${
              (introPhase === "hello" || introPhase === "welcome" || introPhase === "rainbow") ? "collapsed" : "expanded"
            }`} />
          </>
        )}
        <article className={`scene intro-scene ${scene === 0 ? "active" : ""}`}>
          {/* Phase 1 & 2: Hello + Welcome (fades out together) */}
          <div className={`intro-dialog intro-greeting${introPhase === "fadeOut" || introPhase === "nameInput" ? " intro-hidden" : ""}`}>
            <h1 className="typed-gradient">
              {introPhase === "hello" || introPhase === "welcome" || introPhase === "rainbow" ? helloText : ""}
              {introPhase === "hello" ? <span className="typing-caret" /> : null}
            </h1>
            <p className="typed-welcome">
              {introPhase === "welcome" || introPhase === "rainbow" ? welcomeText : ""}
              {introPhase === "welcome" && welcomeText ? <span className="typing-caret" /> : null}
            </p>
          </div>

          {/* Phase 4: Name input (appears after fade) */}
          <div className={`intro-dialog intro-name-phase${introPhase === "nameInput" ? " intro-visible" : ""}`}>
            <p className="typed-question">
              {questionText}
              {questionText ? <span className="typing-caret" /> : null}
            </p>
            <div
              className={`name-console ${
                !booting && scene === 0 && introPhase === "nameInput" && questionText === c.question ? "show" : ""
              } ${nameTouched && !name.trim() ? "needs-name" : ""}`}
            >
              <input
                ref={nameInputRef}
                aria-label={c.question}
                onChange={(event) => {
                  setName(event.target.value);
                  setNameTouched(false);
                }}
                onFocus={playBootSound}
                placeholder={c.namePlaceholder}
                value={name}
              />
              <button type="button" onClick={startExperience} aria-label={c.start}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </button>
            </div>
          </div>
        </article>

        <BridgeScene active={scene === 1} text={c.bridgeAbout} />

        <article className={`scene about-scene ${scene === 2 ? "active" : ""}`}>
          <div className="copy-column">
            <small className="kicker">{c.aboutKicker}</small>
            <h2>
              <span>{c.aboutTitleA}</span>
              <span>{c.aboutTitleB}</span>
            </h2>
            <p>{c.aboutLead}</p>
          </div>
          <div className="business-grid">
            {c.points.map(([title, text], index) => (
              <div className="business-card" key={title} style={{ "--delay": `${index * 95}ms` }}>
                <i>{`0${index + 1}`}</i>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>

          {/* Combined floating Rocket graphic from Koroid */}
          <div className="about-rocket-container max-lg:hidden">
            <img src="/images/ToTheMoon!.svg" alt="Rocket" className="about-rocket-float" />
          </div>
          <div className="about-rocket-container lg:hidden">
            <img src="/images/ToTheMoon!.svg" alt="Rocket" className="about-rocket-float-mobile" />
          </div>
        </article>

        <BridgeScene active={scene === 3} text={c.bridgeServices} />

        {/* Brand New Services Scene from Koroid */}
        <article className={`scene services-scene ${scene === 4 ? "active" : ""}`}>
          <div className="copy-column services-copy">
            <small className="kicker">{c.servicesKicker}</small>
            <h2>{c.servicesTitle}</h2>
            <p>{c.servicesLead}</p>
            <p className="services-hint">{c.servicesHint}</p>
          </div>

          <div className="services-showcase">
            <div className="services-union-grid">
              {c.services.list.map((srv, idx) => (
                <button
                  key={srv.id}
                  className={`service-tile tile-${srv.id} ${focusedService === srv.id ? "selected" : ""}`}
                  onClick={() => setFocusedService(srv.id)}
                  type="button"
                >
                  <span className="service-tile-num">{`0${idx + 1}`}</span>
                  <h3>{srv.name}</h3>
                  <span className="service-tile-more">More →</span>
                </button>
              ))}
            </div>

            <aside className={`service-detail-panel ${currentServiceData ? "show" : "empty"}`}>
              {currentServiceData ? (
                <>
                  <small>service details</small>
                  <h3>{currentServiceData.name}</h3>
                  <p>{currentServiceData.desc}</p>
                  <div className="service-items">
                    {currentServiceData.items.map((item) => (
                      <span key={item} className="service-item-tag">{item}</span>
                    ))}
                  </div>
                  <div className="service-tech">
                    <strong>Tech Stack:</strong> <span>{currentServiceData.tech}</span>
                  </div>
                  <button className="service-close-btn" onClick={() => setFocusedService(null)}>
                    ✕ Close
                  </button>
                </>
              ) : (
                <>
                  <small>details</small>
                  <h3>→</h3>
                  <p>{c.servicesSelectService}</p>
                </>
              )}
            </aside>
          </div>
        </article>

        <BridgeScene active={scene === 5} text={c.bridgeWork} />

        <article className={`scene work-scene ${scene === 6 ? "active" : ""}`}>
          <div className="copy-column wide">
            <small className="kicker">{c.workKicker}</small>
            <h2>{c.workTitle}</h2>
            <p>{c.workLead}</p>
          </div>
          <div className="work-rail">
            {c.workSteps.map(([number, title, text], index) => (
              <div className="work-step" key={number} style={{ "--delay": `${index * 100}ms` }}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </article>

        <BridgeScene active={scene === 7} text={c.bridgeCases} />

        <article className={`scene cases-scene ${scene === 8 ? "active" : ""}`}>
          <div className="copy-column case-copy">
            <small className="kicker">{c.casesKicker}</small>
            <h2>{c.casesTitle}</h2>
            <p>{c.casesLead}</p>
            <button className="case-key" onClick={() => setSelectedCase(0)} type="button">
              <span aria-hidden="true" />
              <b>{c.caseHint}</b>
            </button>
          </div>
          <CaseGallery c={c} selectedCase={selectedCase} setSelectedCase={setSelectedCase} />
        </article>

        <BridgeScene active={scene === 9} text={c.bridgeFinal} />

        <article className={`scene contact-scene ${scene === lastScene ? "active" : ""}`}>
          <div className="cta-type">
            <small className="kicker">{c.formKicker}</small>
            <h2 className={cta.phase === "second" ? "with-arrow" : ""}>
              {renderHighlightedText(cta.value, ctaHighlightWords)}
              <span className="typing-caret" />
            </h2>
            <p>{c.formLead}</p>
          </div>
          <form className={`final-form ${cta.done ? "show" : ""}`} onSubmit={submit}>
            <div className="form-heading">
              <small>{c.formKicker}</small>
              <h3>{c.formTitle}</h3>
            </div>
            <label>
              <span>{c.contactLabel}</span>
              <input name="contact" onChange={updateForm} placeholder={c.contactPlaceholder} required value={form.contact} />
            </label>
            <label>
              <span>{c.ideaLabel}</span>
              <textarea name="idea" onChange={updateForm} placeholder={c.ideaPlaceholder} required rows="5" value={form.idea} />
            </label>
            <button className="submit-btn" type="submit">
              {c.submit}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
            </button>
            {sent ? (
              <div className="result">
                <strong>{c.resultTitle}</strong>
                <p>{c.resultText}</p>
                <div>
                  <button type="button" onClick={copyBrief}>
                    {copied ? (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                    ) : (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                    )}
                    {copied ? c.copied : c.copyBrief}
                  </button>
                  <a href={telegramUrl} target="_blank" rel="noreferrer">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                    {c.openTelegram}
                  </a>
                </div>
              </div>
            ) : null}
          </form>
        </article>
      </section>

      <div className="bursts" aria-hidden="true">
        {bursts.map((item) => (
          <span className={item.big ? "burst big" : "burst"} key={item.id} style={{ left: item.x, top: item.y }} />
        ))}
      </div>

      <div id="wipe" className={`scene-wipe ${wipePhase}`} aria-hidden="true">
        {Array.from({ length: wipeStripCount }, (_, index) => (
          <div className="ws" key={index} style={{ "--strip-index": index }} />
        ))}
      </div>
    </main>
  );
}



function WorkPreviewCard({ item, index }) {
  const screenshot = caseScreenshots[item.domain];

  return (
    <span className="work-preview-card" style={{ "--case-bg": item.palette, "--float-delay": `${index * -0.75}s` }}>
      {screenshot ? <img src={screenshot} alt="" loading="eager" draggable="false" /> : null}
    </span>
  );
}

function ReviewPreviewCard({ item, index }) {
  return (
    <span className="work-preview-card review-preview-card" style={{ "--case-bg": item.palette, "--float-delay": `${index * -0.75}s` }}>
      <span className="review-mark">“</span>
      <strong>{item.quote}</strong>
      <small>
        {item.name}
        <em>{item.role}</em>
      </small>
    </span>
  );
}

function BridgeScene({ active, text }) {
  const typed = useTyping(text, active, 56, 180);

  return (
    <article className={`scene bridge-scene ${active ? "active" : ""}`}>
      <div className="bridge-copy">
        <span className="bridge-orb" />
        <div className="bridge-loader" aria-hidden="true">
          <i />
          <i />
          <i />
        </div>
        <h2>
          {typed}
          <span className="typing-caret" />
        </h2>
      </div>
    </article>
  );
}

function CaseGallery({ c, selectedCase, setSelectedCase }) {
  const cases = [c.cases[3], c.cases[0], c.cases[1], c.cases[2]].filter(Boolean);
  const trackRef = useRef(null);
  const itemRefs = useRef([]);
  const current = selectedCase === null ? null : cases[selectedCase];

  useEffect(() => {
    const track = trackRef.current;
    const item = selectedCase === null ? itemRefs.current[0] : itemRefs.current[selectedCase];
    if (!track || !item) return;
    const targetLeft =
      selectedCase === null ? 0 : item.offsetLeft - (track.clientWidth - item.clientWidth) / 2;
    track.scrollTo({ left: Math.max(0, targetLeft), behavior: "smooth" });
  }, [selectedCase]);

  function chooseCase(index) {
    if (index === selectedCase) {
      window.open(cases[index].url, "_blank", "noopener,noreferrer");
      return;
    }
    setSelectedCase(index);
  }

  return (
    <div className={`case-gallery ${current ? "has-selection" : ""}`}>
      <div className="case-track" ref={trackRef} role="list">
        {cases.map((item, index) => (
          <button
            className={`case-token ${index === selectedCase ? "selected" : ""}`}
            key={item.name}
            onClick={() => chooseCase(index)}
            ref={(node) => {
              itemRefs.current[index] = node;
            }}
            role="listitem"
            style={{ "--case-bg": item.palette, "--delay": `${index * 90}ms` }}
            type="button"
          >
            <span className="case-number">{`0${index + 1}`}</span>
            <span className="case-screen">
              {caseScreenshots[item.domain] ? <img src={caseScreenshots[item.domain]} alt="" loading="lazy" draggable="false" /> : null}
              <b>{item.name.split(" ").map((word) => word[0]).join("").slice(0, 3)}</b>
              <em>{item.domain}</em>
              <i />
              <i />
              <i />
            </span>
            <span className="case-card-note">{item.tags.join(" / ")}</span>
            <strong>{item.name}</strong>
            <small>{item.domain}</small>
          </button>
        ))}
      </div>

      <aside className={`case-detail ${current ? "show" : "empty"}`}>
        {current ? (
          <>
            <small>{c.selectedLabel}</small>
            <h3>{current.name}</h3>
            <p>{current.summary}</p>
            <div className="case-tags">
              {current.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <a href={current.url} target="_blank" rel="noreferrer">
              {c.openCase}
            </a>
          </>
        ) : (
          <>
            <small>standby</small>
            <h3>→</h3>
            <p>{c.caseEmpty}</p>
          </>
        )}
      </aside>
    </div>
  );
}
