import graphqlFetch from '../../lib/graphqlFetch';
import auth0 from '../../lib/initAuth0';

export default async function addPost(req, res) {
  const session = await auth0.getSession(req);
  if (!session || !session.user) {
    const error = new Error('not authorized');
    res.status(400).end(error.message);
    return;
  }

  try {
    const postCreateMutation = await graphqlFetch({
      headers: {
        Authorization: `Bearer ${process.env.FAUNADB_ADMIN_SECRET}`,
      },
      query: `
    mutation createPost(
    $data: PostInput!
    ) {
      createPost(data:$data){
        _id
        _ts
        content
        title
        slug
      }
    }`,
      operationName: 'createPost',
      variables: {
        data: JSON.parse(req.body),
      },
    }).then(r => r.json());

    const { error, data, ...rest } = postCreateMutation;

    if (error) {
      console.error(error);
      res.status(error.status || 400).end(error.message);
      return;
    }

    const { createPost: post } = data;
    res.json({ post });
  } catch (error) {
    console.error(error);
    res.status(error.status || 400).end(error.message);
  }
}
