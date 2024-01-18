import React, { useState, useContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../Layout";
import { Context } from "../context";
import { products } from "../../FetchsAll/products";
import { categories } from "../../FetchsAll/categories"
import HomePages from "../../Pages/HomePages";
import CategoryPages from "../../Pages/CategoryPages"
import BasketPage from "../../Pages/BasketPage";
import Contact from "../Contact";
import CategoryProductPage from "../../Pages/CategoryProductPage";
import SingleProduct from "../../Pages/SingleProduct";

function App() {
  const [product, setProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const [basket, setBasket] = useState([]);
  console.log("basket", basket);


  const addToBasket = (title, description, discountPercentage, price, images) => {
    const target = basket.find(el => el.title === title);
    if (target) {
      target.count++;
      setBasket([...basket])
    } else {
      setBasket([...basket, {
        id: Date.now(),
        title,
        description,
        price,
        discountPercentage,
        images,
        count: 1
      }])
    }
  };
  const basketIncrement = (id) => {
    const target = basket.find(el => el.id === id);
    if (target) {
      target.count++;
      setBasket([...basket])
    } else {
      setBasket([...basket])
    }
  };

  const basketDecrement = (id) => {
    const target = basket.find(el => el.id === id);
    if (target.count === 1) {
      setBasket(basket.filter(el => el !== target));
    } else {
      target.count--;
      setBasket([...basket])
    }
  };

  useEffect(() => {
    setBasket(product)
  }, []);

  useEffect(() => {
    categories(setCategory)
  }, [])

  useEffect(() => {
    products(setProduct)
  }, [])
  return (
    <>
      <Context.Provider value={{ product, category, basket, setBasket, addToBasket, basketIncrement, basketDecrement }}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePages />} />
            <Route path="category" element={<CategoryPages />} />
            <Route path="contact" element={<Contact />} />
            <Route path="Singleproduct/:id" element={<SingleProduct />} />
            <Route path="categoryProuct/:title" element={<CategoryProductPage />} />
            <Route path="basket" element={<BasketPage />} />
          </Route>
        </Routes>
      </Context.Provider>
    </>
  );
}

export default App;
