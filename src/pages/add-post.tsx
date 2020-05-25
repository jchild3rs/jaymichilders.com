import React from 'react';
import auth0 from '../initAuth0';

export default function AddPost({ user }) {
  return (
    <div>
      <h1>Add Post</h1>
      <p>logged in user {JSON.stringify(user)}</p>
      <p>This is the profile page.</p>
    </div>
  );
}

export const getServerSideProps = async ({ req, res }) => {
  const session = await auth0.getSession(req);
  if (!session || !session.user) {
    res.writeHead(302, {
      Location: '/',
    });
    res.end();
    return;
  }
  return { props: { user: session.user } };
};
