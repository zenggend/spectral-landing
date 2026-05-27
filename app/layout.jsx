import "./globals.css";

export const metadata = {
  title: "SPECTRAL - кинематографичный сайт для заявок",
  description:
    "SPECTRAL проектирует сайты, где первый экран сразу объясняет ценность, собирает контакт и запускает понятный сценарий продаж.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/logo_spectral.png", type: "image/png" },
    ],
    apple: "/logo_spectral.png",
  },
};

const themeScript = `try{var t=localStorage.getItem('spectral-theme')||'dark';document.documentElement.dataset.theme=t;var m=document.querySelector('meta[name="theme-color"]');if(m)m.setAttribute('content',t==='dark'?'#07090d':'#f8fafc')}catch(e){}`;

export default function RootLayout({ children }) {
  return (
    <html lang="ru" data-theme="dark" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#07090d" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Geologica:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;700&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
