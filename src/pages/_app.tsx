import hljs from 'highlight.js/lib/core';
import css from 'highlight.js/lib/languages/css';
import javascript from 'highlight.js/lib/languages/javascript';
import xml from 'highlight.js/lib/languages/xml';
import { AppProps } from 'next/app';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import '../css/app.css';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('css', css);
hljs.registerLanguage('xml', xml);

if (process.browser) {
  window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    ? require(`highlightjs-themes/github.css`)
    : require(`highlightjs-themes/monokai.css`);
}

function Close(props) {
  return (
    <svg
      fill="currentColor"
      width="1em"
      height="1em"
      viewBox="0 0 357 357"
      {...props}
    >
      <path d="M357 35.7L321.3 0 178.5 142.8 35.7 0 0 35.7l142.8 142.8L0 321.3 35.7 357l142.8-142.8L321.3 357l35.7-35.7-142.8-142.8z" />
    </svg>
  );
}

const colors =
  'text-white text-opacity-75 light-mode:bg-gray-100 light-mode:text-gray-900 print:text-black';

const heading = 'font-semibold leading-tight text-opacity-100';

// const mdComponents = {
//   Header,
//   InlineCodeSnippet,
//   ul: (props) => <ul className={`list-disc ml-12 mb-4 ${colors}`} {...props} />,
//   strong: (props) => (
//     <strong className={`${colors} text-opacity-100`} {...props} />
//   ),
//   h1: (props) => (
//     <h1
//       className={`mt-8 md:mt-16 ${colors} ${heading} text-3xl lg:text-4xl mb-4`}
//       {...props}
//     />
//   ),
//   h2: (props) => (
//     <h2
//       className={`mt-4 md:mt-8 ${colors} ${heading} text-xl lg:text-2xl mb-4`}
//       {...props}
//     />
//   ),
//   h3: (props) => (
//     <h3
//       className={`${colors} font-semibold text-xl mb-4 text-opacity-100`}
//       {...props}
//     />
//   ),
//   p: (props) => (
//     <p className={`${colors} text-base lg:text-lg mb-4 light-mode:text-opacity-75`} {...props} />
//   ),
//   small: (props) => <p className={`${colors} text-xs mb-4`} {...props} />,
// };

function highlightCodeBlocks() {
  document.querySelectorAll('pre code').forEach(block => {
    hljs.highlightBlock(block);
  });
}

// Router.events.on("routeChangeComplete", highlightCodeBlocks);

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    highlightCodeBlocks();
  }, [router]);

  const isPost = router.asPath.startsWith('/posts/');

  return (
    <>
      <Head>
        <title>Jaymi Childers - Front End Developer &amp; Designer</title>
        <meta
          name="description"
          content="Remote front-end developer out of Atlanta, GA."
        />
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
      {isPost && (
        <Link href="/posts">
          <a
            href="/posts"
            title="Back to post listing"
            className="absolute top-0 right-0 text-xl p-6 print:hidden"
          >
            <Close />
            <span className="sr-only">Back to post listing</span>
          </a>
        </Link>
      )}

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
