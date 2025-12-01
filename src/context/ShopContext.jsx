import { createContext, useState } from "react";
import { products } from "../assets/assets";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

export const ShopProvider = ({ children }) => {

  const navigate = useNavigate()


  const value = { products,navigate };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
