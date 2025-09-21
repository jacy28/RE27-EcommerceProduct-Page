import React from "react";

const reviews = [
  { id: 1, name: "Alice", comment: "Excellent quality!", avatar: "https://i.pravatar.cc/50?img=1" },
  { id: 2, name: "Bob", comment: "Very comfortable and stylish.", avatar: "https://i.pravatar.cc/50?img=2" },
  { id: 3, name: "Charlie", comment: "Worth the price.", avatar: "https://i.pravatar.cc/50?img=3" },
];

export default function Reviews() {
  return (
    <div className="bg-white shadow rounded-2xl p-6">
      <h3 className="text-xl font-semibold mb-4">Customer Reviews</h3>
      {reviews.map((review) => (
        <div key={review.id} className="flex gap-3 mb-4 border-b pb-3 last:border-none">
          <img src={review.avatar} alt={review.name} className="w-10 h-10 rounded-full object-cover" />
          <div>
            <p className="font-medium">{review.name}</p>
            <p className="text-gray-600">{review.comment}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
