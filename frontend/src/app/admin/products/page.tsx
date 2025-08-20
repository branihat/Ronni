import AdminProductList from "./AdminProductList";
import AdminProductForm from "./AdminProductForm";

async function fetchProducts() {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
  try {
    const res = await fetch(`${baseUrl}/api/products/`, { cache: "no-store" });
    if (!res.ok) return [];
    const data = await res.json();
    return Array.isArray(data) ? data : Array.isArray(data?.results) ? data.results : [];
  } catch {
    return [];
  }
}

export default async function AdminProductsPage() {
  const products = await fetchProducts();
  return (
    <div className="min-h-screen bg-zinc-50">
      <div className="max-w-6xl mx-auto px-5 py-10">
        <h1 className="text-2xl font-bold mb-6">Admin: Products</h1>
        <AdminProductForm />
        <AdminProductList products={products} />
      </div>
    </div>
  );
}


