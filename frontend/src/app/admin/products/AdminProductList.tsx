"use client";

import { useState } from "react";

type Product = {
  id: number;
  name: string;
  image: string;
  affiliate_url: string;
  network: string;
  price?: number | null;
  rating?: number | null;
};

export default function AdminProductList({ products }: { products: Product[] }) {
  const [busyId, setBusyId] = useState<number | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const onGenerate = async (productId: number) => {
    try {
      setBusyId(productId);
      setMessage(null);
      const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
      const res = await fetch(`${baseUrl}/api/generate-post/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ product_id: productId }),
      });
      if (!res.ok) {
        const err = await res.text();
        throw new Error(err || "Failed to generate post");
      }
      setMessage("✅ Post generated successfully. Check the home page.");
    } catch (e: any) {
      setMessage(`❌ ${e.message || "Failed to generate post"}`);
    } finally {
      setBusyId(null);
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow">
      {message && <div className="mb-4 text-sm">{message}</div>}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b">
              <th className="py-2 pr-3">ID</th>
              <th className="py-2 pr-3">Image</th>
              <th className="py-2 pr-3">Name</th>
              <th className="py-2 pr-3">Network</th>
              <th className="py-2 pr-3">Price</th>
              <th className="py-2 pr-3">Rating</th>
              <th className="py-2 pr-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.id} className="border-b last:border-0">
                <td className="py-2 pr-3">{p.id}</td>
                <td className="py-2 pr-3">
                  <img src={p.image} alt={p.name} className="w-16 h-10 object-cover rounded bg-gray-100" />
                </td>
                <td className="py-2 pr-3">{p.name}</td>
                <td className="py-2 pr-3">{p.network}</td>
                <td className="py-2 pr-3">{p.price ?? "-"}</td>
                <td className="py-2 pr-3">{p.rating ?? "-"}</td>
                <td className="py-2 pr-3">
                  <button
                    className="bg-sky-500 text-white rounded px-3 py-1 disabled:opacity-60"
                    disabled={busyId === p.id}
                    onClick={() => onGenerate(p.id)}
                  >
                    {busyId === p.id ? "Generating..." : "Generate Post"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {products.length === 0 && <div className="text-gray-500 mt-4">No products found.</div>}
    </div>
  );
}


