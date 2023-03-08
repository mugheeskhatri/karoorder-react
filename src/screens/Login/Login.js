import React , {useState} from 'react';
import ecommerce from '../../assets/images/ecommerce.png'
import { AiOutlineUser } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';
import { forget, userLogin } from '../../config/action';



const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const work = ()=>{
        let data = {email,password}
        userLogin(data) 
    }

    const forgot = ()=>{
        let data = {email}
        forget(data)
    }
    return (
        <div className='login-screen'>
            <div className='login-box'>
                <div className='col-md-6 img-container'>
                    <img style={{ width: '400px', height: '300px' }} src={ecommerce} />
                </div>
                <div className='col-md-6'>
                    <div className='input-container'>
                        <div className='d-flex input-section my-2'>
                            <div className='col-md-1'><AiOutlineUser /></div>
                            <div className='col-md-11'><input onChange={(e)=> setEmail(e.target.value)} type='email' placeholder='Enter your email' /></div>
                        </div>
                    <div className='d-flex input-section my-2'>
                        <div className='col-md-1'><RiLockPasswordLine /></div>
                        <div className='col-md-11'><input onChange={(e)=> setPassword(e.target.value)} type='password' placeholder='Enter your password' /></div>
                    </div>
            <button onClick={()=> work()} className='btn bg-success w-75'>Login</button>
            <button onClick={()=> forgot()} className='mt-4 btn bg-success w-75'>forgot password</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
