import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../AppContext";
import Product from "../Product/Product";
import "./Products.scss";

const Products = (props) => {
  const {
    productsContext,
    searchResultArray,
    showSearchResultsFlag,
    wishlistContext,
  } = useContext(AppContext);
  const [products, setProducts] = productsContext;
  const [searchResult, setSearchResult] = searchResultArray;
  const [showSearchResults, setShowSearchResults] = showSearchResultsFlag;
  const [wishlist, setWishlist] = wishlistContext;

  const [source, setSource] = useState([]);

  const getData = async () => {
    /*    const res = await fetch(
      `https://api.escuelajs.co/api/v1/products?limit=${props.limit}&offset=54`
    );
    const data = await res.json();
    setProducts(data);
    setSource(data);  */

    
/* 
    fetch("https://fakestoreapi.com/products")
       .then((res) => res.json())
       .then((data) => {
         setProducts(data);
         setSource(data);
       });   */
   
    
    const res = await fetch(`https://places.iran.liara.run/api/products`);
    const data = await res.json();
    setProducts(data.products);
    setSource(data.products); 

  };

  useEffect(() => {
    if(!showSearchResults) {
      getData();
    } else {
      setSource(searchResult);
    }
  }, [searchResult, showSearchResults, wishlist ]);

  return (
    <div className="products" id="shop">
      <div className="products-list">
        {source.length > 0
          ? source.map((item, index) => (
              <Product
                key={index}
                id={item.id}
                firstImg={item.images[0]}
                secondImg={item.images[1]}
                //firstImg={item.image}
                title={item.title}
                price={item.price}
              />
            ))
          : source.length}
      </div>
    </div>
  );
};

export default Products;
