import useSWR from 'swr';
import graphqlFetch from '../lib/graphqlFetch';
import { FIND_POST_BY_SLUG_QUERY } from '../lib/queries';

export default function usePostBySlug({ slug }, initialData: any = {}) {
  return useSWR(
    FIND_POST_BY_SLUG_QUERY,
    query =>
      graphqlFetch({ query, variables: { slug } })
        .then(r => r.json())
        .then(({ data }) => {
          return data?.findPostBySlug;
        }),
    { initialData: initialData?.findPostBySlug }
  );
}
