import fetch from 'node-fetch';

export default function graphqlFetch({
  query,
  operationName,
  variables,
  headers = {},
}: any) {
  return fetch(`${process.env.APP_URL}/graphql`, {
    credentials: 'omit',
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.FAUNADB_CLIENT_SECRET}`,
      'content-type': 'application/json',
      ...headers,
    },
    body: JSON.stringify({ query, operationName, variables }),
    mode: 'cors',
  });
}
