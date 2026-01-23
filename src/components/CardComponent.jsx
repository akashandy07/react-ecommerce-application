import React, { useContext } from "react";
import { CartContext } from "../context/GetContext";
import { Link } from "react-router-dom";
const CartPage = () => {
  const {
    cart,
    increaseQty,
    decreaseQty,
    removeFromCart,
  } = useContext(CartContext);

  const totalAmount = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <h2 className="text-center mt-10 text-xl font-semibold">
        Your cart is empty
      </h2>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

      <div className="space-y-6">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-6 border p-4 rounded-lg shadow-sm"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-24 h-24 object-cover rounded"
            />

            <div className="flex-1">
              <h3 className="font-semibold">{item.name}</h3>
              <p>₹{item.price}</p>
              {item.size && (
                <p className="text-sm text-gray-500">
                  Size: {item.size}
                </p>
              )}
            </div>

            <div className="flex items-center gap-3">
              <button onClick={() => decreaseQty(item.id)}>−</button>
              <span>{item.quantity}</span>
              <button onClick={() => increaseQty(item.id)}>+</button>
            </div>

            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-500"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* TOTAL */}
      <div className="mt-10 border-t pt-6 flex justify-end">
        <div className="w-full max-w-sm">
          <div className="flex justify-between text-lg font-semibold mb-4">
            <span>Total</span>
            <span>₹{totalAmount}</span>
          </div>

          <Link
            to="/checkout"
            className="block text-center mt-6 bg-yellow-400 py-3 rounded-lg font-semibold hover:bg-yellow-500"  >
            Proceed to Checkout
          </Link>

        </div>
      </div>
    </div>
  );
};

export default CartPage;
