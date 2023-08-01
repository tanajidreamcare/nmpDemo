import Head from 'next/head';
import { appWithTranslation } from 'next-i18next';


function MyApp({ Component, pageProps }) {

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <link
          href="https://fonts.googleapis.com/css2?family=Saira+Semi+Condensed:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Component {...pageProps} />

    </>
  );
}

export default appWithTranslation(MyApp);
