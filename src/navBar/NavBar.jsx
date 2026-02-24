import { Link, useNavigate } from "react-router-dom";
import { ShoppingCart, Search, Menu, X } from "lucide-react";
import { CartContext } from "../context/GetContext";
import { useContext, useState } from "react";

const NavBar = () => {
  const { cart } = useContext(CartContext);
  const [query, setQuery] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const totalItems = cart.reduce(
    (total, item) => total + (item.quantity || 1),
    0
  );

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    navigate(`/search?q=${query}`);
    setMobileOpen(false);
  };

  return (
    <>
      {/* ===== NAVBAR ===== */}
      <nav className="fixed top-0 left-0 right-0 max-w-7xl mx-auto bg-slate-900 text-white z-50">
        <div className="flex items-center justify-between px-6 md:px-8 py-6">

          {/* Logo */}
          <Link
            to="/"
            className="text-xl md:text-2xl font-bold text-yellow-400"
          >
            Brand Star
          </Link>

          {/* ===== Desktop Search ===== */}
          <form
            onSubmit={handleSearch}
            className="hidden md:block w-72 lg:w-96"
          >
            <div className="flex items-center border border-gray-600 rounded-md overflow-hidden">
              <input
                type="text"
                placeholder="Search products..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="px-3 py-2 w-full bg-transparent text-white outline-none placeholder-gray-400"
              />
              <button className="px-3 text-yellow-400 hover:text-yellow-300 transition">
                <Search size={18} />
              </button>
            </div>
          </form>

          {/* ===== Desktop Menu ===== */}
          <div className="hidden md:flex items-center gap-8">
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

          {/* ===== Mobile Menu Button ===== */}
          <button
            className="md:hidden text-yellow-400"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>
      </nav>

      {/* ===== Mobile Dropdown Menu ===== */}
      {mobileOpen && (
        <div className="md:hidden bg-slate-800 text-white fixed top-16 left-0 right-0 z-40 p-6 space-y-5">

          {/* Mobile Search */}
          <form
            onSubmit={handleSearch}
            className="flex items-center border border-gray-600 rounded-md overflow-hidden"
          >
            <input
              type="text"
              placeholder="Search products..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="px-3 py-2 w-full bg-transparent outline-none text-white"
            />
            <button className="px-3 text-yellow-400">
              <Search size={18} />
            </button>
          </form>

          <Link
            to="/"
            onClick={() => setMobileOpen(false)}
            className="block hover:text-yellow-400"
          >
            Home
          </Link>

          <Link
            to="/categories"
            onClick={() => setMobileOpen(false)}
            className="block hover:text-yellow-400"
          >
            Categories
          </Link>

          <Link
            to="/cart"
            onClick={() => setMobileOpen(false)}
            className="flex items-center gap-2 hover:text-yellow-400"
          >
            <ShoppingCart size={18} />
            Cart ({totalItems})
          </Link>

        </div>
      )}

      {/* Spacer so content doesn't hide behind fixed navbar */}
      <div className="h-20"></div>
    </>
  );
};

export default NavBar;