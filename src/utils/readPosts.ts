export default async function readPosts() {
  const fs = require("fs");
  const posts = [];
  const files = await fs.promises.readdir("./src/pages/posts");
  for (const file of files) {
    if (file.endsWith("mdx")) {
      const stats = await fs.promises.stat(`./src/pages/posts/${file}`);
      posts.push({
        lastModified: stats.mtimeMs,
        url: `/posts/${file.replace(".mdx", "")}`,
        title: file
          .replace(".mdx", "")
          .replace(/-/gi, " ")
          .replace("/posts/", ""),
      });
    }
  }
  return posts.sort((a, b) =>
    parseInt(a.lastModified) > parseInt(b.lastModified) ? -1 : 1
  );
}
