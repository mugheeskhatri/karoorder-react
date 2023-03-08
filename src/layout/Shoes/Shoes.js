import React from 'react';
import Card from '../../components/card/Card'
import shoes from '../../assets/images/sheos.PNG'
import { useSelector } from 'react-redux';
const Shoes = () => {
    const data = useSelector(state  => state?.product)
    return (
        <div className='p-2 py-4 w-100'>
        <h2 className='text-center'>Shoes</h2>
            <div className='shoes-layout justify-content-around'>
            {data.map((v,i)=>{
                
               return(
                   <Card key={i} id={i} name={v.name} price={v.price} description={v.description} img={v.img} />
               )
           })}
            </div>
        </div>
        )
    }

    export default Shoes;