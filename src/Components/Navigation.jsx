import "./Components.css"
import ProductCard from "./ProductCard";
import { useState } from "react";

const Navigation = () => {
  const [category, setCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <>
      <nav className="navbar">
        <div className="brand">
          <span>WEB_STORE</span>
        </div>
        <div className="welcome-message">
          <span>Welcome to Our Store</span>
        </div>
        <div className="category-dropdown">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">All</option>
            <option value="men's clothing">Mens Section</option>
            <option value="jewelery">Jewellery</option>
            <option value="electronics">Electronics</option>
            <option value="women's clothing">Women clothing</option>
          </select>
        </div>
        <div className="search-input">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button>Search</button>
        </div>
      </nav>
      <ProductCard category={category} searchQuery={searchQuery}/>
    </>
  );
};

export default Navigation;
