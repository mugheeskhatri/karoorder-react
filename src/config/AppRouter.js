import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../screens/Home/Home';
import Login from '../screens/Login/Login'
import Signup from '../screens/Signup/Signup';
import {getAuth} from 'firebase/auth'
import Category from '../screens/Category/Category';
import Checkout from '../screens/Checkout/';
import Privacy from '../screens/privacy';
import Contact from '../screens/Contact'
import ProductDetail from '../screens/ProductDetail'
import {useSelector} from 'react-redux'
import axios from 'axios'
function AppRouter() {
    const state = useSelector(state => state)
    useEffect(() => {

// Make a request for a user with a given ID
axios.get('http://localhost:5000/api/product')
  .then(function (response) {
    // handle success
    console.log(response.data);
    state.productData = response.data;
  })
    }, [])

    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/signup" element={<Signup />} />
                <Route exact path="/category/:id" element={<Category />} /> 
                <Route exact path="/checkout" element={<Checkout />} /> 
                <Route exact path="/privacy" element={<Privacy />} /> 
                <Route exact path="/contact" element={<Contact />} /> 
                <Route exact path="/product/:name" element={<ProductDetail />} /> 
            </Routes>
        </Router>
    )
}

export default AppRouter
