import { useContext } from "react";
import { CartContext } from "../../providers/cart";
import { ProductsContext } from "../../providers/products";

const Button = ({ type, item }) => {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);
  const { products, addProduct, removeProduct } = useContext(ProductsContext);

  const text = type === "products" ? "Add to cart" : "Remove";

  const handleClick = () => {
    if (type === "products") {
      removeProduct(item);
      addToCart(item);
    } else {
      removeFromCart(item);
      addProduct(item);
    }
  };

  return <button onClick={handleClick}>{text}</button>;
};

export default Button;
