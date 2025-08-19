import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedPosts from "@/components/FeaturedPosts";
import ProductGrid from "@/components/ProductGrid";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
async function fetchPosts() {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
  try {
    const res = await fetch(`${baseUrl}/api/posts/`, {
      cache: 'no-store',
    });
    if (!res.ok) return [];
    const data = await res.json();
    const items = Array.isArray(data) ? data : (Array.isArray(data?.results) ? data.results : []);
    return items;
  } catch (_) {
    return [];
  }
}

export default async function Home() {
  const posts = await fetchPosts();
  return (
    <div className="min-h-screen bg-zinc-50">
      <Header />
      <Hero />
      <div className="max-w-6xl mx-auto px-5 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <FeaturedPosts posts={posts} />
            <ProductGrid products={[]} />
          </div>
          <Sidebar />
        </div>
      </div>
      <Footer />
    </div>
  );
}
