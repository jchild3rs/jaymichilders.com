import fetch from 'node-fetch';

export default function graphqlFetch(
  { query, operationName, variables }: any,
) {
  return fetch('https://graphql.fauna.com/graphql', {
    credentials: 'omit',
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${process.env.FAUNADB_SECRET}`,
    },
    body: JSON.stringify({ query, operationName, variables }),
    mode: 'cors',
  });
}
