import React, { useState } from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const Tranding = ({slides}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };
 
  
  return (
    <div className='w-full py-16 px-4 '>
      <h1 className='text-4xl font-bold text-center  text-[#c72092] cursor-pointer pb-4'>Trending Items</h1>
      <Carousel 
        selectedItem={currentIndex}
        onChange={(index) => setCurrentIndex(index)}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        dynamicHeight={true}
        stopOnHover={false}
        swipeable={true}
      >
      {slides?.map((item,index)=>{
        return(
        
          
          <div key={index}  className='w-[500px] h-[400px]  m-auto border-[3px] border-solid shadow-xl '>
            <img className='' src={item.image} alt="" />
          </div>
         
        )

      })}
           </Carousel>
           <div className="mt-8"></div>
           <div className="flex justify-center mt-4">
        <button
          onClick={handlePrevClick}
          className="bg-gray-800 text-white px-4 py-2 rounded-md mr-4 hover:bg-gray-600"
        >
          Previous
        </button>
        <button
          onClick={handleNextClick}
          className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-600"
        >
          Next
        </button>
      </div>
    </div>
  )
  
}

export default Tranding