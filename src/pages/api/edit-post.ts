import graphqlFetch from '../../lib/graphqlFetch';
import auth0 from '../../lib/initAuth0';

export default async function editPost(req, res) {
  const session = await auth0.getSession(req);
  if (!session || !session.user) {
    const error = new Error('not authorized');
    res.status(400).end(error.message);
    return;
  }

  try {
    const variables = JSON.parse(req.body);

    const postUpdateMutationRequest = await graphqlFetch({
      headers: {
        Authorization: `Bearer ${process.env.FAUNADB_ADMIN_SECRET}`,
      },
      query: `mutation updatePost($id: ID!, $data: PostInput!) {
  updatePost(id: $id, data: $data) {
    _id
    _ts
    content
    title
    slug
  }
}
        `,
      variables: {
        id: req.query.id,
        data: {
          title: variables?.title,
          content: variables?.content,
          slug: variables?.slug,
        },
      },
    });
    const postUpdateMutation = await postUpdateMutationRequest.json();
    const { errors, data } = postUpdateMutation;

    if (errors) {
      res.status(400).json({ errors });
      return;
    }

    const { updatePost } = data;
    res.json(updatePost);
  } catch (error) {
    console.error(error);
    res.status(error.status || 400).end(error.message);
  }
}
