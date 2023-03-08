import React, { useState, useEffect } from 'react';
import { BsSuitHeart } from "react-icons/bs";
import { AiOutlinePlus, AiOutlineMinus, AiOutlineEye, AiOutlineConsoleSql } from "react-icons/ai";
import { useSelector } from 'react-redux';
import { addToCart } from '../../config/action';
import { get, child, getDatabase, ref } from 'firebase/database';
import PropTypes from 'prop-types';
import Backdrop from '@mui/material/Backdrop';
import Gallery from '../ImageGallery'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useSpring, animated } from 'react-spring';
import axios from 'axios';
import "react-image-gallery/styles/css/image-gallery.css";
import { useNavigate } from 'react-router-dom';

const Fade = React.forwardRef(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element,
  in: PropTypes.bool.isRequired,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
};

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 900,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,

};

const Card = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [quantity, setQuantity] = useState(1)
  const [ background , setBackground] = useState(false)
  const size = [22, 24, 26, 28, 30];
  const dbRef = ref(getDatabase())
  const state = useSelector(state => state);
  const navigate = useNavigate()
  useEffect(()=>{
      // getCartData()
  },[])
  let getCartData = () => {
    var cartDataFromStorage = window.localStorage.getItem('cartProduct')
    var data =  JSON.parse(cartDataFromStorage);
    state.cart =data ? data : state.cart;
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
    <div onClick={()=>navigate(`/product/${props.name}`) } className='_card my-3'>
      
        <div className='_card_img_section'>
          <img src={props.img[0]} />
        </div>
        <div className='_card_details_section'>
          <div className='d-flex'>
            <div className='w-75'>
              <div className='name'>{props.name}</div>
              <div className='description'>{props.description}</div>
              <h6 className='price'>${props.price}</h6>
            </div>
            <div className='w-25 d-flex align-items-center px-1'>
              <div onMouseOver={()=> setBackground(true)} onMouseOut={()=> setBackground(false)} onClick={() => setOpen(true)} className='icon-container'>
                <AiOutlineEye color={!background ? '#279295' : 'white'} size={20} />
              </div>
            </div>
          </div>
          <div className='_btn_section'>
          </div>
       
      </div>


      {/* Modal */}

      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <div className='modal_main'>
              <div className='row modal_row'>
                <div className='col-md-6 p-0'>
                  <Gallery img = {props.img} />
                </div>
                <div className='col-md-6 modal_detail_section'>
                  <h1 className='bg_custom'>{props.name}</h1>
                  <h3 className='bg_custom'>Rs.{props.price}</h3>
                  <p className='bg_custom bold'>{props.description}</p>
                  <div>
                    <div className='quantity'>
                      <div onClick={() => {
                        if (quantity != 1) {
                          setQuantity(quantity - 1)
                        }
                      }}><AiOutlineMinus /></div>
                      <div>{quantity}</div>
                      <div onClick={() => setQuantity(quantity + 1)}><AiOutlinePlus /></div>
                    </div>
                    <div onClick={() => {
                      let amount = quantity*props.price
                      let data = { ...props, quantity , amount  }
                      addCart(data)
                      getCartData()
                      setOpen(false)
                    }} className='add_btn btn'>Add to Cart</div>
                    <div onClick={() => {
                      setOpen(false)
                    }} className='add_btn btn modal_close '>Close</div>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Fade>
      </Modal>

      {/* Modal */}


    </div>
  );
}

export default Card;
