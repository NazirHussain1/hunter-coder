// import blogPosts from "@/data/blogPosts";
import blogPosts from "@/app/data/blogPosts";

export default function BlogPost({ params }) {
  const { slug } = params;

  // ✅ Find the blog post with matching slug
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div>
        <h1>404 - Blog Not Found</h1>
        <p>No blog found for slug: <strong>{slug}</strong></p>
      </div>
    );
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
