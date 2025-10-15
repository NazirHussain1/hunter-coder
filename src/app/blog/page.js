import Link from "next/link";

export default function Blog() {
  return (
    <div>
      <h1>Latest Blog</h1>
      <ul className="blog-list">
        <li>
          <Link href="/blog/learn-javascript">How to Learn JavaScript</Link>
        </li>
        {/* <p>hello</p> */}
        <li>
          <Link href="/blog/nextjs-tutorial">Next.js Tutorial for Beginners</Link>
        </li>
        <li>
          <Link href="/blog/reactJs-tips">Best React Tips</Link>
        </li>
      </ul>
    </div>
  );
}
