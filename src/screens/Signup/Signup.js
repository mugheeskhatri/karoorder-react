import React , {useState} from 'react';
import { signup } from '../../config/action';

const Signup = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    let work = ()=>{
        let data = {
            email,
            password,
            name
        }
        signup(data)
    }
    return (
        <div>
            <input onChange={(e)=> setName(e.target.value)} type='text' placeholder='Name' />
            <input onChange={(e)=> setEmail(e.target.value)} type='email' placeholder='email' />
            <input onChange={(e)=> setPassword(e.target.value)} type='password' placeholder='password' />
            <button onClick={work}>Signup</button>
        </div>
    );
}

export default Signup;
