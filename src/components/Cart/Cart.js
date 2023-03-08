import React, { useState } from 'react';
import { remove, ref, getDatabase } from 'firebase/database'
import { AiOutlineShoppingCart, AiOutlineUser, AiFillGoogleCircle, AiOutlineDelete, AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { addToCart } from '../../config/action';
import { useSelector } from 'react-redux';

const Cart = (props) => {
  const state = useSelector(state => state);
  const [quantity, setQuantity] = useState(props.quantity);
  const [update , setUpdate] = useState(true)
  const db = getDatabase()
  let minus = () => {
    if (quantity != 1) {
      setQuantity(quantity - 1)
      state.cart[props.number].quantity = quantity - 1;
      state.cart[props.number].amount = ((quantity - 1) * props.price)
      window.localStorage.setItem('cartProduct', JSON.stringify(state?.cart));
      var cartDataFromStorage = window.localStorage.getItem('cartProduct')
      var dataToJson = JSON.parse(cartDataFromStorage);
      state.cart = dataToJson
      setUpdate(!update)
    }
  }
  let plus = () => {
    setQuantity(quantity + 1)
    state.cart[props.number].quantity = quantity + 1;
    state.cart[props.number].amount = ((quantity + 1) * props.price)
    window.localStorage.setItem('cartProduct', JSON.stringify(state?.cart));
    var cartDataFromStorage = window.localStorage.getItem('cartProduct')
    var dataToJson = JSON.parse(cartDataFromStorage);
    state.cart = dataToJson
    setUpdate(!update)
  }
  let deleteData = () => {
    state.cart.splice(props.number, 1)
    window.localStorage.setItem('cartProduct', JSON.stringify(state?.cart));
    var cartDataFromStorage = window.localStorage.getItem('cartProduct')
    var dataToJson = JSON.parse(cartDataFromStorage);
    state.cart = dataToJson;
    setUpdate(!update)
  }
  return (
    <div>
      <div id='cart_main' className='cart my-2 d-flex p-2'>
        <div className='w-33 cart-img-section'>
          <img src={props.img[0]} />
        </div>
       <div className='w-66'>
       <div className='container d-flex'>
         
         <div className='w-75'>
           <h5 className='mt-1 color-custom'>{props.name}</h5>
           <div className='d-flex quantity-section'>
             <div onClick={minus} className='w-33 border-black  d-flex justify-content-center align-items-center'><AiOutlineMinus /></div>
             <div className='w-33 border-black d-flex justify-content-center'>{quantity}</div>
             <div onClick={plus} className='w-33 border-black  d-flex justify-content-center align-items-center'><AiOutlinePlus /></div>
           </div>
         </div>
         <div className='w-25'>
         <h6 className='mt-1 d-flex justify-content-end color-custom'>Amount</h6>
         <p className='d-flex justify-content-end color-custom'>${props.amount}</p>
         <div className='d-flex justify-content-end delete-btn margin-bottom' onClick={()=>deleteData()
         }>
               <AiOutlineDelete size={20} />
             </div>
       </div>
     </div>

       </div>
      </div>
    </div>
  );
}

export default Cart;


{/* <div className='col-md-5 cart-data-section justufy-content-center'>

</div> */}


{/* <div className='col-md-3'>
        
        </div> */}