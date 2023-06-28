import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList.js';
import Footer from './components/Footer';

function App() {
  const products = [
    {
      price: 200,
      name: "Redmi Note10",
      quantity: 0,
    },
    {
      price: 100,
      name: "Iphone 7",
      quantity: 0,
    }
  ]

  let [productList, setProductList] = useState(products)
  let [totalAmount, setAmount] = useState(0)

  const incrementQuantity = (index) => {
    let newProductList = [...productList]
    newProductList[index].quantity++;
    setProductList(newProductList);

    let newTotalAmount = totalAmount;
    newTotalAmount += newProductList[index].price;
    setAmount(newTotalAmount);
  }

  const decrementQuantity = (index) => {
    let newProductList = [...productList]
    let newTotalAmount = totalAmount;
    if (newProductList[index].quantity > 0) {
      newProductList[index].quantity--;
      newTotalAmount -= newProductList[index].price;
    }
    setProductList(newProductList);
    setAmount(newTotalAmount);
  }

  const resetData = () => {
    let newProductList = [...productList]
    newProductList.map((product) => {
      product.quantity = 0
    })
    setProductList(newProductList);
    setAmount(0);
  }

  return (

    <>
      <Navbar />
      <main className='container mt-5'>
        <ProductList productList={productList} incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity} />
      </main>

      <Footer totalAmount={totalAmount} resetData={resetData} />
    </>
  );
}

export default App;
