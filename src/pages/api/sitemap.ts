import graphqlFetch from '../../lib/graphqlFetch';
import { ALL_POSTS_QUERY } from '../../lib/queries';

const { SitemapStream, streamToPromise } = require('sitemap');

export default async (req, res) => {

  const { data: {findAllPosts: {data: posts}} } = await graphqlFetch({
    query: ALL_POSTS_QUERY,
  }).then(res => res.json());

  const links = posts.map(post => ({
    url: `/post/${post.slug}`, changefreq: 'daily', priority: 0.3
  }))

  const stream = new SitemapStream({ hostname: process.env.APP_URL });

  links.forEach(link => stream.write(link));

  // End the stream
  stream.end();

  // Return a promise that resolves with your XML string
  const data = await streamToPromise(stream);

  res.write(data.toString());
  res.end();
};
