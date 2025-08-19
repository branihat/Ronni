type Post = {
  id: number;
  title: string;
  slug: string;
  content?: string;
  featured_image?: string | null;
};

export default function FeaturedPosts({ posts }: { posts: Post[] }) {
  const fallback: Post[] = [
    { id: 1, title: "Best Laptops for Remote Work 2024: Complete Buying Guide", slug: "best-laptops-remote-work-2024" },
    { id: 2, title: "Wireless Noise-Cancelling Headphones: Sony vs Bose vs Apple", slug: "headphones-comparison" },
    { id: 3, title: "Budget Smartphones Under $300: Best Value Picks", slug: "budget-smartphones" },
  ];
  const items = posts?.length ? posts : fallback;
  return (
    <section className="bg-white rounded-2xl p-6 shadow" id="reviews">
      <h2 className="text-2xl font-bold border-b-2 border-sky-300 pb-2 mb-6">Latest Reviews & Guides</h2>
      <div className="divide-y">
        {items.map((post) => (
          <article key={post.id} className="flex gap-4 py-4">
            <div className="w-[150px] h-[100px] bg-gray-200 rounded" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">{post.title}</h3>
              <p className="text-gray-500 mb-1 line-clamp-2">{post.content || "Comprehensive review and guide."}</p>
              <a className="text-sky-500 hover:underline" href={`/posts/${post.slug}`}>Read Full Review →</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}


