import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html className="h-full bg-gray-100 text-gray-800 px-10">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@600&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <body className="h-full font-nunito-sans">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
