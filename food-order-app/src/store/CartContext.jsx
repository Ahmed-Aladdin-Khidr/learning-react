import { createContext, useReducer } from "react";

const CartContext = createContext({
  items: [],
  addItemToCart: (item) => {},
  removeItemFromCart: (id) => {},
  clearCart: () => {},
});

function carReducer(state, action) {
  if (action.type === "ADD_ITEM") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const updatedItems = [...state.items];
    if (existingCartItemIndex > -1) {
      const updatedItem = {
        ...state.items[existingCartItemIndex],
        quantity: state.items[existingCartItemIndex].quantity + 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems.push({ ...action.item, quantity: 1 });
    }

    return { ...state, items: updatedItems };
  }

  if (action.type === "REMOVE_ITEM") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );

    const existingItem = state.items[existingCartItemIndex];

    const updatedItems = [...state.items];

    if (existingItem.quantity === 1) {
      updatedItems.splice(existingCartItemIndex, 1);
    } else {
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity - 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    return { ...state, items: updatedItems };
  }

  if (action.type === "CLEAR") {
    return {...state, items: [] };
  }

  return state;
}

export function CartContextProvider(props) {
  const [cart, dispatchCartAction] = useReducer(carReducer, { items: [] });
    
    function addItemToCart(item) {
        dispatchCartAction({ type: "ADD_ITEM", item });
    }
    function removeItemFromCart(id) {
        dispatchCartAction({ type: "REMOVE_ITEM", id });
    }
    function clearCart() {
        dispatchCartAction({ type: "CLEAR" });
    }

    const cartContext = {
        items: cart.items,
        addItemToCart,
        removeItemFromCart,
        clearCart
    };

    console.log(cartContext);

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartContext;
