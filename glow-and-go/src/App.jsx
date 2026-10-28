import React, { useState, useEffect } from "react";
import { productsData } from "./data/products";
import ProductCard from "./components/ProductCard";
import CartItem from "./components/CartItem";

export default function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Milestone 3: Loading State Simulation
  useEffect(() => {
    const timer = setTimeout(() => {
      setProducts(productsData);
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  function addToCart(product) {
    const existingItem = cart.find((item) => item.name === product.name);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  }

  function increaseAmount(product) {
    addToCart(product);
  }

  function decreaseAmount(product) {
    const existingItem = cart.find((item) => item.name === product.name);
    if (existingItem.quantity === 1) {
      removeFromCart(product);
    } else {
      setCart(
        cart.map((item) =>
          item.name === product.name
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        ),
      );
    }
  }

  function removeFromCart(product) {
    setCart(cart.filter((item) => item.name !== product.name));
  }

  const filteredProducts = products.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "All" || p.category === category;
    return matchesSearch && matchesCategory;
  });

  const cartTotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12 font-sans">
      <div className="max-w-7xl mx-auto">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900 flex items-center gap-2">
            👜 Aura & Chic Accessories
          </h1>
          <div className="bg-white shadow px-4 py-2 rounded-xl font-semibold border border-gray-100">
            🛒 Cart:{" "}
            <span className="text-amber-600">
              {cart.reduce((a, b) => a + b.quantity, 0)} items
            </span>
          </div>
        </header>

        {/* Search & Category Filter Controls */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <input
            type="text"
            placeholder="Search watches, bags, eyewear, tech..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 p-3 bg-white border border-gray-200 rounded-xl shadow-sm focus:outline-amber-500"
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="p-3 bg-white border border-gray-200 rounded-xl shadow-sm focus:outline-amber-500"
          >
            <option value="All">All Categories</option>
            <option value="Watches">Watches</option>
            <option value="Eyewear">Eyewear</option>
            <option value="Bags">Bags</option>
            <option value="Tech">Tech</option>
          </select>
        </div>

        {/* Main Grid: Products + Cart */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Loading State UI */}
            {loading ? (
              <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600"></div>
                <span className="ml-3 text-gray-600 font-semibold">
                  Loading catalog...
                </span>
              </div>
            ) : filteredProducts.length === 0 ? (
              <p className="text-gray-500 text-center py-12">
                No accessories found matching your search.
              </p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="relative group">
                    <ProductCard product={product} addToCart={addToCart} />
                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="mt-2 text-xs text-amber-700 hover:underline font-medium block text-center w-full"
                    >
                      🔍 Quick View Details
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Cart Sidebar */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 h-fit">
            <h2 className="text-xl font-bold mb-4 border-b pb-2 text-gray-800">
              Shopping Cart
            </h2>
            {cart.length === 0 ? (
              <p className="text-gray-400 text-sm">Your cart is empty.</p>
            ) : (
              <div>
                {cart.map((item) => (
                  <CartItem
                    key={item.id}
                    item={item}
                    increaseAmount={increaseAmount}
                    decreaseAmount={decreaseAmount}
                    removeFromCart={removeFromCart}
                  />
                ))}
                <div className="mt-4 pt-4 border-t flex justify-between items-center font-bold text-lg">
                  <span>Total:</span>
                  <span className="text-amber-600">
                    ${cartTotal.toFixed(2)}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Product Details Modal */}
        {selectedProduct && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl p-6 max-w-md w-full relative">
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 font-bold"
              >
                ✕
              </button>
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <span className="text-xs font-semibold text-amber-700 bg-amber-50 px-3 py-1 rounded-full">
                {selectedProduct.category}
              </span>
              <h3 className="text-2xl font-bold text-gray-900 mt-2">
                {selectedProduct.name}
              </h3>
              <p className="text-gray-600 text-sm mt-2">
                Premium crafted accessory designed with elegance and
                functionality in mind.
              </p>
              <p className="text-2xl font-extrabold text-amber-600 mt-4">
                ${selectedProduct.price.toFixed(2)}
              </p>
              <button
                onClick={() => {
                  addToCart(selectedProduct);
                  setSelectedProduct(null);
                }}
                disabled={!selectedProduct.available}
                className="w-full mt-4 py-3 bg-amber-600 text-white rounded-xl font-bold hover:bg-amber-700 transition"
              >
                {selectedProduct.available ? "Add to Cart" : "Out of Stock"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
