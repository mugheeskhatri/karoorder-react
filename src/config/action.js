import { getDatabase, ref, push, set } from "@firebase/database";
import axios from "axios";
import { signInWithEmailAndPassword, signInWithRedirect, FacebookAuthProvider, GoogleAuthProvider, signInWithPopup, getAuth, sendPasswordResetEmail, confirmPasswordReset, createUserWithEmailAndPassword } from 'firebase/auth'
import { app } from './Firebase'
const googleProvider = new GoogleAuthProvider();
let fbProvider = new FacebookAuthProvider();
let auth = getAuth()
let db = getDatabase()
const setData = (data) => {
    push(ref(db, '/products/' + data.category + '/'), data)
        .then(() => {
            console.log('ok')
        })
}

let userLogin = (data) => {
    // signInWithEmailAndPassword(auth, data.email, data.password)
    //     .then((res) => {
    //         console.log(res)
    //         alert('Login successfully')
    //     })
    //     .catch((err) => {
    //         alert(err.message)
    //     })
    axios.post('http://localhost:5000/api/login', {
        name: data.name,
        email: data.email,
        password: data.password
    })
        .then(function (response) {
            console.log(response);
            alert('Login Successfully')
        })
        .catch(function (error) {
            console.log(error);
        });
}

let signup = (data) => {
    // createUserWithEmailAndPassword(auth, data.email, data.password).then((res) => {
    //     console.log(res)
    //     alert('Sign Up successfully')
    //     set(ref(db, 'users/' + res.user.uid), data)

    // })
    //     .catch((err) => {
    //         alert(err.message)
    //     })
    axios.post('http://localhost:5000/api/register', {
        name: data.name,
        email: data.email,
        password: data.password
    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}

const forget = (data) => {
    sendPasswordResetEmail(auth, data.email)
        .then(() => {
            console.log('ok')
            alert('Check gmail')
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

        });
}

let signinFb = () => {
    signInWithPopup(auth, fbProvider)
        .then((result) => {
            // The signed-in user info.
            const user = result.user;
            alert('sign in with fb successfully')
            console.log(user)
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            const credential = FacebookAuthProvider.credentialFromResult(result);
            const accessToken = credential.accessToken;

            // ...
        })
        .catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The AuthCredential type that was used.
            const credential = FacebookAuthProvider.credentialFromError(error);
            console.log(error)
            // ...
        });
}

let googleLogin = () => {
    signInWithPopup(auth, googleProvider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // ...
            alert('Login Successfully')
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
}

let addToCart = (data) => {
    // navigator.geolocation.getCurrentPosition(function (position) {
    //     const ip = Math.floor(position.coords.accuracy).toString()
    //     console.log(ip)
    //     set(ref(db, `cart/${ip}/${data.name}`), data)
    // });
    // window.localStorage.setItem('cartProduct', JSON.stringify(data));
}

let order = (data)=>{    
        push(ref(db, `order/${data.costumerData.phone}/`), data)
   
}

export { setData, userLogin, signup, forget, signinFb, googleLogin, addToCart , order }