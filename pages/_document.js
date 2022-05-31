// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
        <Head>
            <title>Joke API</title>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Fira+Mono&family=Luckiest+Guy&family=Montserrat&family=Oswald&display=swap" rel="stylesheet" />
        </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}