import React, {useContext} from 'react';
import {CartContext} from "./CartContext";

function Cart(){
   const {cart, removeFromCart} = useContext(CartContext);

    return(
        <div>
            <h1>내 카트</h1>
            {cart.map( (item) => (
                <div key={item.id}>
                    <p>{item.name} - {item.price}</p>
                    <button onClick={() => removeFromCart(item.id)}>상품 제거</button>
                </div>
            ) )}
        </div>
    );
}
export default Cart;