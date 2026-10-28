import React from "react";

export default function CartItem({
  item,
  increaseAmount,
  decreaseAmount,
  removeFromCart,
}) {
  return (
    <div className="flex items-center justify-between border-b py-3 text-sm">
      <div className="flex items-center gap-3">
        <img
          src={item.image}
          alt={item.name}
          className="w-12 h-12 object-cover rounded-lg"
        />
        <div>
          <h4 className="font-bold text-gray-800">{item.name}</h4>
          <p className="text-gray-500">
            ${item.price.toFixed(2)} x {item.quantity}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={() => decreaseAmount(item)}
          className="px-2 py-1 bg-gray-100 rounded hover:bg-gray-200"
        >
          -
        </button>
        <span className="font-bold">{item.quantity}</span>
        <button
          onClick={() => increaseAmount(item)}
          className="px-2 py-1 bg-gray-100 rounded hover:bg-gray-200"
        >
          +
        </button>
        <button
          onClick={() => removeFromCart(item)}
          className="ml-2 text-red-500 hover:text-red-700 text-xs font-bold"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
