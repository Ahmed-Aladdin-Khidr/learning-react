import { createContext, useState } from "react";

const UserProgressContext = createContext({
  userProgress: "", //cart - checkout
  showCart: () => {},
  hideCart: () => {},
  showCheckout: () => {},
  hideCheckout: () => {},
});

export function UserProgressContextProvider(props) {
    const [userProgress, setUserProgress] = useState("");
    function showCart() {
        setUserProgress("cart");
    }
    function hideCart() {
        setUserProgress("");
    }
    function showCheckout() {
        setUserProgress("checkout");
    }
    function hideCheckout() {
        setUserProgress("");
    }

    const context = {
        userProgress: userProgress,
        showCart,
        hideCart,
        showCheckout,
        hideCheckout,
    };
    
    return (
        <UserProgressContext.Provider value={context}>
        {props.children}
        </UserProgressContext.Provider>
    );
    }

export default UserProgressContext;