import React, { useEffect, useState } from "react";

export default function Suggestions({ productId }) {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    async function fetchSuggestions() {
      // Get main product to know its category
      const res = await fetch(`https://fakestoreapi.com/products/${productId}`);
      const mainProduct = await res.json();

      // Fetch products from the same category
      const resCat = await fetch(`https://fakestoreapi.com/products/category/${encodeURIComponent(mainProduct.category)}`);
      const data = await resCat.json();

      // Exclude main product
      setSuggestions(data.filter(p => p.id !== productId));
    }
    fetchSuggestions();
  }, [productId]);

  if (!suggestions.length) return <p>Loading suggestions...</p>;

  return (
    <div className="bg-white shadow rounded-2xl p-6">
      <h3 className="text-xl font-semibold mb-4">You May Also Like</h3>
      {suggestions.map((item) => (
        <div key={item.id} className="flex items-center gap-3 mb-4 border-b pb-3 last:border-none last:pb-0">
          <img src={item.image} alt={item.title} className="w-16 h-16 rounded-lg object-cover" />
          <div className="flex-1">
            <p className="font-medium">{item.title}</p>
            <span className="text-blue-600 font-semibold">${item.price}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
