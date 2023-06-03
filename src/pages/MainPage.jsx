import React , {useState} from 'react'
import img1 from '../assests/IMG_5650.JPG'
import img2 from '../assests/IMG_8020.JPG'
import img3 from '../assests/1.jpg'
import img4 from '../assests/2.jpg'
import img5 from '../assests/3.jpg'

const MainPage = () => {
    const images = [img1 , img2 , img3 , img4 , img5];
    const [currentImageIndex, setCurrentImageIndex] = useState(0 );
    const handleNextImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    const handlePreviousImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    return (
    <div className="mainpage">
      
      <div className='container'>
      <h1>Это самая очаровательная девушка !!!</h1>
        <button className=' btn1' onClick={handlePreviousImage}>Нажмите , чтоб увидеть солнышко</button>
          <div className='container'>
              <div className='current_block'>
                  <img src={images[currentImageIndex]} alt="Slideshow" />
              </div>
          </div>
        <button className='btn2' onClick={handleNextImage}>А сюда чтоб увидеть милашку</button>
      </div>
    </div>
  );
};
export default MainPage