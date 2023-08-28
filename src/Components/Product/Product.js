import React, { useContext, useEffect, useState } from "react";
import "./Product.scss";
import { FiShoppingCart } from "react-icons/fi";
import { AppContext } from "../../AppContext";
import { Link, useNavigate } from "react-router-dom";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import QuickView from "../QuickView/QuickView";
import { IconName } from "react-icons/gr";
import useWindowDimensions from "../../useWindowDimensions";
import { SaveToLocal } from "../../LocalStorageFunctions";
import { AiFillEye } from "react-icons/ai";

const Product = ({ id, firstImg, title, price }) => {
  const {
    cartContext,
    backdrop,
    showCart,
    wishlistContext,
    productsContext,
    quickview,
  } = useContext(AppContext);
  const [cart, setCart] = cartContext;
  const [backdropState, setbackdropState] = backdrop;
  const [cartState, setCartState] = showCart;
  const [wishlist, setWishlist] = wishlistContext;
  const [products, setProducts] = productsContext;
  const [selectedProduct, setSelectedProduct] = quickview;
  const [localFlag, setLocalFlag] = useState(false);

  const navigate = useNavigate();

  const { height, width } = useWindowDimensions();

  const [img, setImg] = useState(false);
  const [wished, setWished] = useState(-1);

  const changeImg = () => {
    setImg(!img);
  };

  const addToCart = () => {
    const productIndex = cart.findIndex((item) => item.id == id);
    if (productIndex < 0) {
      setCart([
        ...cart,
        { id: id, img: firstImg, title: title, price: price, count: 1 },
      ]);
    } else {
      let tempCart = [...cart];
      tempCart[productIndex].count++;
      setCart(tempCart);
    }
    setbackdropState(true);
    setCartState(true);
    setLocalFlag(!localFlag);
  };

  const addToWishlist = () => {
    const productExist = wishlist.findIndex((item) => item.id == id);
    if (wished < 0) {
      const productIndex = products.findIndex((item) => item.id == id);
      setWishlist([ ...wishlist, products[ productIndex ] ]);
      setWished(0);
    } else {
      setWished(-1);
      let temp = wishlist;
      temp.splice(productExist, 1);
      setWishlist([ ...temp ]);
    }
  };

  const addToQuickview = () => {
    if(width > 700) {
     
      const product = products.filter((item) => {
        return item.id === id;
      });
      setSelectedProduct(product[0]);
      setbackdropState(true);
    } else {
      navigate(`/detail/${id}`);
    }
  };

  useEffect(() => {
    setWished(wishlist.findIndex((item) => {
      return item.id == id;
    }));

  }, []);

  useEffect(() => {
    if (localFlag) {
      SaveToLocal(cart);
      setLocalFlag(!localFlag);
    }
  }, [localFlag]);

  return (
    <div className="product">
      <div className="img-box">
        <img src={firstImg} />
      </div>
      <div className="btn-list">
        <div className="item">
          <FiShoppingCart onClick={addToCart} />
          <span className="tooltip">add to cart</span>
        </div>
        <div className="item">
          {wished > -1 ? (
            <FaHeart onClick={addToWishlist} />
          ) : (
            <FaRegHeart onClick={addToWishlist} />
          )}
          {wished > -1 ? (
            <span className="tooltip">remove from wishlist</span>
          ) : (
            <span className="tooltip">add to wishlist</span>
          )}
        </div>
        <div className="item">
          <AiFillEye className="quick-view-btn" onClick={addToQuickview} />
          <span className="tooltip">quick view</span>
        </div>
      </div>
      <Link to={`/detail/${id}`}>
        <h4 className="product-title">{title.slice(0, 20)}</h4>
      </Link>
      <span className="product-price">{price + "$"}</span>
    </div>
  );
};

export default Product;
