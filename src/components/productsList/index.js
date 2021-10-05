import Button from "../button";

import { useContext } from "react";

import { ProductsContext } from "../../providers/products";
import { CartContext } from "../../providers/cart";

const ProductsList = ({ type }) => {
  const { products } = useContext(ProductsContext);
  const { cart } = useContext(CartContext);

  return (
    <ul>
      {type === "products" &&
        products.map((item, index) => (
          <li key={index}>
            {item.name}
            <Button type={type} item={item} />
          </li>
        ))}
      {type === "cart" &&
        cart.map((item, index) => (
          <li key={index}>
            {item.name}
            <Button type={type} item={item} />
          </li>
        ))}
    </ul>
  );
};

export default ProductsList;
