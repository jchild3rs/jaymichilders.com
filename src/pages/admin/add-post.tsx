import React from 'react';
import PostForm from '../../components/PostForm';
import auth0 from '../../lib/initAuth0';
import slugify from '../../lib/slugify';

export default function AddPost({ user }) {
  if (!user) {
    return null;
  }

  const initialValues =
    process.browser && localStorage.getItem('draft')
      ? JSON.parse(localStorage.getItem('draft'))
      : {
          title: '',
          content: '',
          slug: '',
        };

  async function handleSave(values) {
    await fetch('/api/add-post', {
      method: 'POST',
      body: JSON.stringify({ ...values, slug: slugify(values.title) }),
    });
    localStorage.removeItem('draft');
  }

  return (
    <div className="container mx-auto">
      <div className="space-y-8 m-8 shadow mt-12">
        <h1 className="text-3xl font-bold mb-6">Add Post</h1>
        <PostForm initialValues={initialValues} onFinish={handleSave} />
      </div>
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
