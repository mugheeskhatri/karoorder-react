import React from 'react';
import './Shipping.css'
import { IoRocketOutline } from 'react-icons/io5';


const Shipping = () => {
    return (
        <div className='container-fluid py-4 main bg-light'>
            <div className='row'>
                <div className='col-md-6 d-flex align-items-center justify-content-center my-2'>
                    <div className=' d-flex shippingCard'>
                        <div className='rocketIcon'>
                            <IoRocketOutline size={60} />
                        </div>
                        <div className='shippingHeading'>
                            <h2>Free Shipping</h2>
                            <p className='fs-6'>Free shipping on order of $100</p>
                        </div>
                    </div>
                </div>

                <div className='col-md-6 d-flex align-items-center justify-content-center my-2'>
                    <div className='d-flex shippingCard '>
                        <div className='rocketIcon'>
                            <IoRocketOutline size={60} />
                        </div>
                        <div className='shippingHeading'>
                            <h2>Free Shipping</h2>
                            <p className='fs-6'>Free shipping on order of $100</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Shipping;
