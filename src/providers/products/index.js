import { createContext, useState } from "react";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([
    { name: "Shoes", price: 100 },
    { name: "T-shirt", price: 50 },
    { name: "Pants", price: 70 },
  ]);

  const addProduct = (item) => {
    setProducts([...products, item]);
  };

  const removeProduct = (item) => {
    const newProducts = products.filter((elem) => {
      return elem.name !== item.name;
    });

    setProducts(newProducts);
  };

  return (
    <ProductsContext.Provider value={{ products, addProduct, removeProduct }}>
      {children}
    </ProductsContext.Provider>
  );
};
