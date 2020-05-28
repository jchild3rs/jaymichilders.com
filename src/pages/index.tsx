import { formatDistance } from 'date-fns';
import React from 'react';
import Header from '../components/Header';
import useAllPosts from '../hooks/useAllPosts';
import graphqlFetch from '../lib/graphqlFetch';
import { ALL_POSTS_QUERY } from '../lib/queries';

export default ({ initialData }) => {
  const { data: posts, error } = useAllPosts(initialData);

  if (error) {
    console.error(error);
    return null;
  }

  return (
    <>
      <Header className="my-8 pt-8" />
      <main>
        <ul className="divide-y divide-white divide-opacity-25 max-w-sm container mx-auto">
          {posts.map((post, i) => (
            <li key={i} className="py-4">
              <header>
                <a href={`/post/${post.slug}`} title={post.title}>
                  <h2>{post.title}</h2>
                </a>
              </header>

              <p className="text-right text-sm text-white text-opacity-75 light-mode:text-black light-mode:text-opacity-50">
                -{' '}
                <time dateTime={new Date(post._ts / 1000).toUTCString()}>
                  {formatDistance(new Date(post._ts / 1000), Date.now())}
                </time>
              </p>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};

export async function getStaticProps() {
  try {
    const { data } = await graphqlFetch({
      query: ALL_POSTS_QUERY,
    }).then(res => res.json());

    return { props: { initialData: data } };
  } catch (error) {
    console.error(error);
  }

  return { props: { initialData: {} } };
}
