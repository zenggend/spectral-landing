"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const telegramUrl = "https://t.me/zenggen";

const copy = {
  ru: {
    lang: "RU",
    theme: "Тема",
    loaderKicker: "SPECTRAL LAUNCH SEQUENCE",
    loaderTitle: "Собираем сигнал",
    loaderText: "Свет, смысл и заявка сходятся в одну точку.",
    hello: "Привет!",
    question: "Как мне вас называть?",
    namePlaceholder: "Ваше имя",
    start: "Запустить сценарий",
    scroll: "Скролл или стрелки переключают сцены",
    next: "Дальше",
    back: "Назад",
    skip: "Пропустить к форме",
    nav: ["Вход", "Команда", "Процесс", "Кейсы", "Форма"],
    bridgeAbout: "Отлично! Давайте расскажу о нас поподробнее",
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
    loaderKicker: "SPECTRAL LAUNCH SEQUENCE",
    loaderTitle: "Tuning the signal",
    loaderText: "Light, meaning and the request converge into one point.",
    hello: "Hello!",
    question: "What should we call you?",
    namePlaceholder: "Your name",
    start: "Start sequence",
    scroll: "Scroll or arrows switch scenes",
    next: "Next",
    back: "Back",
    skip: "Skip to form",
    nav: ["Entry", "Team", "Process", "Cases", "Form"],
    bridgeAbout: "Great! Let me tell you more about us",
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
  ["#8fc7ef", "#7de4d8", "#ffad9d"],
  ["#7de4d8", "#ffad9d", "#f3cb73"],
  ["#7de4d8", "#f3cb73", "#8fc7ef"],
  ["#f3cb73", "#8fc7ef", "#ffad9d"],
  ["#ffad9d", "#8fc7ef", "#7de4d8"],
  ["#8fc7ef", "#f3cb73", "#ffad9d"],
  ["#f3cb73", "#7de4d8", "#8fc7ef"],
  ["#ffad9d", "#7de4d8", "#f3cb73"],
  ["#8fc7ef", "#ffad9d", "#7de4d8"],
];

const emptyForm = { contact: "", idea: "" };

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
    let index = 0;
    let interval;
    const timeout = window.setTimeout(() => {
      interval = window.setInterval(() => {
        index += 1;
        setValue(text.slice(0, index));
        if (index >= text.length) window.clearInterval(interval);
      }, speed);
    }, delay);

    return () => {
      window.clearTimeout(timeout);
      window.clearInterval(interval);
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

export default function Home() {
  const [lang, setLang] = useState("ru");
  const [theme, setTheme] = useState("dark");
  const [booting, setBooting] = useState(true);
  const [scene, setScene] = useState(0);
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
  const c = copy[lang];
  const lastScene = 8;
  const visibleNavScenes = [0, 2, 4, 6, lastScene];
  const bridgeSceneText = {
    1: c.bridgeAbout,
    3: c.bridgeWork,
    5: c.bridgeCases,
    7: c.bridgeFinal,
  }[scene];
  const displayName = name.trim() || (lang === "ru" ? "друг" : "friend");
  const [accentA, accentB, accentC] = sceneAccent[scene];
  const helloText = useTyping(c.hello, !booting && scene === 0, 52, 280);
  const questionText = useTyping(c.question, !booting && scene === 0 && helloText === c.hello, 34, 220);
  const cta = useMorphTyping(c.ctaQuestion(displayName), c.ctaAnswer, !booting && scene === lastScene);
  const brief = useMemo(() => buildBrief(form, displayName, lang), [displayName, form, lang]);

  useEffect(() => {
    const savedLang = localStorage.getItem("spectral-lang");
    const savedTheme = localStorage.getItem("spectral-theme");
    if (savedLang === "ru" || savedLang === "en") setLang(savedLang);
    if (savedTheme === "light" || savedTheme === "dark") setTheme(savedTheme);
    const timer = window.setTimeout(() => setBooting(false), 1900);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    sceneRef.current = scene;
  }, [scene]);

  useEffect(() => {
    if (scene === 6) setSelectedCase(null);
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

  function goTo(next) {
    const target = Math.max(0, Math.min(lastScene, next));
    if (target === sceneRef.current) return;
    if (sceneRef.current === 0 && target > 0 && !name.trim()) {
      setNameTouched(true);
      nameInputRef.current?.focus();
      addBurst(window.innerWidth / 2, window.innerHeight / 2, true);
      return;
    }
    sceneRef.current = target;
    setScene(target);
    addBurst(window.innerWidth / 2, window.innerHeight / 2, true);
  }

  useEffect(() => {
    function unlock() {
      window.setTimeout(() => {
        lockRef.current = false;
      }, 920);
    }

    function onWheel(event) {
      const tag = event.target?.tagName?.toLowerCase();
      if (booting || tag === "input" || tag === "textarea") return;
      if (Math.abs(event.deltaY) < 24) return;
      event.preventDefault();
      if (lockRef.current) return;
      lockRef.current = true;
      goTo(sceneRef.current + (event.deltaY > 0 ? 1 : -1));
      unlock();
    }

    function onKeyDown(event) {
      if (booting) return;
      if (sceneRef.current === 6 && (event.key === "ArrowRight" || event.key === "ArrowLeft")) {
        event.preventDefault();
        setSelectedCase((current) => {
          if (current === null) return 0;
          const direction = event.key === "ArrowRight" ? 1 : -1;
          return Math.max(0, Math.min(c.cases.length - 1, current + direction));
        });
        addBurst(window.innerWidth * 0.58, window.innerHeight * 0.5, event.key === "ArrowRight");
        return;
      }
      if (event.key === "ArrowDown" || event.key === "PageDown") goTo(sceneRef.current + 1);
      if (event.key === "ArrowUp" || event.key === "PageUp") goTo(sceneRef.current - 1);
      if (event.key === "End") goTo(lastScene);
      if (event.key === "Home") goTo(0);
    }

    function onTouchStart(event) {
      touchRef.current = event.touches[0]?.clientY || 0;
    }

    function onTouchEnd(event) {
      const end = event.changedTouches[0]?.clientY || 0;
      const delta = touchRef.current - end;
      if (Math.abs(delta) > 42) goTo(sceneRef.current + (delta > 0 ? 1 : -1));
    }

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [booting, lastScene]);

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
      className="experience-shell"
      onPointerDown={(event) => addBurst(event.clientX, event.clientY)}
      style={{
        "--accent-a": accentA,
        "--accent-b": accentB,
        "--accent-c": accentC,
        "--progress": `${(scene / lastScene) * 100}%`,
      }}
    >
      <Loader booting={booting} c={c} onSkip={() => setBooting(false)} />

      <div className="ambient-field" aria-hidden="true">
        <span className="orb one" />
        <span className="orb two" />
        <span className="orb three" />
        <span className="noise" />
      </div>

      <header className="topline">
        <button className="brand-pill" onClick={() => goTo(0)} type="button">
          <span className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 44 44" fill="none">
              <rect x="12" y="10" width="12" height="24" rx="1.5" transform="rotate(13 18 22)" stroke="currentColor" strokeWidth="1.7" />
              <path d="M27 15.5 40 12.5" stroke="var(--accent-a)" strokeWidth="2.8" strokeLinecap="round" />
              <path d="M28 22 40 22" stroke="var(--accent-b)" strokeWidth="2.8" strokeLinecap="round" />
              <path d="M27 28.5 40 31.5" stroke="var(--accent-c)" strokeWidth="2.8" strokeLinecap="round" />
            </svg>
          </span>
          <b>SPECTRAL</b>
        </button>
        <nav className="scene-dots" aria-label="Scenes">
          {visibleNavScenes.map((sceneIndex, index) => (
            <button className={scene === sceneIndex ? "active" : ""} key={c.nav[index]} onClick={() => goTo(sceneIndex)} type="button">
              <i>{`0${index + 1}`}</i>
              {c.nav[index]}
            </button>
          ))}
        </nav>
        <div className="top-actions">
          <button type="button" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            {c.theme}
          </button>
          <button type="button" onClick={() => setLang(lang === "ru" ? "en" : "ru")}>
            {c.lang}
          </button>
        </div>
      </header>

      <div className="timeline" aria-hidden="true">
        <i />
      </div>

      <PrismAtmosphere />

      <section className="scene-layer">
        <article className={`scene intro-scene ${scene === 0 ? "active" : ""}`}>
          <div className="intro-dialog">
            <h1 className="typed-gradient">
              {helloText}
              <span />
            </h1>
            <p className="typed-question">
              {questionText}
              {questionText ? <span /> : null}
            </p>
            <div className={`name-console ${nameTouched && !name.trim() ? "needs-name" : ""}`}>
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
              <button type="button" onClick={startExperience}>
                {c.start}
              </button>
            </div>
            <small>{c.scroll}</small>
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
        </article>

        <BridgeScene active={scene === 3} text={c.bridgeWork} />

        <article className={`scene work-scene ${scene === 4 ? "active" : ""}`}>
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

        <BridgeScene active={scene === 5} text={c.bridgeCases} />

        <article className={`scene cases-scene ${scene === 6 ? "active" : ""}`}>
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

        <BridgeScene active={scene === 7} text={c.bridgeFinal} />

        <article className={`scene contact-scene ${scene === lastScene ? "active" : ""}`}>
          <div className="cta-type">
            <small className="kicker">{c.formKicker}</small>
            <h2 className={cta.phase === "second" ? "with-arrow" : ""}>
              {cta.value}
              <span />
            </h2>
            <p>{c.formLead}</p>
          </div>
          <form className={`final-form ${cta.done ? "show" : ""}`} onSubmit={submit}>
            <div>
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
            </button>
            {sent ? (
              <div className="result">
                <strong>{c.resultTitle}</strong>
                <p>{c.resultText}</p>
                <div>
                  <button type="button" onClick={copyBrief}>
                    {copied ? c.copied : c.copyBrief}
                  </button>
                  <a href={telegramUrl} target="_blank" rel="noreferrer">
                    {c.openTelegram}
                  </a>
                </div>
              </div>
            ) : null}
          </form>
        </article>
      </section>

      <footer className="bottom-controls">
        <button disabled={scene === 0} onClick={() => goTo(scene - 1)} type="button">
          {c.back}
        </button>
        <button onClick={() => goTo(lastScene)} type="button">
          {c.skip}
        </button>
        <button disabled={scene === lastScene} onClick={() => goTo(scene + 1)} type="button">
          {c.next}
        </button>
      </footer>

      <div className="bursts" aria-hidden="true">
        {bursts.map((item) => (
          <span className={item.big ? "burst big" : "burst"} key={item.id} style={{ left: item.x, top: item.y }} />
        ))}
      </div>
    </main>
  );
}

function BridgeScene({ active, text }) {
  const typed = useTyping(text, active, 32, 120);

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
          <span />
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

function Loader({ booting, c, onSkip }) {
  return (
    <div className={`site-loader ${booting ? "show" : "hide"}`} aria-hidden={!booting}>
      <div className="loader-shell">
        <div className="loader-orbit" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <svg className="loader-prism" viewBox="0 0 420 250" fill="none" aria-hidden="true">
          <defs>
            <linearGradient id="loaderPrismFill" x1="172" y1="45" x2="252" y2="210" gradientUnits="userSpaceOnUse">
              <stop stopColor="#ffffff" stopOpacity=".92" />
              <stop offset=".55" stopColor="#b8c5d2" stopOpacity=".35" />
              <stop offset="1" stopColor="#ffffff" stopOpacity=".72" />
            </linearGradient>
            <filter id="loaderGlow" x="-30%" y="-60%" width="160%" height="220%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <path className="loader-ray loader-in" d="M28 122 L168 122" />
          <path className="loader-core-ray" d="M168 122 L242 122" />
          <g className="loader-prism-core">
            <path d="M172 47 268 91 238 217 142 174Z" fill="url(#loaderPrismFill)" opacity=".52" />
            <path d="M172 47 268 91 238 217 142 174Z" stroke="#f7f1e7" strokeWidth="3.4" strokeLinejoin="round" />
            <path d="M172 47 185 35 282 78 268 91Z" fill="#101827" stroke="#f7f1e7" strokeWidth="3.4" strokeLinejoin="round" />
            <path d="M184 84 238 107 218 183 163 159Z" stroke="#f7f1e7" strokeOpacity=".55" strokeWidth="2.2" />
            <path className="loader-prism-shine" d="M183 64 152 175" stroke="#fff" strokeWidth="7" strokeLinecap="round" opacity=".18" />
          </g>
          <g filter="url(#loaderGlow)">
            <path className="loader-ray loader-blue" d="M242 122 L392 54" />
            <path className="loader-ray loader-teal" d="M242 122 L394 122" />
            <path className="loader-ray loader-coral" d="M242 122 L392 195" />
          </g>
          <circle className="loader-spark" cx="168" cy="122" r="4" />
          <circle className="loader-spark split" cx="242" cy="122" r="4" />
        </svg>
        <div className="loader-copy">
          <small>{c.loaderKicker}</small>
          <strong>SPECTRAL</strong>
          <span>{c.loaderText}</span>
        </div>
        <button type="button" onClick={onSkip}>
          {c.skip}
        </button>
        <div className="loader-progress" aria-hidden="true">
          <i />
        </div>
      </div>
    </div>
  );
}

function PrismAtmosphere() {
  return (
    <div className="prism-atmosphere" aria-hidden="true">
      <svg viewBox="0 0 940 680" fill="none">
        <defs>
          <linearGradient id="beamA" x1="466" y1="310" x2="900" y2="160" gradientUnits="userSpaceOnUse">
            <stop stopColor="var(--accent-a)" stopOpacity=".95" />
            <stop offset="1" stopColor="var(--accent-a)" stopOpacity=".08" />
          </linearGradient>
          <linearGradient id="beamB" x1="466" y1="340" x2="900" y2="340" gradientUnits="userSpaceOnUse">
            <stop stopColor="var(--accent-b)" stopOpacity=".96" />
            <stop offset="1" stopColor="var(--accent-b)" stopOpacity=".08" />
          </linearGradient>
          <linearGradient id="beamC" x1="466" y1="370" x2="900" y2="540" gradientUnits="userSpaceOnUse">
            <stop stopColor="var(--accent-c)" stopOpacity=".95" />
            <stop offset="1" stopColor="var(--accent-c)" stopOpacity=".08" />
          </linearGradient>
          <filter id="beamGlow" x="-20%" y="-30%" width="150%" height="170%">
            <feGaussianBlur stdDeviation="10" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <circle className="scene-ring" cx="470" cy="340" r="284" />
        <path className="straight-input one" d="M70 282 L354 340" />
        <path className="straight-input two" d="M70 340 L354 340" />
        <path className="straight-input three" d="M70 398 L354 340" />
        <path className="inside-ray" d="M354 340 L466 340" />
        <g className="hero-prism">
          <path d="M360 138 540 222 482 568 300 482Z" fill="rgba(255,255,255,.13)" />
          <path d="M360 138 540 222 482 568 300 482Z" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" />
          <path d="M360 138 390 110 570 194 540 222Z" fill="rgba(255,255,255,.08)" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" />
          <path d="M396 238 490 282 445 462 350 416Z" stroke="currentColor" strokeOpacity=".46" strokeWidth="3" />
          <path className="glass-shine" d="M396 165 324 482" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
        </g>
        <g className="beam-fan" filter="url(#beamGlow)">
          <path d="M466 340 L900 136 L900 226 Z" fill="url(#beamA)" />
          <path d="M466 340 L904 292 L904 390 Z" fill="url(#beamB)" />
          <path d="M466 340 L900 470 L900 620 Z" fill="url(#beamC)" />
          <path className="beam-line blue" d="M486 318 L870 160" />
          <path className="beam-line teal" d="M486 340 L870 340" />
          <path className="beam-line coral" d="M486 362 L870 548" />
        </g>
        <circle className="white-spark entry" cx="354" cy="340" r="5" />
        <circle className="white-spark split" cx="466" cy="340" r="5" />
      </svg>
    </div>
  );
}
