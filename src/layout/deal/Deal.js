import React from 'react';
import deal from '../../assets/images/deal.PNG'
import deal1 from '../../assets/images/deal2.PNG'
const Deal = () => {

    return (
        <div className='w-100 py-3 bg-light px-4'>
            <div className='row'>
                <div className='col-md-6 d-flex justify-content-center my-1'><img className='w-100' src={deal} /></div>
                <div className='col-md-6 d-flex justify-content-center my-1'><img className='w-100' src={deal1} /></div>
            </div>
        </div>
    );
}

export default Deal;
