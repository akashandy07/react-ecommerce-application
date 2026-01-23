import React, { useContext } from "react";
import productData from "../data/productData";
import { CartContext } from "../context/GetContext";
import Footer from "./Footer";
import { Link } from "react-router-dom";


const ProductData = () => {
    const { addToCart } = useContext(CartContext);

    return (
        <>
            
            <div

                style={{
                    maxWidth: "1200px",
                    margin: "0 auto",
                    padding: "20px",
                }}
            >
                <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
                    All Products
                </h1>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
                        gap: "24px",
                    }}
                >
                    {productData.map((product) => (
                        <div
                            key={product.id}
                            style={{
                                border: "1px solid #e5e7eb",
                                borderRadius: "10px",
                                padding: "14px",
                                background: "#fff",
                                transition: "all 0.3s ease",
                                cursor: "pointer",
                            }}
                            onMouseEnter={(e) =>
                                (e.currentTarget.style.transform = "translateY(-6px)")
                            }
                            onMouseLeave={(e) =>
                                (e.currentTarget.style.transform = "translateY(0)")
                            }
                        >
                            <Link to={`/product/${product.id}`}>
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    style={{
                                        width: "100%",
                                        height: "180px",
                                        objectFit: "cover",
                                        borderRadius: "8px",
                                        marginBottom: "10px",
                                        cursor: "pointer",
                                    }}
                                />
                            </Link>


                            <h3 style={{ fontSize: "16px", fontWeight: "600" }}>
                                {product.name}
                            </h3>

                            <p style={{ fontWeight: "bold", margin: "6px 0" }}>
                                ₹{product.price}
                            </p>

                            <p style={{ fontSize: "14px", color: "#555" }}>
                                {product.description}
                            </p>

                            <button
                                onClick={() => addToCart(product)}
                                style={{
                                    marginTop: "12px",
                                    width: "100%",
                                    padding: "10px",
                                    backgroundColor: "#000",
                                    color: "#fff",
                                    border: "none",
                                    borderRadius: "6px",
                                    cursor: "pointer",
                                    fontWeight: "600",
                                    transition: "background 0.3s",
                                }}
                                onMouseEnter={(e) =>
                                    (e.currentTarget.style.backgroundColor = "#333")
                                }
                                onMouseLeave={(e) =>
                                    (e.currentTarget.style.backgroundColor = "#000")
                                }
                            >
                                Add to Cart
                            </button>
                        </div>
                    ))}

                </div>
                <Footer />
            </div>
        </>
    );
};

export default ProductData;
