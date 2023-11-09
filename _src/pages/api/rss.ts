import graphqlFetch from '../../lib/graphqlFetch';
import { ALL_POSTS_QUERY } from '../../lib/queries';

export default async function rss(req, res) {
  try {
    const {
      data: {
        findAllPosts: { data: posts },
      },
    } = await graphqlFetch({
      query: ALL_POSTS_QUERY,
    }).then(res => res.json());

    res.setHeader('Content-Type', 'text/xml');
    res.write(`<?xml version="1.0"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
  <title>Jaymi Childers - Articles</title>
  <link>https://www.jaymichilders.com/</link>
  <description>Front-end + web-dev articles.</description>
  <language>en-us</language>
  <ttl>40</ttl>
  <atom:link href="https://www.jaymichilders.com/rss.xml" rel="self" type="application/rss+xml" />
  ${posts.map(post => {
    return `<item>
    <description>${post.title}</description>
    <pubDate>${new Date(post._ts / 1000).toUTCString()}</pubDate>
    <guid>https://www.jaymichilders.com/posts/${post.slug}</guid>
    </item>`;
  })}
  </channel>
</rss>
    `);
    res.end();
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).end(error.message);
  }
}
