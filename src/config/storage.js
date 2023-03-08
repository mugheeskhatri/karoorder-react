import {
    getStorage,
    ref,uploadBytes, 
    getDownloadURL,
    UploadTask,
    
    
} from "firebase/storage";
import img from '../assets/img.jpeg'
import {useState} from 'react';
const Storage = () => {
    const [image , setImage] = useState()
    const [data , setData] = useState()
    const [imgUrl , setImgUrl] = useState()
    const storage = getStorage()
    let random = (Math.random()*10).toFixed(3)
    console.log(random)
    const check =()=> {
        const mountainsRef = ref(storage,`images/${random}`);
      uploadBytes(mountainsRef, image).then((snapshot) => {
          console.log('snapshot' , snapshot)
          let b =  getDownloadURL(mountainsRef)  
            .then((url)=>{
                console.log('url' ,  url)
                
            })   
            console.log(b)    
        //   getDownloadURL(snapshot.ref).then((downloadURL) => {
        //     console.log('File available at', downloadURL);
        //     setImgUrl(downloadURL)
        //   });
        })
        console.log(image)
    }
    //     let files = snapshot.metadata.fullPath;
    //     let reader = new FileReader();
    //     reader.readAsDataURL(files);
    //     reader.onload = (e)=>{
    //         let imag = e.target.result
    //         console.log(imag)
    //         .catch((e)=>{
    //             console.log(e)
    //             console.log('mughees')
    //         })
    //     setData(e.target.result)
    //   }
   
    return ( 
       
       <div>    
           <h1>
               Hello
           </h1>
           <input type='file' id='file' onChange={(e)=> setImage(e.target.files[0])} />
           <button onClick={check}>
               check
           </button>
        <img src={imgUrl}/>
       </div>
    )
}

export default Storage