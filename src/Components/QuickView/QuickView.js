import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../AppContext";
import "./QuickView.scss";
import { VscTriangleDown, VscTriangleUp } from "react-icons/vsc";
import { SaveToLocal } from "../../LocalStorageFunctions";

const QuickView = () => {
  const { quickview, productsContext, backdrop, cartContext } =
    useContext(AppContext);
  const [selectedProduct, setSelectedProduct] = quickview;
  const [products, setProducts] = productsContext;
  const [currentImg, setCurrentImg] = useState(0);
  const [cart, setCart] = cartContext;
  const [backdropState, setbackdropState] = backdrop;
  const [counter, setCounter] = useState(0);
  const [localFlag, setLocalFlag] = useState(false);

 

  const addToCart = () => {
    if (counter > 0) {
      const productIndex = cart.findIndex(
        (item) => item.id == selectedProduct.id
      );
      if (productIndex < 0) {
        setCart([
          ...cart,
          {
            id: selectedProduct.id,
            img: selectedProduct.images[0],
            title: selectedProduct.title,
            price: selectedProduct.price,
            count: counter,
          },
        ]);
      } else {
        let tempCart = [...cart];
        tempCart[productIndex].count = tempCart[productIndex].count + counter;
        setCart(tempCart);
      }
      setbackdropState(false);
      setSelectedProduct({ id: -1 });
      setLocalFlag(!localFlag);
    }
  };

  useEffect(() => {
    setCounter(0);
  }, [selectedProduct]);

  useEffect(() => {
    if (localFlag) {
      SaveToLocal(cart);
      setLocalFlag(!localFlag);
    }
  }, [localFlag]);

  return (
    <div
      className={
        selectedProduct.id !== -1 ? "quick-view quick-view-show" : "quick-view"
      }
    >
      {selectedProduct.images && selectedProduct.images.length > 0 ? (
        <div className="quick-view-container">
          <div className="quick-view-img">
            <img
              className="current-img"
              src={selectedProduct.images[currentImg]}
            />
            <div className="thumbnail-container">
              <div>
                <img
                  className="tumbnail"
                  src={selectedProduct.images[0]}
                  onClick={() => {
                    setCurrentImg(0);
                  }}
                />
              </div>
              <div>
                <img
                  className="tumbnail"
                  src={selectedProduct.images[1]}
                  onClick={() => {
                    setCurrentImg(1);
                  }}
                />
              </div>
              <div>
                <img
                  className="tumbnail"
                  src={selectedProduct.images[2]}
                  onClick={() => {
                    setCurrentImg(2);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="quick-view-info">
            <h3 className="quick-view-info-h3">{selectedProduct.title}</h3>
            <h4 className="quick-view-info-h4">{selectedProduct.price}$</h4>
            <hr className="hr" />
            <p className="quick-view-info-p">{selectedProduct.description}</p>
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
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default QuickView;
