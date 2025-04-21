import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart([...cart, item]); // Adds the new item to the cart array
    };

    const removeFromCart = (id) => {
        setCart(cart.filter((item) => item.idMeal !== id));
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    return useContext(CartContext);
}
