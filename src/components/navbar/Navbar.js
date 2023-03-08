import React, { useState, useEffect } from 'react';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import { AiOutlineShoppingCart, AiOutlineClose  ,  AiOutlineUser, AiFillGoogleCircle, AiOutlineDelete, AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { BsSearch, BsFacebook } from 'react-icons/bs';
import { CgMenuGridR } from 'react-icons/cg';
import logo from '../../assets/images/logo.png'
import { RiLockPasswordLine } from 'react-icons/ri';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { userLogin, forget, signinFb, googleLogin, signup } from '../../config/action';
import { get, child, getDatabase, ref, update, remove } from 'firebase/database'
import { useSelector } from 'react-redux';
import Cart from '../Cart/Cart.js'
import {Link , useNavigate } from 'react-router-dom';

const Navbar = () => {
  let navigate = useNavigate()
  const data = useSelector(state => state)
  const [login, setLogin] = useState(true);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();
  const [ipAddress, setIpAddress] = useState();
  const [cartData, setCartData] = useState();
  const [totalAmount , setTotalAmount] = useState()
  const [cartHover , setCartHover] = useState(false)
  const [ update , setUpdate ] = useState(true)
  const [user , setUser] = useState(true)
  const [profileDrawer , setProfileDrawer]  = useState(false) 
  const dbRef = ref(getDatabase())

  const db = getDatabase()
  useEffect(() => {
    getCartData()
  }, []);

  let getCartData = () => {
    var cartDataFromStorage = window.localStorage.getItem('cartProduct')
    var dataToJson =  JSON.parse(cartDataFromStorage);
    data.cart =dataToJson ? dataToJson : data.cart;
    console.log('get Card', data.cart)
    setUpdate(!update)
  }
  


  const work = () => {
    let data = { email, password }
    userLogin(data)
  }
  const forgot = () => {
    let data = { email }
    alert('forget')
    forget(data)
  }
  const signin = () => {
    let data = { name, email, password };
    signup(data)
  }
  const [menuBTn, setMenuBtn] = useState(false)
  const categories = ['Bags', 'Jewelery', 'Watches', 'Jewellery','Cosmetics'];
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
   
      <Box
      sx={{ width: 390}}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className='cart-topbar'>
       <div className='w-75 d-flex justify-content-center'>
       <div className=''>
          <AiOutlineShoppingCart size={28} color='white' />
        </div>
        <div className='text-light mx-3 my-1'>
          My Cart
        </div>
       </div>
        
      <div className='w-25 d-flex justify-content-end'>
      <button onClick={()=>{
        setState({ ...state, right: false })
      }} type="button" className="close mx-4" >
              <AiOutlineClose size={18} />
              </button>
      </div>
        
      </div>
      <div className='cart-section'>
        {data?.cart?.map((v, i) => {
          return (
            <div key={i} className='w-100'>
            <Cart number={i} amount={v.amount} description={v.description} ip={ipAddress} name={v.name} img={v.img} price={v.price} quantity={v.quantity} />
            </div>
          )
        })}
      </div>
      <div className='checkout-btn-container'>
      <div>
      <button onClick={()=>{
        setState({ ...state, right: false })
      }}>Continue Shopping</button>
      <button onClick={()=>{
        navigate('/checkout')
      }}>Check out</button>
      </div>
      </div>
    </Box >
   
  );
  return (
    <div>
      <div>
        <div className='navbar bg-light border-bottom'>
          <div className='col-md-4 px-4  menu-section'>
            <div className='search-section w-100'>
              <div className='col-md-10'>
                <input type='text' placeholder='Search' className='search' />
              </div>
              <div className='d-flex align-items-center justify-content-center col-md-2'>
                <button className='search-btn'><BsSearch color='gray' /></button>
              </div>
            </div>
          </div>
          <div className='col-md-4 logo-section'>
            <img className='logo' src={logo} />
          </div>
          <div className='col-md-4 d-flex icon-section-container'>
            <div className='d-flex w-100 icon-section'>
              <div onMouseOver={()=> setCartHover(true)} onMouseOut={()=> setCartHover(false)} className='btn nav-icons' onClick={toggleDrawer('right', true)}>
              <div style={!cartHover ? {  backgroundColor:'black'} :  {backgroundColor: '#35ABAF', color:'black',border:'none'}} className='cart_number'>{data.cart.length}</div>
              <div className='cart_icon'><AiOutlineShoppingCart size={25} />
              </div>
              </div>
              {!user ? <div className='btn nav-icons'
               data-toggle="modal" data-target="#exampleModal"
               >
                <AiOutlineUser size={25} />
              </div> : <img style={{width:40,height:40,borderRadius:'50%',cursor:'pointer'}} src='https://images.unsplash.com/photo-1624617930964-a1e4836c3c40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWFuJTIwYm95fGVufDB8fDB8fA%3D%3D&w=1000&q=80'  onClick={()=>{
                setProfileDrawer(!profileDrawer)
              }} />}
            </div>
          </div>
          <div className='search-section2'>
            <div className='w-75'>
              <input type='text' placeholder='Search' className='search' />
            </div>
            <div className='d-flex align-items-center justify-content-center w-25'>
              <button className='search-btn'><BsSearch color='gray' /></button>
            </div>
          </div>
        </div>
        <div className='sub-nav'>
          <div className='category-list'>
            {categories.map((v, i) => {
              return (
                <div onClick={()=> navigate(`/category/${v}`) } key={i}><p className='menuList'>{v}</p></div>
              )
            })}
          </div>
        </div>
        <div className='mob-category-container mt-2'>
          <div className={menuBTn ? 'mob-category-2' : 'mob-category'}>
            <div className='d-flex'>
              <div className='w-50'>
                <p className='text-light mx-3'>Categories</p>
              </div>
              <div className='w-50 d-flex justify-content-end px-3'>
                <CgMenuGridR color='white' size={20} onClick={() => setMenuBtn(!menuBTn)} />
              </div>
            </div>
            {menuBTn ? <div className='d-flex justify-content-center'>
              <div className='category-items-container'>
                {categories.map((v, i) => {
                  return (
                    <div onClick={()=> navigate(`/category/${v}`)} className='category-item' key={i}>
                      <p className='text-light'> {v}</p>
                    </div>
                  )
                })}
              </div>
            </div> : null}
          </div>
        </div>
      </div>

      {/* modal */}

      <div className="modal fade " id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        {login ? <div className="modal-dialog bg-custom" role="document">
          <div className="modal-content">
            <div className="modal-header bg-custom">
              <h5 className="modal-title">Login Form</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <AiOutlineClose />
              </button>
            </div>
            <div className="modal-body d-flex justify-content-center flex-wrap">
              <div className='d-flex input-section my-2'>
                <div className=' icon-section'><AiOutlineUser /></div>
                <div className=' input_section'><input onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Enter your email' /></div>
              </div>
              <div className='d-flex input-section my-2'>
                <div className='icon-section'><RiLockPasswordLine /></div>
                <div className=' input_section'><input onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Enter your password' /></div>
              </div>
              <div className='w-100 d-flex justify-content-center my-2'><button className='btn btn-custom bold' onClick={() => work()}>Log In</button></div>
              <div className='w-75 pl-1 d-flex'>
                <div className='col-md-6'>
                  <p className='forgot btn' onClick={forgot}>Forgot password?</p>
                </div>
                <div className='col-md-6 d-flex justify-content-end'>
                  <p className='btn' onClick={() => setLogin(false)}>Create account?</p>
                </div>
              </div>
            </div>
            <div className='d-flex justify-content-center flex-wrap'>
              <div onClick={googleLogin} className='d-flex input-section my-2'>
                <div className=' input_section d-flex justify-content-center bold'>Continue with google</div>
                <div className='icon-section'><AiFillGoogleCircle size={25} color='#53B56D' /></div>
              </div>
              <div className='d-flex input-section mb-2'>
                <div onClick={signinFb} className=' input_section d-flex justify-content-center bold'>Continue with facebook</div>
                <div className='icon-section'><BsFacebook size={25} color='#1877F2' /></div>
              </div>
            </div>
          </div>
        </div> :
          <div className="modal-dialog bg-custom" role="document">
            <div className="modal-content">
              <div className="modal-header bg-custom">
                <h5 className="modal-title">Sign Up Form</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <AiOutlineClose />
              </button>
              </div>
              <div className="modal-body d-flex justify-content-center flex-wrap">
                <div className='d-flex input-section my-2'>
                  <div className=' icon-section'><AiOutlineUser /></div>
                  <div className=' input_section'><input onChange={(e) => setName(e.target.value)} type='text' placeholder='Enter your name' /></div>
                </div>
                <div className='d-flex input-section my-2'>
                  <div className=' icon-section'><AiOutlineUser /></div>
                  <div className=' input_section'><input onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Enter your email' /></div>
                </div>
                <div className='d-flex input-section my-2'>
                  <div className='icon-section'><RiLockPasswordLine /></div>
                  <div className=' input_section'><input onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Enter your password' /></div>
                </div>
                <div className='w-100 d-flex justify-content-center my-2'><button className='btn btn-custom bold'  onClick={() => signin()}>Sign Up</button></div>
                <div className='w-75 pl-1 d-flex justify-content-center'>
                  <p className='btn' onClick={() => setLogin(true)}>Already have an account</p>
                </div>
              </div>
            </div>
          </div>
        }
      </div>

      {/* modal */}

      {/* {drawer} */}


      <Drawer
        anchor='right'
        open={state['right']}
        onClose={toggleDrawer('right', false)}
      >
        {list('right')}

      </Drawer>


      {/* {drawer} */}


      {/* userDrawer */}

        <div className={profileDrawer ? 'profile_drawer_main' : 'no_profile_drawer'}>
          <div className='profile_drawer_topbar'>
            <div className='w-75 d-flex flex-wrap align-items-center px-2'>
            <div className='py-2'>
            <h6>Muhammad Mughees</h6>
            <p>mughees@gmail.com</p>
            </div>
            </div>
            <div className='w-25  d-flex align-items-center justify-content-center'>
                <img style={{cursor:'pointer'}} src='https://images.unsplash.com/photo-1624617930964-a1e4836c3c40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWFuJTIwYm95fGVufDB8fDB8fA%3D%3D&w=1000&q=80' onClick={()=>{
                setProfileDrawer(!profileDrawer)
              }} />
            </div>
          </div>
          <div className='my-3'>
            <div className='profile_drawer_list'>My Profile</div>
            <div className='profile_drawer_list'>My Order</div>
            <div className='profile_drawer_list'>My Cart</div>
          </div>
          <div className='d-flex justify-content-center logout_btn_container'>
            <button className='logout_btn'>Log Out</button>
          </div>
        </div>

      {/* userDrawer */}

    </div>
  );
}


export default Navbar;
