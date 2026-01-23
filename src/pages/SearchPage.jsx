import React, { useContext } from "react";
import { useLocation, Link } from "react-router-dom";
import productData from "../data/productData";
import { CartContext } from "../context/GetContext";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
const SearchPage = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const query = params.get("q")?.toLowerCase() || "";

  const { addToCart } = useContext(CartContext);

  const results = productData.filter(
    (item) =>
      item.name.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query)
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">

      <h1 className="text-2xl font-bold mb-6">
        Search results for "{query}"
      </h1>

      {results.length === 0 ? (
        <p className="text-gray-500">No products found</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">

          {results.map((product, index) => (
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
                flex flex-col
              "
            >
              {/* IMAGE → LINK */}
              <Link to={`/product/${product.id}`}>
                <div className="h-44 flex items-center justify-center bg-gray-50">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-full object-contain p-3
                               transition-transform duration-300
                               hover:scale-105"
                  />
                </div>
              </Link>

              {/* INFO */}
              <div className="p-3 flex flex-col flex-grow">
                <h3 className="text-sm font-medium line-clamp-2">
                  {product.name}
                </h3>

                <p className="text-lg font-bold mt-2">
                  ₹{product.price}
                </p>

                {/* ADD TO CART */}
                <button
                  onClick={() => addToCart(product)}
                  className="
                    mt-4 w-full
                    bg-yellow-400 text-black py-2 rounded-lg
                    hover:bg-yellow-500
                    active:scale-95
                    transition font-semibold
                  "
                >
                  Add
                </button>
              </div>
            </motion.div>
          ))}

        </div>
      )}
      <Footer />
    </div>
  );
};

export default SearchPage;
