import blogPosts from "../../../data/blogPosts";

export async function GET(request, { params }) {
  const { slug } = params;

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return Response.json({ error: "Post not found" }, { status: 404 });
  }

  return Response.json(post);
}
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );

