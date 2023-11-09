import React from 'react';

export default function Post({ post }) {
  return (
    <article
      className="post"
      dangerouslySetInnerHTML={{ __html: post?.content }}
    />
  );
}
