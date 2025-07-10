import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="preconnect"
          href="https://lqkeytouefxlvralqldy.supabase.co"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Philosopher:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#0A4B9B" />
        <meta name="description" content="NITYA - Nurturing & Inspiring Teachers, Yielding Achievement" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Favicon for all platforms */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#0A4B9B" />
        <meta name="msapplication-TileColor" content="#0A4B9B" />
        <meta name="theme-color" content="#0A4B9B" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
} 