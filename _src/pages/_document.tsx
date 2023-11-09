import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
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
          <link
            rel="alternate"
            type="application/rss+xml"
            title="Jaymi Childers' Posts"
            href="/api/rss"
          />
        </Head>
        <body className="bg-gray-900 text-white light-mode:bg-gray-100 light-mode:text-gray-900">
          <Main />
          <NextScript />
          {process.env.NODE_ENV === 'production' && (
            <>
              <script
                async
                src="https://www.googletagmanager.com/gtag/js?id=UA-167888921-1"
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'UA-167888921-1');`,
                }}
              />
            </>
          )}
        </body>
      </Html>
    );
  }
}

export default MyDocument;
