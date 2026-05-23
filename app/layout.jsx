import "./globals.css";

export const metadata = {
  title: "SPECTRAL - веб-студия, которая превращает дизайн в заявки",
  description: "SPECTRAL - веб-студия полного цикла. Проектируем, разрабатываем и запускаем сайты с сильной визуальной системой, быстрым кодом и фокусом на конверсии.",
};

const themeScript = `try{var t=localStorage.getItem('spectral-theme')||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');document.documentElement.dataset.theme=t;var m=document.querySelector('meta[name=\"theme-color\"]');if(m)m.setAttribute('content',t==='dark'?'#0d1117':'#f6f2ea')}catch(e){}`;

export default function RootLayout({ children }) {
  return (
    <html lang="ru" data-theme="light" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#f6f2ea" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&family=Manrope:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
