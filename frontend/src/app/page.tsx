async function fetchPosts() {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/posts/", {
    next: { revalidate: 60 },
  });
  if (!res.ok) return [];
  return res.json();
}

export default async function Home() {
  const posts = await fetchPosts();
  return (
    <main className="max-w-3xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold">Latest Posts</h1>
      <ul className="space-y-4">
        {posts.map((post: any) => (
          <li key={post.id} className="border p-4 rounded">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <a
              className="text-blue-600 hover:underline"
              href={`/posts/${post.slug}`}
            >
              Read more
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
