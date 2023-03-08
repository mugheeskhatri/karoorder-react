import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import Card from '../../components/card/Card'
import '../Category/Category.css'
const Category = () => {
    let params = useParams()
    const productData = useSelector(state => state.productData)
    const cart = useSelector(state => state.cart)
    console.log('productData', productData) 
    console.log('cartData',cart)
    let data = productData?.filter(productdata => productdata?.category == params.id)
    console.log('data',data)
    return (
        <div>
            <Navbar />
            <div>
                {data ? data.map((v,i)=>{
                    return(
                        <Card />
                    )
                }) :
                <div className='no_items'>
                <h2>There is no item we have in this category now.</h2>
                <p>Kindly connect with us to see more items</p>
                </div>}
            </div>
            <div className={data ? 'normal' : 'botom'}><Footer /></div>
        </div>
    );
}

export default Category;
