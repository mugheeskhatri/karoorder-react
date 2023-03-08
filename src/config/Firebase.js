// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8KFUd9H2MEKGvHt80ELquUz4ls5aieuk",
  authDomain: "karo-order-online.firebaseapp.com",
  projectId: "karo-order-online",
  storageBucket: "karo-order-online.appspot.com",
  messagingSenderId: "1040511073823",
  appId: "1:1040511073823:web:1439676a84938bde765f2a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export {app}