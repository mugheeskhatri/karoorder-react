import React from 'react';
import './Footer.css'
import { BsFacebook } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { AiOutlineCopyright } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';


const Footer = () => {
    const navigate = useNavigate()
    const categories = ['Bags', 'Jewellery' , 'Shoes' , 'Watches','Purse']
    return (
        <div className='container-fluid '>
            <div className='row py-4 bg-dark text-light '>
                <div className='col-md-3 d-flex justify-content-center for-outline'>
                    <div className='footer_divide'>
                        <h5>Our Company</h5>
                        <div className='footer-list mt-4'>
                            <p onClick={()=> navigate('/')}>Home</p>
                            <p onClick={()=> navigate('/contact')}>Contact Us</p>
                            <p onClick={()=> navigate('/privacy')}>About Us</p>
                            <p onClick={()=> navigate('/privacy')}>Privacy Policy</p>
                            <p onClick={()=> navigate('/privacy')}>Terms and conditions</p>
                        </div>
                    </div>
                </div>
                <div className='col-md-3 d-flex justify-content-center for-outline hid'>
                    <div className='footer_divide'>
                        <h5>Categories</h5>
                        <div className='footer-list mt-4'>
                         {categories.map((v,i)=>{
                             return(
                                 <p onClick={()=> navigate(`/category/${v}`)} key={i}>{v}</p>
                             )
                         })}
                        </div>

                    </div>
                </div>
                <div className='col-md-3 d-flex justify-content-center for-margin'>
                    <div className='footer_divide'>
                        <div className='help'>
                            <h5>Need help?</h5>
                            <p>Call:<a href='callto:03112767347'> 03112767347</a></p>
                        </div>
                        <div className='mt-4'>
                            <h5>Follow Us</h5>
                            <div className='mt-4'>
                                <span className='px-1'><BsFacebook color='#166ADA' size={25} /></span>
                                <span className='px-1'><AiFillInstagram color='#E75B42' size={30} /></span>
                                <span className='px-1'><AiFillTwitterCircle color='#0BA3DA' size={28} /></span>
                            </div>
                        </div>


                    </div>
                </div>
                <div className='col-md-3'>
                    <div className='newsletter'>

                    </div>
                </div>

            </div>
            <div className='copyright py-2'><span><AiOutlineCopyright /></span> 2021 karo order online </div>
        </div>
    );
}

export default Footer;
