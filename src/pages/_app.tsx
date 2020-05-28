import { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import '../css/app.css';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isAdmin = router.asPath.startsWith('/admin');

  return (
    <>
      <Head>
        <title>Jaymi Childers - Front End Developer &amp; Designer</title>
        <meta
          name="description"
          content="Remote front-end developer out of Atlanta, GA."
        />
        {isAdmin && (
          <>
            <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.2.5/antd.min.css"
            />
            <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.0.3/styles/monokai-sublime.min.css"
              integrity="sha256-nfuQSmJM/8wWM/S11LZmxszSv2HggH128IqmGD0hny8="
              crossOrigin="anonymous"
            />
            <link
              rel="stylesheet"
              href="https://unpkg.com/react-quill@1.3.3/dist/quill.bubble.css"
            />
            <link
              rel="stylesheet"
              href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.0.3/styles/default.min.css"
            />
            <script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.0.3/highlight.min.js"></script>
            <script>
              {`
              hljs.configure({   // optionally configure hljs
                languages: ['javascript', 'xml', 'css'],
                useBR: false
              });`}
            </script>
          </>
        )}
      </Head>
      <style jsx>{`
        /* latin-ext */
        @font-face {
          font-family: 'Signika';
          font-style: normal;
          font-weight: 300;
          font-display: swap;
          src: local('Signika Light'), local('Signika-Light'),
            url(https://fonts.gstatic.com/s/signika/v10/vEFU2_JTCgwQ5ejvE_oEE3lJamIe2tKnXg.woff2)
              format('woff2');
          unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
            U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
        }
        /* latin */
        @font-face {
          font-family: 'Signika';
          font-style: normal;
          font-weight: 300;
          font-display: swap;
          src: local('Signika Light'), local('Signika-Light'),
            url(https://fonts.gstatic.com/s/signika/v10/vEFU2_JTCgwQ5ejvE_oEE3dJamIe2tI.woff2)
              format('woff2');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
            U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
            U+2212, U+2215, U+FEFF, U+FFFD;
        }
        /* latin-ext */
        @font-face {
          font-family: 'Signika';
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          src: local('Signika Regular'), local('Signika-Regular'),
            url(https://fonts.gstatic.com/s/signika/v10/vEFR2_JTCgwQ5ejvG18mBlprZ0gk0w.woff2)
              format('woff2');
          unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
            U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
        }
        /* latin */
        @font-face {
          font-family: 'Signika';
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          src: local('Signika Regular'), local('Signika-Regular'),
            url(https://fonts.gstatic.com/s/signika/v10/vEFR2_JTCgwQ5ejvG1EmBlprZ0g.woff2)
              format('woff2');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
            U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
            U+2212, U+2215, U+FEFF, U+FFFD;
        }
        /* latin-ext */
        @font-face {
          font-family: 'Signika';
          font-style: normal;
          font-weight: 600;
          font-display: swap;
          src: local('Signika SemiBold'), local('Signika-SemiBold'),
            url(https://fonts.gstatic.com/s/signika/v10/vEFU2_JTCgwQ5ejvE44CE3lJamIe2tKnXg.woff2)
              format('woff2');
          unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
            U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
        }
        /* latin */
        @font-face {
          font-family: 'Signika';
          font-style: normal;
          font-weight: 600;
          font-display: swap;
          src: local('Signika SemiBold'), local('Signika-SemiBold'),
            url(https://fonts.gstatic.com/s/signika/v10/vEFU2_JTCgwQ5ejvE44CE3dJamIe2tI.woff2)
              format('woff2');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
            U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
            U+2212, U+2215, U+FEFF, U+FFFD;
        }
        /* latin-ext */
        @font-face {
          font-family: 'Signika';
          font-style: normal;
          font-weight: 700;
          font-display: swap;
          src: local('Signika Bold'), local('Signika-Bold'),
            url(https://fonts.gstatic.com/s/signika/v10/vEFU2_JTCgwQ5ejvE-oDE3lJamIe2tKnXg.woff2)
              format('woff2');
          unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
            U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
        }
        /* latin */
        @font-face {
          font-family: 'Signika';
          font-style: normal;
          font-weight: 700;
          font-display: swap;
          src: local('Signika Bold'), local('Signika-Bold'),
            url(https://fonts.gstatic.com/s/signika/v10/vEFU2_JTCgwQ5ejvE-oDE3dJamIe2tI.woff2)
              format('woff2');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
            U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
            U+2212, U+2215, U+FEFF, U+FFFD;
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
