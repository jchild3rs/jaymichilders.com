const fs = require("fs");

console.log(__dirname);

const path = process.env.NODE_ENV === "production" ? "./" : "./src/pages/posts";
export default async function readPosts() {
  const posts = [];
  const files = await fs.promises.readdir(path);
  for (const file of files) {
    if (file.endsWith("mdx")) {
      const stats = await fs.promises.stat(`${path}/${file}`);
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
