import React, { useEffect, useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Footer from '../../components/Footer/Footer'
import { order } from '../../config/action';
import { useSelector } from 'react-redux';
import axios from 'axios'

const Index = () => {
    const [selectCity, setSelectCity] = useState(false)
    // const history = useHistory();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState();
    const [streetAddress, setStreetAddress] = useState();
    const [city, setCity] = useState();
    const [phone, setPhone] = useState();
    const [additionalinfo, setAdditionalinfo] = useState();
    const [totalAmount, setTotalAmount] = useState(0);
    const [update, setUpdate] = useState(true)
    const state = useSelector(state => state)
    var total = 0;
    useEffect(() => {
        var cartDataFromStorage = window.localStorage.getItem('cartProduct')
        var data = JSON.parse(cartDataFromStorage);
        state.cart = data ? data : state.cart;
        console.log(state.cart, 'cart')
        setUpdate(!update)
    }, [])
    const placeOrder = () => {
        let data = {
            fullName: firstName + ' ' + lastName, email, city: city.name, phone, streetAddress, additionalinfo, order: state.cart
        };
        axios.post('http://localhost:5000/order', data)
            .then(function (response) {
                alert('Congrats! Order done')
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    let cities = [
        {
            name: 'Karachi',
            charges: 200
        },
        {
            name: 'Hyderabad',
            charges: 200
        },
        {
            name: 'Peshawar',
            charges: 450
        },
        {
            name: 'Lahore',
            charges: 300
        },
        {
            name: 'Faisalabad',
            charges: 320
        },
    ]
    return (
        <div>
            <Navbar />
            <div className='w-100 row p-3'>
                <div className='col-md-7 p-2 shipping_form'>
                    <h3>Billing and Shipping Form</h3>
                    <div className='p-4 border'>
                        <div className='row'>
                            <div className='col-md-6'>
                                <div style={{ fontSize: 15, fontWeight: 600 }}>First Name:</div>
                                <input onChange={(e) => setFirstName(e.target.value)} type="email" className="form-control my-1 p-2" />
                            </div>
                            <div className='col-md-6'>
                                <div style={{ fontSize: 15, fontWeight: 600 }}>First Name:</div>
                                <input onChange={(e) => setLastName(e.target.value)} type="text" className="form-control my-1 p-2" />
                            </div>
                        </div>
                        <div className='my-4'>
                            <div style={{ fontSize: 15, fontWeight: 600 }}>Street Address:</div>
                            <input onChange={(e) => setStreetAddress(e.target.value)} type="text" className="form-control my-1 p-2" placeholder="House number and street name" />
                        </div>
                        <div className='my-4'>
                            <div style={{ fontSize: 15, fontWeight: 600 }}>Email:</div>
                            <input onChange={(e) => setEmail(e.target.value)} type="text" className="form-control my-1 p-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        </div>
                        <div className='my-4'>
                            <div style={{ fontSize: 15, fontWeight: 600 }}>City:</div>
                            {!selectCity ? <div onClick={() => setSelectCity(true)} className='p-2 align-items-center form-control d-flex hover'>
                                <div className='w-80'>{city ? city.name : 'Select City' }</div>
                                <div className='w-20'><IoIosArrowDown size={24} /></div>
                            </div> : <div className='px-4 pt-2 select_city'>
                                <div className='w-100 d-flex align-items-start  '>
                                    <div className='w-80'>Select City</div>
                                    <div className='w-20 hover'><IoIosArrowUp onClick={() => setSelectCity(false)} size={24} /></div>

                                </div>
                                {cities.map((v, i) => {
                                    return (
                                        <div onClick={() => {
                                            setCity(v)
                                            setSelectCity(false)
                                        }} key={i} className='col-md-12 my-2 p-2 hover city_dropdown'>{v.name}</div>
                                    )
                                })}
                            </div>}
                        </div>
                        <div className='my-4'>
                            <div style={{ fontSize: 15, fontWeight: 600 }}>Phone No.</div>
                            <input onChange={(e) => setPhone(e.target.value)} type="phone" className="form-control my-1 p-2" placeholder="Enter phone no." />
                        </div>
                        <div className='my-4'>
                            <div style={{ fontSize: 15, fontWeight: 600 }}>Additional information (optional):</div>
                            <textarea onChange={(e) => setAdditionalinfo(e.target.value)} className='w-100 border' ></textarea>
                        </div>
                    </div>
                </div>
                <div className='col-md-5 p-2'>
                    <h3>
                        Invoice
                    </h3>
                    <div className='border p-2'>

                        <div className='w-90 d-flex pt-3 pb-2'>
                            <div className='col-md-9'><h6>PRODUCT</h6></div>
                            <div className='col-md-3'><h6>SUBTOTAL</h6></div>
                        </div>
                        {state?.cart?.map((v, i) => {
                            total += (v.price*v.quantity)
                            Number(total)
                            console.log('totalAmount' , total)
                            return (
                                <div key={i} className='d-flex py-3 invoice'>
                                    <div className='w-80 text-dark'>{v.description} x {v.quantity}</div>
                                    <div className='w-20 text-dark'>{v.price * v.quantity}</div>
                                </div>
                            )
                        })}
                        <div className='w-90 py-3 invoice'>
                            <div className='w-100 d-flex'>
                                <div className='w-80 text-dark'><h6>SUBTOTAL</h6></div>
                                <div className='w-20 text-dark'><h6>{total}</h6></div>
                            </div>
                            <div className='w-100 d-flex'>
                                <div className='w-80 text-dark'><h6>Shipping Charges</h6></div>
                                <div className='w-20'><h6>{city ? 'Rs' + city.charges : 'Please select city'}</h6></div>
                            </div>
                        </div>
                        <div className='w-90 py-3 d-flex'>
                            <div className='w-80'><h6>Total Amount</h6></div>
                            <div className='w-20'><h6>{!city ? 'Rs' + total : 'Rs' + (total+city.charges)}</h6></div>
                        </div>
                    </div>
                    <div className='mt-4 border p-3'>
                        <div className='w-90 place_order'>
                            <h5>Cash on delivery</h5>
                            <p>Pay with cash upon delivery</p>
                            <button onClick={placeOrder} className='order-btn'>Place Order</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div >
    );
}

export default Index;
