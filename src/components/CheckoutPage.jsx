import { useContext } from "react";
import { CartContext } from "../context/GetContext";
import { useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  const { cart, increaseQty, decreaseQty, removeFromCart } =
    useContext(CartContext);

  const navigate = useNavigate();

  const totalAmount = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const placeOrder = () => {
    if (cart.length === 0) {
      alert("Your cart is empty");
      return;
    }

    alert("Order placed successfully ✅");
    navigate("/");
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10">

      {/* LEFT – CART ITEMS */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Your Order</h2>

        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 border-b py-4"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded"
              />

              <div className="flex-1">
                <h4 className="font-semibold">{item.name}</h4>
                <p className="text-gray-600">₹{item.price}</p>

                <div className="flex items-center gap-2 mt-2">
                  <button
                    onClick={() => decreaseQty(item.id)}
                    className="px-3 py-1 border rounded"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => increaseQty(item.id)}
                    className="px-3 py-1 border rounded"
                  >
                    +
                  </button>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="ml-4 text-red-500 text-sm"
                  >
                    Remove
                  </button>
                </div>
              </div>

              <p className="font-semibold">
                ₹{item.price * item.quantity}
              </p>
            </div>
          ))
        )}
      </div>

      {/* RIGHT – CHECKOUT FORM */}
      <div className="bg-gray-50 p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-6">Billing Details</h2>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border px-4 py-2 rounded"
            required
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full border px-4 py-2 rounded"
            required
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="w-full border px-4 py-2 rounded"
            required
          />
          <textarea
            placeholder="Delivery Address"
            className="w-full border px-4 py-2 rounded"
            rows="4"
            required
          ></textarea>

          <div className="flex justify-between text-lg font-bold mt-6">
            <span>Total</span>
            <span>₹{totalAmount}</span>
          </div>

          <button
            type="button"
            onClick={placeOrder}
            className="w-full mt-6 bg-yellow-400 py-3 rounded-lg font-semibold hover:bg-yellow-500"
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;
