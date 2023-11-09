import Head from 'next/head';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import Post from '../../components/Post';
import graphqlFetch from '../../lib/graphqlFetch';
import { ALL_POSTS_QUERY, FIND_POST_BY_SLUG_QUERY } from '../../lib/queries';

export default function PostPage({ initialData }) {
  const {
    query: { slug },
  } = useRouter();

  const { data, error } = useSWR(
    FIND_POST_BY_SLUG_QUERY,
    query => graphqlFetch({ query, variables: { slug } }).then(r => r.json()),
    { initialData }
  );
  const post = data?.data?.findPostBySlug;

  return (
    <>
      <Head>
        <title>{post.title} - Jaymi Childers</title>
      </Head>
      <div className="container mx-auto max-w-md mt-8">
        <Post post={post} />
      </div>
    </>
  );
}

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const initialData = await graphqlFetch({
    query: ALL_POSTS_QUERY,
  }).then(res => res.json());
  const posts = initialData?.data?.findAllPosts?.data;

  // Get the paths we want to pre-render based on posts
  const paths = posts.map(post => ({
    params: { slug: post.slug },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const initialData = await graphqlFetch({
    query: FIND_POST_BY_SLUG_QUERY,
    variables: { slug: params.slug },
  }).then(res => res.json());

  return { props: { initialData } };
}
