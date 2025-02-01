import { useContext } from "react";

import Modal from "../UI/Modal";
import { currencyFormatter } from "../util/formatting";
import Button from "../UI/Button";
import CartContext from "../store/CartContext";
import UserProgressContext from "../store/UserProgressContext";
import CartItem from "./CartItem";

export default function Cart() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);
  const cartTotal = cartCtx.items.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  function handleClostCart() {
    userProgressCtx.hideCart();
  }
  function handleOpenCheckout() {
    userProgressCtx.showCheckout();
  }
  return (
    <Modal
      className="cart"
      open={userProgressCtx.userProgress === "cart"}
      onClose={userProgressCtx.userProgress === "cart" ? handleClostCart : null}
    >
      <h2>Your Cart</h2>
      <ul>
        {cartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            {...item}
            onIncrease={() => cartCtx.addItemToCart(item)}
            onDecrease={() => cartCtx.removeItemFromCart(item.id)}
          />
        ))}
      </ul>
      <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
      <p className="modal-actions">
        <Button textOnly onClick={handleClostCart}>
          Close
        </Button>
        {cartCtx.items.length > 0 && (
          <Button onClick={handleOpenCheckout}>Go to Checkout</Button>
        )}
      </p>
    </Modal>
  );
}
