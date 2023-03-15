import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { SessionProvider } from 'next-auth/react'
import Progress from 'components/progress';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';


export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {

  // const setIsAnimating = useProgressStore((state: any) => state.setIsAnimating);
  const [isAnimating, setIsAnimating] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => {
      setIsAnimating(true);
    };
    const handleStop = () => {
      setIsAnimating(false);
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleStop);
    router.events.on('routeChangeError', handleStop);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleStop);
      router.events.off('routeChangeError', handleStop);
    };
  }, [router]);

  return <>
    <Head>
      <meta charSet="utf-8" />
      {/* Search Engine */}
      <meta name="description" content="Hello! I'm Kanak, a FullStack Web Developer based in India. I’m very passionate about the work that I do." />
      <meta name="image" content="https://kkupgrader.eu.org/assets/images/me.png?w=640&q=100" />
      {/* Schema.org for Google */}
      <meta itemProp="name" content=" Kanak Kholwal" />
      <meta itemProp="description" content="Hello! I'm Kanak, a FullStack Web Developer based in India. I’m very passionate about the work that I do." />
      <meta itemProp="image" content="https://kkupgrader.eu.org/assets/images/me.png?w=640&q=100" />

      {/* Open Graph general (Facebook, Pinterest & LinkedIn) */}
      <meta property="og:title" content=" Kanak Kholwal" />
      <meta property="og:description" content="Hello! I'm Kanak, a FullStack Web Developer based in India. I’m ...." />
      <meta property="og:image" content="https://kkupgrader.eu.org/assets/images/me.png?w=640&q=100" />
      <meta property="og:url" content="https://www.kanakkholwal.eu.org/" />
      <meta property="og:site_name" content="Kanak Kholwal 's Portfolio" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:title" content="Meta Tag Generator Tool" />
      <meta property="twitter:description" content="Hello! I'm Kanak, a FullStack Web Developer based in India. I’m very passionate about the work that I do." />
      <meta property="twitter:image:src" content="https://kkupgrader.eu.org/assets/images/me.png?w=640&q=100" />
      <meta property="twitter:site" content="@kanakkholwal" />
      <meta property="twitter:creator" content="@kanakkholwal" />


      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/icons/site.webmanifest" />
      <link rel="manifest" href="/icons/manifest.json" />
      <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="192x192" href="/icons/android-chrome-192x192.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
      <link rel="manifest" href="/icons/site.webmanifest" />
      <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#00a2d0" />
      <link rel="shortcut icon" href="/icons/favicon.ico" />
      <meta name="msapplication-TileColor" content="#00aba9" />
      <meta name="msapplication-TileImage" content="/icons/mstile-144x144.png" />
      <meta name="msapplication-config" content="/icons/browserconfig.xml" />
      <meta name="theme-color" content="#2790a2" />
    </Head>
    <Progress isAnimating={isAnimating} />
    <SessionProvider session={session}>

      <Component {...pageProps} />

    </SessionProvider>  </>
}
