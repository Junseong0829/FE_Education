import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import {v4 as uuidv4} from 'uuid';

function ProductList() {
    const context = useContext(CartContext);
    if(!context){
        throw new Error('undefined error occured!');
    }
    const {addToCart} = context;

    const products = [
        {name: '상품 A', price: 100 },
        {name: '상품 B', price: 200 },
        {name: '상품 C', price: 300 }
    ];

    const handleAdd = (product:{name:string, price:number}) => {
        addToCart({
            id: uuidv4(),
            ...product
        })
    }

  return (
    <div className="bg-gray-900 flex justify-center items-center p-5 min-h-screen">
        <div className="max-w-md w-full p-10 border rounded-xl bg-white shadow-xl">
            <div className="m-4 p-4 border rounded-xl text-2xl font-bold text-center">
                상품 목록
            </div>
            {products.map( (product, index) => (
            <div key={index} className="flex justify-center items-center m-10 gap-4">
                <div className="p-2 w-full text-center font-bold bg-yellow-500 rounded-xl shadow-xl">
                    <div>
                        {product.name}
                    </div>
                    <div>
                        {product.price}원
                    </div>
                </div>
                <div className="p-2 text-center bg-red-500 font-bold text-white rounded-xl shadow-xl">
                    <button onClick={() => handleAdd(product)}>카트에 추가</button>
                </div>
            </div>
        ))}
        </div>
    </div>
  );
}

export default ProductList;