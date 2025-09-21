import React, { useState, useEffect } from "react";

const ProductDetails = ({productId}) => {
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${productId}`)
            .then((res) => res.json())
            .then((data) => setProduct(data));
    }, [productId]);

    if (!product) return <p>Loading...</p>

    return (
        <div className="bg-white shadow rounded-2xl p-6">
            <img src={product.image} alt={product.title} className="rounded-xl mb-4 mx-auto block object-cover" />
            <h2 className="text-2xl font-semibold mb-2">{product.title}</h2>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <p className="text-xl font-bold text-blue-600 mb-4">${product.price}</p>
            <p className="text-gray-500 mb-4">Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
            <button className="w-50 bg-yellow-400 font-bold hover:bg-yellow-600 text-white py-2 rounded-xl transition mx-auto block">
                Add to Cart
            </button>
        </div>
    );

}

export default ProductDetails;