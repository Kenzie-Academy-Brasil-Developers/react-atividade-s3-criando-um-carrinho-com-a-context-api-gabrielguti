import ProductsList from "./components/productsList";
import "./app.css";
import { useContext } from "react";
import { CartContext } from "./providers/cart";
function App() {
  const { cart } = useContext(CartContext);

  const totalPrice = cart.reduce((value1, value2) => {
    return value1 + value2.price;
  }, 0);

  return (
    <div className="content">
      <div className="products">
        <ProductsList type="products" />
      </div>
      <div className="cart">
        <span>{`Valor total = R$ ${totalPrice}`}</span>
        <ProductsList type="cart" />
      </div>
    </div>
  );
}

export default App;
