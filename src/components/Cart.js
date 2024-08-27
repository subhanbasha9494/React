import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import { clearCart } from "../utils/cartSlice";
import ItemList from './ItemList';
const Cart = () => {
    //always subscribe the exact data
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  const dispatchCart = useDispatch();
  const handleClearCart = () => {
    dispatchCart(clearCart());
  };
  return (
    <div>
      <h2>Cart</h2>
      <div>
        <Button variant="primary" onClick={handleClearCart}>
          Clear Cart
        </Button>
        {cartItems.length && cartItems.map((item) => (
               <ul>
               <li key={item.id}>{item.name}</li>
             </ul>
              ))}
        {cartItems.length === 0 && (
            <h2>Cart is empty. Add to the Cart</h2>
        )}
      </div>
    </div>
  );
};

export default Cart;
