import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Link to favicon */}
        <link rel="icon" href="/static/favicon.ico" />
        {/* You can also add other icon formats for different devices */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body className="bg-zinc-100 text-zinc-950 antialiased selection:bg-teal-600 selection:text-zinc-100 dark:bg-zinc-900 dark:text-zinc-100 dark:selection:bg-teal-400">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
