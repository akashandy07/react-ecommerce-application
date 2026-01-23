import React from "react";
import { Link } from "react-router-dom";
import productData from "../data/productData";

const RelatedProduct = ({
  currentId = null,
  category = null,
  limit = 4,
}) => {
  let related = productData;

  if (currentId) {
    related = related.filter(p => p.id !== currentId);
  }

  if (category) {
    related = related.filter(p => p.category === category);
  }

  related = related.slice(0, limit);

  return (
    <div className="mt-20">
      <h2 className="text-2xl font-bold mb-6">
        Related Products
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {related.map(product => (
          <div
            key={product.id}
            className="
              bg-white rounded-xl shadow-md hover:shadow-xl
              transition-all duration-300
              hover:-translate-y-1
              flex flex-col
            "
          >
            {/* Image */}
            <Link to={`/product/${product.id}`}>
              <div className="h-44 flex items-center justify-center bg-gray-50">
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-full object-contain p-3 hover:scale-105 transition"
                />
              </div>
            </Link>

            {/* Info */}
            <div className="p-3 flex flex-col flex-grow">
              <h3 className="text-sm font-medium line-clamp-2">
                {product.name}
              </h3>

              <p className="text-lg font-bold mt-2">
                ₹{product.price}
              </p>

              {/* VIEW BUTTON */}
              <Link to={`/product/${product.id}`}
                className="
                  mt-4 w-full text-center
                  bg-yellow-400 text-black py-2 rounded-lg
                  hover:bg-yellow-500 active:scale-95
                  transition font-semibold
                "
              >
                View
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProduct;
