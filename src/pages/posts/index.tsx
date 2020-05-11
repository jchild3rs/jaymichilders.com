import Head from "next/head";
import Header from "../../components/Header";

export default ({ posts }) => (
  <>
    <Header className="my-8" />
    <Head>
      <title>Posts | Jaymi Childers</title>
    </Head>
    <ul className="divide-y divide-white divide-opacity-25 max-w-xs container mx-auto">
      <li className="py-4">
        <a
          href="/posts/styled-system-styled-components-vs-tailwind-for-react-apps"
          title="Styled System + Styled Components vs. Tailwind for React apps"
        >
          <h2>Styled System + Styled Components vs. Tailwind for React apps</h2>
        </a>
        <div className="text-right text-sm text-white text-opacity-75 light-mode:text-black light-mode:text-opacity-50">
          - May 5th, 2020 10:56PM
        </div>
      </li>
    </ul>
  </>
);
