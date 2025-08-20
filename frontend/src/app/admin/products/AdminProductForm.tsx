"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminProductForm() {
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const payload: any = {
      name: String(data.name || "").trim(),
      description: String(data.description || "").trim(),
      image: String(data.image || "").trim(),
      affiliate_url: String(data.affiliate_url || "").trim(),
      network: String(data.network || "").trim(),
      features: String(data.features || ""),
      pros: String(data.pros || ""),
      cons: String(data.cons || ""),
    };
    if (String(data.price || "").trim()) payload.price = Number(data.price);
    if (String(data.rating || "").trim()) payload.rating = Number(data.rating);

    const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
    try {
      setBusy(true);
      setMsg(null);
      const res = await fetch(`${baseUrl}/api/products/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || "Failed to add product");
      }
      setMsg("✅ Product added");
      form.reset();
      router.refresh();
    } catch (err: any) {
      setMsg(`❌ ${err.message || "Failed to add product"}`);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="bg-white rounded-2xl p-6 shadow mb-6">
      <h2 className="text-lg font-semibold mb-4">Add Product</h2>
      {msg && <div className="mb-3 text-sm">{msg}</div>}
      <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <label className="text-sm">Name *</label>
          <input name="name" required className="border rounded px-3 py-2" placeholder="Product name" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm">Image URL *</label>
          <input name="image" required className="border rounded px-3 py-2" placeholder="https://..." />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm">Affiliate URL *</label>
          <input name="affiliate_url" required className="border rounded px-3 py-2" placeholder="https://amazon.com/dp/..." />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm">Network *</label>
          <input name="network" required className="border rounded px-3 py-2" placeholder="Amazon" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm">Price</label>
          <input name="price" type="number" step="0.01" className="border rounded px-3 py-2" placeholder="199.99" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm">Rating</label>
          <input name="rating" type="number" step="0.1" className="border rounded px-3 py-2" placeholder="4.6" />
        </div>
        <div className="md:col-span-2 flex flex-col gap-2">
          <label className="text-sm">Description</label>
          <textarea name="description" className="border rounded px-3 py-2" rows={3} placeholder="Short description" />
        </div>
        <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-sm">Features (one per line)</label>
            <textarea name="features" className="border rounded px-3 py-2" rows={4} placeholder={"Bluetooth 5.3\n30h Battery\nUSB-C Fast Charge"} />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm">Pros (one per line)</label>
            <textarea name="pros" className="border rounded px-3 py-2" rows={4} placeholder={"Great ANC\nComfortable"} />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm">Cons (one per line)</label>
            <textarea name="cons" className="border rounded px-3 py-2" rows={4} placeholder={"Pricey"} />
          </div>
        </div>
        <div className="md:col-span-2">
          <button disabled={busy} className="bg-emerald-600 text-white rounded px-4 py-2 disabled:opacity-60">
            {busy ? "Saving..." : "Add Product"}
          </button>
        </div>
      </form>
    </div>
  );
}



