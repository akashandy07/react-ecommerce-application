import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import productData from "../data/productData";
import { CartContext } from "../context/GetContext";
import Footer from "./Footer";
import { motion } from "framer-motion";

const CategoryPage = () => {
  const { categoryName } = useParams();
  const { addToCart } = useContext(CartContext);

  const filteredProducts = productData.filter(
    product => product.category === categoryName
  );

  if (filteredProducts.length === 0) {
    return (
      <h2 className="text-center mt-20 text-xl font-semibold">
        No products found for "{categoryName}"
      </h2>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">

      <h1 className="text-3xl font-bold mb-10 capitalize">
        {categoryName} Collection
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {filteredProducts.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.08,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            className="
              bg-white rounded-xl shadow-md hover:shadow-xl
              transition-all duration-300
              hover:-translate-y-1 hover:scale-[1.02]
            "
          >
            {/* IMAGE → LINK */}
            <Link to={`/product/${product.id}`}>
              <div className="h-56 bg-gray-50 flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="
                    max-h-full object-contain p-4
                    transition-transform duration-300
                    hover:scale-105
                  "
                />
              </div>
            </Link>

            {/* INFO */}
            <div className="p-4">
              <h3 className="text-sm font-medium line-clamp-2">
                {product.name}
              </h3>

              <p className="text-lg font-bold mt-2">
                ₹{product.price}
              </p>

              <button
                onClick={() => addToCart(product)}
                className="
                  mt-4 w-full
                  bg-yellow-400 py-2 rounded-lg
                  hover:bg-yellow-500
                  active:scale-95
                  transition font-semibold
                "
              >
                Add to Cart
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default CategoryPage;
