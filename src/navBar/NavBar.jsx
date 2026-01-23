import { Link, useNavigate } from "react-router-dom";
import { ShoppingCart, Search } from "lucide-react";
import { CartContext } from "../context/GetContext";
import { useContext, useState } from "react";

const NavBar = () => {
  const { cart } = useContext(CartContext);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const totalItems = cart.reduce(
    (total, item) => total + (item.quantity || 1),
    0
  );

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    navigate(`/search?q=${query}`);
  };

  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-slate-900 text-white max-w-7xl mx-auto relative z-50">

      {/* Logo */}
      <Link to="/" className="text-2xl font-bold text-yellow-400">
        Brand Star
      </Link>

      {/* Search with Animated Border */}
      <form onSubmit={handleSearch} className="search-animated-border w-96">
        <div className="flex items-center rounded-md overflow-hidden">
          <input
            type="text"
            placeholder="Search products..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="
              px-3 py-2 w-full
              bg-transparent text-white
              outline-none placeholder-gray-400
            "
          />
          <button className="px-3 text-yellow-400 hover:text-yellow-300 transition">
            <Search size={18} />
          </button>
        </div>
      </form>

      {/* Menu */}
      <div className="flex items-center gap-8">
        <Link to="/" className="hover:text-yellow-400 transition">
          Home
        </Link>

        <Link to="/categories" className="hover:text-yellow-400 transition">
          Categories
        </Link>

        <Link
          to="/cart"
          className="relative flex items-center gap-1 hover:text-yellow-400 transition"
        >
          <ShoppingCart size={20} />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-2 rounded-full">
              {totalItems}
            </span>
          )}
          Cart
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
