import React, { useContext } from 'react';
import { CartContext } from './CartContext';

function Cart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('undefined error occured!');
  }

  const { cart, removeFromCart } = context;

  return (
    <div className="bg-gray-900 flex justify-center items-center p-5 min-h-screen">
      <div className="max-w-md w-full p-10 border rounded-xl bg-white shadow-xl">
        <div className="m-4 p-4 border rounded-xl text-2xl font-bold text-center">
          내 카트
        </div>
        {cart.length === 0 ? (
          <div className="text-center text-gray-600 font-medium">
            카트에 상품이 없습니다.
          </div>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="flex justify-center items-center m-10 gap-4">
              <div className="p-2 w-full text-center font-bold bg-yellow-500 rounded-xl shadow-xl">
                <div>{item.name}</div>
                <div>{item.price}원</div>
              </div>
              <div className="p-2 text-center bg-red-500 font-bold text-white rounded-xl shadow-xl">
                <button onClick={() => removeFromCart(item.id)}>삭제버튼</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Cart;
