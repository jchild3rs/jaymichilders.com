import { format } from "date-fns";
import Link from "next/link";
import Header from "../../components/Header";
import readPosts from "../../utils/readPosts";

export default ({ posts }) => (
  <>
    <Header className="my-8" />

    <ul className="divide-y divide-white divide-opacity-25 max-w-xs container mx-auto">
      {posts.map((post, i) => (
        <li key={i} className="py-4">
          <Link href={post.url}>
            <a href={post.url} title={post.title}>
              <h2 className="capitalize underline">{post.title}</h2>
            </a>
          </Link>
          <div className="text-right text-sm text-white text-opacity-75 light-mode:text-black light-mode:text-opacity-50">
            -{" "}
            {format(
              new Date(parseInt(post.lastModified)),
              "MMMM Mo, yyyy h:mb"
            )}
          </div>
        </li>
      ))}
    </ul>
  </>
);

export async function getServerSideProps(_context) {
  return { props: { posts: await readPosts() } };
}
