import { Link } from "react-router-dom";
import { Instagram, Facebook, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-300 mt-16">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-9 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold text-yellow-400 mb-4">
            Brand Star
          </h2>
          <p className="text-sm leading-relaxed mb-4">
            ShopFly brings you the latest fashion and essentials with quality
            you can trust.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              className="hover:text-pink-500 transition"
            >
              <Instagram />
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              className="hover:text-blue-500 transition"
            >
              <Facebook />
            </a>

            <a
              href="https://wa.me/919876543210"
              target="_blank"
              className="hover:text-green-500 transition"
            >
              <MessageCircle />
            </a>
          </div>
        </div>

        {/* About */}
        <div>
          <h3 className="text-lg font-semibold mb-4">About</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-yellow-400">Home</Link></li>
            <li><Link to="/" className="hover:text-yellow-400">Products</Link></li>
            <li><Link to="/" className="hover:text-yellow-400">Categories</Link></li>
            <li><Link to="/" className="hover:text-yellow-400">Contact</Link></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
          <ul className="space-y-2 text-sm">
            <li>Help Center</li>
            <li>Returns</li>
            <li>Shipping</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>Email: support@brandstar.com</li>
            <li>Phone: +91 8608590602</li>
            <li>India</li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-slate-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} Brand Star. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
