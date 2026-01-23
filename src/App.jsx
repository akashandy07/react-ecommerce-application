import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./navBar/NavBar";
import Home from "./components/Home";
import CardComponent from "./components/CardComponent";
import GetContext from "./context/GetContext";
import CategoryPage from "./components/CategoryPage";
import ProductData from "./components/ProductData";
import ProductDetails from "./components/ProductDeatils";
import Categories from "./components/Categories";
import CheckoutPage from "./components/CheckoutPage";
import SearchPage from "./pages/SearchPage";
const App = () => {
  return (

    <GetContext >
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<CardComponent />} />
          <Route path="/ProductData" element={<ProductData />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/category/:categoryName" element={<CategoryPage />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </BrowserRouter>
    </GetContext>

  );
};

export default App;
