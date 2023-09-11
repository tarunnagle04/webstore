/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";

const ProductCard = ({ category, searchQuery }) => {
  const [FetchedProducts, setProducts] = useState([]);
  const [Filtered, setFiltered] = useState([]);

  useEffect(() => {
    const fetchedAPI = async () => {
      try {
        await fetch("https://fakestoreapi.com/products")
          .then((re) => re.json())
          .then((res) => setProducts(res));
      } catch {
        console.log("Error");
      }
    };
    fetchedAPI();
  }, []);

  useEffect(() => {
    // Filter data when the category or search query changes
    const filteredcs = FetchedProducts.filter(
      (item) =>
        (category ? item.category === category : true) &&
        (searchQuery
          ? item.title.toLowerCase().includes(searchQuery.toLowerCase())
          : true)
    );
    setFiltered(filteredcs);
  }, [category, searchQuery, FetchedProducts]);

  return (
    <>
      <div className="grid">
        {Filtered &&
          Filtered.map((item) => {
            return (
              <div  key={Math.random()}>
                <div className="product">
                  <div className="product-image">
                    <img src={item.image} />
                  </div>
                  <div className="product-details">
                    <h3 className="product-title">{item.title}</h3>
                    <p className="product-description">{item.desc}</p>
                    <AiFillStar style={{ color: "green" }} />
                    <span>{"  "}{item.rating.rate}</span>
                    <p className="product-price">${item.price}</p>
                    <button className="add-to-cart-button">Add to Cart</button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default ProductCard;
