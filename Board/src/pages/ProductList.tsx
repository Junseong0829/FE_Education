import React, {useContext} from 'react';
import {CartContext} from './CartContext';

function ProductList(){
    const {addToCart} = useContext(CartContext);

    const products=[
        { id: 1, name: "상품 A", price: 100},
        { id: 2, name: "상품 B", price: 200},
        { id: 3, name: "상품 C", price: 300},
    ];

    return(
        <div>
            <h1 className="text-5xl font-bold text-center border-2 border-blue-300 w-full">상품 리스트</h1>
            <div className="flex bg-blue-300">
            {products.map( (product) => (
                <div className="w-400 h-40 text-center font-bold" key={product.id}>
                    <p className="">{product.name} : {product.price}원 </p>
                    <button className="border-2 border-red-600 rounded-lg w-40" onClick={() => addToCart(product)}>상품 추가</button>
                </div>
            ))}
            </div>
        </div>
    );
}
export default ProductList;