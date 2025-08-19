type Product = {
  id: number;
  name: string;
  price?: number;
  rating?: number;
};

export default function ProductGrid({ products }: { products: Product[] }) {
  const fallback: Product[] = [
    { id: 1, name: 'MacBook Pro 16" (2024)', price: 2399, rating: 4.8 },
    { id: 2, name: 'Sony WH-1000XM5', price: 349, rating: 4.6 },
    { id: 3, name: 'iPad Air (2024)', price: 599, rating: 4.7 },
  ];
  const items = products?.length ? products : fallback;
  return (
    <section className="mt-8">
      <h2 className="text-2xl font-bold">Featured Product Reviews</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {items.map((p) => (
          <div key={p.id} className="bg-white rounded-2xl p-6 shadow hover:-translate-y-1 transition-transform">
            <div className="w-full h-48 bg-gray-100 rounded mb-4" />
            <h3 className="text-lg font-semibold">{p.name}</h3>
            <div className="text-amber-500 text-sm mb-2">★★★★★ <span className="text-gray-600">{p.rating?.toFixed(1)}/5</span></div>
            <div className="text-emerald-600 font-bold text-xl mb-3">{p.price ? `$${p.price}` : ''}</div>
            <button className="w-full bg-pink-500 text-white rounded-full py-2">🛒 Buy on Amazon</button>
          </div>
        ))}
      </div>
    </section>
  );
}


