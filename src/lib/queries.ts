export const ALL_POSTS_QUERY = `query findAllPosts {
  findAllPosts {
    data {
      _id
      _ts
      title
      content
      slug
    }
  }
}`;

export const FIND_POST_BY_SLUG_QUERY = `query findPostBySlug($slug: String!) {
  findPostBySlug(slug: $slug) {
    _id
    _ts
    title
    content
    slug
  }
}`;
