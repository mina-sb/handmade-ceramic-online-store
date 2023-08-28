import React, { useContext } from "react";
import { AppContext } from "./AppContext";

export const SaveToLocal = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};
