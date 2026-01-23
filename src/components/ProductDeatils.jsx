import React, { useContext, useState } from "react";
import { useParams, Link } from "react-router-dom";
import productData from "../data/productData";
import { CartContext } from "../context/GetContext";
import Footer from "./Footer";
import RelatedProduct from "./RelatedProduct";
import { motion } from "framer-motion";

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  const [selectedSize, setSelectedSize] = useState("");
  const [showToast, setShowToast] = useState(false);

  const product = productData.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return <h2 className="text-center mt-10">Product not found</h2>;
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size");
      return;
    }

    addToCart({ ...product, size: selectedSize });
    setShowToast(true);

    setTimeout(() => setShowToast(false), 2000);
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 relative">

      {/* ← GO BACK LINK */}
      <Link
        to="/"
        className="
          inline-block mb-4
          border border-gray-300 bg-white
          text-gray-800 px-4 py-1.5
          rounded-md font-medium
          hover:bg-gray-100
          active:scale-95 transition
        "
      >
        ← Go back
      </Link>

      {/* 🔔 TOAST */}
      {showToast && (
        <div className="fixed top-6 right-6 z-50">
          <div className="bg-yellow-400 text-black px-6 py-3 rounded-lg shadow-xl
                          flex items-center gap-2 animate-bounce">
            🛒 <span className="font-semibold">Added to cart</span>
          </div>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-12 items-center mt-6">

        {/* 🖼 IMAGE — SCROLL GROW */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full max-w-md rounded-xl shadow-2xl"
          />
        </motion.div>

        {/* 📦 DETAILS — SCROLL FADE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h1 className="text-3xl font-bold mb-4">
            {product.name}
          </h1>

          <p className="text-xl font-semibold mb-2">
            ₹{product.price}
          </p>

          <p className="text-gray-600 mb-6">
            {product.description}
          </p>

          {/* SIZE SELECTOR */}
          <div className="mb-6">
            <p className="font-semibold mb-2">Select Size</p>

            <div className="flex gap-3">
              {["S", "M", "L", "XL"].map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 border rounded-md font-medium transition
                    ${
                      selectedSize === size
                        ? "bg-black text-white"
                        : "bg-white text-black hover:bg-gray-100"
                    }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* ADD TO CART */}
          <button
            onClick={handleAddToCart}
            className="mt-4 w-full bg-yellow-400 text-black py-2 rounded-lg
                       hover:bg-yellow-500 active:scale-95 transition font-semibold"
          >
            Add to Cart
          </button>
        </motion.div>
      </div>

      <RelatedProduct />
      <Footer />
    </div>
  );
};

export default ProductDetails;
