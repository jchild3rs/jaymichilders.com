import React, { useEffect } from 'react';

const Prism = require('prismjs');

export default function Post({ post }) {
  useEffect(() => {
    console.log(Prism);
  }, [])
  return (
    <>
      <article
        className="post"
        dangerouslySetInnerHTML={{ __html: post?.content }}
      />
    </>
  );
}
