import useSWR from 'swr';
import graphqlFetch from '../lib/graphqlFetch';
import { ALL_POSTS_QUERY } from '../lib/queries';

export default function useAllPosts(initialData: any = {}) {
  return useSWR(
    ALL_POSTS_QUERY,
    query =>
      graphqlFetch({ query })
        .then(r => r.json())
        .then(({ data }) => {
          return data?.findAllPosts?.data ?? [];
        }),
    { initialData: initialData?.findAllPosts?.data }
  );
}
