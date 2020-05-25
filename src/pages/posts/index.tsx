import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/Header';
import useSWR from 'swr';
import fetcher from '../../lib/fetch';
import graphqlFetch from '../../lib/graphqlFetch';

const POSTS_URL = 'http://localhost:3000/api/posts';

export default ({ initialData }) => {
  const { data, error } = useSWR(POSTS_URL, fetcher, { initialData });
  console.log(data, error);
  return (
    <>
      <Header className="my-8" />
      <Head>
        <title>Posts | Jaymi Childers</title>
      </Head>
      <ul className="divide-y divide-white divide-opacity-25 max-w-xs container mx-auto">
        <li className="py-4">
          <Link href="/posts/styled-system-styled-components-vs-tailwind-for-react-apps">
            <a
              href="/posts/styled-system-styled-components-vs-tailwind-for-react-apps"
              title="Styled System + Styled Components vs. Tailwind for React apps"
            >
              <h2>
                Styled System + Styled Components vs. Tailwind for React apps
              </h2>
            </a>
          </Link>
          <div className="text-right text-sm text-white text-opacity-75 light-mode:text-black light-mode:text-opacity-50">
            - May 5th, 2020 10:56PM
          </div>
        </li>
      </ul>
    </>
  );
};

export async function getServerSideProps() {
  const {
    data: { getAllPosts: posts },
  } = await graphqlFetch({
    query: `query getAllPosts {
  getAllPosts {
    data {
      _id
      title
      content
    }
  }
}`,
  }).then(res => res.json());
  // const data = await fetcher(POSTS_URL);
  return { props: { initialData: { posts } } };
}
