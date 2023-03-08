import { getAuth, updatePassword } from "firebase/auth";
import { useState } from "react";

const auth = getAuth();

const user = auth.currentUser;
const newPassword = getASecureRandomPassword();

updatePassword(user, newPassword).then((res) => {
  console.log(res)
}).catch((error) => {
  // An error ocurredre
  // ...
});


function Password(){
    const ok = ()=>{
        newpass,
        users
        
    }
    const [newpass , setNewpass] = useState()
    const [users , setUsers] = useState()
    return(
        <div>
            <input onChange={(e)=>setUsers(e.target.value)} placeholder='enter the email' />
            <input onChange={(e)=>setNewpass(e.target.value)} placeholder='enter the new password' />
            <button onClick={ok}>Submit</button>
        </div>
    )

}