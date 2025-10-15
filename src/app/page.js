import Link from "next/link";
import Image from "next/image";
export default async function Home() {
  const res = await fetch("http://localhost:3000/api/blogs", {
    cache: "no-store", // prevent caching (useful for dev)
  });
  const blogs = await res.json();

  return (
    <div>
      <h1>Hunting Coder</h1>
        <Image
         className="hero-image"
        src="/coder.jpg"   // path is relative to public folder
        alt="Hunting Coder"
        width={300}        // set width
        height={200}       // set height
        priority           // optimize for first load
      />

      <p>A blog for hunting coders by a hunting coder</p>

      <h2>Latest Blogs</h2>
        <ul>
        {blogs.map((blog) => (
          <li key={blog.slug}>
            <a href={`/blog/${blog.slug}`}>{blog.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
