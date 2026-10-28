import React from "react";

export default function ProductCard({ product, addToCart }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition overflow-hidden flex flex-col justify-between p-4">
      <div>
        <div className="relative h-48 w-full mb-4 overflow-hidden rounded-xl bg-gray-50">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>
        <span className="text-xs font-medium text-amber-700 bg-amber-50 px-3 py-1 rounded-full">
          {product.category}
        </span>
        <h3 className="text-lg font-bold text-gray-900 mt-2">{product.name}</h3>
        <p className="text-xl font-extrabold text-amber-600 mt-1">
          ${product.price.toFixed(2)}
        </p>
        <p className="text-xs text-gray-500 mt-1">
          {product.available ? "In Stock" : "Out of Stock"}
        </p>
      </div>

      <button
        onClick={() => addToCart(product)}
        disabled={!product.available}
        className={`w-full mt-4 py-3 rounded-xl font-semibold text-sm transition ${
          product.available
            ? "bg-amber-600 text-white hover:bg-amber-700 cursor-pointer"
            : "bg-gray-200 text-gray-400 cursor-not-allowed"
        }`}
      >
        {product.available ? "+ Add to Cart" : "Out of Stock"}
      </button>
    </div>
  );
}
