import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import ImageGallery from '../../components/ImageGallery';
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import Rating from '@mui/material/Rating';
import '../ProductDetail/ProductDetail.css'
const Index = () => {
    const state = useSelector(state => state);

    const [quantity, setQuantity] = useState(0)
    const [selectedSize, setSelectedSize] = useState(false)
    const [value, setValue] = useState(3.5)
    const params = useParams()
    const productData = useSelector(state => state.product)
    const currentProduct = productData.filter(product => product.name == params.name)
    console.log('currentProduct', currentProduct)
    let getCartData = () => {
        var cartDataFromStorage = window.localStorage.getItem('cartProduct')
        var data = JSON.parse(cartDataFromStorage);
        state.cart = data ? data : state.cart;
    }

    const addCart = (data) => {
        state?.cart?.push(data)
        window.localStorage.setItem('cartProduct', JSON.stringify(state?.cart));
        var cartDataFromStorage = window.localStorage.getItem('cartProduct');
        var cartData = JSON.parse(cartDataFromStorage)
        state.cart = cartData
        console.log(state.cart)
    }
    return (
        <div>
            <Navbar />
            <div className='w-100 my-3'>
                <div className='row p-0 m-0'>
                    <div className='col-md-6'>
                        <ImageGallery img={currentProduct[0].img} />
                    </div>
                    <div className='col-md-6 pt-4 details_page_description'>
                        <div className='my-3 '>
                            <Rating size='large' name="half-rating-read" defaultValue={value} precision={0.5} readOnly />
                        </div>
                        <h1>{currentProduct[0].name}</h1>
                        <p>{currentProduct[0].description}</p>
                        <h3>${currentProduct[0].price}</h3>
                        <div className='d-flex my-4'>
                            {currentProduct[0].size ? currentProduct[0].size.map((v, i) => {
                                return (
                                    <div onClick={() => setSelectedSize(v)} className='size' key={i}>{v}</div>
                                )
                            }) : null}
                        </div>
                        <div className='quantity'>
                            <div onClick={() => {
                                if (quantity != 1) {
                                    setQuantity(quantity - 1)
                                }
                            }}><AiOutlineMinus size={20} /></div>
                            <div>{quantity}</div>
                            <div onClick={() => setQuantity(quantity + 1)}><AiOutlinePlus size={20} /></div>
                        </div>

                        <div className='my-4'>  <div onClick={() => {
                            if (quantity != 0) {
                                if (!selectedSize) {
                                    alert("Kindly select size")
                                } else {
                                    let amount = quantity * currentProduct[0].price
                                    let data = { ...currentProduct[0], quantity, amount }
                                    addCart(data)
                                    getCartData()
                                }
                            }
                            else {
                                alert("kindly select quantity")

                            }
                        }} className='add_btn w-50 btn'>Add to Cart</div></div>
                    </div>
                </div>
            </div>
            {currentProduct[0].reviews ? <div className='p-3 my-4'>
                <h1>Reviews</h1>
                {currentProduct[0]?.reviews?.map((v, i) => {
                    return (
                        <div key={i}>
                            <div className='d-flex'>
                                <img style={{ width: 30, height: 30, borderRadius: '50%', }} src={v.image} />
                                <h4>mughees</h4>
                            </div>
                            <div><p>{v.review}</p></div>
                        </div>
                    )
                })}
            </div> : null}
        </div>
    );
}

export default Index;
