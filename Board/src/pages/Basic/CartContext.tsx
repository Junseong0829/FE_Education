import React, {createContext, useState} from 'react';

interface CartItem {
    id: string;
    name: string;
    price: number;
}

interface CartContextType {
    cart: CartItem[];
    addToCart: (product: CartItem) => void;
    removeFromCart: (productId: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CartProvider = ({children}) => {
    const [cart, setCart] = useState<CartItem[]>([]);

    const addToCart = (product: CartItem) => {
        setCart(prev => [...prev, product]);
    };

    const removeFromCart = (productId: string) => {
        setCart(prev => prev.filter(item => item.id!==productId));
    };

    return(
        <CartContext.Provider value={{cart, addToCart, removeFromCart}}>
            {children}
        </CartContext.Provider>
    )
}

export {CartContext, CartProvider};