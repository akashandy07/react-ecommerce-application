import { Link } from "react-router-dom";
import Footer from "./Footer";

const Categories = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold mb-10">Categories</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        
        {/* Shirt */}
        <Link
          to="/category/shirt"
          className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden group"
        >
          <img
            src="/images/shirt.jpeg"
            alt="Shirts"
            className="w-full h-48 object-cover group-hover:scale-105 transition"
          />
          <div className="p-5 text-center">
            <h2 className="text-xl font-semibold">Shirts</h2>
          </div>
        </Link>

        {/* Pant */}
        <Link
          to="/category/pant"
          className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden group"
        >
          <img
            src="/images/pant.jpeg"
            alt="Pant"
            className="w-full h-48 object-cover group-hover:scale-105 transition"
          />
          <div className="p-5 text-center">
            <h2 className="text-xl font-semibold">Pants</h2>
          </div>
        </Link>

        {/* Jacket */}
        <Link
          to="/category/jacket"
          className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden group"
        >
          <img
            src="/images/jacket.jpeg"
            alt="Jackets"
            className="w-full h-48 object-cover group-hover:scale-105 transition"
          />
          <div className="p-5 text-center">
            <h2 className="text-xl font-semibold">hoodies</h2>
          </div>
        </Link>

      </div>
      <Footer />
    </div>
  );
};

export default Categories;
