import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useRef } from 'react';
import PostForm from '../../../components/PostForm';
import usePostBySlug from '../../../hooks/usePostBySlug';
import graphqlFetch from '../../../lib/graphqlFetch';
import auth0 from '../../../lib/initAuth0';
import { FIND_POST_BY_SLUG_QUERY } from '../../../lib/queries';
import slugify from '../../../lib/slugify';

let ReactQuill = (p: any) => null;
if (process.browser) {
  ReactQuill = require('react-quill').default;
}

export default function EditPost({ user, initialData, slug }) {
  const router = useRouter();
  const { data: post, error, revalidate } = usePostBySlug(
    { slug },
    initialData
  );

  const reactQuillRef = useRef();

  if (error) {
    console.error(error);
    return null;
  }

  if (!user || !post) {
    return null;
  }

  // function handleDraftSave() {
  //   form.validateFields().then(values => {
  //     localStorage.setItem('draft', JSON.stringify(values));
  //   });
  // }

  async function handleSave(values) {
    try {
      let slug = values.slug;
      if (post.title !== values.title && post.slug === values.slug) {
        slug = slugify(values.title);
      }

      await fetch(`/api/edit-post?id=${post._id}`, {
        method: 'POST',
        body: JSON.stringify({ ...values, slug }),
      });

      if (post.slug !== slug) {
        await router.replace(`/admin/edit-post/${slug}`);
      }
      await revalidate();
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <div className="container mx-auto">
      <Head>
        {/* <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.2.5/antd.css"
          integrity="sha256-4FA1CLeXKIXQHFJSxlNjx6SDeO9cBwcv7UNF7N3u0DU="
          crossOrigin="anonymous"
        /> */}
        <link
          rel="stylesheet"
          href="https://unpkg.com/react-quill@1.3.3/dist/quill.snow.css"
        />
      </Head>
      <div className="space-y-8 bg-white p-8 m-8 shadow mt-12">
        <h1 className="text-3xl font-bold mb-6">Edit Post</h1>
        <PostForm initialValues={post} onFinish={handleSave} />
      </div>
    </div>
  );
}

export const getServerSideProps = async ({ req, res, query: { slug } }) => {
  const session = await auth0.getSession(req);
  if (!session || !session.user) {
    res.writeHead(302, {
      Location: '/',
    });
    res.end();
    return;
  }

  const initialData = await graphqlFetch({
    query: FIND_POST_BY_SLUG_QUERY,
    variables: { slug },
  }).then(res => res.json());

  return { props: { user: session.user, initialData, slug } };
};
