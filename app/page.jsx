"use client";

import { useEffect } from "react";

const landingMarkup = String.raw`<div class="progress" id="progress"></div>

<nav class="nav" id="nav">
  <div class="wrap nav-inner">
    <a href="#top" class="brand" aria-label="SPECTRAL">
      <svg class="brand-mark" viewBox="0 0 44 44" fill="none" aria-hidden="true">
        <rect x="12" y="10" width="12" height="24" rx="1.5" transform="rotate(13 18 22)" stroke="currentColor" stroke-width="1.7"/>
        <path d="M27 15.5 40 12.5" stroke="var(--blue)" stroke-width="2.8" stroke-linecap="round"/>
        <path d="M28 22 40 22" stroke="var(--teal)" stroke-width="2.8" stroke-linecap="round"/>
        <path d="M27 28.5 40 31.5" stroke="var(--coral)" stroke-width="2.8" stroke-linecap="round"/>
      </svg>
      <span class="brand-text"><b>SPECTRAL</b><span>WEB STUDIO</span></span>
    </a>
    <div class="nav-links" id="navlinks">
      <a class="link" href="#services" data-i18n="navServices">Услуги</a>
      <a class="link" href="#approach" data-i18n="navApproach">Подход</a>
      <a class="link" href="#process" data-i18n="navProcess">Процесс</a>
      <a class="link" href="#work" data-i18n="navWork">Работы</a>
      <a class="btn btn-primary" href="https://t.me/zenggen" target="_blank" rel="noopener">
        <span data-i18n="navCta">Обсудить в Telegram</span>
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </a>
    </div>
    <div class="nav-actions">
      <div class="lang-switch" aria-label="Language">
        <button class="lang-btn active" type="button" data-lang="ru">RU</button>
        <button class="lang-btn" type="button" data-lang="en">EN</button>
      </div>
      <button class="theme-toggle" type="button" id="themeToggle" aria-label="Переключить тему">
        <svg class="sun" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 4V2M12 22v-2M4.93 4.93 3.52 3.52M20.48 20.48l-1.41-1.41M4 12H2M22 12h-2M4.93 19.07l-1.41 1.41M20.48 3.52l-1.41 1.41" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><circle cx="12" cy="12" r="4.5" stroke="currentColor" stroke-width="1.8"/></svg>
        <svg class="moon" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20.2 14.7A7.7 7.7 0 0 1 9.3 3.8 8.7 8.7 0 1 0 20.2 14.7Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>
      </button>
      <button class="burger" id="burger" type="button" aria-label="Меню"><span></span><span></span><span></span></button>
    </div>
  </div>
</nav>

<header class="hero" id="top">
  <div class="spectrum-field"></div>
  <div class="wrap">
    <div class="hero-grid">
      <div class="hero-copy">
        <span class="eyebrow" data-load data-i18n="heroEyebrow">SPECTRAL WEB STUDIO</span>
        <h1 class="hero-title">
          <span><i data-i18n="heroTitle1">Сайты, где</i></span>
          <span><i class="grad" data-i18n="heroTitle2">дизайн</i></span>
          <span><i data-i18n="heroTitle3">работает как</i></span>
          <span><i data-i18n="heroTitle4">система продаж.</i></span>
        </h1>
        <p class="lead" data-load data-i18n="heroLead">Мы проектируем лендинги, корпоративные сайты и продуктовые страницы так, чтобы визуал, смысл и код давали бизнесу заявки, доверие и скорость.</p>
        <div class="hero-cta" data-load>
          <a href="https://t.me/zenggen" target="_blank" rel="noopener" class="btn btn-primary">
            <span data-i18n="heroCta">Написать @zenggen</span>
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </a>
          <a href="#work" class="btn btn-secondary">
            <span data-i18n="heroWork">Смотреть работы</span>
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M7 17 17 7M9 7h8v8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </a>
        </div>
        <div class="signal-row" data-load>
          <div class="signal-item"><strong>2-4</strong><span data-i18n="statWeeks">недели до запуска</span></div>
          <div class="signal-item"><strong>10+</strong><span data-i18n="statProjects">проектов в продакшене</span></div>
          <div class="signal-item"><strong>100%</strong><span data-i18n="statProcess">прозрачный процесс</span></div>
        </div>
      </div>
      <div class="prism-stage" id="prismStage" data-load>
        <svg class="prism-shell" viewBox="0 0 660 470" fill="none" role="img" aria-label="SPECTRAL prism visual">
          <defs>
            <linearGradient id="beamBlue" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#4f94c9" stop-opacity=".18"/><stop offset=".22" stop-color="#4f94c9" stop-opacity=".75"/><stop offset="1" stop-color="#205a8d"/></linearGradient>
            <linearGradient id="beamTeal" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#42c5b6" stop-opacity=".18"/><stop offset=".22" stop-color="#42c5b6" stop-opacity=".76"/><stop offset="1" stop-color="#16877d"/></linearGradient>
            <linearGradient id="beamCoral" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#ff8b78" stop-opacity=".18"/><stop offset=".22" stop-color="#ff8b78" stop-opacity=".78"/><stop offset="1" stop-color="#dd6558"/></linearGradient>
            <linearGradient id="glass" x1="232" y1="96" x2="329" y2="326" gradientUnits="userSpaceOnUse"><stop stop-color="#fff" stop-opacity=".82"/><stop offset=".48" stop-color="#cfe7f3" stop-opacity=".18"/><stop offset="1" stop-color="#fff" stop-opacity=".46"/></linearGradient>
            <filter id="beamGlow" x="0" y="0" width="660" height="470" filterUnits="userSpaceOnUse"><feGaussianBlur stdDeviation="8" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
          </defs>
          <g stroke="var(--line-strong)" stroke-width="1">
            <path d="M55 126h520M28 236h590M80 346h485" opacity=".35"/>
            <path d="M158 62v330M328 38v360M498 68v320" opacity=".24"/>
          </g>
          <g stroke="#b7c1cf" stroke-width="2.4" stroke-linecap="round" opacity=".9">
            <path class="input-ray" d="M36 183 C96 190 158 199 220 208"/>
            <path class="input-ray" d="M30 222 C94 224 156 228 221 233"/>
            <path class="input-ray" d="M52 260 C111 254 165 250 222 246"/>
          </g>
          <g class="output-beams" filter="url(#beamGlow)">
            <polygon points="326,184 352,179 640,92 640,150" fill="url(#beamBlue)"/>
            <polygon points="330,223 356,223 640,201 640,262" fill="url(#beamTeal)"/>
            <polygon points="324,258 350,263 640,326 640,388" fill="url(#beamCoral)"/>
            <g class="beam-flow" stroke="#fff" stroke-width="2" stroke-dasharray="8 16" stroke-linecap="round">
              <path d="M356 179 626 105"/>
              <path d="M360 223 626 230"/>
              <path d="M354 263 626 352"/>
            </g>
          </g>
          <g class="prism-core">
            <path d="M249 96 338 132 305 334 214 292Z" fill="url(#glass)" stroke="var(--ink)" stroke-width="2.8" stroke-linejoin="round"/>
            <path d="M249 96 338 132 360 116 272 78Z" fill="var(--surface-2)" stroke="var(--ink)" stroke-width="2.8" stroke-linejoin="round"/>
            <path d="M260 124 315 146 290 300 234 276Z" stroke="var(--ink)" stroke-opacity=".45" stroke-width="1.8"/>
            <path class="facet-shine" d="M276 111 326 132 302 318" stroke="#fff" stroke-width="3" stroke-linecap="round" opacity=".45"/>
            <path d="M220 231 329 223" stroke="#fff" stroke-width="2" opacity=".38"/>
          </g>
          <g fill="#fff">
            <circle class="spark" cx="356" cy="178" r="3"/>
            <circle class="spark" cx="365" cy="223" r="3"/>
            <circle class="spark" cx="354" cy="264" r="3"/>
          </g>
        </svg>
        <div class="orbit-label">
          <small data-i18n="orbitSmall">signal check</small>
          <b data-i18n="orbitBig">No template noise</b>
          <span data-i18n="orbitText">visual, copy, UX and code move in one direction</span>
        </div>
      </div>
    </div>
  </div>
  <div class="ticker" aria-hidden="true">
    <div class="ticker-track">
      <div class="ticker-item"><span data-i18n="tickerText">Стратегия</span><i></i><span data-i18n="tickerUx">UX/UI</span><i></i><span data-i18n="tickerFrontend">Frontend</span><i></i><span data-i18n="tickerMotion">Motion</span><i></i><span data-i18n="tickerSeo">SEO-ready</span><i></i><span data-i18n="tickerSpeed">Скорость</span><i></i></div>
      <div class="ticker-item"><span data-i18n="tickerText">Стратегия</span><i></i><span data-i18n="tickerUx">UX/UI</span><i></i><span data-i18n="tickerFrontend">Frontend</span><i></i><span data-i18n="tickerMotion">Motion</span><i></i><span data-i18n="tickerSeo">SEO-ready</span><i></i><span data-i18n="tickerSpeed">Скорость</span><i></i></div>
    </div>
  </div>
</header>

<section class="section" id="services">
  <div class="wrap">
    <div class="section-head" data-reveal>
      <div>
        <span class="eyebrow" data-i18n="servicesEyebrow">Что делаем</span>
        <h2><span data-i18n="servicesTitle1">Не просто страницы.</span><br><span data-i18n="servicesTitle2">Собираем цифровые точки продаж.</span></h2>
      </div>
      <p data-i18n="servicesLead">Каждый проект начинается с цели: заявки, доверие, продажи, запись, запуск продукта. Дальше мы подбираем визуальную систему, структуру и стек под эту цель.</p>
    </div>
    <div class="services-grid">
      <article class="service-card tilt" data-reveal>
        <div class="service-icon"><svg viewBox="0 0 24 24" fill="none"><path d="M4 5h16v14H4zM4 9h16M8 14h8" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
        <h3 data-i18n="service1Title">Лендинги</h3>
        <p data-i18n="service1Text">Упаковываем оффер, ведем пользователя к заявке и делаем страницу быстрой на всех экранах.</p>
        <span class="index">01</span>
      </article>
      <article class="service-card tilt" data-reveal>
        <div class="service-icon"><svg viewBox="0 0 24 24" fill="none"><path d="M4 19V7l8-4 8 4v12M8 19v-8h8v8M3 19h18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
        <h3 data-i18n="service2Title">Корпоративные сайты</h3>
        <p data-i18n="service2Text">Структура, доверие, услуги, команда и кейсы в одном цельном интерфейсе без ощущения шаблона.</p>
        <span class="index">02</span>
      </article>
      <article class="service-card tilt" data-reveal>
        <div class="service-icon"><svg viewBox="0 0 24 24" fill="none"><path d="M6 8h15l-2 9H7L5 4H3M9 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM18 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
        <h3 data-i18n="service3Title">E-commerce</h3>
        <p data-i18n="service3Text">Каталоги, карточки, корзины и промо-разделы, где путь до покупки не ломается на мобильном.</p>
        <span class="index">03</span>
      </article>
      <article class="service-card tilt" data-reveal>
        <div class="service-icon"><svg viewBox="0 0 24 24" fill="none"><path d="M4 17 9 12l4 4 7-9M20 7v6h-6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
        <h3 data-i18n="service4Title">Рост и поддержка</h3>
        <p data-i18n="service4Text">Аналитика, улучшения, новые блоки и техническая поддержка после запуска.</p>
        <span class="index">04</span>
      </article>
    </div>
  </div>
</section>

<section class="section alt" id="approach">
  <div class="wrap">
    <div class="section-head" data-reveal>
      <div>
        <span class="eyebrow" data-i18n="approachEyebrow">Почему качественнее</span>
        <h2><span data-i18n="approachTitle1">Делаем глубже, чем</span><br><span data-i18n="approachTitle2">"красивый первый экран".</span></h2>
      </div>
      <p data-i18n="approachLead">Сайт должен выглядеть уверенно, но еще важнее - объяснять ценность, выдерживать нагрузку, вести к действию и не разваливаться в деталях.</p>
    </div>
    <div class="why-layout">
      <div class="why-panel" data-reveal>
        <svg viewBox="0 0 520 560" preserveAspectRatio="none" aria-hidden="true">
          <rect width="520" height="560" fill="#101827"/>
          <path d="M-40 156 C126 82 229 98 344 48 C438 8 520 12 580 -24" stroke="#4f94c9" stroke-width="70" stroke-linecap="round" opacity=".55"/>
          <path d="M-50 292 C128 218 257 250 376 204 C458 172 524 170 580 132" stroke="#42c5b6" stroke-width="72" stroke-linecap="round" opacity=".58"/>
          <path d="M-40 422 C124 342 234 370 352 414 C430 443 511 450 580 420" stroke="#ff8b78" stroke-width="76" stroke-linecap="round" opacity=".62"/>
          <g stroke="#fff" stroke-opacity=".16">
            <path d="M64 0v560M192 0v560M320 0v560M448 0v560"/>
            <path d="M0 92h520M0 224h520M0 356h520M0 488h520"/>
          </g>
        </svg>
        <div class="why-panel-copy">
          <small data-i18n="panelSmall">visual system</small>
          <h3 data-i18n="panelTitle">more signal, less noise</h3>
        </div>
      </div>
      <div class="why-list">
        <article class="why-card" data-reveal>
          <div class="why-num">01</div>
          <div><h3 data-i18n="why1Title">Сначала логика бизнеса</h3><p data-i18n="why1Text">Разбираем аудиторию, оффер, возражения и путь к заявке. Поэтому блоки появляются не "для красоты", а по делу.</p></div>
        </article>
        <article class="why-card" data-reveal>
          <div class="why-num">02</div>
          <div><h3 data-i18n="why2Title">Визуал с характером</h3><p data-i18n="why2Text">Делаем композицию, ритм, микроанимации и графику под бренд, а не собираем очередной одинаковый лендинг.</p></div>
        </article>
        <article class="why-card" data-reveal>
          <div class="why-num">03</div>
          <div><h3 data-i18n="why3Title">Код готов к запуску</h3><p data-i18n="why3Text">Адаптив, скорость, аккуратная верстка, базовое SEO и чистая передача проекта без технического хвоста.</p></div>
        </article>
      </div>
    </div>
  </div>
</section>

<section class="section dark-band" id="process">
  <div class="wrap">
    <div class="section-head" data-reveal>
      <div>
        <span class="eyebrow" data-i18n="processEyebrow">Как работаем</span>
        <h2><span data-i18n="processTitle1">Пять коротких этапов.</span><br><span data-i18n="processTitle2">Без тумана и вечных правок.</span></h2>
      </div>
      <p class="muted" data-i18n="processLead">Вы видите прогресс, понимаете следующий шаг и получаете сайт, который можно запускать, измерять и развивать.</p>
    </div>
    <div class="process-grid" id="processGrid">
      <article class="process-step" data-reveal><div class="dot">01</div><h3 data-i18n="step1Title">Диагностика</h3><p data-i18n="step1Text">Цели, аудитория, конкуренты, сильные смыслы и структура будущего сайта.</p></article>
      <article class="process-step" data-reveal><div class="dot">02</div><h3 data-i18n="step2Title">Прототип</h3><p data-i18n="step2Text">Собираем сценарий страницы и проверяем, что путь к заявке понятен.</p></article>
      <article class="process-step" data-reveal><div class="dot">03</div><h3 data-i18n="step3Title">Дизайн</h3><p data-i18n="step3Text">Визуальная система, адаптивные состояния, графика и motion-направление.</p></article>
      <article class="process-step" data-reveal><div class="dot">04</div><h3 data-i18n="step4Title">Разработка</h3><p data-i18n="step4Text">Чистая верстка, анимации, интеграции, скорость и тестирование.</p></article>
      <article class="process-step" data-reveal><div class="dot">05</div><h3 data-i18n="step5Title">Запуск</h3><p data-i18n="step5Text">Публикация, проверка аналитики, передача доступов и поддержка после релиза.</p></article>
    </div>
  </div>
</section>

<section class="section" id="work">
  <div class="wrap">
    <div class="section-head" data-reveal>
      <div>
        <span class="eyebrow" data-i18n="workEyebrow">Избранные работы</span>
        <h2><span data-i18n="workTitle1">Проекты, которые</span><br><span data-i18n="workTitle2">уже работают на бизнес.</span></h2>
      </div>
      <p data-i18n="workLead">Ниже - не музей макетов, а живые сайты с разными задачами: продажи, заявки, продуктовый запуск и имидж бренда.</p>
    </div>
    <div class="work-grid">
      <a class="case tilt" href="https://champion-fitness.kz/" target="_blank" rel="noopener" data-reveal style="--case-bg:linear-gradient(135deg,#101827,#1e2e54)">
        <div class="case-visual">
          <div class="mock-window">
            <div class="mock-bar"><i></i><i></i><i></i></div>
            <div class="mock-body">
              <svg viewBox="0 0 520 300" preserveAspectRatio="none" aria-hidden="true">
                <rect width="520" height="300" fill="#101827"/>
                <rect x="34" y="34" width="190" height="22" rx="5" fill="#fff" opacity=".92"/>
                <rect x="34" y="70" width="250" height="12" rx="4" fill="#ff806f"/>
                <rect x="34" y="210" width="132" height="42" rx="21" fill="#ff806f"/>
                <rect x="344" y="44" width="120" height="204" rx="12" fill="#26365f"/>
                <circle cx="404" cy="130" r="42" fill="#ff806f" opacity=".82"/>
                <path d="M336 252c64-52 108-47 170-18" stroke="#42c5b6" stroke-width="16" stroke-linecap="round" opacity=".55"/>
              </svg>
            </div>
          </div>
        </div>
        <div class="case-body">
          <div class="case-tags"><span data-i18n="case1Tag1">Веб-сайт</span><span data-i18n="case1Tag2">Сеть филиалов</span></div>
          <h3>Champion Fitness <svg viewBox="0 0 24 24" fill="none"><path d="M7 17 17 7M9 7h8v8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></h3>
          <p data-i18n="case1Text">Сайт сети из 8 фитнес-клубов в Астане: онлайн-продажа абонементов, франшиза, магазин и понятный путь к заявке.</p>
          <div class="case-foot"><span>champion-fitness.kz</span><div class="mini-spectrum"><i style="background:var(--blue)"></i><i style="background:var(--teal)"></i><i style="background:var(--coral)"></i></div></div>
        </div>
      </a>
      <a class="case tilt" href="https://bapcare.com" target="_blank" rel="noopener" data-reveal style="--case-bg:linear-gradient(135deg,#eaf3f8,#5a95c3)">
        <div class="case-visual">
          <div class="mock-window">
            <div class="mock-bar"><i></i><i></i><i></i></div>
            <div class="mock-body">
              <svg viewBox="0 0 520 300" preserveAspectRatio="none" aria-hidden="true">
                <rect width="520" height="300" fill="#f5f9fc"/>
                <rect x="34" y="34" width="225" height="24" rx="6" fill="#101827"/>
                <rect x="34" y="72" width="170" height="12" rx="4" fill="#8a98aa"/>
                <rect x="34" y="214" width="140" height="42" rx="21" fill="#205a8d"/>
                <circle cx="390" cy="140" r="74" fill="#fff" stroke="#205a8d" stroke-width="6"/>
                <text x="390" y="154" font-family="Space Grotesk, sans-serif" font-size="52" font-weight="700" fill="#205a8d" text-anchor="middle">82</text>
                <path d="M300 252c60-52 118-52 184-2" stroke="#42c5b6" stroke-width="15" stroke-linecap="round" opacity=".45"/>
              </svg>
            </div>
          </div>
        </div>
        <div class="case-body">
          <div class="case-tags"><span data-i18n="case2Tag1">Продукт</span><span data-i18n="case2Tag2">AI</span></div>
          <h3>Bapcare <svg viewBox="0 0 24 24" fill="none"><path d="M7 17 17 7M9 7h8v8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></h3>
          <p data-i18n="case2Text">Лендинг AI-сервиса анализа лица: сканер в браузере, Face Score и персональный план ухода.</p>
          <div class="case-foot"><span>bapcare.com</span><div class="mini-spectrum"><i style="background:var(--blue)"></i><i style="background:var(--teal)"></i><i style="background:var(--coral)"></i></div></div>
        </div>
      </a>
      <a class="case tilt" href="https://championschool.kz" target="_blank" rel="noopener" data-reveal style="--case-bg:linear-gradient(135deg,#0d3a36,#16877d)">
        <div class="case-visual">
          <div class="mock-window">
            <div class="mock-bar"><i></i><i></i><i></i></div>
            <div class="mock-body">
              <svg viewBox="0 0 520 300" preserveAspectRatio="none" aria-hidden="true">
                <rect width="520" height="300" fill="#0d3a36"/>
                <rect x="34" y="40" width="260" height="26" rx="6" fill="#fff"/>
                <rect x="34" y="82" width="190" height="12" rx="4" fill="#7de4d8"/>
                <rect x="34" y="210" width="150" height="42" rx="21" fill="#42c5b6"/>
                <rect x="342" y="42" width="122" height="210" rx="14" fill="#125a53"/>
                <circle cx="403" cy="118" r="46" fill="#7de4d8" opacity=".44"/>
                <path d="M328 238h154" stroke="#fff" stroke-opacity=".4" stroke-width="14" stroke-linecap="round"/>
              </svg>
            </div>
          </div>
        </div>
        <div class="case-body">
          <div class="case-tags"><span data-i18n="case3Tag1">Лендинг</span><span data-i18n="case3Tag2">Заявки</span></div>
          <h3>Champion School <svg viewBox="0 0 24 24" fill="none"><path d="M7 17 17 7M9 7h8v8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></h3>
          <p data-i18n="case3Text">Школа фитнес-тренеров: офлайн в Астане и Алматы, онлайн по Казахстану, фокус на наборе учеников.</p>
          <div class="case-foot"><span>championschool.kz</span><div class="mini-spectrum"><i style="background:var(--blue)"></i><i style="background:var(--teal)"></i><i style="background:var(--coral)"></i></div></div>
        </div>
      </a>
      <a class="case tilt" href="https://koroid.agency" target="_blank" rel="noopener" data-reveal style="--case-bg:linear-gradient(135deg,#111,#282a31)">
        <div class="case-visual">
          <div class="mock-window">
            <div class="mock-bar"><i></i><i></i><i></i></div>
            <div class="mock-body">
              <svg viewBox="0 0 520 300" preserveAspectRatio="none" aria-hidden="true">
                <rect width="520" height="300" fill="#08090c"/>
                <rect x="34" y="116" width="302" height="32" rx="6" fill="#fff"/>
                <rect x="34" y="164" width="210" height="28" rx="6" fill="#656b78"/>
                <circle cx="420" cy="150" r="64" fill="none" stroke="#ff806f" stroke-width="5"/>
                <circle cx="420" cy="150" r="40" fill="none" stroke="#42c5b6" stroke-width="5"/>
                <path d="M364 226c52-36 94-36 140 0" stroke="#4f94c9" stroke-width="13" stroke-linecap="round" opacity=".55"/>
              </svg>
            </div>
          </div>
        </div>
        <div class="case-body">
          <div class="case-tags"><span data-i18n="case4Tag1">Брендинг</span><span data-i18n="case4Tag2">Motion</span></div>
          <h3>Koroid Agency <svg viewBox="0 0 24 24" fill="none"><path d="M7 17 17 7M9 7h8v8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></h3>
          <p data-i18n="case4Text">Имиджевый сайт диджитал-агентства: темная эстетика, насыщенная анимация и сильная подача бренда.</p>
          <div class="case-foot"><span>koroid.agency</span><div class="mini-spectrum"><i style="background:var(--blue)"></i><i style="background:var(--teal)"></i><i style="background:var(--coral)"></i></div></div>
        </div>
      </a>
    </div>
  </div>
</section>

<section class="contact" id="contact">
  <div class="wrap contact-grid">
    <div data-reveal>
      <span class="eyebrow" data-i18n="contactEyebrow">Контакты</span>
      <h2><span data-i18n="contactTitle1">Запустим сайт,</span><br><span class="grad" data-i18n="contactTitle2">который не стыдно показать.</span></h2>
      <p data-i18n="contactLead">Напишите в Telegram, коротко расскажите задачу и получите понятный следующий шаг: формат, сроки, бюджет и что можно усилить уже на старте.</p>
      <div class="contact-actions">
        <a href="https://t.me/zenggen" target="_blank" rel="noopener" class="btn btn-primary">
          <span data-i18n="contactCta">Написать @zenggen</span>
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </a>
        <a href="#services" class="btn btn-secondary"><span data-i18n="contactServices">Посмотреть услуги</span></a>
      </div>
    </div>
    <aside class="contact-card" data-reveal>
      <small data-i18n="contactCardSmall">Telegram</small>
      <a href="https://t.me/zenggen" target="_blank" rel="noopener">
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21.94 4.66 18.9 19c-.23 1-.83 1.25-1.68.78l-4.65-3.43-2.24 2.16c-.25.25-.46.46-.93.46l.33-4.73 8.62-7.79c.38-.33-.08-.52-.58-.19l-10.66 6.7-4.59-1.43c-1-.31-1.02-1 .21-1.48l17.95-6.92c.83-.31 1.56.2 1.29 1.46z"/></svg>
        @zenggen
      </a>
      <p data-i18n="contactCardText">Пока оставили один контакт, чтобы не размазывать заявки по каналам.</p>
    </aside>
  </div>
</section>

<footer class="footer">
  <div class="wrap">
    <div class="footer-grid">
      <a href="#top" class="brand" aria-label="SPECTRAL">
        <svg class="brand-mark" viewBox="0 0 44 44" fill="none" aria-hidden="true">
          <rect x="12" y="10" width="12" height="24" rx="1.5" transform="rotate(13 18 22)" stroke="#fff" stroke-width="1.7"/>
          <path d="M27 15.5 40 12.5" stroke="#8fc7ef" stroke-width="2.8" stroke-linecap="round"/>
          <path d="M28 22 40 22" stroke="#7de4d8" stroke-width="2.8" stroke-linecap="round"/>
          <path d="M27 28.5 40 31.5" stroke="#ffad9d" stroke-width="2.8" stroke-linecap="round"/>
        </svg>
        <span class="brand-text"><b>SPECTRAL</b><span>WEB STUDIO</span></span>
      </a>
      <div class="footer-links">
        <div class="footer-col">
          <h4 data-i18n="footerNav">Навигация</h4>
          <a href="#services" data-i18n="navServices">Услуги</a>
          <a href="#approach" data-i18n="navApproach">Подход</a>
          <a href="#work" data-i18n="navWork">Работы</a>
        </div>
        <div class="footer-col">
          <h4 data-i18n="footerContact">Контакт</h4>
          <a href="https://t.me/zenggen" target="_blank" rel="noopener">Telegram @zenggen</a>
          <p data-i18n="footerCity">Астана, Казахстан</p>
        </div>
        <div class="footer-col">
          <h4 data-i18n="footerServices">Форматы</h4>
          <p data-i18n="service1Title">Лендинги</p>
          <p data-i18n="service2Title">Корпоративные сайты</p>
          <p data-i18n="service3Title">E-commerce</p>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© <span id="yr"></span> SPECTRAL Web Studio. <span data-i18n="rights">Все права защищены.</span></p>
      <div class="mini-spectrum"><i style="background:#8fc7ef"></i><i style="background:#7de4d8"></i><i style="background:#ffad9d"></i></div>
    </div>
  </div>
</footer>`;

const copy={
  ru:{
    metaTitle:"SPECTRAL - веб-студия, которая превращает дизайн в заявки",
    metaDescription:"SPECTRAL - веб-студия полного цикла. Проектируем, разрабатываем и запускаем сайты с сильной визуальной системой, быстрым кодом и фокусом на конверсии.",
    navServices:"Услуги",navApproach:"Подход",navProcess:"Процесс",navWork:"Работы",navCta:"Обсудить в Telegram",
    heroEyebrow:"SPECTRAL WEB STUDIO",heroTitle1:"Сайты, где",heroTitle2:"дизайн",heroTitle3:"работает как",heroTitle4:"система продаж.",
    heroLead:"Мы проектируем лендинги, корпоративные сайты и продуктовые страницы так, чтобы визуал, смысл и код давали бизнесу заявки, доверие и скорость.",
    heroCta:"Написать @zenggen",heroWork:"Смотреть работы",statWeeks:"недели до запуска",statProjects:"проектов в продакшене",statProcess:"прозрачный процесс",
    orbitSmall:"signal check",orbitBig:"No template noise",orbitText:"visual, copy, UX and code move in one direction",
    tickerText:"Стратегия",tickerUx:"UX/UI",tickerFrontend:"Frontend",tickerMotion:"Motion",tickerSeo:"SEO-ready",tickerSpeed:"Скорость",
    servicesEyebrow:"Что делаем",servicesTitle1:"Не просто страницы.",servicesTitle2:"Собираем цифровые точки продаж.",
    servicesLead:"Каждый проект начинается с цели: заявки, доверие, продажи, запись, запуск продукта. Дальше мы подбираем визуальную систему, структуру и стек под эту цель.",
    service1Title:"Лендинги",service1Text:"Упаковываем оффер, ведем пользователя к заявке и делаем страницу быстрой на всех экранах.",
    service2Title:"Корпоративные сайты",service2Text:"Структура, доверие, услуги, команда и кейсы в одном цельном интерфейсе без ощущения шаблона.",
    service3Title:"E-commerce",service3Text:"Каталоги, карточки, корзины и промо-разделы, где путь до покупки не ломается на мобильном.",
    service4Title:"Рост и поддержка",service4Text:"Аналитика, улучшения, новые блоки и техническая поддержка после запуска.",
    approachEyebrow:"Почему качественнее",approachTitle1:"Делаем глубже, чем",approachTitle2:"\"красивый первый экран\".",
    approachLead:"Сайт должен выглядеть уверенно, но еще важнее - объяснять ценность, выдерживать нагрузку, вести к действию и не разваливаться в деталях.",
    panelSmall:"visual system",panelTitle:"more signal, less noise",
    why1Title:"Сначала логика бизнеса",why1Text:"Разбираем аудиторию, оффер, возражения и путь к заявке. Поэтому блоки появляются не \"для красоты\", а по делу.",
    why2Title:"Визуал с характером",why2Text:"Делаем композицию, ритм, микроанимации и графику под бренд, а не собираем очередной одинаковый лендинг.",
    why3Title:"Код готов к запуску",why3Text:"Адаптив, скорость, аккуратная верстка, базовое SEO и чистая передача проекта без технического хвоста.",
    processEyebrow:"Как работаем",processTitle1:"Пять коротких этапов.",processTitle2:"Без тумана и вечных правок.",
    processLead:"Вы видите прогресс, понимаете следующий шаг и получаете сайт, который можно запускать, измерять и развивать.",
    step1Title:"Диагностика",step1Text:"Цели, аудитория, конкуренты, сильные смыслы и структура будущего сайта.",
    step2Title:"Прототип",step2Text:"Собираем сценарий страницы и проверяем, что путь к заявке понятен.",
    step3Title:"Дизайн",step3Text:"Визуальная система, адаптивные состояния, графика и motion-направление.",
    step4Title:"Разработка",step4Text:"Чистая верстка, анимации, интеграции, скорость и тестирование.",
    step5Title:"Запуск",step5Text:"Публикация, проверка аналитики, передача доступов и поддержка после релиза.",
    workEyebrow:"Избранные работы",workTitle1:"Проекты, которые",workTitle2:"уже работают на бизнес.",
    workLead:"Ниже - не музей макетов, а живые сайты с разными задачами: продажи, заявки, продуктовый запуск и имидж бренда.",
    case1Tag1:"Веб-сайт",case1Tag2:"Сеть филиалов",case1Text:"Сайт сети из 8 фитнес-клубов в Астане: онлайн-продажа абонементов, франшиза, магазин и понятный путь к заявке.",
    case2Tag1:"Продукт",case2Tag2:"AI",case2Text:"Лендинг AI-сервиса анализа лица: сканер в браузере, Face Score и персональный план ухода.",
    case3Tag1:"Лендинг",case3Tag2:"Заявки",case3Text:"Школа фитнес-тренеров: офлайн в Астане и Алматы, онлайн по Казахстану, фокус на наборе учеников.",
    case4Tag1:"Брендинг",case4Tag2:"Motion",case4Text:"Имиджевый сайт диджитал-агентства: темная эстетика, насыщенная анимация и сильная подача бренда.",
    contactEyebrow:"Контакты",contactTitle1:"Запустим сайт,",contactTitle2:"который не стыдно показать.",
    contactLead:"Напишите в Telegram, коротко расскажите задачу и получите понятный следующий шаг: формат, сроки, бюджет и что можно усилить уже на старте.",
    contactCta:"Написать @zenggen",contactServices:"Посмотреть услуги",contactCardSmall:"Telegram",contactCardText:"Пока оставили один контакт, чтобы не размазывать заявки по каналам.",
    footerNav:"Навигация",footerContact:"Контакт",footerServices:"Форматы",footerCity:"Астана, Казахстан",rights:"Все права защищены.",
    themeLabel:"Переключить тему",menuLabel:"Меню"
  },
  en:{
    metaTitle:"SPECTRAL - web studio turning design into qualified leads",
    metaDescription:"SPECTRAL is a full-cycle web studio. We design, build and launch websites with strong visual systems, fast code and conversion-focused structure.",
    navServices:"Services",navApproach:"Approach",navProcess:"Process",navWork:"Work",navCta:"Discuss on Telegram",
    heroEyebrow:"SPECTRAL WEB STUDIO",heroTitle1:"Websites where",heroTitle2:"design",heroTitle3:"works like",heroTitle4:"a sales system.",
    heroLead:"We design landing pages, corporate websites and product pages where visuals, messaging and code work together to bring leads, trust and speed.",
    heroCta:"Message @zenggen",heroWork:"View work",statWeeks:"weeks to launch",statProjects:"projects in production",statProcess:"transparent process",
    orbitSmall:"signal check",orbitBig:"No template noise",orbitText:"visual, copy, UX and code move in one direction",
    tickerText:"Strategy",tickerUx:"UX/UI",tickerFrontend:"Frontend",tickerMotion:"Motion",tickerSeo:"SEO-ready",tickerSpeed:"Speed",
    servicesEyebrow:"What we build",servicesTitle1:"Not just pages.",servicesTitle2:"Digital sales points with depth.",
    servicesLead:"Every project starts with a goal: leads, trust, sales, bookings or a product launch. Then we shape the visual system, structure and stack around that goal.",
    service1Title:"Landing pages",service1Text:"We package the offer, guide people to action and keep the page fast on every screen.",
    service2Title:"Corporate websites",service2Text:"Structure, trust, services, team and cases inside one cohesive interface without a template feel.",
    service3Title:"E-commerce",service3Text:"Catalogs, product pages, carts and promo sections where the path to purchase stays clean on mobile.",
    service4Title:"Growth and support",service4Text:"Analytics, improvements, new sections and technical support after launch.",
    approachEyebrow:"Why it feels better",approachTitle1:"We go deeper than",approachTitle2:"a pretty first screen.",
    approachLead:"A website should look confident, but it also has to explain value, handle real use, guide action and hold together in the details.",
    panelSmall:"visual system",panelTitle:"more signal, less noise",
    why1Title:"Business logic first",why1Text:"We unpack the audience, offer, objections and path to lead. Blocks appear for a reason, not just decoration.",
    why2Title:"Visuals with character",why2Text:"Composition, rhythm, micro-animation and graphics are shaped for the brand instead of another identical landing page.",
    why3Title:"Launch-ready code",why3Text:"Responsive layout, speed, tidy markup, basic SEO and clean handoff without a technical tail.",
    processEyebrow:"How we work",processTitle1:"Five compact stages.",processTitle2:"No fog. No endless edits.",
    processLead:"You see progress, understand the next step and receive a website that can be launched, measured and improved.",
    step1Title:"Diagnosis",step1Text:"Goals, audience, competitors, strong messages and the future site structure.",
    step2Title:"Prototype",step2Text:"We assemble the page scenario and check that the route to action is clear.",
    step3Title:"Design",step3Text:"Visual system, responsive states, graphics and the motion direction.",
    step4Title:"Development",step4Text:"Clean markup, animation, integrations, performance and testing.",
    step5Title:"Launch",step5Text:"Publishing, analytics checks, access handoff and support after release.",
    workEyebrow:"Selected work",workTitle1:"Projects already",workTitle2:"working for businesses.",
    workLead:"These are live websites with different goals: sales, leads, product launch and brand image.",
    case1Tag1:"Website",case1Tag2:"Branch network",case1Text:"Website for 8 fitness clubs in Astana: online memberships, franchise, shop and a clear route to inquiry.",
    case2Tag1:"Product",case2Tag2:"AI",case2Text:"Landing page for an AI face analysis service: browser scanner, Face Score and a personal care plan.",
    case3Tag1:"Landing",case3Tag2:"Leads",case3Text:"Fitness trainer school: offline in Astana and Almaty, online across Kazakhstan, focused on student acquisition.",
    case4Tag1:"Branding",case4Tag2:"Motion",case4Text:"Image website for a digital agency: dark aesthetic, rich animation and strong brand presentation.",
    contactEyebrow:"Contact",contactTitle1:"Let's launch a site",contactTitle2:"you will want to show.",
    contactLead:"Message us on Telegram, briefly describe the task and get a clear next step: format, timeline, budget and what can be strengthened from the start.",
    contactCta:"Message @zenggen",contactServices:"View services",contactCardSmall:"Telegram",contactCardText:"For now, one contact point keeps every request in one place.",
    footerNav:"Navigation",footerContact:"Contact",footerServices:"Formats",footerCity:"Astana, Kazakhstan",rights:"All rights reserved.",
    themeLabel:"Toggle theme",menuLabel:"Menu"
  }
};;

export default function Home() {
  useEffect(() => {
    const root = document.documentElement;
    const nav = document.getElementById("nav");
    const progress = document.getElementById("progress");
    const burger = document.getElementById("burger");
    const navlinks = document.getElementById("navlinks");
    const themeToggle = document.getElementById("themeToggle");
    const metaDescription = document.querySelector('meta[name="description"]');
    const metaTheme = document.querySelector('meta[name="theme-color"]');
    const year = document.getElementById("yr");
    const abort = new AbortController();
    const { signal } = abort;

    if (year) year.textContent = String(new Date().getFullYear());

    function setLanguage(lang) {
      const next = copy[lang] ? lang : "ru";
      root.lang = next;
      localStorage.setItem("spectral-lang", next);
      document.querySelectorAll("[data-i18n]").forEach((el) => {
        const value = copy[next][el.dataset.i18n];
        if (value) el.textContent = value;
      });
      document.title = copy[next].metaTitle;
      metaDescription?.setAttribute("content", copy[next].metaDescription);
      themeToggle?.setAttribute("aria-label", copy[next].themeLabel);
      burger?.setAttribute("aria-label", copy[next].menuLabel);
      document.querySelectorAll(".lang-btn").forEach((btn) => {
        btn.classList.toggle("active", btn.dataset.lang === next);
        btn.setAttribute("aria-pressed", String(btn.dataset.lang === next));
      });
    }

    function setTheme(theme) {
      const next = theme === "dark" ? "dark" : "light";
      root.dataset.theme = next;
      localStorage.setItem("spectral-theme", next);
      themeToggle?.setAttribute("aria-pressed", String(next === "dark"));
      metaTheme?.setAttribute("content", next === "dark" ? "#0d1117" : "#f6f2ea");
    }

    const savedLang = localStorage.getItem("spectral-lang") || (navigator.language.toLowerCase().startsWith("ru") ? "ru" : "en");
    const savedTheme = localStorage.getItem("spectral-theme") || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    setTheme(savedTheme);
    setLanguage(savedLang);

    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.addEventListener("click", () => setLanguage(btn.dataset.lang), { signal });
    });
    themeToggle?.addEventListener("click", () => setTheme(root.dataset.theme === "dark" ? "light" : "dark"), { signal });

    function onScroll() {
      const y = window.scrollY;
      nav?.classList.toggle("scrolled", y > 24);
      const h = document.documentElement.scrollHeight - window.innerHeight;
      if (progress) progress.style.width = (h > 0 ? (y / h) * 100 : 0) + "%";
    }
    window.addEventListener("scroll", onScroll, { passive: true, signal });
    onScroll();

    burger?.addEventListener("click", () => {
      burger.classList.toggle("x");
      navlinks?.classList.toggle("open");
    }, { signal });
    navlinks?.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        burger?.classList.remove("x");
        navlinks.classList.remove("open");
      }, { signal });
    });

    const readyFrame = requestAnimationFrame(() => document.body.classList.add("is-ready"));
    window.addEventListener("load", () => document.body.classList.add("is-ready"), { signal });

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const parent = entry.target.parentElement;
        const group = parent ? [...parent.querySelectorAll("[data-reveal]")] : [];
        const index = Math.max(0, group.indexOf(entry.target));
        entry.target.style.transitionDelay = Math.min(index, 6) * 70 + "ms";
        entry.target.classList.add("in");
        revealObserver.unobserve(entry.target);
      });
    }, { threshold: 0.14, rootMargin: "0px 0px -7% 0px" });
    document.querySelectorAll("[data-reveal]").forEach((el) => revealObserver.observe(el));

    const processGrid = document.getElementById("processGrid");
    const processObserver = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        processGrid?.classList.add("in");
        processObserver.disconnect();
      }
    }, { threshold: 0.28 });
    if (processGrid) processObserver.observe(processGrid);

    const stage = document.getElementById("prismStage");
    if (matchMedia("(pointer:fine)").matches && stage) {
      stage.addEventListener("pointermove", (event) => {
        const rect = stage.getBoundingClientRect();
        const mx = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
        const my = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
        stage.style.setProperty("--mx", mx.toFixed(3));
        stage.style.setProperty("--my", my.toFixed(3));
      }, { signal });
      stage.addEventListener("pointerleave", () => {
        stage.style.setProperty("--mx", "0");
        stage.style.setProperty("--my", "0");
      }, { signal });
    }

    if (matchMedia("(pointer:fine)").matches) {
      document.querySelectorAll(".tilt").forEach((card) => {
        card.addEventListener("pointermove", (event) => {
          const rect = card.getBoundingClientRect();
          const x = (event.clientX - rect.left) / rect.width - 0.5;
          const y = (event.clientY - rect.top) / rect.height - 0.5;
          card.style.transform = `rotateX(${(-y * 3).toFixed(2)}deg) rotateY(${(x * 3).toFixed(2)}deg) translateY(-4px)`;
        }, { signal });
        card.addEventListener("pointerleave", () => {
          card.style.transform = "";
        }, { signal });
      });
    }

    return () => {
      abort.abort();
      cancelAnimationFrame(readyFrame);
      revealObserver.disconnect();
      processObserver.disconnect();
      document.body.classList.remove("is-ready");
    };
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: landingMarkup }} />;
}
