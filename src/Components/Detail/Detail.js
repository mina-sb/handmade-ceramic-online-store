import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../AppContext";
import { useLocation, useParams } from "react-router-dom";
import Products from "../Products/Products";
import { VscTriangleDown, VscTriangleUp } from "react-icons/vsc";
import { SaveToLocal } from "../../LocalStorageFunctions";
import {
  FaRegHeart,
  FaTwitter,
  FaPinterestP,
  FaFacebookF,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";
import "./Detail.scss";

const Detail = () => {
  const { navColor, backdrop, cartContext, cartTotalPrice, showCart } =
    useContext(AppContext);
  const [navBg, setNavBg] = navColor;
  const [cart, setCart] = cartContext;
  const [totalPrice, setTotalPrice] = cartTotalPrice;
  const [cartState, setCartState] = showCart;
  const [backdropState, setbackdropState] = backdrop;
  const [category, setCategory] = useState("");

  const [tab, setTab] = useState(0);
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const [counter, setCounter] = useState(0);
  const [slider, setSlider] = useState(0);
  const [localFlag, setLocalFlag] = useState(false);

  const location = useLocation();
  if (location.pathname.includes("/detail")) {
    setNavBg(false);
  }

  const getProduct = async () => {
    const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);
    const data = await res.json();
    setProduct(data);
  };
  useEffect(() => {
    if (product.category) {
      setCategory(product.category.name);
    }
  }, [product]);
  useEffect(() => {
    getProduct();
  }, []);

  const addToCart = () => {
    if (counter > 0) {
      const productIndex = cart.findIndex((item) => item.id == id);
      if (productIndex < 0) {
        setCart([
          ...cart,
          {
            id: id,
            img: product.images[0],
            title: product.title,
            price: product.price,
            count: counter,
          },
        ]);
        setbackdropState(true);
        setCartState(true);
      } else {
        let tempCart = [...cart];
        tempCart[productIndex].count += counter;
        setCart(tempCart);
        setbackdropState(true);
        setCartState(true);
      }
      setLocalFlag(!localFlag);
    }
  };

  useEffect(() => {
    if (localFlag) {
      SaveToLocal(cart);
      setLocalFlag(!localFlag);
    }
  }, [localFlag]);

  return (
    <div className="detail">
      <div className="bread-crumb">
        <span>Home</span>
        <span>retE</span>
        <span>Tall Vase in Midnight</span>
        <span> dsf</span>
        <span> 254</span>
      </div>
      <div className="product-container">
        <div className="product-img">
          <img
            className={`slider-img ${
              slider == 1 ? "go-left" : slider == 2 ? "go-right" : ""
            }`}
            src={
              product.images && product.images.length > 0
                ? product.images[0]
                : ""
            }
          />
          <img
            className={`slider-img ${
              slider == 1 ? "go-left" : slider == 2 ? "go-right" : ""
            }`}
            src={
              product.images && product.images.length > 0
                ? product.images[1]
                : ""
            }
          />
          <div className="slider-arrows">
            <FaArrowLeft
              className="arrow-left"
              onClick={() => {
                setSlider(1);
              }}
            />
            <FaArrowRight
              className="arrow-right"
              onClick={() => {
                setSlider(2);
              }}
            />
          </div>
        </div>
        <div className="product-info">
          <h2>{product.title}</h2>
          <h3>${product.price} USD</h3>
          <hr className="hr" />
          <p>{product.description}</p>
          <div className="add-to-cart">
            <a className="add-button" onClick={addToCart}>
              ADD TO CART
            </a>
            <div className="counter">
              {counter}
              <div className="add-remove">
                <VscTriangleUp
                  className="add-btn"
                  onClick={() => {
                    setCounter(counter + 1);
                  }}
                />
                <VscTriangleDown
                  className="remove-btn"
                  onClick={() => {
                    if (counter > 0) {
                      setCounter(counter - 1);
                    }
                  }}
                />
              </div>
            </div>
          </div>
          <div className="add-to-wish">
            <FaRegHeart className="heart" />
            <span>ADD TO WISHLIST</span>
          </div>
          <div className="categories">
            <span className="cat-title">Categories :{category}</span>
          </div>
          <div className="share">
            <span className="share-title">SHARE :</span>
            <FaTwitter className="share-btns" />
            <FaFacebookF className="share-btns" />
            <FaPinterestP className="share-btns" />
          </div>
        </div>
      </div>
      <div className="more-info">
        <hr className="hr" />
        <div className="tabs">
          <ul>
            <li className={tab == 0 ? "active" : ""} onClick={() => setTab(0)}>
              <a>DESCRIPTION</a>
            </li>
            <li className={tab == 1 ? "active" : ""} onClick={() => setTab(1)}>
              <a>ADDITIONAL INFORMATION</a>
            </li>
            <li className={tab == 2 ? "active" : ""} onClick={() => setTab(2)}>
              <a>REVIEW</a>
            </li>
          </ul>
          <div className="tab-container">
            <div className={`discription ${tab == 0 ? "show" : "hide"}`}>
              <p>
                Originally designed by Edith Heath in the 1980s for our Plaza
                line. Simple, modern, and with an ergonomic flare — this
                inviting, handless cup is great for coffee and tea. Pair it with
                our Large Teapot for a one-of-a-kind gift that’s guaranteed to
                win over tea lovers everywhere. Expect lovely variation in our
                Redwood glaze.
              </p>
              <div className="product-container">
                <div className="product-img pad-0">
                  <img
                    src={
                      product.images && product.images.length > 0
                        ? product.images[1]
                        : ""
                    }
                  />
                </div>
                <div className="product-info margin-top">
                  <h3 className="discription-title">
                    Beautiful Stoneware Tall Vase In Midnight
                  </h3>
                  <p>
                    Originally designed by Edith Heath in the 1980s for our
                    Plaza line. Simple, modern, and with an ergonomic flare —
                    this inviting, handless cup is great for coffee and tea.
                    Pair it with our Large Teapot for a one-of-a-kind gift
                    that’s guaranteed to win over tea lovers everywhere. Expect
                    lovely variation in our Redwood glaze.
                  </p>
                </div>
              </div>
            </div>
            <div className={`additional-info ${tab == 1 ? "show" : "hide"}`}>
              <p>
                Plants has no restrictions on the length of manuscripts,
                provided that the text is concise and comprehensive. Full
                experimental details must be provided so that the results can be
                reproduced. Plants requires that authors publish all
                experimental controls and make full datasets available where
                possible (see the guidelines on Supplementary Materials and
                references to unpublished data).
              </p>
            </div>
          </div>
        </div>
        <hr className="hr" />
      </div>
      <div className="latest-products">
        <h2 className="latest-products-title">LATEST PRODUCTS</h2>
        <Products limit={4} />
      </div>
      <hr className="hr" />
    </div>
  );
};

export default Detail;
