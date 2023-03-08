import React, { useEffect , useState} from 'react';
import ImageGallery from 'react-image-gallery';
import '../ImageGallery/gallery.css'
const Index = (props) => {
const [image ,  setImage] = useState([])
    useEffect(()=>{
    console.log('props',props.img)
    props.img.map((v,i)=>{
        image.push({original:v})
    })
    console.log(image)
},[])
    return (
        <div className='gallery_main'>
            <ImageGallery items={image} />
        </div>
    );
}

export default Index;
