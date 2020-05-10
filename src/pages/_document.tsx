import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <title>Jaymi Childers - Front-end Developer &amp; Designer</title>
        </Head>
        <body className="bg-gray-900 text-white light-mode:bg-gray-100 light-mode:text-gray-900 text-black">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
