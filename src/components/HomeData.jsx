import productData from "../data/productData";
import { CartContext } from "../context/GetContext";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import { motion } from "framer-motion";

const HomeData = () => {
    const shirts = productData.filter(p => p.category === "shirt").slice(0, 2);
    const pants = productData.filter(p => p.category === "pant").slice(0, 4);
    const jackets = productData.filter(p => p.category === "jacket").slice(0, 2);

    const { addToCart } = useContext(CartContext);
    const homeProducts = [...shirts, ...pants, ...jackets];

    const [activeCard, setActiveCard] = useState(null);
    const [showToast, setShowToast] = useState(false);

    const handleAddToCart = (e, product) => {
        e.stopPropagation();
        addToCart(product);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 2000);
    };

    return (
        <div className="max-w-7xl mx-auto px-6 py-12 relative">

            {/* 🔔 Toast */}
            {showToast && (
                <div className="fixed top-6 right-6 z-50">
                    <div className="bg-yellow-400 text-black px-6 py-3 rounded-lg shadow-xl
                          flex items-center gap-2 animate-bounce">
                        🛒 <span className="font-semibold">Added to cart</span>
                    </div>
                </div>
            )}

            <motion.h2
                className="relative inline-block text-3xl font-bold mb-10 text-black"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                {/* Yellow animated underline */}
                <motion.span
                    className="absolute left-0 -bottom-2 h-[4px] bg-yellow-400 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{
                        duration: 1.2,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                    }}
                />
                Latest Products
            </motion.h2>


            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">

                {homeProducts.map(product => (
                    <motion.div
                        key={product.id}
                        initial={{ opacity: 0, scale: 0.85, y: 40 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        onClick={() => setActiveCard(product.id)}
                        className={`
              bg-white rounded-xl overflow-hidden cursor-pointer
              shadow-md hover:shadow-2xl
              transition-all duration-300
              hover:-translate-y-1 hover:scale-[1.02]
              ${activeCard === product.id ? "ring-2 ring-yellow-400 bg-yellow-50" : ""}
            `}
                    >
                        {/* Image */}
                        <Link to={`/product/${product.id}`}>
                            <div className="h-56 flex items-center justify-center bg-gray-50">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="max-h-full object-contain p-4 transition-transform duration-300 hover:scale-105"
                                />
                            </div>
                        </Link>

                        {/* Content */}
                        <div className="p-4">
                            <h3 className="text-sm font-medium text-gray-800 line-clamp-2 hover:text-yellow-600 transition">
                                {product.name}
                            </h3>

                            <p className="text-lg font-bold text-black mt-2">
                                ₹{product.price}
                            </p>

                            <p className="text-xs text-green-600 mt-1">
                                FREE Delivery
                            </p>

                            <button
                                onClick={(e) => handleAddToCart(e, product)}
                                className="mt-4 w-full bg-yellow-400 text-black py-2 rounded-lg
                           hover:bg-yellow-500 active:scale-95 transition font-semibold"
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

export default HomeData;
