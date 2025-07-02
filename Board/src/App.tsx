import React from 'react';
import { useState } from 'react'
import './App.css'
import TodoList from "./pages/TodoList.jsx";
import TodoList2 from "./pages/TodoList2.jsx";
import Calculator from "./pages/Calculator";
import Temp1 from "./pages/Temp1";
import {CartProvider} from "./pages/CartContext";
import ProductList from './pages/ProductList';
import Cart from './pages/Cart';

function App(){
  return(
    <>
    <CartProvider>
      <TodoList2 />
    </CartProvider>
    </>
  )
}
export default App;